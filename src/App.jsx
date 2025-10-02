import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "SAP AI Bridge",
      subtitle: "Intelligent Automation for SAP Ecosystems",
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SAP AI Bridge
          </div>
          <div className="text-2xl text-gray-600">
            Building the Future of SAP Operations with AI Agents
          </div>
          <div className="pt-8 text-lg text-gray-500">
            Powered by Model Context Protocol (MCP) Technology
          </div>
        </div>
      )
    },
    {
      title: "The Problem",
      subtitle: "SAP Operations Are Complex and Resource-Intensive",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="font-bold text-xl mb-3 text-red-900">Development Bottlenecks</div>
              <div className="text-gray-700">ABAP development, code reviews, and documentation consume enormous developer hours</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="font-bold text-xl mb-3 text-red-900">Migration Challenges</div>
              <div className="text-gray-700">SAP migrations are notoriously complex, risky, and expensive</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="font-bold text-xl mb-3 text-red-900">QA Inefficiency</div>
              <div className="text-gray-700">Manual testing of Fiori apps is time-consuming and error-prone</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="font-bold text-xl mb-3 text-red-900">Ticket Chaos</div>
              <div className="text-gray-700">Support tickets require manual triage and routing, delaying resolution</div>
            </div>
          </div>
          <div className="text-center pt-4 text-xl font-semibold text-gray-800">
            Companies spend millions on SAP operations that could be automated
          </div>
        </div>
      )
    },
    {
      title: "The Solution",
      subtitle: "AI Agents That Understand SAP",
      content: (
        <div className="space-y-6">
          <div className="text-center text-xl text-gray-700 mb-8">
            Two Revolutionary MCP Servers Powering Multiple AI Agents
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-2xl font-bold mb-4 text-blue-900">MCP Server #1</div>
              <div className="text-lg font-semibold mb-3 text-blue-800">Direct SAP System Access</div>
              <div className="space-y-2 text-gray-700">
                <div>✓ Native SAP integration</div>
                <div>✓ Real-time data access</div>
                <div>✓ ABAP code analysis</div>
                <div>✓ System modification capabilities</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-2xl font-bold mb-4 text-purple-900">MCP Server #2</div>
              <div className="text-lg font-semibold mb-3 text-purple-800">Fiori UI Intelligence</div>
              <div className="space-y-2 text-gray-700">
                <div>✓ Dynamic UI parsing</div>
                <div>✓ Standard & custom apps</div>
                <div>✓ Workflow automation</div>
                <div>✓ Intelligent testing</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Agent Portfolio",
      subtitle: "Potential Agents Enabled by Our MCP Infrastructure",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl text-center">
            <div className="text-2xl font-bold mb-2">Our MCP Servers Enable Multiple AI Agent Possibilities</div>
            <div className="text-lg opacity-90">With our foundational technology, these agents can be rapidly developed</div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-blue-900">Migration Agent</div>
                <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Potential</div>
              </div>
              <div className="text-gray-600 text-sm">Automates SAP system migrations, analyzes dependencies, and ensures data integrity</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-green-900">ABAP Development Agent</div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Potential</div>
              </div>
              <div className="text-gray-600 text-sm">Generates, optimizes, and refactors ABAP code following best practices</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-purple-900">Code Review Agent</div>
                <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Potential</div>
              </div>
              <div className="text-gray-600 text-sm">Performs comprehensive code reviews, identifies issues, suggests improvements</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-yellow-500">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-yellow-900">Documentation Agent</div>
                <div className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Potential</div>
              </div>
              <div className="text-gray-600 text-sm">Automatically generates technical documentation from ABAP code</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-red-900">Code Cleaner Agent</div>
                <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Potential</div>
              </div>
              <div className="text-gray-600 text-sm">Identifies and removes dead code, optimizes performance</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-indigo-500">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-indigo-900">Ticket Dispatcher Agent</div>
                <div className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">Potential</div>
              </div>
              <div className="text-gray-600 text-sm">Intelligently routes support tickets to appropriate teams</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-pink-500">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-pink-900">QA Automation Agent</div>
                <div className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">Potential</div>
              </div>
              <div className="text-gray-600 text-sm">Tests Fiori apps automatically, validates workflows, catches bugs</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-teal-500">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-lg text-teal-900">Workflow Execution Agent</div>
                <div className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">Potential</div>
              </div>
              <div className="text-gray-600 text-sm">Executes complex business processes across custom Fiori applications</div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
            <div className="font-bold text-lg mb-2 text-blue-900">The Power of Our Platform</div>
            <div className="text-gray-700">Our two MCP servers provide the foundational infrastructure to rapidly build any of these specialized agents. The technology is proven—now we can create agents tailored to customer needs.</div>
          </div>
        </div>
      )
    },
    {
      title: "Technology Stack",
      subtitle: "Built on Modern AI Infrastructure",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-xl text-center">
            <div className="text-3xl font-bold mb-3">Model Context Protocol (MCP)</div>
            <div className="text-lg">Anthropic's standardized protocol for AI-system integration</div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🔌</div>
              <div className="font-bold text-lg mb-2">Plug & Play</div>
              <div className="text-gray-600 text-sm">MCP servers integrate seamlessly with any AI model</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🔒</div>
              <div className="font-bold text-lg mb-2">Secure</div>
              <div className="text-gray-600 text-sm">Enterprise-grade security for SAP environments</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">⚡</div>
              <div className="font-bold text-lg mb-2">Scalable</div>
              <div className="text-gray-600 text-sm">From single instances to enterprise deployments</div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="font-bold text-lg mb-2">Unique Competitive Advantage</div>
            <div className="text-gray-700">First-to-market MCP-based SAP automation platform with both backend and frontend capabilities</div>
          </div>
        </div>
      )
    },
    {
      title: "Market Opportunity",
      subtitle: "Massive TAM in Enterprise SAP Market",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl">
              <div className="text-5xl font-bold mb-2">280K+</div>
              <div className="text-lg">SAP Customers Globally</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl">
              <div className="text-5xl font-bold mb-2">$35B+</div>
              <div className="text-lg">SAP Services Market</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl">
              <div className="text-5xl font-bold mb-2">77%</div>
              <div className="text-lg">Fortune 500 Use SAP</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="font-bold text-xl mb-3 text-gray-800">Target Segments</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>Large enterprises with SAP S/4HANA</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div>SAP consulting firms and system integrators</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>Companies undergoing SAP transformations</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>Organizations with custom Fiori apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Business Model",
      subtitle: "Multiple Revenue Streams",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-300">
              <div className="text-3xl font-bold mb-4 text-purple-900">🤝 Professional Services</div>
              <div className="space-y-3 text-gray-700 text-lg">
                <div>• Custom agent development</div>
                <div>• Integration consulting</div>
                <div>• Training and onboarding</div>
                <div>• System implementation</div>
              </div>
              <div className="mt-6 pt-6 border-t border-purple-200">
                <div className="text-sm text-purple-800 mb-2">Typical Engagement</div>
                <div className="text-3xl font-bold text-purple-900">$50K - $250K</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-300">
              <div className="text-3xl font-bold mb-4 text-green-900">🏢 Enterprise Licensing</div>
              <div className="space-y-3 text-gray-700 text-lg">
                <div>• On-premise deployments</div>
                <div>• Source code licensing</div>
                <div>• SI partner program</div>
                <div>• White-label solutions</div>
              </div>
              <div className="mt-6 pt-6 border-t border-green-200">
                <div className="text-sm text-green-800 mb-2">Partner Revenue Share</div>
                <div className="text-3xl font-bold text-green-900">20% - 30%</div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
            <div className="font-bold text-xl mb-3 text-blue-900">Revenue Strategy</div>
            <div className="text-gray-700 text-lg">
              Focus on high-value professional services engagements and strategic partnerships with SAP system integrators to rapidly penetrate the market and establish credibility in the SAP ecosystem.
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Go-to-Market Strategy",
      subtitle: "Phased Approach to Market Penetration",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-500">
              <div className="text-3xl font-bold text-blue-900 mb-2">Phase 1</div>
              <div className="font-semibold text-lg mb-3">Months 1-6</div>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• Launch with 2-3 pilot customers</div>
                <div>• Focus on QA automation agent</div>
                <div>• Gather testimonials and case studies</div>
                <div>• Refine product-market fit</div>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-t-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-900 mb-2">Phase 2</div>
              <div className="font-semibold text-lg mb-3">Months 7-12</div>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• Expand agent portfolio</div>
                <div>• Partner with SAP consultancies</div>
                <div>• Attend SAP conferences</div>
                <div>• Target 20-30 customers</div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-500">
              <div className="text-3xl font-bold text-green-900 mb-2">Phase 3</div>
              <div className="font-semibold text-lg mb-3">Months 13-24</div>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• Scale sales and marketing</div>
                <div>• Launch partner program</div>
                <div>• Expand to international markets</div>
                <div>• Target 100+ customers</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl">
            <div className="font-bold text-xl mb-3">Key Channels</div>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-sm">Direct Sales to Fortune 1000</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🤝</div>
                <div className="text-sm">SAP SI Partnerships</div>
              </div>
              <div>
                <div className="text-3xl mb-2">📢</div>
                <div className="text-sm">Content Marketing & SEO</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🎪</div>
                <div className="text-sm">SAP Events & Conferences</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Competitive Landscape",
      subtitle: "Unique Position in the Market",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
            <div className="font-bold text-2xl mb-3 text-green-900">Our Unique Advantages</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="text-green-600 text-xl">✓</div>
                <div><span className="font-semibold">First MCP-based SAP platform</span> - leveraging cutting-edge AI infrastructure</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-600 text-xl">✓</div>
                <div><span className="font-semibold">Dual capability</span> - both backend (ABAP) and frontend (Fiori) automation</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-600 text-xl">✓</div>
                <div><span className="font-semibold">Multi-agent ecosystem</span> - comprehensive solution vs. point solutions</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-600 text-xl">✓</div>
                <div><span className="font-semibold">Standard & custom apps</span> - works with any Fiori application</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="font-bold text-lg mb-3 text-gray-800">Traditional RPA Tools</div>
              <div className="text-sm text-gray-600 mb-3">UiPath, Automation Anywhere</div>
              <div className="space-y-2 text-sm">
                <div className="text-red-600">✗ No SAP-specific intelligence</div>
                <div className="text-red-600">✗ Brittle UI automation</div>
                <div className="text-red-600">✗ No code understanding</div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="font-bold text-lg mb-3 text-gray-800">SAP Native Tools</div>
              <div className="text-sm text-gray-600 mb-3">SAP Solution Manager, ATC</div>
              <div className="space-y-2 text-sm">
                <div className="text-red-600">✗ Limited AI capabilities</div>
                <div className="text-red-600">✗ Complex configuration</div>
                <div className="text-red-600">✗ Lacks autonomous agents</div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="font-bold text-lg mb-3 text-gray-800">AI Code Assistants</div>
              <div className="text-sm text-gray-600 mb-3">GitHub Copilot, Tabnine</div>
              <div className="space-y-2 text-sm">
                <div className="text-red-600">✗ Generic coding help</div>
                <div className="text-red-600">✗ No SAP system access</div>
                <div className="text-red-600">✗ Developer-only focus</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Team",
      subtitle: "Domain Expertise Meets AI Innovation",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl text-center">
            <div className="text-2xl font-bold mb-2">Building the Future of SAP Automation</div>
            <div className="text-lg opacity-90">Deep SAP expertise + Cutting-edge AI technology</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="font-bold text-xl mb-4 text-gray-800">Current Strengths</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-2xl">💻</div>
                <div>
                  <div className="font-semibold">MCP Technology Pioneer</div>
                  <div className="text-sm text-gray-600">Built 2 production-ready MCP servers for SAP</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-purple-500 text-2xl">🎯</div>
                <div>
                  <div className="font-semibold">SAP Domain Expertise</div>
                  <div className="text-sm text-gray-600">Deep understanding of SAP architecture and operations</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-2xl">🤖</div>
                <div>
                  <div className="font-semibold">AI Agent Development</div>
                  <div className="text-sm text-gray-600">Proven ability to build specialized AI agents</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-yellow-500 text-2xl">⚡</div>
                <div>
                  <div className="font-semibold">Rapid Execution</div>
                  <div className="text-sm text-gray-600">Working technology demonstrates execution capability</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="font-bold text-lg mb-3">Team Building Priorities</div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-blue-900 mb-2">Engineering (3-4)</div>
                <div className="text-gray-700">AI/ML engineers, SAP developers, backend engineers</div>
              </div>
              <div>
                <div className="font-semibold text-purple-900 mb-2">Sales & CS (2-3)</div>
                <div className="text-gray-700">Enterprise sales, SAP consultancy relationships</div>
              </div>
              <div>
                <div className="font-semibold text-green-900 mb-2">Product (1-2)</div>
                <div className="text-gray-700">Product manager with SAP experience</div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="font-bold text-lg mb-2">Advisory Board Targets</div>
            <div className="text-gray-700">Seeking advisors with: SAP executive experience, AI/ML expertise, Enterprise SaaS go-to-market, System integrator relationships</div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-12 mb-8 min-h-[600px]">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-500">{slides[currentSlide].subtitle}</p>
          </div>
          <div className="mb-8">{slides[currentSlide].content}</div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevSlide}
            className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
          
          <div className="text-gray-600 font-semibold">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          
          <button
            onClick={nextSlide}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;