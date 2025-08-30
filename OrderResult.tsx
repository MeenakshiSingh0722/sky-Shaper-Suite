import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";

const OrderResult = () => {
  const orderDetails = {
    id: "ORD-2070-042",
    type: "Light Rain",
    location: "47.6062° N, 122.3321° W",
    duration: "3 Hours",
    eta: "45 minutes",
    total: "₢450",
    status: "confirmed",
    activationTime: "2070-12-15 14:30 UTC"
  };

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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-neon rounded-full flex items-center justify-center">
            <span className="text-4xl">✅</span>
          </div>
          <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            Order Confirmed!
          </h1>
          <p className="text-xl text-text-secondary">
            Your weather request has been processed and scheduled for deployment.
          </p>
        </div>

        {/* Order Summary */}
        <GlassCard variant="glow" className="p-8 mb-8">
          <h2 className="text-2xl font-orbitron font-semibold mb-6 text-neon-cyan">Order Summary</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-text-muted">Order ID:</span>
                <span className="text-text-primary font-mono">{orderDetails.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Weather Type:</span>
                <span className="text-text-primary">{orderDetails.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Location:</span>
                <span className="text-text-primary font-mono text-sm">{orderDetails.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Duration:</span>
                <span className="text-text-primary">{orderDetails.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Total Cost:</span>
                <span className="text-neon-gold font-semibold text-lg">{orderDetails.total}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-status-success/10 border border-status-success/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-status-success rounded-full animate-glow-pulse"></div>
                  <span className="text-status-success font-semibold">Deployment Scheduled</span>
                </div>
                <p className="text-sm text-text-muted">
                  Satellite systems activated. ETA: <span className="text-neon-cyan font-semibold">{orderDetails.eta}</span>
                </p>
              </div>

              <div className="p-4 bg-space-nebula/50 rounded-lg border border-glass-border">
                <h4 className="font-semibold text-text-primary mb-2">Activation Details</h4>
                <p className="text-sm text-text-muted">
                  Climate deployment begins: <br />
                  <span className="text-neon-violet font-mono">{orderDetails.activationTime}</span>
                </p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Live Tracking Map */}
        <GlassCard className="p-8 mb-8">
          <h3 className="text-xl font-orbitron font-semibold mb-4 text-neon-cyan">Live Tracking</h3>
          <div className="h-64 bg-space-nebula/30 rounded-lg flex items-center justify-center border border-glass-border">
            <div className="text-center text-text-muted">
              <div className="text-6xl mb-4">🛰️</div>
              <p className="text-lg font-semibold">Satellite Systems Online</p>
              <p className="text-sm">Real-time deployment tracking</p>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-glow-pulse"></div>
                <span className="text-neon-cyan">Positioning satellites...</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-4 gap-4">
          <NeonButton variant="hero" size="lg" className="h-16">
            <div className="text-center">
              <div className="text-lg">📱</div>
              <div className="text-sm">Share Order</div>
            </div>
          </NeonButton>
          
          <NeonButton variant="gold" size="lg" className="h-16">
            <div className="text-center">
              <div className="text-lg">🎁</div>
              <div className="text-sm">Gift to Friend</div>
            </div>
          </NeonButton>
          
          <Link to="/marketplace" className="w-full">
            <NeonButton variant="holo" size="lg" className="h-16 w-full">
              <div className="text-center">
                <div className="text-lg">💰</div>
                <div className="text-sm">List on Marketplace</div>
              </div>
            </NeonButton>
          </Link>
          
          <NeonButton variant="glass" size="lg" className="h-16">
            <div className="text-center">
              <div className="text-lg">📥</div>
              <div className="text-sm">Download Receipt</div>
            </div>
          </NeonButton>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-text-muted">What would you like to do next?</p>
          <div className="flex justify-center space-x-4">
            <Link to="/order">
              <NeonButton variant="hero">
                Order More Weather
              </NeonButton>
            </Link>
            <Link to="/dashboard">
              <NeonButton variant="glass">
                Return to Dashboard
              </NeonButton>
            </Link>
            <Link to="/live-map">
              <NeonButton variant="ghost">
                View Global Map
              </NeonButton>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderResult;