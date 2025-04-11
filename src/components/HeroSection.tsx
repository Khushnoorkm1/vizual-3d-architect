
import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import { Button } from "@/components/ui/button";
import { ChevronDownCircle } from "lucide-react";

// Simple Burj Khalifa model
const BurjKhalifa = ({ scale = 1.5 }) => {
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
        <meshStandardMaterial color="#A0AEC0" metalness={0.8} roughness={0.1} />
      </mesh>
      
      {/* Main tower */}
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[0.5, 1, 5, 6]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.9} roughness={0.2} />
      </mesh>
      
      {/* Tower top */}
      <mesh position={[0, 6, 0]}>
        <cylinderGeometry args={[0.1, 0.5, 2, 6]} />
        <meshStandardMaterial color="#E2E8F0" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Spire */}
      <mesh position={[0, 7.5, 0]}>
        <cylinderGeometry args={[0.01, 0.1, 1.5, 6]} />
        <meshStandardMaterial color="#F7FAFC" metalness={0.95} roughness={0.05} />
      </mesh>
    </group>
  );
};

// The following component will render when the 3D model is loading
const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
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
    <section id="home" className="relative h-screen flex flex-col justify-center items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/60 dark:from-architectural-blue/30 dark:to-black/50"></div>
      
      {/* 3D Model Canvas - only render on client side */}
      {isMounted && (
        <div className="absolute inset-0 w-full h-full">
          <Canvas className="w-full h-full">
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
              <BurjKhalifa />
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
      <div className="container mx-auto relative z-10 px-4 text-center">
        <div className="glass-card rounded-xl p-8 md:p-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-architectural-blue dark:text-white mb-6 leading-tight">
            Stunning <span className="text-architectural-gold">Architecture</span> &amp; Interior Design
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Transforming spaces with innovative 3D visualization and expert interior design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="glass-button bg-architectural-blue hover:bg-architectural-blue/80 text-white py-6 px-8 text-lg"
              onClick={handleScroll}
            >
              Explore Our Work
            </Button>
            <Button 
              variant="outline"
              className="glass-card py-6 px-8 text-lg hover:bg-white/30"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDownCircle size={32} className="text-architectural-blue dark:text-white opacity-70" onClick={handleScroll} />
      </div>
    </section>
  );
};

export default HeroSection;
