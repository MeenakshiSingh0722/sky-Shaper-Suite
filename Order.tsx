import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Order = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    weatherType: "",
    location: { lat: "", lng: "" },
    landRecord: null as File | null,
    duration: "",
    schedule: "",
    isFarmerPlan: false,
    cropType: "",
    paymentMethod: ""
  });

  const weatherTypes = [
    { id: "rain", name: "Rain", icon: "🌧️", description: "Gentle to moderate rainfall for relaxation and plant growth" },
    { id: "sun", name: "Sunny Skies", icon: "☀️", description: "Clear skies with natural sunlight and warmth" },
    { id: "snow", name: "Snow", icon: "❄️", description: "Light to moderate snowfall for winter activities" },
    { id: "wind", name: "Wind", icon: "💨", description: "Controlled wind patterns for energy or cooling" },
    { id: "fog", name: "Fog", icon: "🌫️", description: "Atmospheric fog for mood or special effects" },
    { id: "custom", name: "Custom", icon: "⚡", description: "Combine multiple weather elements" },
  ];

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete order
      navigate("/order-result");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-cyan">Choose Weather Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weatherTypes.map((weather) => (
                <GlassCard 
                  key={weather.id}
                  variant={orderData.weatherType === weather.id ? "glow" : "default"}
                  className={`p-6 cursor-pointer hover:scale-105 transition-all duration-300 ${
                    orderData.weatherType === weather.id ? 'border-neon-cyan shadow-glow-cyan' : ''
                  }`}
                  onClick={() => setOrderData({ ...orderData, weatherType: weather.id })}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{weather.icon}</div>
                    <h3 className="font-orbitron font-semibold text-lg mb-2 text-text-primary">{weather.name}</h3>
                    <p className="text-sm text-text-muted">{weather.description}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-cyan">GPS Control</h2>
            <p className="text-text-muted mb-6">Pin your land or location, and let EnviroCorp deliver weather directly to your spot.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="latitude" className="text-text-primary">Latitude</Label>
                    <Input
                      id="latitude"
                      placeholder="47.6062"
                      value={orderData.location.lat}
                      onChange={(e) => setOrderData({ 
                        ...orderData, 
                        location: { ...orderData.location, lat: e.target.value }
                      })}
                      className="bg-space-nebula/50 border-glass-border text-text-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="longitude" className="text-text-primary">Longitude</Label>
                    <Input
                      id="longitude"
                      placeholder="-122.3321"
                      value={orderData.location.lng}
                      onChange={(e) => setOrderData({ 
                        ...orderData, 
                        location: { ...orderData.location, lng: e.target.value }
                      })}
                      className="bg-space-nebula/50 border-glass-border text-text-primary"
                    />
                  </div>
                </div>
              </div>
              
              <GlassCard className="p-6">
                <div className="h-48 bg-space-nebula/30 rounded-lg flex items-center justify-center">
                  <div className="text-center text-text-muted">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Interactive Map</p>
                    <p className="text-sm">(GPS Coordinates Preview)</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-cyan">Upload Land Record</h2>
            <p className="text-text-muted mb-6">Secure your land with official verification — your climate, your rules.</p>
            
            <GlassCard className="p-8">
              <div className="border-2 border-dashed border-glass-border rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="font-semibold text-lg mb-2 text-text-primary">Upload Land Verification</h3>
                <p className="text-text-muted mb-4">Drag & drop your land ownership documents or click to browse</p>
                <NeonButton variant="glass" size="lg">
                  Choose Files
                </NeonButton>
              </div>
              
              <div className="mt-6 flex items-center space-x-2">
                <div className="w-3 h-3 bg-status-warning rounded-full animate-glow-pulse"></div>
                <span className="text-status-warning font-medium">Verification Pending</span>
              </div>
            </GlassCard>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-cyan">Duration & Schedule</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="p-6">
                <h3 className="font-orbitron font-semibold text-lg mb-4 text-text-primary">Duration Options</h3>
                <div className="space-y-3">
                  {[
                    { id: "1hour", label: "1 Hour", price: "₢150" },
                    { id: "3hours", label: "3 Hours", price: "₢400" },
                    { id: "6hours", label: "6 Hours", price: "₢750" },
                    { id: "24hours", label: "24 Hours", price: "₢1,200" },
                  ].map((option) => (
                    <div 
                      key={option.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        orderData.duration === option.id 
                          ? 'border-neon-cyan bg-neon-cyan/10' 
                          : 'border-glass-border hover:border-neon-cyan/50'
                      }`}
                      onClick={() => setOrderData({ ...orderData, duration: option.id })}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-text-primary">{option.label}</span>
                        <span className="text-neon-gold font-semibold">{option.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="font-orbitron font-semibold text-lg mb-4 text-text-primary">Schedule</h3>
                <div className="space-y-3">
                  {[
                    { id: "now", label: "Start Immediately" },
                    { id: "1hour", label: "In 1 Hour" },
                    { id: "tomorrow", label: "Tomorrow Morning" },
                    { id: "custom", label: "Custom Time" },
                  ].map((option) => (
                    <div 
                      key={option.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        orderData.schedule === option.id 
                          ? 'border-neon-violet bg-neon-violet/10' 
                          : 'border-glass-border hover:border-neon-violet/50'
                      }`}
                      onClick={() => setOrderData({ ...orderData, schedule: option.id })}
                    >
                      <span className="text-text-primary">{option.label}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-cyan">Farmer Crop Plan (Optional)</h2>
            
            <GlassCard className="p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <input 
                  type="checkbox" 
                  id="farmerPlan"
                  checked={orderData.isFarmerPlan}
                  onChange={(e) => setOrderData({ ...orderData, isFarmerPlan: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="farmerPlan" className="text-text-primary font-medium">
                  Enable Farmer Crop Plan
                </label>
              </div>
              
              {orderData.isFarmerPlan && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cropType" className="text-text-primary">Crop Type</Label>
                    <Input
                      id="cropType"
                      placeholder="e.g., Wheat, Corn, Tomatoes"
                      value={orderData.cropType}
                      onChange={(e) => setOrderData({ ...orderData, cropType: e.target.value })}
                      className="bg-space-nebula/50 border-glass-border text-text-primary"
                    />
                  </div>
                  
                  <div className="p-4 bg-status-success/10 border border-status-success/30 rounded-lg">
                    <p className="text-status-success font-medium">Government Subsidy Applied!</p>
                    <p className="text-sm text-text-muted mt-1">
                      Your crop plan qualifies for a 40% government subsidy for sustainable farming.
                    </p>
                  </div>
                </div>
              )}
            </GlassCard>
          </div>
        );

      case 6:
        return (
          <div>
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-cyan">Pricing & Payment</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="p-6">
                <h3 className="font-orbitron font-semibold text-lg mb-4 text-text-primary">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weather Type:</span>
                    <span className="text-text-primary">{orderData.weatherType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Duration:</span>
                    <span className="text-text-primary">{orderData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Base Price:</span>
                    <span className="text-text-primary">₢750</span>
                  </div>
                  {orderData.isFarmerPlan && (
                    <div className="flex justify-between text-status-success">
                      <span>Government Subsidy:</span>
                      <span>-₢300</span>
                    </div>
                  )}
                  <hr className="border-glass-border" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-text-primary">Total:</span>
                    <span className="text-neon-gold">₢{orderData.isFarmerPlan ? '450' : '750'}</span>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="font-orbitron font-semibold text-lg mb-4 text-text-primary">Payment Method</h3>
                <div className="space-y-3">
                  {[
                    { id: "credits", label: "Climate Credits", balance: "₢2,450" },
                    { id: "quantum", label: "Quantum Card", last4: "****8901" },
                    { id: "neural", label: "Neural Wallet", balance: "₢15,680" },
                  ].map((method) => (
                    <div 
                      key={method.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        orderData.paymentMethod === method.id 
                          ? 'border-neon-gold bg-neon-gold/10' 
                          : 'border-glass-border hover:border-neon-gold/50'
                      }`}
                      onClick={() => setOrderData({ ...orderData, paymentMethod: method.id })}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-text-primary">{method.label}</span>
                        <span className="text-text-muted text-sm">
                          {method.balance || method.last4}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        );

      default:
        return null;
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
              <span className="text-text-muted">Step {currentStep} of 6</span>
              <div className="w-48 bg-space-nebula rounded-full h-2">
                <div 
                  className="bg-gradient-neon h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / 6) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <div>
            {currentStep > 1 && (
              <NeonButton variant="ghost" onClick={handlePrevious}>
                Previous
              </NeonButton>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <NeonButton variant="glass">
                Cancel
              </NeonButton>
            </Link>
            <NeonButton 
              variant="hero" 
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !orderData.weatherType) ||
                (currentStep === 2 && (!orderData.location.lat || !orderData.location.lng)) ||
                (currentStep === 4 && (!orderData.duration || !orderData.schedule)) ||
                (currentStep === 6 && !orderData.paymentMethod)
              }
            >
              {currentStep === 6 ? 'Complete Order' : 'Next'}
            </NeonButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Order;