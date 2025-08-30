import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState("browse");
  const [listingPrice, setListingPrice] = useState("");
  
  const marketplaceItems = [
    {
      id: "MKT-001",
      title: "Premium Storm Experience", 
      seller: "WeatherMaster_2070",
      originalPrice: "₢2,500",
      salePrice: "₢1,800",
      discount: "28%",
      type: "One-time Order",
      duration: "6 hours",
      location: "Flexible GPS",
      timeLeft: "2 days",
      rating: 4.9
    },
    {
      id: "MKT-002", 
      title: "Sunny Weekend Package",
      seller: "SolarFarm_Collective",
      originalPrice: "₢1,200",
      salePrice: "₢900",
      discount: "25%", 
      type: "Weekend Special",
      duration: "48 hours",
      location: "West Coast USA",
      timeLeft: "5 hours",
      rating: 4.7
    },
    {
      id: "MKT-003",
      title: "Farmer Plan Credits - Corn",
      seller: "AgriCorp_Industries",
      originalPrice: "₢8,000",
      salePrice: "₢6,400",
      discount: "20%",
      type: "Subscription Credits",
      duration: "30 days remaining",
      location: "Midwest Territory",
      timeLeft: "1 day",
      rating: 5.0
    },
    {
      id: "MKT-004",
      title: "Vacation Hologram Bundle", 
      seller: "HoloTravel_Pro",
      originalPrice: "₢3,600",
      salePrice: "₢2,700",
      discount: "25%",
      type: "Experience Package",
      duration: "4 destinations, 8 hours each",
      location: "Virtual Anywhere",
      timeLeft: "12 hours",
      rating: 4.8
    }
  ];

  const myListings = [
    {
      id: "MY-001",
      title: "Unused Rain Credits",
      price: "₢450",
      originalValue: "₢600",
      duration: "12 hours",
      listed: "3 days ago",
      views: 24,
      offers: 3
    },
    {
      id: "MY-002", 
      title: "Weekend Snow Package",
      price: "₢800",
      originalValue: "₢1,000",
      duration: "Weekend",
      listed: "1 week ago", 
      views: 67,
      offers: 8
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
              <span className="text-text-muted">💰 Climate Marketplace</span>
              <div className="text-right">
                <div className="text-sm text-text-muted">Your Balance</div>
                <div className="font-orbitron font-bold text-neon-gold">₢2,450</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            Climate Marketplace
          </h1>
          <p className="text-text-secondary">Share, trade, or sell your weather credits in our global climate marketplace.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-1">1,247</div>
              <div className="text-sm text-text-muted">Active Listings</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-violet mb-1">₢156K</div>
              <div className="text-sm text-text-muted">Daily Volume</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-gold mb-1">23%</div>
              <div className="text-sm text-text-muted">Avg Savings</div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-emerald mb-1">4.8★</div>
              <div className="text-sm text-text-muted">Avg Rating</div>
            </div>
          </GlassCard>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8">
          {[
            { id: "browse", label: "Browse Market", icon: "🛒" },
            { id: "sell", label: "Sell Credits", icon: "💸" },
            { id: "listings", label: "My Listings", icon: "📋" },
            { id: "purchases", label: "Purchases", icon: "🛍️" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-orbitron font-medium transition-all flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                  : 'text-text-muted hover:text-neon-cyan hover:bg-glass-surface/10'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "browse" && (
          <div className="space-y-6">
            {/* Search & Filters */}
            <GlassCard className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <Input 
                    placeholder="Search marketplace..." 
                    className="bg-space-nebula/50 border-glass-border text-text-primary"
                  />
                </div>
                <select className="bg-space-nebula/50 border border-glass-border rounded-lg px-3 py-2 text-text-primary">
                  <option>All Categories</option>
                  <option>Weather Orders</option>
                  <option>Subscriptions</option>
                  <option>Holo Experiences</option>
                </select>
                <select className="bg-space-nebula/50 border border-glass-border rounded-lg px-3 py-2 text-text-primary">
                  <option>Any Price</option>
                  <option>Under ₢500</option>
                  <option>₢500 - ₢1,000</option>
                  <option>Over ₢1,000</option>
                </select>
                <NeonButton variant="hero">Search</NeonButton>
              </div>
            </GlassCard>

            {/* Marketplace Listings */}
            <div className="grid lg:grid-cols-2 gap-6">
              {marketplaceItems.map((item) => (
                <GlassCard key={item.id} variant="glow" className="p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-orbitron font-semibold text-lg text-neon-cyan mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-muted">by {item.seller}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-orbitron font-bold text-neon-gold">
                        {item.salePrice}
                      </div>
                      <div className="text-sm text-text-muted line-through">{item.originalPrice}</div>
                      <div className="text-xs bg-status-success/20 text-status-success px-2 py-1 rounded-full">
                        -{item.discount}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-text-muted">Type: </span>
                      <span className="text-text-primary">{item.type}</span>
                    </div>
                    <div>
                      <span className="text-text-muted">Duration: </span>
                      <span className="text-text-primary">{item.duration}</span>
                    </div>
                    <div>
                      <span className="text-text-muted">Location: </span>
                      <span className="text-text-primary">{item.location}</span>
                    </div>
                    <div>
                      <span className="text-text-muted">Time Left: </span>
                      <span className="text-status-warning">{item.timeLeft}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-neon-gold">★</span>
                      <span className="text-text-primary font-semibold">{item.rating}</span>
                    </div>
                    <div className="flex space-x-2">
                      <NeonButton variant="ghost" size="sm">Details</NeonButton>
                      <NeonButton variant="hero" size="sm">Buy Now</NeonButton>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {activeTab === "sell" && (
          <GlassCard className="p-8">
            <h2 className="text-2xl font-orbitron font-semibold mb-6 text-neon-cyan">
              List Your Weather Credits
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="credit-type" className="text-text-primary">Credit Type</Label>
                  <select 
                    id="credit-type"
                    className="w-full bg-space-nebula/50 border border-glass-border rounded-lg px-3 py-2 text-text-primary mt-2"
                  >
                    <option>Unused Weather Order</option>
                    <option>Subscription Credits</option>
                    <option>Vacation Hologram</option>
                    <option>Farmer Plan Hours</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="description" className="text-text-primary">Description</Label>
                  <Input
                    id="description"
                    placeholder="e.g., 6 hours of sunny weather, GPS flexible"
                    className="bg-space-nebula/50 border-glass-border text-text-primary mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="price" className="text-text-primary">Selling Price (₢)</Label>
                  <Input
                    id="price"
                    placeholder="450"
                    value={listingPrice}
                    onChange={(e) => setListingPrice(e.target.value)}
                    className="bg-space-nebula/50 border-glass-border text-text-primary mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="duration" className="text-text-primary">Duration/Validity</Label>
                  <Input
                    id="duration"
                    placeholder="e.g., 30 days, expires Dec 31"
                    className="bg-space-nebula/50 border-glass-border text-text-primary mt-2"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <GlassCard className="p-6">
                  <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-violet">
                    Listing Preview
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Your Price:</span>
                      <span className="text-neon-gold font-semibold">₢{listingPrice || "0"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Marketplace Fee (5%):</span>
                      <span className="text-text-primary">₢{listingPrice ? Math.round(parseInt(listingPrice) * 0.05) : "0"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Transaction Fee:</span>
                      <span className="text-text-primary">₢10</span>
                    </div>
                    <hr className="border-glass-border" />
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-text-primary">You Receive:</span>
                      <span className="text-neon-emerald">
                        ₢{listingPrice ? Math.round(parseInt(listingPrice) * 0.95) - 10 : "0"}
                      </span>
                    </div>
                  </div>
                </GlassCard>
                
                <div className="space-y-3">
                  <NeonButton variant="hero" className="w-full" size="lg">
                    List for Sale
                  </NeonButton>
                  <NeonButton variant="glass" className="w-full">
                    Save as Draft
                  </NeonButton>
                </div>
              </div>
            </div>
          </GlassCard>
        )}

        {activeTab === "listings" && (
          <div className="space-y-6">
            {myListings.map((listing) => (
              <GlassCard key={listing.id} variant="glow" className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-orbitron font-semibold text-lg text-neon-cyan mb-2">
                      {listing.title}
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-text-muted">Price: </span>
                        <span className="text-neon-gold font-semibold">{listing.price}</span>
                      </div>
                      <div>
                        <span className="text-text-muted">Duration: </span>
                        <span className="text-text-primary">{listing.duration}</span>
                      </div>
                      <div>
                        <span className="text-text-muted">Views: </span>
                        <span className="text-neon-cyan">{listing.views}</span>
                      </div>
                      <div>
                        <span className="text-text-muted">Offers: </span>
                        <span className="text-neon-violet">{listing.offers}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-6">
                    <NeonButton variant="glass" size="sm">Edit</NeonButton>
                    <NeonButton variant="ghost" size="sm">Remove</NeonButton>
                    {listing.offers > 0 && (
                      <NeonButton variant="hero" size="sm">View Offers</NeonButton>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        )}

        {activeTab === "purchases" && (
          <GlassCard className="p-12 text-center">
            <div className="text-6xl mb-6">🛍️</div>
            <h2 className="text-2xl font-orbitron font-semibold mb-4 text-neon-cyan">
              Your Purchases
            </h2>
            <p className="text-text-muted mb-6">
              View your marketplace purchase history and manage your bought credits.
            </p>
            <NeonButton variant="hero" size="lg">
              Browse Marketplace
            </NeonButton>
          </GlassCard>
        )}
      </main>
    </div>
  );
};

export default Marketplace;