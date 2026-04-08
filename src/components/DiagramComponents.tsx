import React from 'react';

// Diagram Waterfall
export const WaterfallDiagram: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">Model Waterfall</h4>
    <div className="flex flex-col gap-2 max-w-sm mx-auto">
      {[
        { name: 'Requirements', color: 'bg-blue-500' },
        { name: 'Design', color: 'bg-purple-500' },
        { name: 'Implementation', color: 'bg-pink-500' },
        { name: 'Verification', color: 'bg-orange-500' },
        { name: 'Maintenance', color: 'bg-green-500' },
      ].map((phase, index) => (
        <div key={index} className="flex items-center">
          <div style={{ marginLeft: `${index * 20}px` }} className={`${phase.color} text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md w-40`}>
            {phase.name}
          </div>
          {index < 4 && (
            <svg className="w-6 h-6 text-slate-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
        </div>
      ))}
    </div>
  </div>
);

// Scrum Sprint Cycle
export const ScrumCycleDiagram: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">Scrum Sprint Cycle</h4>
    <div className="flex justify-center items-center gap-4 flex-wrap">
      <div className="text-center">
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          Plan
        </div>
        <p className="text-xs mt-2 text-slate-600">Sprint Planning</p>
      </div>
      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
      <div className="text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          Build
        </div>
        <p className="text-xs mt-2 text-slate-600">Development</p>
      </div>
      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
      <div className="text-center">
        <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          Review
        </div>
        <p className="text-xs mt-2 text-slate-600">Demo</p>
      </div>
      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
      <div className="text-center">
        <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          Retro
        </div>
        <p className="text-xs mt-2 text-slate-600">Retrospective</p>
      </div>
    </div>
  </div>
);

// Testing Pyramid
export const TestingPyramidDiagram: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">Testing Pyramid</h4>
    <div className="flex flex-col items-center gap-1">
      <div className="bg-red-500 text-white px-6 py-2 rounded-t-lg text-sm font-medium w-32 text-center shadow">
        E2E
      </div>
      <div className="bg-orange-500 text-white px-8 py-2 text-sm font-medium w-48 text-center shadow">
        Integration
      </div>
      <div className="bg-green-500 text-white px-10 py-3 rounded-b-lg text-sm font-medium w-64 text-center shadow">
        Unit Tests
      </div>
    </div>
    <div className="flex justify-center gap-8 mt-4 text-xs text-slate-600">
      <span>⬆️ Slow, Expensive</span>
      <span>⬇️ Fast, Cheap</span>
    </div>
  </div>
);

// SOLID Principles Cards
export const SOLIDCards: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">SOLID Principles</h4>
    <div className="grid grid-cols-5 gap-2">
      {[
        { letter: 'S', name: 'Single Responsibility', color: 'bg-blue-500' },
        { letter: 'O', name: 'Open/Closed', color: 'bg-green-500' },
        { letter: 'L', name: 'Liskov Substitution', color: 'bg-yellow-500' },
        { letter: 'I', name: 'Interface Segregation', color: 'bg-pink-500' },
        { letter: 'D', name: 'Dependency Inversion', color: 'bg-purple-500' },
      ].map((principle, index) => (
        <div key={index} className="text-center">
          <div className={`${principle.color} text-white w-12 h-12 mx-auto rounded-lg flex items-center justify-center text-xl font-bold shadow-md`}>
            {principle.letter}
          </div>
          <p className="text-xs mt-2 text-slate-600 leading-tight">{principle.name}</p>
        </div>
      ))}
    </div>
  </div>
);

// Architecture Layers
export const LayeredArchitectureDiagram: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">Layered Architecture</h4>
    <div className="flex flex-col gap-2 max-w-md mx-auto">
      {[
        { name: 'Presentation Layer (UI)', color: 'bg-blue-500', icon: '🖥️' },
        { name: 'Business Logic Layer', color: 'bg-purple-500', icon: '⚙️' },
        { name: 'Data Access Layer', color: 'bg-pink-500', icon: '🔗' },
        { name: 'Database Layer', color: 'bg-orange-500', icon: '🗄️' },
      ].map((layer, index) => (
        <div key={index} className={`${layer.color} text-white px-4 py-3 rounded-lg text-sm font-medium shadow-md flex items-center gap-3`}>
          <span className="text-xl">{layer.icon}</span>
          {layer.name}
        </div>
      ))}
    </div>
  </div>
);

// Git Branching Visual
export const GitBranchingDiagram: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">Git Branching Strategy</h4>
    <div className="relative h-32 max-w-md mx-auto">
      {/* Main branch line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2"></div>
      
      {/* Commits on main */}
      <div className="absolute top-1/2 left-[10%] w-4 h-4 bg-green-500 rounded-full -translate-y-1/2 border-2 border-white shadow"></div>
      <div className="absolute top-1/2 left-[30%] w-4 h-4 bg-green-500 rounded-full -translate-y-1/2 border-2 border-white shadow"></div>
      <div className="absolute top-1/2 left-[70%] w-4 h-4 bg-green-500 rounded-full -translate-y-1/2 border-2 border-white shadow"></div>
      <div className="absolute top-1/2 left-[90%] w-4 h-4 bg-green-500 rounded-full -translate-y-1/2 border-2 border-white shadow"></div>
      
      {/* Feature branch */}
      <div className="absolute top-[20%] left-[30%] right-[30%] h-0.5 bg-blue-500"></div>
      <div className="absolute top-[20%] left-[40%] w-3 h-3 bg-blue-500 rounded-full -translate-y-1/2 border-2 border-white shadow"></div>
      <div className="absolute top-[20%] left-[55%] w-3 h-3 bg-blue-500 rounded-full -translate-y-1/2 border-2 border-white shadow"></div>
      
      {/* Labels */}
      <div className="absolute bottom-0 left-0 text-xs font-bold text-slate-800">main</div>
      <div className="absolute top-0 left-[40%] text-xs font-bold text-blue-600">feature</div>
    </div>
  </div>
);

