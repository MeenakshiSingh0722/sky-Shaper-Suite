import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";

const Subscriptions = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  const subscriptions = [
    {
      id: "SUB-001",
      name: "Daily Weather Control",
      type: "standard",
      status: "active",
      price: "₢800/day",
      location: "47.6062° N, 122.3321° W",
      nextDeployment: "Tomorrow 06:00",
      weather: "Partly Cloudy",
      daysRemaining: 24
    },
    {
      id: "SUB-002", 
      name: "Farmer Crop Plan - Wheat",
      type: "farmer",
      status: "active",
      price: "₢12,000/season",
      location: "45.5152° N, 122.6784° W",
      cropType: "Winter Wheat",
      harvestEta: "85 days",
      subsidyApplied: true
    },
    {
      id: "SUB-003",
      name: "Weekend Recreation",
      type: "standard", 
      status: "paused",
      price: "₢400/weekend",
      location: "34.0522° N, 118.2437° W",
      weather: "Sunny Skies",
      pausedSince: "2 weeks ago"
    }
  ];

  const activeSubscriptions = subscriptions.filter(sub => sub.status === "active");
  const pausedSubscriptions = subscriptions.filter(sub => sub.status === "paused");

  return (
    <div className="min-h-screen bg-gradient-space">
      {/* Header */}
      <header className="border-b border-glass-border bg-space-nebula/30 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <span className="text-2xl font-orbitron font-bold text-neon-cyan">EnviroCorp</span>
            </Link>
            
            <Link to="/order">
              <NeonButton variant="hero">
                New Subscription
              </NeonButton>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            My Subscriptions
          </h1>
          <p className="text-text-secondary">Manage your climate control subscriptions and farmer plans</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-1">{activeSubscriptions.length}</div>
              <div className="text-sm text-text-muted">Active Plans</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-violet mb-1">₢21,200</div>
              <div className="text-sm text-text-muted">Monthly Spend</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-gold mb-1">₢4,800</div>
              <div className="text-sm text-text-muted">Subsidy Savings</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-emerald mb-1">148</div>
              <div className="text-sm text-text-muted">Hours Available</div>
            </div>
          </GlassCard>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8">
          {[
            { id: "active", label: "Active", count: activeSubscriptions.length },
            { id: "paused", label: "Paused", count: pausedSubscriptions.length },
            { id: "farmer", label: "Farmer Plans", count: subscriptions.filter(s => s.type === "farmer").length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-orbitron font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                  : 'text-text-muted hover:text-neon-cyan hover:bg-glass-surface/10'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Subscriptions Grid */}
        <div className="space-y-6">
          {subscriptions
            .filter(sub => {
              if (activeTab === "active") return sub.status === "active";
              if (activeTab === "paused") return sub.status === "paused";  
              if (activeTab === "farmer") return sub.type === "farmer";
              return true;
            })
            .map((subscription) => (
              <GlassCard key={subscription.id} variant="glow" className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${
                      subscription.status === 'active' 
                        ? 'bg-status-success animate-glow-pulse' 
                        : 'bg-status-warning'
                    }`}></div>
                    <div>
                      <h3 className="font-orbitron font-semibold text-lg text-neon-cyan">
                        {subscription.name}
                      </h3>
                      <p className="text-sm text-text-muted font-mono">{subscription.id}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xl font-orbitron font-bold text-neon-gold mb-1">
                      {subscription.price}
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      subscription.status === 'active' 
                        ? 'bg-status-success/20 text-status-success'
                        : 'bg-status-warning/20 text-status-warning' 
                    }`}>
                      {subscription.status}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Location</h4>
                    <p className="text-sm text-text-muted font-mono">{subscription.location}</p>
                    
                    {subscription.type === "farmer" && (
                      <div className="mt-3">
                        <h4 className="font-semibold text-text-primary mb-1">Crop Type</h4>
                        <p className="text-sm text-neon-emerald">{subscription.cropType}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    {subscription.type === "farmer" ? (
                      <>
                        <h4 className="font-semibold text-text-primary mb-2">Harvest ETA</h4>
                        <p className="text-sm text-neon-cyan">{subscription.harvestEta}</p>
                        {subscription.subsidyApplied && (
                          <div className="mt-2 px-2 py-1 bg-status-success/10 border border-status-success/30 rounded text-xs text-status-success">
                            Gov Subsidy Applied (40%)
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <h4 className="font-semibold text-text-primary mb-2">
                          {subscription.status === "active" ? "Next Deployment" : "Status"}
                        </h4>
                        <p className="text-sm text-text-muted">
                          {subscription.nextDeployment || subscription.pausedSince}
                        </p>
                        {subscription.weather && (
                          <p className="text-sm text-neon-violet mt-1">{subscription.weather}</p>
                        )}
                      </>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2">
                    {subscription.type === "farmer" ? (
                      <Link to="/farmer-plan">
                        <NeonButton variant="hero" size="sm" className="w-full">
                          Manage Crop Plan
                        </NeonButton>
                      </Link>
                    ) : (
                      <>
                        <NeonButton 
                          variant={subscription.status === "active" ? "glass" : "hero"} 
                          size="sm"
                        >
                          {subscription.status === "active" ? "Pause" : "Resume"}
                        </NeonButton>
                        <NeonButton variant="ghost" size="sm">
                          Modify Schedule
                        </NeonButton>
                      </>
                    )}
                    
                    <Link to="/marketplace">
                      <NeonButton variant="holo" size="sm" className="w-full">
                        Transfer Credits
                      </NeonButton>
                    </Link>
                  </div>
                </div>

                {subscription.daysRemaining && (
                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted text-sm">Days Remaining</span>
                      <span className="text-neon-cyan font-semibold">{subscription.daysRemaining}</span>
                    </div>
                    <div className="w-full bg-space-nebula rounded-full h-2 mt-2">
                      <div 
                        className="bg-gradient-neon h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(subscription.daysRemaining / 30) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </GlassCard>
            ))}
        </div>

        {/* Empty State */}
        {subscriptions.filter(sub => {
          if (activeTab === "active") return sub.status === "active";
          if (activeTab === "paused") return sub.status === "paused";
          if (activeTab === "farmer") return sub.type === "farmer";
          return true;
        }).length === 0 && (
          <GlassCard className="p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-orbitron font-semibold mb-2 text-text-primary">
              No {activeTab} subscriptions
            </h3>
            <p className="text-text-muted mb-6">
              Get started with a new weather subscription plan.
            </p>
            <Link to="/order">
              <NeonButton variant="hero" size="lg">
                Create Subscription
              </NeonButton>
            </Link>
          </GlassCard>
        )}
      </main>
    </div>
  );
};

export default Subscriptions;