import { Link, useParams } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";

const OrderDetail = () => {
  const { id } = useParams();
  
  // Mock order data - in real app would fetch from API
  const orderDetails = {
    id: id || "ORD-2070-001",
    type: "Light Rain",
    status: "active",
    location: "47.6062° N, 122.3321° W",
    duration: "4 hours",
    startTime: "2070-12-15 10:30 UTC",
    endTime: "2070-12-15 14:30 UTC",
    cost: "₢600",
    subsidy: "₢150",
    finalCost: "₢450",
    orderDate: "2070-12-14 16:45 UTC",
    paymentMethod: "Climate Credits",
    weatherIntensity: "Moderate",
    coverage: "15 sq km",
    satellitesDeployed: 3,
    energyUsed: "2.4 TWh",
    carbonOffset: "+12.3 tons CO₂"
  };

  const deploymentStages = [
    { stage: "Order Received", time: "2070-12-14 16:45", status: "completed", description: "Payment processed and order validated" },
    { stage: "Satellite Positioning", time: "2070-12-15 09:15", status: "completed", description: "3 climate satellites moved to target coordinates" },
    { stage: "Atmospheric Analysis", time: "2070-12-15 10:00", status: "completed", description: "Local weather conditions analyzed and optimized" },
    { stage: "Weather Deployment", time: "2070-12-15 10:30", status: "active", description: "Light precipitation system activated" },
    { stage: "Monitoring Phase", time: "2070-12-15 14:30", status: "pending", description: "Post-deployment environmental assessment" }
  ];

  const telemetryData = [
    { metric: "Precipitation Rate", value: "3.2 mm/hr", target: "2.5-4.0 mm/hr", status: "optimal" },
    { metric: "Wind Speed", value: "8 mph", target: "5-12 mph", status: "optimal" },
    { metric: "Temperature", value: "16°C", target: "14-18°C", status: "optimal" },
    { metric: "Humidity", value: "82%", target: "75-85%", status: "optimal" },
    { metric: "Pressure", value: "1013 hPa", target: "1010-1015 hPa", status: "optimal" }
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
              <Link to="/dashboard">
                <NeonButton variant="glass">
                  ← Back to Dashboard
                </NeonButton>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-orbitron font-bold mb-2 bg-gradient-neon bg-clip-text text-transparent">
                Order Details
              </h1>
              <p className="text-text-secondary font-mono">{orderDetails.id}</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded-full ${
                orderDetails.status === 'active' ? 'bg-status-success animate-glow-pulse' :
                orderDetails.status === 'completed' ? 'bg-neon-cyan' :
                orderDetails.status === 'scheduled' ? 'bg-status-warning' :
                'bg-status-error'
              }`}></div>
              <span className="font-orbitron font-semibold text-lg capitalize text-text-primary">
                {orderDetails.status}
              </span>
            </div>
          </div>
        </div>

        {/* Order Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <GlassCard variant="glow" className="p-8">
              <h2 className="text-2xl font-orbitron font-semibold mb-6 text-neon-cyan">
                Weather Deployment: {orderDetails.type}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Location</h3>
                    <p className="text-text-muted font-mono text-sm">{orderDetails.location}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Duration</h3>
                    <p className="text-neon-violet">{orderDetails.duration}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Coverage Area</h3>
                    <p className="text-text-primary">{orderDetails.coverage}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Intensity</h3>
                    <p className="text-neon-cyan">{orderDetails.weatherIntensity}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Start Time</h3>
                    <p className="text-text-muted font-mono text-sm">{orderDetails.startTime}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">End Time</h3>
                    <p className="text-text-muted font-mono text-sm">{orderDetails.endTime}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Satellites Deployed</h3>
                    <p className="text-neon-gold font-semibold">{orderDetails.satellitesDeployed}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">Energy Consumption</h3>
                    <p className="text-text-primary">{orderDetails.energyUsed}</p>
                  </div>
                </div>
              </div>

              {/* Live Telemetry */}
              <div className="border-t border-glass-border pt-6">
                <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-cyan">
                  Live Telemetry Data
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {telemetryData.map((item, index) => (
                    <div key={index} className="p-3 bg-space-nebula/50 rounded-lg border border-glass-border">
                      <div className="text-sm text-text-muted mb-1">{item.metric}</div>
                      <div className="text-lg font-orbitron font-bold text-neon-cyan">{item.value}</div>
                      <div className="text-xs text-text-muted">Target: {item.target}</div>
                      <div className="flex items-center space-x-1 mt-1">
                        <div className="w-2 h-2 bg-status-success rounded-full"></div>
                        <span className="text-xs text-status-success">Optimal</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="space-y-6">
            {/* Payment Details */}
            <GlassCard className="p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-gold">
                Payment Summary
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Base Cost:</span>
                  <span className="text-text-primary">{orderDetails.cost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Subsidy Applied:</span>
                  <span className="text-status-success">-{orderDetails.subsidy}</span>
                </div>
                <hr className="border-glass-border" />
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-text-primary">Final Cost:</span>
                  <span className="text-neon-gold">{orderDetails.finalCost}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Payment Method:</span>
                  <span className="text-text-primary">{orderDetails.paymentMethod}</span>
                </div>
              </div>
            </GlassCard>

            {/* Environmental Impact */}
            <GlassCard className="p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-emerald">
                Environmental Impact
              </h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-orbitron font-bold text-neon-emerald mb-2">
                    {orderDetails.carbonOffset}
                  </div>
                  <div className="text-sm text-text-muted">Carbon Offset Generated</div>
                </div>
                
                <div className="p-3 bg-status-success/10 border border-status-success/30 rounded-lg">
                  <p className="text-status-success text-sm font-medium">
                    ✓ Sustainable Energy Sources
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    100% renewable energy used for satellite operations
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Quick Actions */}
            <GlassCard className="p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-violet">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <NeonButton variant="hero" size="sm" className="w-full">
                  Extend Duration
                </NeonButton>
                <NeonButton variant="holo" size="sm" className="w-full">
                  Adjust Intensity
                </NeonButton>
                <NeonButton variant="glass" size="sm" className="w-full">
                  Download Report
                </NeonButton>
                <Link to="/marketplace">
                  <NeonButton variant="ghost" size="sm" className="w-full">
                    Gift to Friend
                  </NeonButton>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Deployment Timeline */}
        <GlassCard className="p-8">
          <h2 className="text-xl font-orbitron font-semibold mb-6 text-neon-cyan">
            Deployment Timeline
          </h2>
          
          <div className="space-y-6">
            {deploymentStages.map((stage, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  stage.status === 'completed' ? 'bg-status-success border-status-success' :
                  stage.status === 'active' ? 'bg-status-warning border-status-warning animate-glow-pulse' :
                  'bg-space-nebula border-glass-border'
                }`}>
                  {stage.status === 'completed' ? '✓' :
                   stage.status === 'active' ? '⚡' : 
                   index + 1}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-text-primary">{stage.stage}</h4>
                    <span className="text-sm text-text-muted font-mono">{stage.time}</span>
                  </div>
                  <p className="text-sm text-text-muted mt-1">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </main>
    </div>
  );
};

export default OrderDetail;