// Quality Metrics Dashboard Mini
export const QualityMetricsMini: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">Quality Metrics</h4>
    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <div className="text-2xl font-bold text-green-600">A+</div>
        <div className="text-xs text-slate-600">Code Quality</div>
        <div className="mt-2 h-1 bg-gray-200 rounded">
          <div className="h-1 bg-green-500 rounded" style={{ width: '95%' }}></div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <div className="text-2xl font-bold text-blue-600">85%</div>
        <div className="text-xs text-slate-600">Coverage</div>
        <div className="mt-2 h-1 bg-gray-200 rounded">
          <div className="h-1 bg-blue-500 rounded" style={{ width: '85%' }}></div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <div className="text-2xl font-bold text-orange-600">0.3</div>
        <div className="text-xs text-slate-600">Bug/KLOC</div>
        <div className="mt-2 h-1 bg-gray-200 rounded">
          <div className="h-1 bg-orange-500 rounded" style={{ width: '30%' }}></div>
        </div>
      </div>
    </div>
  </div>
);

// Microservices Architecture
export const MicroservicesDiagram: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">Microservices Architecture</h4>
    <div className="flex flex-col gap-4 max-w-lg mx-auto">
      {/* API Gateway */}
      <div className="bg-slate-800 text-white px-4 py-2 rounded-lg text-center text-sm font-medium">
        API Gateway
      </div>
      
      {/* Services */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-500 text-white p-3 rounded-lg text-center text-xs font-medium">
          <div className="text-lg mb-1">👤</div>
          User Service
        </div>
        <div className="bg-green-500 text-white p-3 rounded-lg text-center text-xs font-medium">
          <div className="text-lg mb-1">📦</div>
          Order Service
        </div>
        <div className="bg-orange-500 text-white p-3 rounded-lg text-center text-xs font-medium">
          <div className="text-lg mb-1">💳</div>
          Payment Service
        </div>
      </div>
      
      {/* Databases */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-200 text-blue-800 p-2 rounded-lg text-center text-xs">
          🗄️ User DB
        </div>
        <div className="bg-green-200 text-green-800 p-2 rounded-lg text-center text-xs">
          🗄️ Order DB
        </div>
        <div className="bg-orange-200 text-orange-800 p-2 rounded-lg text-center text-xs">
          🗄️ Payment DB
        </div>
      </div>
      
      {/* Message Queue */}
      <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-center text-sm font-medium">
        Message Queue (RabbitMQ / Kafka)
      </div>
    </div>
  </div>
);

// Security Shield
export const SecurityDiagram: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">OWASP Top 10 Security Risks</h4>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 max-w-2xl mx-auto">
      {[
        { num: '01', name: 'Injection', color: 'bg-red-500' },
        { num: '02', name: 'Broken Auth', color: 'bg-red-400' },
        { num: '03', name: 'Data Exposure', color: 'bg-orange-500' },
        { num: '04', name: 'XXE', color: 'bg-orange-400' },
        { num: '05', name: 'Access Control', color: 'bg-yellow-500' },
        { num: '06', name: 'Misconfig', color: 'bg-yellow-400' },
        { num: '07', name: 'XSS', color: 'bg-green-500' },
        { num: '08', name: 'Deserialize', color: 'bg-teal-500' },
        { num: '09', name: 'Components', color: 'bg-blue-500' },
        { num: '10', name: 'Logging', color: 'bg-purple-500' },
      ].map((risk, index) => (
        <div key={index} className={`${risk.color} text-white p-2 rounded-lg text-center shadow`}>
          <div className="text-xs font-bold opacity-75">A{risk.num}</div>
          <div className="text-xs font-medium">{risk.name}</div>
        </div>
      ))}
    </div>
  </div>
);

// CI/CD Pipeline
export const CICDPipelineDiagram: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
    <h4 className="text-center font-bold text-slate-800 mb-4">CI/CD Pipeline</h4>
    <div className="flex items-center justify-center gap-2 flex-wrap max-w-xl mx-auto">
      {[
        { name: 'Code', icon: '💻', color: 'bg-slate-600' },
        { name: 'Build', icon: '🔨', color: 'bg-blue-500' },
        { name: 'Test', icon: '🧪', color: 'bg-purple-500' },
        { name: 'Analyze', icon: '🔍', color: 'bg-orange-500' },
        { name: 'Deploy', icon: '🚀', color: 'bg-green-500' },
        { name: 'Monitor', icon: '📊', color: 'bg-pink-500' },
      ].map((stage, index) => (
        <React.Fragment key={index}>
          <div className={`${stage.color} text-white px-3 py-2 rounded-lg text-center shadow`}>
            <div className="text-lg">{stage.icon}</div>
            <div className="text-xs font-medium">{stage.name}</div>
          </div>
          {index < 5 && (
            <svg className="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);


