
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Simple detection of Arabic text by checking for Arabic Unicode character ranges
const containsArabic = (text: string): boolean => {
  const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1EE00-\u1EEFF]/;
  return arabicPattern.test(text);
};

// Hook to auto-translate the entire DOM without changing layout
export const useAutoTranslate = (autoTranslateEnabled = true): { 
  isTranslating: boolean;
  translationComplete: boolean;
  translationErrors: number;
  toggleAutoTranslate: () => void;
} => {
  const { t, language } = useLanguage();
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationComplete, setTranslationComplete] = useState(false);
  const [translationErrors, setTranslationErrors] = useState(0);
  const [enabled, setEnabled] = useState(autoTranslateEnabled);

  const toggleAutoTranslate = () => {
    setEnabled(prev => !prev);
    if (!enabled) {
      // Reset state when enabling again
      setTranslationComplete(false);
      setTranslationErrors(0);
    }
  };

  useEffect(() => {
    // Don't run if translations are disabled or not in Arabic mode
    if (!enabled || language !== 'ar') {
      return;
    }

    const translateDOMNodes = async () => {
      setIsTranslating(true);
      let errorCount = 0;

      try {
        // Get all text nodes in the DOM
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: (node) => {
              // Skip empty text nodes and script/style content
              const parent = node.parentElement;
              if (!node.textContent?.trim() || 
                  parent?.tagName === 'SCRIPT' || 
                  parent?.tagName === 'STYLE' ||
                  parent?.hasAttribute('data-no-translate')) {
                return NodeFilter.FILTER_REJECT;
              }
              return NodeFilter.FILTER_ACCEPT;
            }
          }
        );
        
        const textNodes: Node[] = [];
        let currentNode;
        
        // Collect all applicable text nodes
        while (currentNode = walker.nextNode()) {
          if (currentNode.textContent && containsArabic(currentNode.textContent)) {
            textNodes.push(currentNode);
          }
        }
        
        // Process each text node
        for (const node of textNodes) {
          try {
            const originalText = node.textContent || '';
            // Use our translation context to translate the text
            // This assumes all Arabic text has an English translation in the context
            const translatedText = originalText.split(' ').map(word => {
              // Try to translate each word if it has Arabic characters
              if (containsArabic(word)) {
                // Use the translation context
                const translated = t(word);
                // If translation returns the same word, it wasn't found in the dictionary
                return translated !== word ? translated : word;
              }
              return word;
            }).join(' ');
            
            // Only update if there's a difference to avoid unnecessary DOM mutations
            if (translatedText !== originalText) {
              node.textContent = translatedText;
            }
          } catch (err) {
            errorCount++;
            console.error('Translation error for node:', node, err);
          }
        }
      } catch (error) {
        console.error('Auto-translation error:', error);
        errorCount++;
      } finally {
        setTranslationErrors(errorCount);
        setTranslationComplete(true);
        setIsTranslating(false);
      }
    };

    // Run translation after a small delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      translateDOMNodes();
    }, 500);

    return () => clearTimeout(timer);
  }, [t, language, enabled]);

  return { isTranslating, translationComplete, translationErrors, toggleAutoTranslate };
};
