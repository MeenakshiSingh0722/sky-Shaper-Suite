import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";

const Dashboard = () => {
  const [selectedPlan, setSelectedPlan] = useState("overview");
  
  const plans = [
    { id: "onetime", name: "One-time Order", price: "₢250", type: "instant", status: "available" },
    { id: "hourly", name: "Hourly Plan", price: "₢150/hr", type: "subscription", status: "active" },
    { id: "daily", name: "Daily Plan", price: "₢800/day", type: "subscription", status: "paused" },
    { id: "weekly", name: "Weekly Plan", price: "₢4,500/week", type: "subscription", status: "available" },
    { id: "premium", name: "Premium Storm", price: "₢2,500", type: "instant", status: "available" },
    { id: "farmer", name: "Farmer Crop Plan", price: "₢12,000/season", type: "subscription", status: "available" },
  ];

  const activeOrders = [
    { id: "ORD-2070-001", type: "Light Rain", location: "47.6062° N, 122.3321° W", eta: "15 minutes", status: "deploying" },
    { id: "ORD-2070-002", type: "Sunny Skies", location: "34.0522° N, 118.2437° W", eta: "2 hours", status: "scheduled" },
  ];

  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-80 min-h-screen bg-space-nebula/30 backdrop-blur-lg border-r border-glass-border">
          <div className="p-6">
            <h2 className="text-2xl font-orbitron font-bold text-neon-cyan mb-8">EnviroCorp</h2>
            
            <nav className="space-y-2">
              {[
                { id: "overview", label: "Dashboard", icon: "🏠" },
                { id: "order", label: "Order Weather", icon: "🌤️", link: "/order" },
                { id: "subscriptions", label: "Subscriptions", icon: "📋", link: "/subscriptions" },
                { id: "farmer", label: "Farmer Plans", icon: "🌾", link: "/farmer-plan" },
                { id: "marketplace", label: "Marketplace", icon: "💰", link: "/marketplace" },
                { id: "vacation", label: "Vacation Holo", icon: "🏝️", link: "/vacation-holo" },
                { id: "livemap", label: "Live Map", icon: "🌍", link: "/live-map" },
                { id: "emergency", label: "Emergency", icon: "🚨", link: "/emergency" },
                { id: "ai", label: "AI Guide", icon: "🤖", link: "/ai-guide" },
                { id: "settings", label: "Settings", icon: "⚙️" },
              ].map((item) => (
                <div key={item.id}>
                  {item.link ? (
                    <Link to={item.link}>
                      <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-glass-surface/20 rounded-lg transition-all duration-200 text-text-secondary hover:text-neon-cyan">
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => setSelectedPlan(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                        selectedPlan === item.id 
                          ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30' 
                          : 'text-text-secondary hover:text-neon-cyan hover:bg-glass-surface/20'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-orbitron font-bold mb-2 bg-gradient-neon bg-clip-text text-transparent">
                Climate Control Dashboard
              </h1>
              <p className="text-text-secondary">Manage your weather subscriptions and orders</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <GlassCard className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-1">2</div>
                  <div className="text-sm text-text-muted">Active Orders</div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-neon-violet mb-1">₢2,450</div>
                  <div className="text-sm text-text-muted">Credits Available</div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-neon-gold mb-1">3</div>
                  <div className="text-sm text-text-muted">Subscriptions</div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-neon-emerald mb-1">98%</div>
                  <div className="text-sm text-text-muted">Success Rate</div>
                </div>
              </GlassCard>
            </div>

            {/* Plan Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {plans.map((plan) => (
                <GlassCard key={plan.id} variant="glow" className="p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-orbitron font-semibold text-lg text-neon-cyan">{plan.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      plan.status === 'active' ? 'bg-status-success/20 text-status-success' :
                      plan.status === 'paused' ? 'bg-status-warning/20 text-status-warning' :
                      'bg-status-info/20 text-status-info'
                    }`}>
                      {plan.status}
                    </span>
                  </div>
                  
                  <div className="text-2xl font-orbitron font-bold text-neon-gold mb-4">{plan.price}</div>
                  
                  <div className="space-y-2">
                    <Link to="/order">
                      <NeonButton variant="hero" size="sm" className="w-full">
                        {plan.type === 'subscription' ? 'Manage' : 'Order Now'}
                      </NeonButton>
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Active Orders */}
            <GlassCard className="p-6">
              <h2 className="text-xl font-orbitron font-semibold mb-6 text-neon-cyan">Active Orders</h2>
              
              <div className="space-y-4">
                {activeOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-space-nebula/30 rounded-lg border border-glass-border">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h4 className="font-semibold text-text-primary">{order.type}</h4>
                          <p className="text-sm text-text-muted">{order.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-medium text-neon-cyan">ETA: {order.eta}</div>
                      <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                        order.status === 'deploying' ? 'bg-status-warning/20 text-status-warning' :
                        'bg-status-info/20 text-status-info'
                      }`}>
                        {order.status}
                      </div>
                    </div>
                    
                    <Link to={`/order-detail/${order.id}`}>
                      <NeonButton variant="ghost" size="sm" className="ml-4">
                        View
                      </NeonButton>
                    </Link>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;