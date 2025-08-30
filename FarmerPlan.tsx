import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Progress } from "@/components/ui/progress";

const FarmerPlan = () => {
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  
  const cropData = {
    wheat: {
      name: "Winter Wheat",
      planted: "2070-09-15",
      harvestEta: "2071-06-20",
      progress: 65,
      stage: "Grain Development",
      subsidy: "₢4,800",
      totalCost: "₢12,000",
      location: "45.5152° N, 122.6784° W",
      acreage: "120 acres"
    },
    corn: {
      name: "Sweet Corn",
      planted: "2070-10-01", 
      harvestEta: "2071-07-15",
      progress: 45,
      stage: "Vegetative Growth",
      subsidy: "₢3,200",
      totalCost: "₢8,000",
      location: "44.0505° N, 121.3135° W",
      acreage: "85 acres"
    }
  };

  const currentCrop = cropData[selectedCrop as keyof typeof cropData];
  
  const weatherSchedule = [
    { date: "Today", weather: "Light Rain", duration: "4 hours", status: "active" },
    { date: "Dec 16", weather: "Partly Cloudy", duration: "All day", status: "scheduled" },
    { date: "Dec 17", weather: "Morning Dew", duration: "6 hours", status: "scheduled" },
    { date: "Dec 18", weather: "Sunny", duration: "8 hours", status: "scheduled" },
    { date: "Dec 19", weather: "Light Rain", duration: "3 hours", status: "scheduled" },
  ];

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
              <Link to="/subscriptions">
                <NeonButton variant="glass">
                  All Subscriptions
                </NeonButton>
              </Link>
              <Link to="/order">
                <NeonButton variant="hero">
                  New Crop Plan
                </NeonButton>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            Farmer Crop Plans
          </h1>
          <p className="text-text-secondary">Choose your crop, and we'll provide the ideal climate until harvest.</p>
        </div>

        {/* Crop Selection */}
        <div className="flex space-x-4 mb-8">
          {Object.entries(cropData).map(([key, crop]) => (
            <button
              key={key}
              onClick={() => setSelectedCrop(key)}
              className={`px-6 py-3 rounded-lg font-orbitron font-medium transition-all ${
                selectedCrop === key
                  ? 'bg-neon-emerald/20 text-neon-emerald border border-neon-emerald/30'
                  : 'text-text-muted hover:text-neon-emerald hover:bg-glass-surface/10 border border-glass-border'
              }`}
            >
              {crop.name}
            </button>
          ))}
        </div>

        {/* Crop Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <GlassCard variant="glow" className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-orbitron font-semibold text-neon-emerald">
                  {currentCrop.name}
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-status-success rounded-full animate-glow-pulse"></div>
                  <span className="text-status-success font-medium">Optimal Growth</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-text-primary mb-3">Crop Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Location:</span>
                      <span className="text-text-primary font-mono">{currentCrop.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Acreage:</span>
                      <span className="text-text-primary">{currentCrop.acreage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Planted:</span>
                      <span className="text-text-primary">{currentCrop.planted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Harvest ETA:</span>
                      <span className="text-neon-cyan font-semibold">{currentCrop.harvestEta}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-text-primary mb-3">Financial Overview</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Total Cost:</span>
                      <span className="text-text-primary">{currentCrop.totalCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Gov Subsidy:</span>
                      <span className="text-status-success font-semibold">{currentCrop.subsidy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Your Cost:</span>
                      <span className="text-neon-gold font-semibold">
                        ₢{parseInt(currentCrop.totalCost.replace('₢', '').replace(',', '')) - parseInt(currentCrop.subsidy.replace('₢', '').replace(',', ''))}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-status-success/10 border border-status-success/30 rounded-lg">
                    <p className="text-status-success text-xs font-medium">
                      40% Government Subsidy Applied
                    </p>
                  </div>
                </div>
              </div>

              {/* Growth Progress */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-text-primary">Growth Progress</h3>
                  <span className="text-neon-emerald font-semibold">{currentCrop.progress}%</span>
                </div>
                <Progress value={currentCrop.progress} className="h-3 mb-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Current Stage: <span className="text-neon-cyan">{currentCrop.stage}</span></span>
                  <span className="text-text-muted">
                    {Math.round((100 - currentCrop.progress) * 2.5)} days to harvest
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>

          <div>
            <GlassCard className="p-6 mb-6">
              <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-cyan">Live Telemetry</h3>
              
              <div className="space-y-4">
                <div className="p-3 bg-space-nebula/50 rounded-lg border border-glass-border">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Soil Moisture</span>
                    <span className="text-neon-cyan font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-space-deep rounded-full h-2 mt-2">
                    <div className="bg-neon-cyan h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div className="p-3 bg-space-nebula/50 rounded-lg border border-glass-border">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Temperature</span>
                    <span className="text-neon-gold font-semibold">18°C</span>
                  </div>
                </div>

                <div className="p-3 bg-space-nebula/50 rounded-lg border border-glass-border">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Sunlight</span>
                    <span className="text-neon-violet font-semibold">6.2 hrs</span>
                  </div>
                </div>

                <div className="p-3 bg-space-nebula/50 rounded-lg border border-glass-border">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Nutrients</span>
                    <span className="text-status-success font-semibold">Optimal</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-violet">Quick Actions</h3>
              <div className="space-y-3">
                <NeonButton variant="hero" size="sm" className="w-full">
                  Adjust Weather Schedule
                </NeonButton>
                <NeonButton variant="holo" size="sm" className="w-full">
                  Request Soil Analysis
                </NeonButton>
                <NeonButton variant="glass" size="sm" className="w-full">
                  Download Report
                </NeonButton>
                <Link to="/marketplace">
                  <NeonButton variant="ghost" size="sm" className="w-full">
                    Sell Excess Credits
                  </NeonButton>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Weather Schedule */}
        <GlassCard className="p-8">
          <h2 className="text-xl font-orbitron font-semibold mb-6 text-neon-cyan">Weather Schedule</h2>
          
          <div className="space-y-4">
            {weatherSchedule.map((schedule, index) => (
              <div 
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                  schedule.status === 'active' 
                    ? 'bg-neon-cyan/10 border-neon-cyan/30' 
                    : 'bg-space-nebula/30 border-glass-border'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    schedule.status === 'active' 
                      ? 'bg-neon-cyan animate-glow-pulse' 
                      : 'bg-neon-violet'
                  }`}></div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{schedule.weather}</h4>
                    <p className="text-sm text-text-muted">{schedule.date} • {schedule.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    schedule.status === 'active' 
                      ? 'bg-neon-cyan/20 text-neon-cyan' 
                      : 'bg-neon-violet/20 text-neon-violet'
                  }`}>
                    {schedule.status}
                  </span>
                  <NeonButton variant="ghost" size="sm">
                    Modify
                  </NeonButton>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </main>
    </div>
  );
};

export default FarmerPlan;