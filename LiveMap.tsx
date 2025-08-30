import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";

const LiveMap = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [mapFilter, setMapFilter] = useState("all");
  
  const regions = [
    {
      id: "north-america",
      name: "North America",
      activeOrders: 847,
      weatherType: "Mixed Conditions",
      temperature: "12°C avg",
      status: "normal"
    },
    {
      id: "europe",
      name: "Europe", 
      activeOrders: 634,
      weatherType: "Controlled Rain",
      temperature: "8°C avg",
      status: "busy"
    },
    {
      id: "asia-pacific",
      name: "Asia Pacific",
      activeOrders: 1203,
      weatherType: "Farmer Season Active",
      temperature: "22°C avg", 
      status: "high-activity"
    },
    {
      id: "south-america",
      name: "South America",
      activeOrders: 423,
      weatherType: "Drought Relief",
      temperature: "28°C avg",
      status: "emergency"
    },
    {
      id: "africa",
      name: "Africa",
      activeOrders: 567,
      weatherType: "Agricultural Support",
      temperature: "31°C avg",
      status: "normal"
    }
  ];

  const liveEvents = [
    {
      id: "EVT-001",
      type: "Hurricane Mitigation",
      location: "Atlantic Ocean, 25.7617° N, 80.1918° W",
      intensity: "Category 2 → Category 1",
      eta: "6 hours",
      status: "deploying"
    },
    {
      id: "EVT-002", 
      type: "Agricultural Rain",
      location: "Midwest USA, 41.8781° N, 87.6298° W",
      intensity: "Light to Moderate",
      eta: "Active",
      status: "active"
    },
    {
      id: "EVT-003",
      type: "Wildfire Suppression",
      location: "California, 34.0522° N, 118.2437° W", 
      intensity: "Heavy Precipitation",
      eta: "2 hours",
      status: "scheduled"
    },
    {
      id: "EVT-004",
      type: "Desert Cooling",
      location: "Sahara, 23.8859° N, 32.7756° E",
      intensity: "Cloud Cover Deployment",
      eta: "Active",
      status: "active"
    }
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
              <span className="text-text-muted">🌍 Global Climate Monitor</span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-status-success rounded-full animate-glow-pulse"></div>
                <span className="text-status-success font-medium">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            Live Climate Map
          </h1>
          <p className="text-text-secondary">See the world change in real-time with our global climate tracker.</p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-1">3,674</div>
              <div className="text-sm text-text-muted">Active Orders Worldwide</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-violet mb-1">127</div>
              <div className="text-sm text-text-muted">Satellites Deployed</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-gold mb-1">89%</div>
              <div className="text-sm text-text-muted">Global Coverage</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-emerald mb-1">23</div>
              <div className="text-sm text-text-muted">Emergency Operations</div>
            </div>
          </GlassCard>
        </div>

        {/* Map Controls */}
        <GlassCard className="p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex space-x-2">
              <span className="text-text-primary font-medium">Filter:</span>
              {[
                { id: "all", label: "All Activity", color: "neon-cyan" },
                { id: "weather", label: "Weather Orders", color: "neon-violet" },
                { id: "emergency", label: "Emergencies", color: "status-error" },
                { id: "farmer", label: "Agriculture", color: "neon-emerald" }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setMapFilter(filter.id)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                    mapFilter === filter.id
                      ? `bg-${filter.color}/20 text-${filter.color} border border-${filter.color}/30`
                      : 'text-text-muted hover:text-text-primary hover:bg-glass-surface/10'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            <div className="flex space-x-3">
              <NeonButton variant="glass" size="sm">
                Fullscreen
              </NeonButton>
              <NeonButton variant="holo" size="sm">
                3D View
              </NeonButton>
            </div>
          </div>
        </GlassCard>

        {/* Interactive Globe */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <GlassCard variant="glow" className="p-8">
              <div className="relative h-96 bg-space-nebula/30 rounded-lg border border-glass-border overflow-hidden">
                {/* Mock 3D Globe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-[12rem] animate-spin-slow opacity-80">🌍</div>
                    
                    {/* Overlay activity indicators */}
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-neon-cyan rounded-full animate-glow-pulse cursor-pointer"
                         onClick={() => setSelectedRegion("north-america")}></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-neon-violet rounded-full animate-glow-pulse cursor-pointer"
                         onClick={() => setSelectedRegion("europe")}></div>
                    <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-status-error rounded-full animate-glow-pulse cursor-pointer"
                         onClick={() => setSelectedRegion("asia-pacific")}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-neon-emerald rounded-full animate-glow-pulse cursor-pointer"
                         onClick={() => setSelectedRegion("south-america")}></div>
                    <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-neon-gold rounded-full animate-glow-pulse cursor-pointer"
                         onClick={() => setSelectedRegion("africa")}></div>
                  </div>
                </div>
                
                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                    <span className="text-xs text-text-muted">Active Weather Orders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-status-error rounded-full"></div>
                    <span className="text-xs text-text-muted">Emergency Operations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-neon-emerald rounded-full"></div>
                    <span className="text-xs text-text-muted">Agricultural Control</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Region Details */}
          <div>
            <GlassCard className="p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-cyan">
                Regional Activity
              </h3>
              
              <div className="space-y-4">
                {regions.map((region) => (
                  <div
                    key={region.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedRegion === region.id
                        ? 'border-neon-cyan bg-neon-cyan/10'
                        : 'border-glass-border hover:border-neon-cyan/50'
                    }`}
                    onClick={() => setSelectedRegion(region.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-text-primary">{region.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        region.status === 'emergency' ? 'bg-status-error/20 text-status-error' :
                        region.status === 'high-activity' ? 'bg-status-warning/20 text-status-warning' :
                        region.status === 'busy' ? 'bg-status-info/20 text-status-info' :
                        'bg-status-success/20 text-status-success'
                      }`}>
                        {region.status}
                      </span>
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-text-muted">Active Orders:</span>
                        <span className="text-neon-cyan font-semibold">{region.activeOrders}</span>
                      </div>
                      <div className="text-text-muted">{region.weatherType}</div>
                      <div className="text-text-muted">{region.temperature}</div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Live Events Stream */}
        <GlassCard className="p-8">
          <h2 className="text-xl font-orbitron font-semibold mb-6 text-neon-cyan">
            Live Climate Events
          </h2>
          
          <div className="space-y-4">
            {liveEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 bg-space-nebula/30 rounded-lg border border-glass-border hover:border-neon-cyan/50 transition-all">
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${
                    event.status === 'active' ? 'bg-status-success animate-glow-pulse' :
                    event.status === 'deploying' ? 'bg-status-warning animate-glow-pulse' :
                    'bg-status-info'
                  }`}></div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{event.type}</h4>
                    <p className="text-sm text-text-muted font-mono">{event.location}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-neon-cyan">{event.intensity}</div>
                  <div className="text-xs text-text-muted">ETA: {event.eta}</div>
                </div>
                
                <Link to={`/order-detail/${event.id}`}>
                  <NeonButton variant="ghost" size="sm">
                    View Details
                  </NeonButton>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <NeonButton variant="holo">
              Load More Events
            </NeonButton>
          </div>
        </GlassCard>
      </main>
    </div>
  );
};

export default LiveMap;