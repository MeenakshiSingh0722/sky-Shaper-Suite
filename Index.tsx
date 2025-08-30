import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Canvas } from "@react-three/fiber";
import { Sphere, Html } from "@react-three/drei";
import earthGlobe from "@/assets/earth-globe-hero.jpg";

// Rotating Earth component for hero
function EarthSphere() {
  return (
    <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        map={null} 
        color="#00d4ff" 
        emissive="#001122" 
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
    </Sphere>
  );
}

const Index = () => {
  const [heroTagline] = useState("The Sky, Made Yours.");
  
  return (
    <div className="min-h-screen bg-gradient-space">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-space opacity-90"></div>
        
        {/* 3D Globe Background */}
        <div className="absolute inset-0">
          <img 
            src={earthGlobe} 
            alt="Futuristic Earth" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-deep via-transparent to-space-deep"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent animate-fade-in">
            {heroTagline}
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-4 animate-fade-in">
            Government-backed climate control. Space systems. Human-centred design.
          </p>
          
          <p className="text-lg text-text-muted mb-12 animate-fade-in">
            From a rainy walk to a full-season harvest — the future of weather is here.
          </p>
          
          {/* CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <GlassCard variant="glow" className="p-6 hover:scale-105 transition-all duration-300 animate-fade-in">
              <div className="text-center">
                <h3 className="font-orbitron font-semibold text-lg mb-3 text-neon-cyan">Order Weather</h3>
                <p className="text-sm text-text-muted mb-4">Select the weather you desire — rain for relaxation, sun for energy, or snow for fun.</p>
                <Link to="/dashboard">
                  <NeonButton variant="hero" size="sm" className="w-full">
                    Start Order
                  </NeonButton>
                </Link>
              </div>
            </GlassCard>
            
            <GlassCard variant="glow" className="p-6 hover:scale-105 transition-all duration-300 animate-fade-in">
              <div className="text-center">
                <h3 className="font-orbitron font-semibold text-lg mb-3 text-neon-violet">Dashboard</h3>
                <p className="text-sm text-text-muted mb-4">Control your subscriptions, manage orders, and access your climate dashboard.</p>
                <Link to="/dashboard">
                  <NeonButton variant="holo" size="sm" className="w-full">
                    Open Dashboard
                  </NeonButton>
                </Link>
              </div>
            </GlassCard>
            
            <GlassCard variant="glow" className="p-6 hover:scale-105 transition-all duration-300 animate-fade-in">
              <div className="text-center">
                <h3 className="font-orbitron font-semibold text-lg mb-3 text-neon-gold">Vacation Hologram</h3>
                <p className="text-sm text-text-muted mb-4">Travel without moving — enjoy vacations from your living room with holographic weather.</p>
                <Link to="/vacation-holo">
                  <NeonButton variant="gold" size="sm" className="w-full">
                    Explore Holo
                  </NeonButton>
                </Link>
              </div>
            </GlassCard>
            
            <GlassCard variant="glow" className="p-6 hover:scale-105 transition-all duration-300 animate-fade-in">
              <div className="text-center">
                <h3 className="font-orbitron font-semibold text-lg mb-3 text-neon-emerald">Live Map</h3>
                <p className="text-sm text-text-muted mb-4">See the world change in real-time with our global climate tracker.</p>
                <Link to="/live-map">
                  <NeonButton variant="ghost" size="sm" className="w-full">
                    View Map
                  </NeonButton>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Features Overview */}
      <section className="py-20 px-6 bg-space-nebula/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-16 bg-gradient-neon bg-clip-text text-transparent">
            Climate Control. Perfected.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-neon rounded-full flex items-center justify-center">
                <span className="text-2xl">🌤️</span>
              </div>
              <h3 className="font-orbitron font-semibold text-xl mb-4 text-neon-cyan">Precision Weather</h3>
              <p className="text-text-muted">GPS-based control with satellite precision. Pin your location and choose your climate.</p>
            </GlassCard>
            
            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-neon rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-orbitron font-semibold text-xl mb-4 text-neon-violet">Space Technology</h3>
              <p className="text-text-muted">Advanced orbital systems and atmospheric processors deliver weather on demand.</p>
            </GlassCard>
            
            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-neon rounded-full flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-orbitron font-semibold text-xl mb-4 text-neon-gold">Trusted & Secure</h3>
              <p className="text-text-muted">Government-backed service with the highest safety and environmental standards.</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;