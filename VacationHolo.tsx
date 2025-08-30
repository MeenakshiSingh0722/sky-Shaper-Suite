import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";

const VacationHolo = () => {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  
  const destinations = [
    {
      id: "tropical-beach",
      name: "Tropical Beach Paradise",
      location: "Maldives Simulation",
      weather: "Warm breeze, gentle waves",
      duration: "2-8 hours",
      price: "₢450/hour",
      image: "🏝️",
      description: "Crystal clear waters, white sand beaches, palm trees swaying in the ocean breeze"
    },
    {
      id: "mountain-retreat", 
      name: "Alpine Mountain Retreat",
      location: "Swiss Alps Simulation",
      weather: "Fresh mountain air, light snow",
      duration: "1-6 hours",
      price: "₢380/hour", 
      image: "🏔️",
      description: "Snow-capped peaks, crisp air, cozy cabin atmosphere with crackling fireplace"
    },
    {
      id: "rainforest",
      name: "Amazon Rainforest",
      location: "Brazil Simulation",
      weather: "Humid, occasional rain, bird sounds",
      duration: "2-5 hours",
      price: "₢420/hour",
      image: "🌿",
      description: "Lush green canopy, exotic wildlife sounds, misty rain showers"
    },
    {
      id: "desert-sunset",
      name: "Sahara Desert Sunset",
      location: "Morocco Simulation", 
      weather: "Dry heat, cooling evening breeze",
      duration: "1-4 hours",
      price: "₢320/hour",
      image: "🏜️",
      description: "Golden sand dunes, spectacular sunset colors, starlit night sky"
    },
    {
      id: "northern-lights",
      name: "Northern Lights Experience",
      location: "Iceland Simulation",
      weather: "Cold, clear skies, aurora display",
      duration: "2-6 hours", 
      price: "₢650/hour",
      image: "🌌",
      description: "Dancing aurora borealis, pristine wilderness, magical light displays"
    },
    {
      id: "city-rain",
      name: "Cyberpunk Cityscape",
      location: "Tokyo 2080 Simulation",
      weather: "Neon-lit rain, urban atmosphere",
      duration: "1-8 hours",
      price: "₢500/hour",
      image: "🌃",
      description: "Futuristic city with holographic displays, gentle rain creating neon reflections"
    }
  ];

  const selectedDest = destinations.find(d => d.id === selectedDestination);

  const handleActivate = () => {
    if (selectedDestination) {
      navigate("/vacation-experience", { state: { destination: selectedDest } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-space">
      {/* Header */}
      <header className="border-b border-glass-border bg-space-nebula/30 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <span className="text-2xl font-orbitron font-bold text-neon-cyan">EnviroCorp</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="text-text-muted">🏝️ Vacation Hologram</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            Vacation Hologram
          </h1>
          <p className="text-text-secondary">Travel without moving — enjoy vacations from your living room with holographic weather.</p>
        </div>

        {/* Preview Window */}
        {selectedDestination && (
          <GlassCard variant="glow" className="p-8 mb-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-orbitron font-semibold mb-4 text-neon-gold">
                  {selectedDest?.name}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Destination</h3>
                    <p className="text-neon-cyan">{selectedDest?.location}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Weather Experience</h3>
                    <p className="text-text-muted">{selectedDest?.weather}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Description</h3>
                    <p className="text-text-muted">{selectedDest?.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div>
                      <span className="text-text-muted">Duration: </span>
                      <span className="text-neon-violet">{selectedDest?.duration}</span>
                    </div>
                    <div className="text-2xl font-orbitron font-bold text-neon-gold">
                      {selectedDest?.price}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="relative h-64 bg-space-nebula/30 rounded-lg border border-glass-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{selectedDest?.image}</div>
                      <div className="text-neon-cyan font-orbitron font-semibold">
                        {previewMode ? "Hologram Preview Active" : "Click Preview to Experience"}
                      </div>
                    </div>
                  </div>
                  
                  {previewMode && (
                    <div className="absolute inset-0 bg-gradient-holo opacity-30 animate-glow-pulse"></div>
                  )}
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <NeonButton 
                    variant={previewMode ? "glass" : "holo"}
                    onClick={() => setPreviewMode(!previewMode)}
                    className="flex-1"
                  >
                    {previewMode ? "Stop Preview" : "Start Preview"}
                  </NeonButton>
                  <NeonButton variant="hero" onClick={handleActivate} className="flex-1">
                    Activate Experience
                  </NeonButton>
                </div>
              </div>
            </div>
          </GlassCard>
        )}

        {/* Destination Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <GlassCard 
              key={destination.id}
              variant={selectedDestination === destination.id ? "glow" : "default"}
              className={`p-6 cursor-pointer hover:scale-105 transition-all duration-300 ${
                selectedDestination === destination.id ? 'border-neon-gold shadow-glow-gold' : ''
              }`}
              onClick={() => setSelectedDestination(destination.id)}
            >
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{destination.image}</div>
                <h3 className="font-orbitron font-semibold text-lg text-neon-cyan mb-2">
                  {destination.name}
                </h3>
                <p className="text-sm text-neon-violet">{destination.location}</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-text-muted">Weather:</span>
                  <p className="text-text-primary">{destination.weather}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Duration:</span>
                  <span className="text-neon-violet">{destination.duration}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-text-muted">Price:</span>
                  <span className="text-neon-gold font-semibold">{destination.price}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Features Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <GlassCard className="p-6 text-center">
            <div className="text-4xl mb-4">🌡️</div>
            <h3 className="font-orbitron font-semibold text-lg mb-2 text-neon-cyan">
              Real Weather Simulation
            </h3>
            <p className="text-text-muted text-sm">
              Feel temperature, humidity, and air pressure changes matching your chosen destination.
            </p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="font-orbitron font-semibold text-lg mb-2 text-neon-violet">
              360° Holographic Views
            </h3>
            <p className="text-text-muted text-sm">
              Immersive visual experience with realistic lighting and environmental effects.
            </p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="font-orbitron font-semibold text-lg mb-2 text-neon-gold">
              Ambient Audio
            </h3>
            <p className="text-text-muted text-sm">
              Natural sounds, from ocean waves to mountain winds, complete the experience.
            </p>
          </GlassCard>
        </div>

        {/* Action Section */}
        {!selectedDestination && (
          <div className="mt-12 text-center">
            <GlassCard className="p-12">
              <div className="text-6xl mb-6">✨</div>
              <h2 className="text-2xl font-orbitron font-semibold mb-4 text-neon-cyan">
                Choose Your Destination
              </h2>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto">
                Select a holographic vacation experience above to preview and activate your virtual getaway. 
                Each destination offers unique weather patterns and immersive environments.
              </p>
            </GlassCard>
          </div>
        )}
      </main>
    </div>
  );
};

export default VacationHolo;