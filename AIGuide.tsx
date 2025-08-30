import { useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AIGuide = () => {
  const [userInput, setUserInput] = useState("");
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const quickQuestions = [
    "What's the most cost-effective weather plan for my location?",
    "How can I reduce my environmental impact?",
    "What's the best schedule for my crop type?",
    "Can I save money by timing my orders differently?",
    "What weather patterns work best for outdoor events?"
  ];

  const aiRecommendations = [
    {
      id: "REC-001",
      title: "Switch to Weekly Plan",
      type: "cost-saving",
      description: "Based on your usage pattern, switching to a weekly plan could save you ₢450/month",
      savings: "₢450/month",
      environmentalImpact: "+15% efficiency",
      confidence: 94,
      action: "Switch Plan"
    },
    {
      id: "REC-002", 
      title: "Optimize Schedule Timing",
      type: "efficiency",
      description: "Scheduling your rain orders for 6-8 AM can reduce energy consumption by 23%",
      savings: "₢120/month",
      environmentalImpact: "+23% efficiency",
      confidence: 87,
      action: "Update Schedule"
    },
    {
      id: "REC-003",
      title: "Farmer Plan Opportunity",
      type: "subsidy",
      description: "Your location qualifies for agricultural subsidies. Switch to farmer plan for 40% savings.",
      savings: "₢1,800/season",
      environmentalImpact: "+30% sustainability",
      confidence: 98,
      action: "Apply Now"
    },
    {
      id: "REC-004",
      title: "Marketplace Credits",
      type: "marketplace",
      description: "Sell your unused vacation hologram credits - current market rate is 125% of purchase price",
      savings: "₢300 profit",
      environmentalImpact: "Carbon neutral",
      confidence: 76,
      action: "List Credits"
    }
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Mock AI analysis
    setTimeout(() => {
      setRecommendations(aiRecommendations);
      setIsAnalyzing(false);
    }, 2000);
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
              <span className="text-text-muted">🤖 AI Climate Guide</span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-violet rounded-full animate-glow-pulse"></div>
                <span className="text-neon-violet font-medium">AI Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
            AI Climate Guide
          </h1>
          <p className="text-text-secondary">Let AI guide you — smarter, eco-friendly, and cost-saving climate plans.</p>
        </div>

        {/* AI Chat Interface */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <GlassCard variant="glow" className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h2 className="text-xl font-orbitron font-semibold text-neon-violet">ARIA Climate Assistant</h2>
                  <p className="text-sm text-text-muted">Advanced Recommendation & Intelligence Agent</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-neon-violet/10 rounded-lg border border-neon-violet/30">
                  <p className="text-text-primary">
                    <span className="font-semibold text-neon-violet">ARIA:</span> Hello! I've analyzed your climate usage patterns and I'm ready to help optimize your weather plans. What would you like to know?
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="user-question" className="text-text-primary">Ask ARIA anything about your climate plans</Label>
                  <Input
                    id="user-question"
                    placeholder="e.g., How can I save money on my weather subscriptions?"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="bg-space-nebula/50 border-glass-border text-text-primary mt-2"
                  />
                </div>
                
                <NeonButton 
                  variant="hero" 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || !userInput}
                  className="w-full"
                >
                  {isAnalyzing ? "Analyzing..." : "Get AI Recommendations"}
                </NeonButton>
              </div>

              {/* Quick Questions */}
              <div className="mt-8">
                <h3 className="font-semibold text-text-primary mb-4">Popular Questions</h3>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setUserInput(question)}
                      className="w-full text-left p-3 bg-space-nebula/30 hover:bg-space-nebula/50 rounded-lg border border-glass-border hover:border-neon-violet/50 transition-all text-sm text-text-muted hover:text-text-primary"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* AI Stats */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-cyan">
                Your AI Insights
              </h3>
              
              <div className="space-y-4">
                <div className="p-3 bg-space-nebula/50 rounded-lg border border-glass-border">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Efficiency Score</span>
                    <span className="text-neon-cyan font-semibold">87/100</span>
                  </div>
                  <div className="w-full bg-space-deep rounded-full h-2 mt-2">
                    <div className="bg-neon-cyan h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>

                <div className="p-3 bg-space-nebula/50 rounded-lg border border-glass-border">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Cost Optimization</span>
                    <span className="text-neon-gold font-semibold">92/100</span>
                  </div>
                  <div className="w-full bg-space-deep rounded-full h-2 mt-2">
                    <div className="bg-neon-gold h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div className="p-3 bg-space-nebula/50 rounded-lg border border-glass-border">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Eco Impact</span>
                    <span className="text-neon-emerald font-semibold">78/100</span>
                  </div>
                  <div className="w-full bg-space-deep rounded-full h-2 mt-2">
                    <div className="bg-neon-emerald h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-4 text-neon-violet">
                Monthly Savings Potential
              </h3>
              
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-neon-gold mb-2">₢1,270</div>
                <div className="text-sm text-text-muted">Based on AI recommendations</div>
                
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Plan Optimization:</span>
                    <span className="text-status-success">₢450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Schedule Efficiency:</span>
                    <span className="text-status-success">₢120</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Subsidy Opportunities:</span>
                    <span className="text-status-success">₢700</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* AI Recommendations */}
        {recommendations.length > 0 && (
          <div>
            <h2 className="text-2xl font-orbitron font-semibold mb-6 text-neon-cyan">
              Personalized Recommendations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recommendations.map((rec) => (
                <GlassCard key={rec.id} variant="glow" className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        rec.type === 'cost-saving' ? 'bg-neon-gold/20 text-neon-gold' :
                        rec.type === 'efficiency' ? 'bg-neon-cyan/20 text-neon-cyan' :
                        rec.type === 'subsidy' ? 'bg-neon-emerald/20 text-neon-emerald' :
                        'bg-neon-violet/20 text-neon-violet'
                      }`}>
                        {rec.type === 'cost-saving' ? '💰' :
                         rec.type === 'efficiency' ? '⚡' :
                         rec.type === 'subsidy' ? '🏛️' : '📈'}
                      </div>
                      <h3 className="font-orbitron font-semibold text-lg text-text-primary">
                        {rec.title}
                      </h3>
                    </div>
                    <span className="text-xs px-2 py-1 bg-neon-violet/20 text-neon-violet rounded-full">
                      {rec.confidence}% confident
                    </span>
                  </div>

                  <p className="text-text-muted mb-4">{rec.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-text-muted">Savings:</span>
                      <div className="text-neon-gold font-semibold">{rec.savings}</div>
                    </div>
                    <div>
                      <span className="text-text-muted">Environmental:</span>
                      <div className="text-neon-emerald font-semibold">{rec.environmentalImpact}</div>
                    </div>
                  </div>

                  <NeonButton 
                    variant={rec.type === 'subsidy' ? 'hero' : 'holo'} 
                    className="w-full"
                  >
                    {rec.action}
                  </NeonButton>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* Learning Center */}
        <GlassCard className="p-8 mt-12">
          <h2 className="text-xl font-orbitron font-semibold mb-6 text-neon-cyan">
            Climate Intelligence Learning Center
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-neon rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-orbitron font-semibold text-lg mb-2 text-neon-cyan">Usage Analytics</h3>
              <p className="text-text-muted text-sm">Understand your climate consumption patterns and optimize for efficiency.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-neon rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-orbitron font-semibold text-lg mb-2 text-neon-violet">Eco Impact</h3>
              <p className="text-text-muted text-sm">Track your environmental footprint and discover sustainable alternatives.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-neon rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-orbitron font-semibold text-lg mb-2 text-neon-gold">Smart Tips</h3>
              <p className="text-text-muted text-sm">Get personalized recommendations based on weather patterns and usage.</p>
            </div>
          </div>
        </GlassCard>
      </main>
    </div>
  );
};

export default AIGuide;