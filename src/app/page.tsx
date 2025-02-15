"use client";

import React, { useEffect, useState } from 'react';
import { Terminal, Cpu, Zap, MessageCircle } from 'lucide-react';
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim"; // Use slim version

import type { Engine } from "tsparticles-engine";

const NeuroTrade: React.FC = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  };
  
  return (
    <div className="min-h-screen bg-black text-cyan-500 overflow-hidden relative">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
            move: {
              speed: 1,
            },
            color: {
              value: "#00FFFF",
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00FFFF",
              opacity: 0.4,
              width: 1,
            },
          },
        }}
      />
      {/* Main Navigation */}
      <nav className="relative flex items-center justify-between p-6 border-b border-cyan-900/30 backdrop-blur-sm z-10">
        <div className={`text-4xl font-black ${glitch ? 'animate-pulse' : ''}`}>
          <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            NeuroTrade
          </span>
        </div>
        <div className="flex gap-6">
          <a href="https://t.me/neurotrade" target="_blank" rel="noopener noreferrer" 
             className="text-cyan-400 hover:text-pink-400 transition-colors">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href="https://x.com/neurotrade" target="_blank" rel="noopener noreferrer"
             className="text-cyan-400 hover:text-pink-400 transition-colors">
            <Terminal className="w-6 h-6" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative container mx-auto px-6 py-20 text-center z-10">
        <h1 className="text-7xl font-black mb-6 glitch-text">
          AI-POWERED
          <span className="block text-8xl bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            FUTURE OF TRADING
          </span>
        </h1>
        <p className="text-xl text-cyan-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience the revolution of AI-enhanced trading algorithms. Advanced pattern recognition,
          predictive analytics, and automated strategy execution.
        </p>
      </main>
      
      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative bg-black border border-cyan-900/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Cpu className="w-8 h-8 mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-2">Neural Network Core</h3>
            <p className="text-cyan-300/70">Advanced AI algorithms for market analysis and prediction</p>
          </div>
          <div className="group relative bg-black border border-cyan-900/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Terminal className="w-8 h-8 mb-4 text-pink-400" />
            <h3 className="text-xl font-bold text-white mb-2">Automated Strategies</h3>
            <p className="text-cyan-300/70">24/7 market monitoring and execution system</p>
          </div>
          <div className="group relative bg-black border border-cyan-900/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Zap className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold text-white mb-2">Real-time Analytics</h3>
            <p className="text-cyan-300/70">Instant market insights and pattern recognition</p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          EVOLUTION PHASES
        </h2>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-cyan-500 to-pink-500" />
          <div className="space-y-20">
            <RoadmapItem 
              phase="PHASE 01"
              title="Launch & Core Development"
              features={[
                "AI Core Implementation",
                "Community Building",
                "Initial Trading Algorithms",
                "Token Launch",
                "Liquidity & Airdrops"
              ]}
              side="left"
            />
            <RoadmapItem 
              phase="PHASE 02"
              title="Growth & Adoption"
              features={[
                "Advanced Pattern Recognition",
                "Strategy Marketplace",
                "Performance Analytics Dashboard",
                "Staking & Governance (DAO for Community Decisions)"
              ]}
              side="right"
            />
            <RoadmapItem 
              phase="PHASE 03"
              title="Full Evolution"
              features={[
                "Neural Network Optimization",
                "Cross-platform Integration",
                "Advanced Risk Management",
                "Token Utility Expansion (e.g., access to AI signals, trading fee discounts, premium features, etc.)"
              ]}
              side="left"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface RoadmapItemProps {
  phase: string;
  title: string;
  features: string[];
  side: 'left' | 'right';
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ phase, title, features, side }) => {
  return (
    <div className={`flex ${side === 'right' ? 'justify-start' : 'justify-end'} relative`}>
      <div className={`w-1/2 ${side === 'right' ? 'pl-12' : 'pr-12'}`}>
        <div className="bg-black border border-cyan-900/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
          <span className="text-sm text-cyan-400 font-mono">{phase}</span>
          <h3 className="text-xl font-bold text-white mt-2 mb-4">{title}</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-cyan-300/70">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NeuroTrade;
