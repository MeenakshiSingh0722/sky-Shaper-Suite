import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NeonButton } from "@/components/ui/neon-button";

const VacationExperience = () => {
  const location = useLocation();
  const destination = location.state?.destination;
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds
  const [isActive, setIsActive] = useState(false);
  const [intensity, setIntensity] = useState(75);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, timeRemaining]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const environmentSettings = [
    { label: "Temperature", value: 78, unit: "°F", color: "neon-gold" },
    { label: "Humidity", value: 65, unit: "%", color: "neon-cyan" },
    { label: "Wind Speed", value: 12, unit: "mph", color: "neon-violet" },
    { label: "Light Level", value: 85, unit: "%", color: "neon-emerald" },
  ];

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-space flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-orbitron font-bold text-neon-cyan mb-4">
            No Destination Selected
          </h1>
          <Link to="/vacation-holo">
            <NeonButton variant="hero">Choose Destination</NeonButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-deep/50 to-space-deep"></div>
        <div className="absolute inset-0 bg-gradient-holo opacity-20 animate-glow-pulse"></div>
      </div>

      {/* Holographic Environment Display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center transform scale-110">
          <div className="text-[20rem] filter drop-shadow-lg opacity-80 animate-float">
            {destination.image}
          </div>
          <div className="text-4xl font-orbitron font-bold text-neon-gold mb-4 animate-glow-pulse">
            {destination.name}
          </div>
          <div className="text-xl text-neon-cyan animate-fade-in">
            {destination.weather}
          </div>
        </div>
      </div>

      {/* Control Panel Overlay */}
      <div className="absolute top-6 left-6 right-6 z-10">
        <div className="flex justify-between items-start">
          {/* Session Info */}
          <div className="bg-space-nebula/80 backdrop-blur-lg rounded-xl border border-glass-border p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-4 h-4 rounded-full ${isActive ? 'bg-status-success animate-glow-pulse' : 'bg-status-warning'}`}></div>
              <span className="font-orbitron font-semibold text-text-primary">
                {isActive ? 'Experience Active' : 'Experience Paused'}
              </span>
            </div>
            
            <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">
              {formatTime(timeRemaining)}
            </div>
            <div className="text-sm text-text-muted">Time Remaining</div>
          </div>

          {/* Exit Controls */}
          <div className="bg-space-nebula/80 backdrop-blur-lg rounded-xl border border-glass-border p-6">
            <div className="flex space-x-3">
              <NeonButton 
                variant={isActive ? "glass" : "hero"}
                onClick={() => setIsActive(!isActive)}
              >
                {isActive ? 'Pause' : 'Resume'}
              </NeonButton>
              <Link to="/vacation-holo">
                <NeonButton variant="ghost">
                  Exit Experience
                </NeonButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Environment Controls */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="bg-space-nebula/80 backdrop-blur-lg rounded-xl border border-glass-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-orbitron font-semibold text-lg text-neon-cyan">
              Environment Controls
            </h3>
            <div className="flex items-center space-x-4">
              <span className="text-text-muted">Intensity:</span>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setIntensity(Math.max(0, intensity - 10))}
                  className="w-8 h-8 bg-glass-surface/20 hover:bg-glass-surface/40 rounded border border-glass-border text-text-primary"
                >
                  -
                </button>
                <span className="text-neon-violet font-semibold w-12 text-center">{intensity}%</span>
                <button 
                  onClick={() => setIntensity(Math.min(100, intensity + 10))}
                  className="w-8 h-8 bg-glass-surface/20 hover:bg-glass-surface/40 rounded border border-glass-border text-text-primary"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {environmentSettings.map((setting, index) => (
              <div key={index} className="text-center">
                <div className="text-sm text-text-muted mb-2">{setting.label}</div>
                <div className={`text-2xl font-orbitron font-bold text-${setting.color} mb-1`}>
                  {setting.value}{setting.unit}
                </div>
                <div className="w-full bg-space-deep rounded-full h-2">
                  <div 
                    className={`bg-${setting.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${(setting.value / 100) * intensity}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Effects */}
      {isActive && (
        <>
          <div className="absolute inset-0 pointer-events-none">
            {/* Particles for atmosphere */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan/30 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-violet/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-neon-gold/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-neon-emerald/50 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Weather-specific effects */}
          {destination.id === 'tropical-beach' && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-holo-cyan/10 to-transparent animate-glow-pulse"></div>
            </div>
          )}

          {destination.id === 'northern-lights' && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-neon-violet/20 via-neon-cyan/10 to-transparent animate-glow-pulse"></div>
            </div>
          )}
        </>
      )}

      {/* Session Timer Warning */}
      {timeRemaining < 300 && isActive && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-status-warning/90 backdrop-blur-lg rounded-xl border border-status-warning p-6 text-center animate-glow-pulse">
            <div className="text-2xl font-orbitron font-bold text-space-deep mb-2">
              Session Ending Soon
            </div>
            <div className="text-space-deep mb-4">
              {Math.floor(timeRemaining / 60)} minutes remaining
            </div>
            <NeonButton variant="hero" size="lg">
              Extend Session
            </NeonButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default VacationExperience;