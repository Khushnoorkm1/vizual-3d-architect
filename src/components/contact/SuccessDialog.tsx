
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

interface SuccessDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  language: string;
}

const SuccessDialog = ({ isOpen, onOpenChange, language }: SuccessDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-teal-900/90 border-teal-200 dark:border-teal-700/50 max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center flex items-center justify-center gap-2 text-teal-900 dark:text-white">
            <CheckCircle className="h-6 w-6 text-green-500" />
            {language === 'ar' ? 'تم إرسال الرسالة' : 'Message Sent'}
          </DialogTitle>
          <DialogDescription className="text-center text-teal-800 dark:text-gray-300">
            {language === 'ar' 
              ? 'شكراً لتواصلك معنا. سنرد عليك قريباً!' 
              : 'Thank you for your inquiry. We\'ll get back to you soon!'}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button className="glass-button bg-teal-600 hover:bg-teal-500 text-white border border-teal-400/30">
              {language === 'ar' ? 'إغلاق' : 'Close'}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
