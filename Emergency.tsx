import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Emergency = () => {
  const [authLevel, setAuthLevel] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState("");
  
  const emergencyTypes = [
    {
      id: "wildfire",
      name: "Wildfire Suppression",
      icon: "🔥",
      description: "Deploy targeted rainfall and wind control to combat active wildfires",
      priority: "CRITICAL",
      duration: "12-48 hours",
      coverage: "500 sq km"
    },
    {
      id: "drought",
      name: "Drought Relief",
      icon: "🌵", 
      description: "Emergency precipitation deployment for drought-affected agricultural areas",
      priority: "HIGH",
      duration: "7-30 days",
      coverage: "2,000 sq km"
    },
    {
      id: "hurricane",
      name: "Hurricane Mitigation",
      icon: "🌪️",
      description: "Atmospheric pressure adjustment to weaken incoming hurricane systems",
      priority: "CRITICAL",
      duration: "24-72 hours", 
      coverage: "5,000 sq km"
    },
    {
      id: "flood",
      name: "Flood Prevention",
      icon: "🌊",
      description: "Precipitation redirection and atmospheric pressure control",
      priority: "URGENT",
      duration: "6-24 hours",
      coverage: "1,000 sq km"
    },
    {
      id: "extreme-heat",
      name: "Extreme Heat Relief",
      icon: "🌡️",
      description: "Cloud cover deployment and cooling precipitation for heat emergencies",
      priority: "HIGH",
      duration: "3-14 days",
      coverage: "3,000 sq km"
    },
    {
      id: "crop-failure",
      name: "Crop Emergency",
      icon: "🌾",
      description: "Emergency weather intervention to prevent widespread crop failure",
      priority: "URGENT",
      duration: "1-21 days",
      coverage: "10,000 sq km"
    }
  ];

  const handleAuth = () => {
    // Mock authentication - in real app would verify with backend
    if (authLevel === "GOV-EMERGENCY" || authLevel === "NGO-CERTIFIED") {
      setIsAuthenticated(true);
    }
  };

  const handleEmergencySubmit = () => {
    // Mock emergency submission
    alert("Emergency order submitted for priority processing. ETA: 45 minutes.");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-space">
        {/* Header */}
        <header className="border-b border-glass-border bg-space-nebula/30 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <span className="text-2xl font-orbitron font-bold text-neon-cyan">EnviroCorp</span>
            </Link>
          </div>
        </header>

        {/* Authentication Required */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-status-error/20 rounded-full flex items-center justify-center border-2 border-status-error animate-glow-pulse">
              <span className="text-4xl">🚨</span>
            </div>
            <h1 className="text-4xl font-orbitron font-bold mb-4 text-status-error">
              Emergency Override Portal
            </h1>
            <p className="text-text-secondary text-xl">
              Protecting Earth first — priority climate control for emergencies.
            </p>
          </div>

          <GlassCard variant="glow" className="p-8 border-status-error/30">
            <h2 className="text-2xl font-orbitron font-semibold mb-6 text-status-error text-center">
              Authorization Required
            </h2>
            
            <div className="max-w-md mx-auto space-y-6">
              <div>
                <Label htmlFor="auth-code" className="text-text-primary">
                  Government/NGO Authorization Code
                </Label>
                <Input
                  id="auth-code"
                  placeholder="GOV-EMERGENCY-XXXX or NGO-CERTIFIED-XXXX"
                  value={authLevel}
                  onChange={(e) => setAuthLevel(e.target.value)}
                  className="bg-space-nebula/50 border-status-error/50 text-text-primary mt-2"
                />
              </div>
              
              <div className="p-4 bg-status-warning/10 border border-status-warning/30 rounded-lg">
                <h3 className="font-semibold text-status-warning mb-2">Access Requirements</h3>
                <ul className="text-sm text-text-muted space-y-1">
                  <li>• Government Emergency Response Teams</li>
                  <li>• Certified NGO Environmental Organizations</li>
                  <li>• International Climate Authority</li>
                  <li>• Regional Disaster Management Agencies</li>
                </ul>
              </div>
              
              <NeonButton 
                variant="emergency" 
                onClick={handleAuth}
                disabled={!authLevel}
                className="w-full"
                size="lg"
              >
                Verify Authorization
              </NeonButton>
            </div>

            <div className="mt-8 text-center text-sm text-text-muted">
              <p>This portal is restricted to authorized emergency response personnel only.</p>
              <p>Unauthorized access attempts are logged and may result in legal action.</p>
            </div>
          </GlassCard>
        </main>
      </div>
    );
  }

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
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-status-success rounded-full animate-glow-pulse"></div>
                <span className="text-status-success font-medium">AUTHORIZED</span>
              </div>
              <span className="text-text-muted font-mono text-sm">{authLevel}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-bold mb-4 text-status-error">
            Emergency Override Portal
          </h1>
          <p className="text-text-secondary">Priority climate intervention for critical situations</p>
        </div>

        {/* Priority Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6 border-status-success/30">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-status-success mb-1">12</div>
              <div className="text-sm text-text-muted">Active Emergencies</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6 border-status-warning/30">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-status-warning mb-1">3</div>
              <div className="text-sm text-text-muted">Deployment Queue</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6 border-status-error/30">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-status-error mb-1">45 min</div>
              <div className="text-sm text-text-muted">Avg Response Time</div>
            </div>
          </GlassCard>
        </div>

        {/* Emergency Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {emergencyTypes.map((emergency) => (
            <GlassCard
              key={emergency.id}
              variant={selectedEmergency === emergency.id ? "glow" : "default"}
              className={`p-6 cursor-pointer hover:scale-105 transition-all duration-300 ${
                selectedEmergency === emergency.id ? 'border-status-error shadow-glow-violet' : ''
              } ${
                emergency.priority === 'CRITICAL' ? 'border-status-error/50' :
                emergency.priority === 'URGENT' ? 'border-status-warning/50' :
                'border-status-info/50'
              }`}
              onClick={() => setSelectedEmergency(emergency.id)}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{emergency.icon}</div>
                <h3 className="font-orbitron font-semibold text-lg text-text-primary mb-2">
                  {emergency.name}
                </h3>
                <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                  emergency.priority === 'CRITICAL' ? 'bg-status-error/20 text-status-error' :
                  emergency.priority === 'URGENT' ? 'bg-status-warning/20 text-status-warning' :
                  'bg-status-info/20 text-status-info'
                }`}>
                  {emergency.priority}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <p className="text-text-muted">{emergency.description}</p>
                <div className="flex justify-between">
                  <span className="text-text-muted">Duration:</span>
                  <span className="text-text-primary">{emergency.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Coverage:</span>
                  <span className="text-neon-cyan">{emergency.coverage}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Emergency Details Form */}
        {selectedEmergency && (
          <GlassCard variant="glow" className="p-8 border-status-error/30">
            <h2 className="text-2xl font-orbitron font-semibold mb-6 text-status-error">
              Emergency Request Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="location" className="text-text-primary">Target Location (GPS)</Label>
                  <Input
                    id="location"
                    placeholder="47.6062° N, 122.3321° W"
                    className="bg-space-nebula/50 border-glass-border text-text-primary mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="severity" className="text-text-primary">Severity Level</Label>
                  <select className="w-full bg-space-nebula/50 border border-glass-border rounded-lg px-3 py-2 text-text-primary mt-2">
                    <option>Level 5 - Catastrophic</option>
                    <option>Level 4 - Severe</option>
                    <option>Level 3 - Moderate</option>
                    <option>Level 2 - Minor</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="affected-population" className="text-text-primary">Affected Population</Label>
                  <Input
                    id="affected-population"
                    placeholder="e.g., 50,000 residents"
                    className="bg-space-nebula/50 border-glass-border text-text-primary mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact" className="text-text-primary">Emergency Contact</Label>
                  <Input
                    id="contact"
                    placeholder="emergency.response@agency.gov"
                    className="bg-space-nebula/50 border-glass-border text-text-primary mt-2"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="description" className="text-text-primary">Situation Description</Label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Detailed description of the emergency situation requiring climate intervention..."
                    className="w-full bg-space-nebula/50 border border-glass-border rounded-lg px-3 py-2 text-text-primary mt-2 resize-none"
                  />
                </div>
                
                <div>
                  <Label htmlFor="timeline" className="text-text-primary">Required Timeline</Label>
                  <select className="w-full bg-space-nebula/50 border border-glass-border rounded-lg px-3 py-2 text-text-primary mt-2">
                    <option>Immediate (within 1 hour)</option>
                    <option>Urgent (within 6 hours)</option>
                    <option>Priority (within 24 hours)</option>
                  </select>
                </div>
                
                <GlassCard className="p-4 border-status-warning/30">
                  <h3 className="font-semibold text-status-warning mb-2">Emergency Protocol</h3>
                  <ul className="text-sm text-text-muted space-y-1">
                    <li>• Request will bypass normal authorization queues</li>
                    <li>• Satellite systems will be prioritized for deployment</li>
                    <li>• Real-time monitoring and adjustment available</li>
                    <li>• Government subsidy automatically applied</li>
                  </ul>
                </GlassCard>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <NeonButton 
                variant="emergency" 
                size="xl"
                onClick={handleEmergencySubmit}
                className="animate-glow-pulse"
              >
                Deploy Emergency Response
              </NeonButton>
            </div>
          </GlassCard>
        )}

        {/* Current Emergencies */}
        <GlassCard className="p-8 mt-8">
          <h2 className="text-xl font-orbitron font-semibold mb-6 text-neon-cyan">
            Active Emergency Operations
          </h2>
          
          <div className="space-y-4">
            {[
              { type: "Wildfire Suppression", location: "California Sector 7", eta: "Deploying now", status: "active" },
              { type: "Hurricane Mitigation", location: "Gulf Coast Region", eta: "2 hours", status: "scheduled" },
              { type: "Drought Relief", location: "Midwest Agricultural Zone", eta: "Active", status: "ongoing" }
            ].map((operation, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-space-nebula/30 rounded-lg border border-glass-border">
                <div>
                  <h4 className="font-semibold text-text-primary">{operation.type}</h4>
                  <p className="text-sm text-text-muted">{operation.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-neon-cyan">ETA: {operation.eta}</div>
                  <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                    operation.status === 'active' ? 'bg-status-success/20 text-status-success' :
                    operation.status === 'scheduled' ? 'bg-status-warning/20 text-status-warning' :
                    'bg-status-info/20 text-status-info'
                  }`}>
                    {operation.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </main>
    </div>
  );
};

export default Emergency;