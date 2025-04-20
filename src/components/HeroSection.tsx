import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, Html } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ChevronDownCircle } from "lucide-react";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";

// Building Model
const BuildingModel = ({ scale = 1.5 }) => {
  const meshRef = useRef(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={meshRef} dispose={null} scale={[scale, scale, scale]} position={[0, -1, 0]}>
      {/* Building base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1.5, 1, 6]} />
        <meshStandardMaterial color="#0D3E4C" metalness={0.8} roughness={0.1} />
      </mesh>
      
      {/* Main building */}
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[0.5, 1, 5, 6]} />
        <meshStandardMaterial color="#0D3E4C" metalness={0.9} roughness={0.2} />
      </mesh>
      
      {/* Building top */}
      <mesh position={[0, 6, 0]}>
        <cylinderGeometry args={[0.1, 0.5, 2, 6]} />
        <meshStandardMaterial color="#0D3E4C" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Windows (decorative elements) */}
      {[...Array(6)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.sin(Math.PI * 2 * i / 6) * 0.8, 
            3, 
            Math.cos(Math.PI * 2 * i / 6) * 0.8
          ]}
        >
          <boxGeometry args={[0.2, 0.4, 0.05]} />
          <meshStandardMaterial color="#A0DDD6" metalness={0.9} roughness={0.1} emissive="#A0DDD6" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

// Three.js compatible loading indicator using the Html component from drei
const LoadingIndicator = () => {
  return (
    <Html center>
      <div className="w-16 h-16 border-t-4 border-teal-500 border-solid rounded-full animate-spin"></div>
    </Html>
  );
};

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 to-dark-green/80 dark:from-teal-900/90 dark:to-black/90"></div>
      
      {/* 3D Model Canvas */}
      {isMounted && (
        <div className="absolute inset-0 w-full h-full">
          <Canvas className="w-full h-full">
            <Suspense fallback={<LoadingIndicator />}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
              <BuildingModel />
              <Environment preset="city" />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
                rotateSpeed={0.5}
              />
            </Suspense>
          </Canvas>
        </div>
      )}
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto relative z-10 px-4 text-center"
      >
        <div className="glass-card rounded-xl p-8 md:p-12 max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block mb-2">{translations.hero.title.ar}</span>
            <span className="block">{translations.hero.title.en}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            <span className="block mb-2">{translations.hero.subtitle.ar}</span>
            <span className="block">{translations.hero.subtitle.en}</span>
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              className="glass-button bg-teal-600 hover:bg-teal-500 text-white py-6 px-8 text-lg border border-teal-400/30"
              onClick={handleScroll}
            >
              {translations.hero.exploreButton.ar}
            </Button>
            <Button 
              variant="outline"
              className="glass-card bg-gradient-to-r from-teal-500/30 to-teal-600/30 py-6 px-8 text-lg hover:bg-teal-500/40 text-white border-teal-400/50 transition-all duration-300 shadow-lg hover:shadow-teal-500/20"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {translations.hero.contactButton.ar}
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDownCircle size={32} className="text-white opacity-70" onClick={handleScroll} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
