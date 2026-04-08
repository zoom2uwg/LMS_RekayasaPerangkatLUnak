import React from 'react';

// Ilustrasi Pengantar RPL
export const IntroductionIllustration: React.FC = () => (
  <svg viewBox="0 0 400 250" className="w-full h-auto max-w-md mx-auto">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect x="20" y="20" width="360" height="210" rx="10" fill="#F1F5F9" />
    
    {/* Main Screen */}
    <rect x="50" y="40" width="180" height="120" rx="5" fill="#1E293B" />
    <rect x="55" y="50" width="170" height="90" fill="#0F172A" />
    
    {/* Code lines */}
    <rect x="60" y="55" width="60" height="6" rx="2" fill="#3B82F6" />
    <rect x="60" y="65" width="100" height="6" rx="2" fill="#10B981" />
    <rect x="70" y="75" width="80" height="6" rx="2" fill="#F59E0B" />
    <rect x="70" y="85" width="90" height="6" rx="2" fill="#EF4444" />
    <rect x="60" y="95" width="70" height="6" rx="2" fill="#8B5CF6" />
    <rect x="60" y="105" width="50" height="6" rx="2" fill="#3B82F6" />
    <rect x="60" y="115" width="85" height="6" rx="2" fill="#10B981" />
    <rect x="60" y="125" width="40" height="6" rx="2" fill="#F59E0B" />
    
    {/* Screen stand */}
    <rect x="120" y="160" width="40" height="15" fill="#64748B" />
    <rect x="100" y="175" width="80" height="8" rx="2" fill="#475569" />
    
    {/* Gear icons */}
    <circle cx="300" cy="80" r="30" fill="url(#grad1)" opacity="0.9" />
    <circle cx="300" cy="80" r="12" fill="#F1F5F9" />
    {/* Gear teeth */}
    <rect x="295" y="45" width="10" height="12" fill="url(#grad1)" />
    <rect x="295" y="103" width="10" height="12" fill="url(#grad1)" />
    <rect x="265" y="75" width="12" height="10" fill="url(#grad1)" />
    <rect x="323" y="75" width="12" height="10" fill="url(#grad1)" />
    
    {/* Small gear */}
    <circle cx="340" cy="130" r="18" fill="#10B981" opacity="0.9" />
    <circle cx="340" cy="130" r="7" fill="#F1F5F9" />
    
    {/* Document */}
    <rect x="260" y="160" width="50" height="60" rx="3" fill="white" stroke="#CBD5E1" strokeWidth="2" />
    <rect x="268" y="170" width="34" height="4" rx="1" fill="#CBD5E1" />
    <rect x="268" y="178" width="28" height="4" rx="1" fill="#CBD5E1" />
    <rect x="268" y="186" width="32" height="4" rx="1" fill="#CBD5E1" />
    <rect x="268" y="194" width="20" height="4" rx="1" fill="#CBD5E1" />
    <circle cx="295" cy="210" r="6" fill="#10B981" />
    <path d="M292 210 L294 213 L299 207" stroke="white" strokeWidth="2" fill="none" />
    
    {/* People */}
    <circle cx="330" cy="180" r="12" fill="#F59E0B" />
    <rect x="320" y="195" width="20" height="25" rx="5" fill="#F59E0B" />
    
    <circle cx="355" cy="185" r="10" fill="#3B82F6" />
    <rect x="347" y="198" width="16" height="22" rx="4" fill="#3B82F6" />
  </svg>
);

// Ilustrasi Proses Software
export const ProcessIllustration: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto max-w-lg mx-auto">
    {/* Waterfall steps */}
    <rect x="20" y="20" width="70" height="35" rx="5" fill="#3B82F6" />
    <text x="55" y="42" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Requirements</text>
    
    <rect x="95" y="45" width="70" height="35" rx="5" fill="#8B5CF6" />
    <text x="130" y="67" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Design</text>
    
    <rect x="170" y="70" width="70" height="35" rx="5" fill="#EC4899" />
    <text x="205" y="92" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Implement</text>
    
    <rect x="245" y="95" width="70" height="35" rx="5" fill="#F59E0B" />
    <text x="280" y="117" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Testing</text>
    
    <rect x="320" y="120" width="70" height="35" rx="5" fill="#10B981" />
    <text x="355" y="142" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Deploy</text>
    
    {/* Arrows */}
    <path d="M90 37 L95 50" stroke="#64748B" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
    <path d="M165 62 L170 75" stroke="#64748B" strokeWidth="2" fill="none" />
    <path d="M240 87 L245 100" stroke="#64748B" strokeWidth="2" fill="none" />
    <path d="M315 112 L320 125" stroke="#64748B" strokeWidth="2" fill="none" />
    
    {/* Spiral below */}
    <text x="60" y="175" fill="#64748B" fontSize="12" fontWeight="bold">Waterfall Model</text>
    
    {/* Spiral representation */}
    <ellipse cx="280" cy="175" rx="80" ry="20" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,3" />
    <ellipse cx="280" cy="175" rx="60" ry="15" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,3" />
    <ellipse cx="280" cy="175" rx="40" ry="10" fill="none" stroke="#EC4899" strokeWidth="2" strokeDasharray="5,3" />
    <ellipse cx="280" cy="175" rx="20" ry="5" fill="none" stroke="#10B981" strokeWidth="2" />
    <circle cx="280" cy="175" r="4" fill="#10B981" />
    <text x="280" y="198" textAnchor="middle" fill="#64748B" fontSize="12" fontWeight="bold">Spiral Model</text>
  </svg>
);

// Ilustrasi Agile/Scrum
export const AgileIllustration: React.FC = () => (
  <svg viewBox="0 0 400 220" className="w-full h-auto max-w-lg mx-auto">
    {/* Sprint cycle */}
    <circle cx="200" cy="110" r="80" fill="none" stroke="#E2E8F0" strokeWidth="15" />
    
    {/* Sprint segments */}
    <path d="M200 30 A80 80 0 0 1 280 110" fill="none" stroke="#3B82F6" strokeWidth="15" />
    <path d="M280 110 A80 80 0 0 1 200 190" fill="none" stroke="#10B981" strokeWidth="15" />
    <path d="M200 190 A80 80 0 0 1 120 110" fill="none" stroke="#F59E0B" strokeWidth="15" />
    <path d="M120 110 A80 80 0 0 1 200 30" fill="none" stroke="#8B5CF6" strokeWidth="15" />
    
    {/* Center */}
    <circle cx="200" cy="110" r="40" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    <text x="200" y="105" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">SPRINT</text>
    <text x="200" y="120" textAnchor="middle" fill="#64748B" fontSize="10">2-4 weeks</text>
    
    {/* Labels */}
    <text x="250" y="55" fill="#3B82F6" fontSize="11" fontWeight="bold">Plan</text>
    <text x="300" y="115" fill="#10B981" fontSize="11" fontWeight="bold">Develop</text>
    <text x="245" y="175" fill="#F59E0B" fontSize="11" fontWeight="bold">Review</text>
    <text x="100" y="115" fill="#8B5CF6" fontSize="11" fontWeight="bold">Retro</text>
    
    {/* Arrow indicating cycle */}
    <path d="M200 25 L210 35 L190 35 Z" fill="#3B82F6" />
    
    {/* Kanban board on right */}
    <rect x="320" y="40" width="70" height="140" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
    <rect x="320" y="40" width="70" height="20" rx="5" fill="#1E293B" />
    <text x="355" y="54" textAnchor="middle" fill="white" fontSize="8">KANBAN</text>
    
    {/* Columns */}
    <line x1="343" y1="60" x2="343" y2="180" stroke="#E2E8F0" strokeWidth="1" />
    <line x1="366" y1="60" x2="366" y2="180" stroke="#E2E8F0" strokeWidth="1" />
    
    {/* Cards */}
    <rect x="323" y="65" width="17" height="12" rx="2" fill="#3B82F6" />
    <rect x="323" y="80" width="17" height="12" rx="2" fill="#3B82F6" />
    <rect x="323" y="95" width="17" height="12" rx="2" fill="#3B82F6" />
    
    <rect x="346" y="65" width="17" height="12" rx="2" fill="#F59E0B" />
    <rect x="346" y="80" width="17" height="12" rx="2" fill="#F59E0B" />
    
    <rect x="369" y="65" width="17" height="12" rx="2" fill="#10B981" />
    
    {/* Column labels */}
    <text x="331" y="175" textAnchor="middle" fill="#64748B" fontSize="6">TODO</text>
    <text x="354" y="175" textAnchor="middle" fill="#64748B" fontSize="6">WIP</text>
    <text x="377" y="175" textAnchor="middle" fill="#64748B" fontSize="6">DONE</text>
    
    {/* Team icons on left */}
    <circle cx="50" cy="70" r="15" fill="#EC4899" />
    <text x="50" y="74" textAnchor="middle" fill="white" fontSize="10">PO</text>
    
    <circle cx="50" cy="110" r="15" fill="#3B82F6" />
    <text x="50" y="114" textAnchor="middle" fill="white" fontSize="10">SM</text>
    
    <circle cx="50" cy="150" r="15" fill="#10B981" />
    <text x="50" y="154" textAnchor="middle" fill="white" fontSize="8">DEV</text>
    
    <text x="50" y="185" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="bold">Scrum Team</text>
  </svg>
);

// Ilustrasi Requirements
export const RequirementsIllustration: React.FC = () => (
  <svg viewBox="0 0 400 220" className="w-full h-auto max-w-lg mx-auto">
    {/* Document */}
    <rect x="30" y="20" width="120" height="160" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    <rect x="30" y="20" width="120" height="30" rx="5" fill="#3B82F6" />
    <text x="90" y="40" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">SRS Document</text>
    
    {/* Document lines */}
    <rect x="40" y="60" width="80" height="6" rx="2" fill="#E2E8F0" />
    <rect x="40" y="72" width="100" height="6" rx="2" fill="#E2E8F0" />
    <rect x="40" y="84" width="70" height="6" rx="2" fill="#E2E8F0" />
    <rect x="40" y="100" width="90" height="6" rx="2" fill="#3B82F6" opacity="0.3" />
    <rect x="40" y="112" width="60" height="6" rx="2" fill="#E2E8F0" />
    <rect x="40" y="124" width="85" height="6" rx="2" fill="#E2E8F0" />
    <rect x="40" y="140" width="75" height="6" rx="2" fill="#10B981" opacity="0.3" />
    <rect x="40" y="152" width="95" height="6" rx="2" fill="#E2E8F0" />
    
    {/* Checklist */}
    <rect x="125" y="95" width="12" height="12" rx="2" fill="none" stroke="#10B981" strokeWidth="2" />
    <path d="M127 101 L130 104 L135 97" stroke="#10B981" strokeWidth="2" fill="none" />
    <rect x="125" y="135" width="12" height="12" rx="2" fill="none" stroke="#10B981" strokeWidth="2" />
    <path d="M127 141 L130 144 L135 137" stroke="#10B981" strokeWidth="2" fill="none" />
    
    {/* User with speech bubble */}
    <circle cx="220" cy="60" r="25" fill="#F59E0B" />
    <circle cx="220" cy="50" r="10" fill="#FDE68A" />
    <ellipse cx="220" cy="72" rx="15" ry="10" fill="#FDE68A" />
    
    {/* Speech bubble */}
    <path d="M250 30 Q290 30 290 50 Q290 70 260 70 L250 80 L252 70 Q250 70 250 50 Q250 30 250 30" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
    <text x="270" y="50" textAnchor="middle" fill="#3B82F6" fontSize="8">"I need..."</text>
    <text x="270" y="62" textAnchor="middle" fill="#3B82F6" fontSize="8">"It should..."</text>
    
    {/* Stakeholder label */}
    <text x="220" y="105" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">Stakeholder</text>
    
    {/* Use Case diagram representation */}
    <ellipse cx="320" cy="140" rx="60" ry="70" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,3" />
    <text x="320" y="85" textAnchor="middle" fill="#8B5CF6" fontSize="10" fontWeight="bold">System</text>
    
    {/* Use cases */}
    <ellipse cx="320" cy="115" rx="35" ry="12" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="1" />
    <text x="320" y="118" textAnchor="middle" fill="#5B21B6" fontSize="8">Login</text>
    
    <ellipse cx="320" cy="145" rx="35" ry="12" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="1" />
    <text x="320" y="148" textAnchor="middle" fill="#5B21B6" fontSize="8">View Data</text>
    
    <ellipse cx="320" cy="175" rx="35" ry="12" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="1" />
    <text x="320" y="178" textAnchor="middle" fill="#5B21B6" fontSize="8">Export</text>
    
    {/* Actor */}
    <circle cx="240" cy="145" r="8" fill="none" stroke="#1E293B" strokeWidth="2" />
    <line x1="240" y1="153" x2="240" y2="175" stroke="#1E293B" strokeWidth="2" />
    <line x1="230" y1="162" x2="250" y2="162" stroke="#1E293B" strokeWidth="2" />
    <line x1="240" y1="175" x2="230" y2="190" stroke="#1E293B" strokeWidth="2" />
    <line x1="240" y1="175" x2="250" y2="190" stroke="#1E293B" strokeWidth="2" />
    
    {/* Connection lines */}
    <line x1="248" y1="145" x2="285" y2="145" stroke="#64748B" strokeWidth="1" />
    <line x1="248" y1="140" x2="285" y2="115" stroke="#64748B" strokeWidth="1" />
    <line x1="248" y1="155" x2="285" y2="175" stroke="#64748B" strokeWidth="1" />
    
    <text x="320" y="210" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">Use Case Diagram</text>
  </svg>
);

// Ilustrasi UML/System Modeling
export const UMLIllustration: React.FC = () => (
  <svg viewBox="0 0 400 240" className="w-full h-auto max-w-lg mx-auto">
    {/* Class Diagram */}
    <rect x="20" y="20" width="100" height="80" fill="white" stroke="#3B82F6" strokeWidth="2" />
    <rect x="20" y="20" width="100" height="20" fill="#3B82F6" />
    <text x="70" y="34" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">User</text>
    <line x1="20" y1="50" x2="120" y2="50" stroke="#3B82F6" strokeWidth="1" />
    <text x="25" y="62" fill="#1E293B" fontSize="8">- id: int</text>
    <text x="25" y="72" fill="#1E293B" fontSize="8">- name: string</text>
    <line x1="20" y1="78" x2="120" y2="78" stroke="#3B82F6" strokeWidth="1" />
    <text x="25" y="90" fill="#1E293B" fontSize="8">+ login()</text>
    
    <rect x="20" y="120" width="100" height="80" fill="white" stroke="#10B981" strokeWidth="2" />
    <rect x="20" y="120" width="100" height="20" fill="#10B981" />
    <text x="70" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Admin</text>
    <line x1="20" y1="150" x2="120" y2="150" stroke="#10B981" strokeWidth="1" />
    <text x="25" y="162" fill="#1E293B" fontSize="8">- level: int</text>
    <line x1="20" y1="175" x2="120" y2="175" stroke="#10B981" strokeWidth="1" />
    <text x="25" y="187" fill="#1E293B" fontSize="8">+ manage()</text>
    
    {/* Inheritance arrow */}
    <line x1="70" y1="100" x2="70" y2="120" stroke="#64748B" strokeWidth="2" />
    <polygon points="70,100 65,108 75,108" fill="white" stroke="#64748B" strokeWidth="2" />
    
    <text x="70" y="215" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">Class Diagram</text>
    
    {/* Sequence Diagram */}
    <rect x="150" y="20" width="50" height="25" fill="#8B5CF6" rx="3" />
    <text x="175" y="36" textAnchor="middle" fill="white" fontSize="9">Client</text>
    <line x1="175" y1="45" x2="175" y2="180" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,3" />
    
    <rect x="220" y="20" width="50" height="25" fill="#EC4899" rx="3" />
    <text x="245" y="36" textAnchor="middle" fill="white" fontSize="9">Server</text>
    <line x1="245" y1="45" x2="245" y2="180" stroke="#EC4899" strokeWidth="2" strokeDasharray="5,3" />
    
    <rect x="290" y="20" width="50" height="25" fill="#F59E0B" rx="3" />
    <text x="315" y="36" textAnchor="middle" fill="white" fontSize="9">Database</text>
    <line x1="315" y1="45" x2="315" y2="180" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,3" />
    
    {/* Messages */}
    <line x1="175" y1="65" x2="245" y2="65" stroke="#1E293B" strokeWidth="1" markerEnd="url(#arrow)" />
    <text x="210" y="60" textAnchor="middle" fill="#64748B" fontSize="7">request()</text>
    
    <line x1="245" y1="90" x2="315" y2="90" stroke="#1E293B" strokeWidth="1" />
    <polygon points="315,90 308,87 308,93" fill="#1E293B" />
    <text x="280" y="85" textAnchor="middle" fill="#64748B" fontSize="7">query()</text>
    
    <line x1="315" y1="115" x2="245" y2="115" stroke="#1E293B" strokeWidth="1" strokeDasharray="3,2" />
    <polygon points="245,115 252,112 252,118" fill="#1E293B" />
    <text x="280" y="110" textAnchor="middle" fill="#64748B" fontSize="7">data</text>
    
    <line x1="245" y1="140" x2="175" y2="140" stroke="#1E293B" strokeWidth="1" strokeDasharray="3,2" />
    <polygon points="175,140 182,137 182,143" fill="#1E293B" />
    <text x="210" y="135" textAnchor="middle" fill="#64748B" fontSize="7">response</text>
    
    {/* Activation boxes */}
    <rect x="242" y="65" width="6" height="55" fill="#EC4899" opacity="0.3" />
    <rect x="312" y="90" width="6" height="25" fill="#F59E0B" opacity="0.3" />
    
    <text x="245" y="215" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">Sequence Diagram</text>
  </svg>
);

// Ilustrasi Architecture
export const ArchitectureIllustration: React.FC = () => (
  <svg viewBox="0 0 400 240" className="w-full h-auto max-w-lg mx-auto">
    {/* Layered Architecture */}
    <text x="80" y="15" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">Layered Architecture</text>
    
    <rect x="20" y="25" width="120" height="35" rx="5" fill="#3B82F6" />
    <text x="80" y="47" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Presentation</text>
    
    <rect x="20" y="65" width="120" height="35" rx="5" fill="#8B5CF6" />
    <text x="80" y="87" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Business Logic</text>
    
    <rect x="20" y="105" width="120" height="35" rx="5" fill="#EC4899" />
    <text x="80" y="127" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Data Access</text>
    
    <rect x="20" y="145" width="120" height="35" rx="5" fill="#F59E0B" />
    <text x="80" y="167" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Database</text>
    
    {/* Arrows */}
    <path d="M80 60 L80 65" stroke="#64748B" strokeWidth="2" />
    <path d="M80 100 L80 105" stroke="#64748B" strokeWidth="2" />
    <path d="M80 140 L80 145" stroke="#64748B" strokeWidth="2" />
    
    {/* Microservices */}
    <text x="280" y="15" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">Microservices</text>
    
    {/* API Gateway */}
    <rect x="230" y="25" width="100" height="25" rx="5" fill="#1E293B" />
    <text x="280" y="42" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">API Gateway</text>
    
    {/* Services */}
    <rect x="180" y="65" width="55" height="40" rx="5" fill="#10B981" />
    <text x="207" y="82" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">User</text>
    <text x="207" y="93" textAnchor="middle" fill="white" fontSize="8">Service</text>
    
    <rect x="245" y="65" width="55" height="40" rx="5" fill="#3B82F6" />
    <text x="272" y="82" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Order</text>
    <text x="272" y="93" textAnchor="middle" fill="white" fontSize="8">Service</text>
    
    <rect x="310" y="65" width="55" height="40" rx="5" fill="#F59E0B" />
    <text x="337" y="82" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Payment</text>
    <text x="337" y="93" textAnchor="middle" fill="white" fontSize="8">Service</text>
    
    {/* Databases */}
    <ellipse cx="207" cy="130" rx="20" ry="10" fill="#10B981" opacity="0.5" />
    <rect x="187" y="130" width="40" height="15" fill="#10B981" opacity="0.5" />
    <ellipse cx="207" cy="145" rx="20" ry="10" fill="#10B981" opacity="0.7" />
    
    <ellipse cx="272" cy="130" rx="20" ry="10" fill="#3B82F6" opacity="0.5" />
    <rect x="252" y="130" width="40" height="15" fill="#3B82F6" opacity="0.5" />
    <ellipse cx="272" cy="145" rx="20" ry="10" fill="#3B82F6" opacity="0.7" />
    
    <ellipse cx="337" cy="130" rx="20" ry="10" fill="#F59E0B" opacity="0.5" />
    <rect x="317" y="130" width="40" height="15" fill="#F59E0B" opacity="0.5" />
    <ellipse cx="337" cy="145" rx="20" ry="10" fill="#F59E0B" opacity="0.7" />
    
    {/* Connection lines */}
    <line x1="230" y1="50" x2="207" y2="65" stroke="#64748B" strokeWidth="1" />
    <line x1="280" y1="50" x2="272" y2="65" stroke="#64748B" strokeWidth="1" />
    <line x1="330" y1="50" x2="337" y2="65" stroke="#64748B" strokeWidth="1" />
    
    <line x1="207" y1="105" x2="207" y2="120" stroke="#64748B" strokeWidth="1" />
    <line x1="272" y1="105" x2="272" y2="120" stroke="#64748B" strokeWidth="1" />
    <line x1="337" y1="105" x2="337" y2="120" stroke="#64748B" strokeWidth="1" />
    
    {/* Message Queue */}
    <rect x="200" y="170" width="160" height="25" rx="5" fill="#8B5CF6" />
    <text x="280" y="187" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Message Queue (RabbitMQ/Kafka)</text>
    
    {/* Arrows to queue */}
    <line x1="207" y1="155" x2="220" y2="170" stroke="#64748B" strokeWidth="1" strokeDasharray="3,2" />
    <line x1="272" y1="155" x2="280" y2="170" stroke="#64748B" strokeWidth="1" strokeDasharray="3,2" />
    <line x1="337" y1="155" x2="340" y2="170" stroke="#64748B" strokeWidth="1" strokeDasharray="3,2" />
    
    {/* MVC small diagram */}
    <text x="80" y="195" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">MVC Pattern</text>
    
    <rect x="25" y="205" width="35" height="25" rx="3" fill="#10B981" />
    <text x="42" y="221" textAnchor="middle" fill="white" fontSize="8">View</text>
    
    <rect x="70" y="205" width="45" height="25" rx="3" fill="#3B82F6" />
    <text x="92" y="221" textAnchor="middle" fill="white" fontSize="8">Controller</text>
    
    <rect x="125" y="205" width="35" height="25" rx="3" fill="#F59E0B" />
    <text x="142" y="221" textAnchor="middle" fill="white" fontSize="8">Model</text>
    
    <path d="M60 217 L70 217" stroke="#64748B" strokeWidth="1" />
    <path d="M115 217 L125 217" stroke="#64748B" strokeWidth="1" />
  </svg>
);

// Ilustrasi Design Patterns
export const DesignPatternIllustration: React.FC = () => (
  <svg viewBox="0 0 400 220" className="w-full h-auto max-w-lg mx-auto">
    {/* SOLID Title */}
    <text x="200" y="20" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="bold">SOLID Principles</text>
    
    {/* S */}
    <rect x="30" y="35" width="60" height="50" rx="5" fill="#3B82F6" />
    <text x="60" y="55" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">S</text>
    <text x="60" y="72" textAnchor="middle" fill="white" fontSize="7">Single</text>
    <text x="60" y="80" textAnchor="middle" fill="white" fontSize="7">Responsibility</text>
    
    {/* O */}
    <rect x="100" y="35" width="60" height="50" rx="5" fill="#10B981" />
    <text x="130" y="55" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">O</text>
    <text x="130" y="72" textAnchor="middle" fill="white" fontSize="7">Open</text>
    <text x="130" y="80" textAnchor="middle" fill="white" fontSize="7">Closed</text>
    
    {/* L */}
    <rect x="170" y="35" width="60" height="50" rx="5" fill="#F59E0B" />
    <text x="200" y="55" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">L</text>
    <text x="200" y="72" textAnchor="middle" fill="white" fontSize="7">Liskov</text>
    <text x="200" y="80" textAnchor="middle" fill="white" fontSize="7">Substitution</text>
    
    {/* I */}
    <rect x="240" y="35" width="60" height="50" rx="5" fill="#EC4899" />
    <text x="270" y="55" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">I</text>
    <text x="270" y="72" textAnchor="middle" fill="white" fontSize="7">Interface</text>
    <text x="270" y="80" textAnchor="middle" fill="white" fontSize="7">Segregation</text>
    
    {/* D */}
    <rect x="310" y="35" width="60" height="50" rx="5" fill="#8B5CF6" />
    <text x="340" y="55" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">D</text>
    <text x="340" y="72" textAnchor="middle" fill="white" fontSize="7">Dependency</text>
    <text x="340" y="80" textAnchor="middle" fill="white" fontSize="7">Inversion</text>
    
    {/* Design Patterns */}
    <text x="200" y="115" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">Design Patterns</text>
    
    {/* Singleton */}
    <rect x="30" y="130" width="100" height="80" rx="5" fill="#F1F5F9" stroke="#3B82F6" strokeWidth="2" />
    <text x="80" y="150" textAnchor="middle" fill="#3B82F6" fontSize="10" fontWeight="bold">Singleton</text>
    <rect x="45" y="160" width="70" height="40" rx="3" fill="white" stroke="#CBD5E1" strokeWidth="1" />
    <text x="80" y="175" textAnchor="middle" fill="#64748B" fontSize="8">- instance</text>
    <line x1="45" y1="182" x2="115" y2="182" stroke="#CBD5E1" />
    <text x="80" y="195" textAnchor="middle" fill="#64748B" fontSize="8">+ getInstance()</text>
    
    {/* Factory */}
    <rect x="150" y="130" width="100" height="80" rx="5" fill="#F1F5F9" stroke="#10B981" strokeWidth="2" />
    <text x="200" y="150" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold">Factory</text>
    <rect x="165" y="162" width="30" height="18" rx="2" fill="#10B981" opacity="0.3" />
    <rect x="200" y="162" width="30" height="18" rx="2" fill="#10B981" opacity="0.5" />
    <rect x="180" y="185" width="40" height="18" rx="2" fill="#10B981" opacity="0.7" />
    <text x="200" y="197" textAnchor="middle" fill="white" fontSize="7">create()</text>
    
    {/* Observer */}
    <rect x="270" y="130" width="100" height="80" rx="5" fill="#F1F5F9" stroke="#F59E0B" strokeWidth="2" />
    <text x="320" y="150" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="bold">Observer</text>
    <circle cx="300" cy="175" r="15" fill="#F59E0B" />
    <text x="300" y="178" textAnchor="middle" fill="white" fontSize="8">Sub</text>
    <circle cx="340" cy="160" r="10" fill="#F59E0B" opacity="0.5" />
    <circle cx="350" cy="180" r="10" fill="#F59E0B" opacity="0.5" />
    <circle cx="335" cy="195" r="10" fill="#F59E0B" opacity="0.5" />
    <line x1="312" y1="168" x2="330" y2="162" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
    <line x1="315" y1="175" x2="340" y2="178" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
    <line x1="312" y1="183" x2="327" y2="192" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
  </svg>
);

// Ilustrasi Testing
export const TestingIllustration: React.FC = () => (
  <svg viewBox="0 0 400 220" className="w-full h-auto max-w-lg mx-auto">
    {/* Testing Pyramid */}
    <text x="120" y="20" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">Testing Pyramid</text>
    
    {/* E2E - Top */}
    <polygon points="120,35 160,95 80,95" fill="#EF4444" />
    <text x="120" y="75" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">E2E</text>
    
    {/* Integration - Middle */}
    <polygon points="80,95 160,95 180,140 60,140" fill="#F59E0B" />
    <text x="120" y="122" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Integration</text>
    
    {/* Unit - Base */}
    <polygon points="60,140 180,140 200,185 40,185" fill="#10B981" />
    <text x="120" y="168" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Unit Tests</text>
    
    {/* Labels */}
    <text x="180" y="70" fill="#EF4444" fontSize="8">Slow, Expensive</text>
    <text x="190" y="125" fill="#F59E0B" fontSize="8">Medium</text>
    <text x="210" y="170" fill="#10B981" fontSize="8">Fast, Cheap</text>
    
    {/* Test Results */}
    <rect x="250" y="30" width="130" height="180" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
    <rect x="250" y="30" width="130" height="25" rx="5" fill="#1E293B" />
    <text x="315" y="47" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Test Results</text>
    
    {/* Test items */}
    <circle cx="270" cy="70" r="8" fill="#10B981" />
    <path d="M266 70 L269 73 L275 66" stroke="white" strokeWidth="2" fill="none" />
    <text x="285" y="73" fill="#1E293B" fontSize="9">testLogin()</text>
    
    <circle cx="270" cy="95" r="8" fill="#10B981" />
    <path d="M266 95 L269 98 L275 91" stroke="white" strokeWidth="2" fill="none" />
    <text x="285" y="98" fill="#1E293B" fontSize="9">testLogout()</text>
    
    <circle cx="270" cy="120" r="8" fill="#EF4444" />
    <path d="M266 116 L274 124 M274 116 L266 124" stroke="white" strokeWidth="2" />
    <text x="285" y="123" fill="#1E293B" fontSize="9">testPayment()</text>
    
    <circle cx="270" cy="145" r="8" fill="#10B981" />
    <path d="M266 145 L269 148 L275 141" stroke="white" strokeWidth="2" fill="none" />
    <text x="285" y="148" fill="#1E293B" fontSize="9">testCart()</text>
    
    <circle cx="270" cy="170" r="8" fill="#F59E0B" />
    <text x="270" y="174" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">!</text>
    <text x="285" y="173" fill="#1E293B" fontSize="9">testAPI()</text>
    
    {/* Summary */}
    <rect x="260" y="185" width="110" height="20" rx="3" fill="#E2E8F0" />
    <text x="315" y="199" textAnchor="middle" fill="#1E293B" fontSize="9" fontWeight="bold">3 ✓ | 1 ✗ | 1 ⚠</text>
    
    {/* Coverage bar */}
    <text x="120" y="200" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">Code Coverage: 78%</text>
    <rect x="50" y="205" width="140" height="10" rx="3" fill="#E2E8F0" />
    <rect x="50" y="205" width="109" height="10" rx="3" fill="#10B981" />
  </svg>
);

// Ilustrasi Software Evolution
export const EvolutionIllustration: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto max-w-lg mx-auto">
    {/* Timeline */}
    <line x1="30" y1="100" x2="370" y2="100" stroke="#E2E8F0" strokeWidth="4" />
    
    {/* Version 1 */}
    <circle cx="60" cy="100" r="20" fill="#3B82F6" />
    <text x="60" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">v1.0</text>
    <rect x="35" y="130" width="50" height="40" rx="3" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1" />
    <text x="60" y="148" textAnchor="middle" fill="#3B82F6" fontSize="8">Initial</text>
    <text x="60" y="160" textAnchor="middle" fill="#3B82F6" fontSize="8">Release</text>
    
    {/* Version 2 - Bug Fix */}
    <circle cx="140" cy="100" r="20" fill="#10B981" />
    <text x="140" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">v1.1</text>
    <rect x="115" y="40" width="50" height="40" rx="3" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
    <text x="140" y="58" textAnchor="middle" fill="#10B981" fontSize="8">Bug</text>
    <text x="140" y="70" textAnchor="middle" fill="#10B981" fontSize="8">Fixes</text>
    
    {/* Version 3 - Features */}
    <circle cx="220" cy="100" r="20" fill="#8B5CF6" />
    <text x="220" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">v2.0</text>
    <rect x="195" y="130" width="50" height="40" rx="3" fill="#F5F3FF" stroke="#8B5CF6" strokeWidth="1" />
    <text x="220" y="148" textAnchor="middle" fill="#8B5CF6" fontSize="8">New</text>
    <text x="220" y="160" textAnchor="middle" fill="#8B5CF6" fontSize="8">Features</text>
    
    {/* Version 4 - Refactor */}
    <circle cx="300" cy="100" r="20" fill="#F59E0B" />
    <text x="300" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">v2.1</text>
    <rect x="275" y="40" width="50" height="40" rx="3" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1" />
    <text x="300" y="58" textAnchor="middle" fill="#F59E0B" fontSize="8">Refactor</text>
    <text x="300" y="70" textAnchor="middle" fill="#F59E0B" fontSize="8">Optimize</text>
    
    {/* Future */}
    <circle cx="360" cy="100" r="15" fill="#E2E8F0" strokeDasharray="4,2" stroke="#64748B" strokeWidth="2" />
    <text x="360" y="104" textAnchor="middle" fill="#64748B" fontSize="8">v3.0</text>
    
    {/* Arrows */}
    <path d="M80 100 L120 100" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />
    <path d="M160 100 L200 100" stroke="#64748B" strokeWidth="2" />
    <path d="M240 100 L280 100" stroke="#64748B" strokeWidth="2" />
    <path d="M320 100 L345 100" stroke="#64748B" strokeWidth="2" strokeDasharray="4,2" />
    
    {/* Maintenance Types Legend */}
    <rect x="30" y="180" width="340" height="15" rx="2" fill="#F8FAFC" />
    <circle cx="60" cy="187" r="4" fill="#10B981" />
    <text x="70" y="190" fill="#64748B" fontSize="8">Corrective</text>
    <circle cx="130" cy="187" r="4" fill="#8B5CF6" />
    <text x="140" y="190" fill="#64748B" fontSize="8">Perfective</text>
    <circle cx="210" cy="187" r="4" fill="#F59E0B" />
    <text x="220" y="190" fill="#64748B" fontSize="8">Adaptive</text>
    <circle cx="290" cy="187" r="4" fill="#3B82F6" />
    <text x="300" y="190" fill="#64748B" fontSize="8">Preventive</text>
  </svg>
);

// Ilustrasi Security
export const SecurityIllustration: React.FC = () => (
  <svg viewBox="0 0 400 220" className="w-full h-auto max-w-lg mx-auto">
    {/* Shield */}
    <path d="M100 30 L100 120 Q100 160 60 180 Q20 160 20 120 L20 30 Q60 10 100 30" fill="#3B82F6" />
    <path d="M90 40 L90 115 Q90 145 60 162 Q30 145 30 115 L30 40 Q60 25 90 40" fill="#60A5FA" />
    <path d="M45 95 L55 105 L75 80" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    <text x="60" y="200" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">Security</text>
    
    {/* OWASP Top 10 */}
    <rect x="130" y="20" width="250" height="180" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
    <rect x="130" y="20" width="250" height="25" rx="5" fill="#EF4444" />
    <text x="255" y="37" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">OWASP Top 10 Vulnerabilities</text>
    
    {/* Vulnerabilities list */}
    <g fontSize="9" fill="#1E293B">
      <circle cx="145" cy="57" r="4" fill="#EF4444" />
      <text x="155" y="60">1. Injection (SQL, NoSQL, OS)</text>
      
      <circle cx="145" cy="75" r="4" fill="#F97316" />
      <text x="155" y="78">2. Broken Authentication</text>
      
      <circle cx="145" cy="93" r="4" fill="#F59E0B" />
      <text x="155" y="96">3. Sensitive Data Exposure</text>
      
      <circle cx="145" cy="111" r="4" fill="#EAB308" />
      <text x="155" y="114">4. XML External Entities (XXE)</text>
      
      <circle cx="145" cy="129" r="4" fill="#84CC16" />
      <text x="155" y="132">5. Broken Access Control</text>
      
      <circle cx="145" cy="147" r="4" fill="#22C55E" />
      <text x="155" y="150">6. Security Misconfiguration</text>
      
      <circle cx="145" cy="165" r="4" fill="#14B8A6" />
      <text x="155" y="168">7. Cross-Site Scripting (XSS)</text>
      
      <circle cx="145" cy="183" r="4" fill="#06B6D4" />
      <text x="155" y="186">8. Insecure Deserialization</text>
    </g>
    
    {/* Lock icon */}
    <rect x="320" y="90" width="40" height="35" rx="5" fill="#1E293B" />
    <path d="M325 90 L325 75 Q340 55 355 75 L355 90" fill="none" stroke="#1E293B" strokeWidth="6" />
    <circle cx="340" cy="105" r="5" fill="#F59E0B" />
    <rect x="338" y="108" width="4" height="10" fill="#F59E0B" />
  </svg>
);

// Ilustrasi Quality
export const QualityIllustration: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto max-w-lg mx-auto">
    {/* Quality Metrics Dashboard */}
    <rect x="20" y="20" width="360" height="160" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
    <rect x="20" y="20" width="360" height="30" rx="10" fill="#1E293B" />
    <text x="200" y="40" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Software Quality Metrics Dashboard</text>
    
    {/* Metric 1 - Code Quality */}
    <rect x="35" y="60" width="100" height="70" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="85" y="78" textAnchor="middle" fill="#64748B" fontSize="9">Code Quality</text>
    <text x="85" y="105" textAnchor="middle" fill="#10B981" fontSize="24" fontWeight="bold">A+</text>
    <rect x="45" y="115" width="80" height="6" rx="2" fill="#E2E8F0" />
    <rect x="45" y="115" width="72" height="6" rx="2" fill="#10B981" />
    <text x="85" y="128" textAnchor="middle" fill="#64748B" fontSize="8">90%</text>
    
    {/* Metric 2 - Test Coverage */}
    <rect x="150" y="60" width="100" height="70" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="200" y="78" textAnchor="middle" fill="#64748B" fontSize="9">Test Coverage</text>
    <text x="200" y="105" textAnchor="middle" fill="#3B82F6" fontSize="24" fontWeight="bold">85%</text>
    <rect x="160" y="115" width="80" height="6" rx="2" fill="#E2E8F0" />
    <rect x="160" y="115" width="68" height="6" rx="2" fill="#3B82F6" />
    
    {/* Metric 3 - Bug Rate */}
    <rect x="265" y="60" width="100" height="70" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="315" y="78" textAnchor="middle" fill="#64748B" fontSize="9">Bug Rate</text>
    <text x="315" y="105" textAnchor="middle" fill="#F59E0B" fontSize="24" fontWeight="bold">0.5</text>
    <text x="315" y="120" textAnchor="middle" fill="#64748B" fontSize="8">per 1000 LOC</text>
    
    {/* Chart */}
    <rect x="35" y="140" width="330" height="35" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="50" y="155" fill="#64748B" fontSize="8">Quality Trend:</text>
    {/* Mini line chart */}
    <polyline points="100,165 130,158 160,160 190,152 220,148 250,155 280,145 310,140 340,138" fill="none" stroke="#10B981" strokeWidth="2" />
    <circle cx="340" cy="138" r="3" fill="#10B981" />
  </svg>
);

// Ilustrasi Project Management
export const ProjectManagementIllustration: React.FC = () => (
  <svg viewBox="0 0 400 220" className="w-full h-auto max-w-lg mx-auto">
    {/* Gantt Chart */}
    <text x="200" y="20" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">Project Timeline (Gantt Chart)</text>
    
    {/* Timeline header */}
    <rect x="120" y="30" width="260" height="20" fill="#1E293B" rx="3" />
    <text x="155" y="44" textAnchor="middle" fill="white" fontSize="8">Week 1</text>
    <text x="210" y="44" textAnchor="middle" fill="white" fontSize="8">Week 2</text>
    <text x="265" y="44" textAnchor="middle" fill="white" fontSize="8">Week 3</text>
    <text x="320" y="44" textAnchor="middle" fill="white" fontSize="8">Week 4</text>
    
    {/* Tasks */}
    <text x="60" y="65" textAnchor="middle" fill="#64748B" fontSize="9">Planning</text>
    <rect x="120" y="55" width="80" height="15" rx="3" fill="#3B82F6" />
    
    <text x="60" y="90" textAnchor="middle" fill="#64748B" fontSize="9">Design</text>
    <rect x="160" y="80" width="100" height="15" rx="3" fill="#8B5CF6" />
    
    <text x="60" y="115" textAnchor="middle" fill="#64748B" fontSize="9">Development</text>
    <rect x="200" y="105" width="140" height="15" rx="3" fill="#10B981" />
    
    <text x="60" y="140" textAnchor="middle" fill="#64748B" fontSize="9">Testing</text>
    <rect x="280" y="130" width="80" height="15" rx="3" fill="#F59E0B" />
    
    <text x="60" y="165" textAnchor="middle" fill="#64748B" fontSize="9">Deployment</text>
    <rect x="340" y="155" width="40" height="15" rx="3" fill="#EF4444" />
    
    {/* Progress indicators */}
    <rect x="120" y="55" width="80" height="15" rx="3" fill="#3B82F6" opacity="0.3" />
    <rect x="120" y="55" width="80" height="15" rx="3" fill="#3B82F6" />
    <text x="160" y="66" textAnchor="middle" fill="white" fontSize="7">100%</text>
    
    <rect x="160" y="80" width="100" height="15" rx="3" fill="#8B5CF6" opacity="0.3" />
    <rect x="160" y="80" width="75" height="15" rx="3" fill="#8B5CF6" />
    <text x="197" y="91" textAnchor="middle" fill="white" fontSize="7">75%</text>
    
    {/* Milestones */}
    <polygon points="200,55 205,45 210,55" fill="#EC4899" />
    <polygon points="340,80 345,70 350,80" fill="#EC4899" />
    
    {/* Team allocation */}
    <rect x="20" y="180" width="360" height="35" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
    <text x="50" y="195" fill="#64748B" fontSize="9" fontWeight="bold">Team:</text>
    
    <circle cx="100" cy="197" r="12" fill="#3B82F6" />
    <text x="100" y="201" textAnchor="middle" fill="white" fontSize="8">PM</text>
    
    <circle cx="135" cy="197" r="12" fill="#10B981" />
    <text x="135" y="201" textAnchor="middle" fill="white" fontSize="8">D1</text>
    
    <circle cx="170" cy="197" r="12" fill="#10B981" />
    <text x="170" y="201" textAnchor="middle" fill="white" fontSize="8">D2</text>
    
    <circle cx="205" cy="197" r="12" fill="#10B981" />
    <text x="205" y="201" textAnchor="middle" fill="white" fontSize="8">D3</text>
    
    <circle cx="240" cy="197" r="12" fill="#F59E0B" />
    <text x="240" y="201" textAnchor="middle" fill="white" fontSize="8">QA</text>
    
    <circle cx="275" cy="197" r="12" fill="#8B5CF6" />
    <text x="275" y="201" textAnchor="middle" fill="white" fontSize="8">UI</text>
    
    {/* Budget indicator */}
    <text x="330" y="193" fill="#64748B" fontSize="9">Budget:</text>
    <text x="330" y="207" fill="#10B981" fontSize="11" fontWeight="bold">$45,000</text>
  </svg>
);

// Ilustrasi Configuration Management / Git
export const GitIllustration: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto max-w-lg mx-auto">
    {/* Main branch */}
    <line x1="50" y1="100" x2="350" y2="100" stroke="#1E293B" strokeWidth="4" />
    <text x="30" y="104" fill="#1E293B" fontSize="10" fontWeight="bold">main</text>
    
    {/* Commits on main */}
    <circle cx="80" cy="100" r="10" fill="#10B981" stroke="#1E293B" strokeWidth="2" />
    <circle cx="150" cy="100" r="10" fill="#10B981" stroke="#1E293B" strokeWidth="2" />
    <circle cx="280" cy="100" r="10" fill="#10B981" stroke="#1E293B" strokeWidth="2" />
    <circle cx="350" cy="100" r="10" fill="#10B981" stroke="#1E293B" strokeWidth="2" />
    
    {/* Feature branch */}
    <path d="M150 100 Q180 60 210 50 L280 50" stroke="#3B82F6" strokeWidth="3" fill="none" />
    <path d="M280 50 Q310 50 320 70 Q330 90 280 100" stroke="#3B82F6" strokeWidth="3" fill="none" strokeDasharray="5,3" />
    
    <circle cx="210" cy="50" r="8" fill="#3B82F6" />
    <circle cx="250" cy="50" r="8" fill="#3B82F6" />
    <circle cx="280" cy="50" r="8" fill="#3B82F6" />
    
    <text x="245" y="35" textAnchor="middle" fill="#3B82F6" fontSize="9" fontWeight="bold">feature/login</text>
    
    {/* Hotfix branch */}
    <path d="M150 100 Q170 140 200 150 L250 150" stroke="#EF4444" strokeWidth="3" fill="none" />
    <path d="M250 150 Q270 150 280 130 Q290 110 280 100" stroke="#EF4444" strokeWidth="3" fill="none" strokeDasharray="5,3" />
    
    <circle cx="200" cy="150" r="8" fill="#EF4444" />
    <circle cx="250" cy="150" r="8" fill="#EF4444" />
    
    <text x="225" y="170" textAnchor="middle" fill="#EF4444" fontSize="9" fontWeight="bold">hotfix/bug</text>
    
    {/* Merge indicators */}
    <text x="280" y="85" textAnchor="middle" fill="#64748B" fontSize="8">merge</text>
    
    {/* Tags */}
    <rect x="70" y="115" width="25" height="14" rx="3" fill="#F59E0B" />
    <text x="82" y="125" textAnchor="middle" fill="white" fontSize="7">v1.0</text>
    
    <rect x="270" y="115" width="25" height="14" rx="3" fill="#F59E0B" />
    <text x="282" y="125" textAnchor="middle" fill="white" fontSize="7">v1.1</text>
    
    {/* CI/CD Pipeline */}
    <rect x="30" y="180" width="340" height="15" rx="3" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
    
    <rect x="40" y="182" width="50" height="11" rx="2" fill="#3B82F6" />
    <text x="65" y="191" textAnchor="middle" fill="white" fontSize="7">Build</text>
    
    <rect x="100" y="182" width="50" height="11" rx="2" fill="#8B5CF6" />
    <text x="125" y="191" textAnchor="middle" fill="white" fontSize="7">Test</text>
    
    <rect x="160" y="182" width="50" height="11" rx="2" fill="#F59E0B" />
    <text x="185" y="191" textAnchor="middle" fill="white" fontSize="7">Analyze</text>
    
    <rect x="220" y="182" width="50" height="11" rx="2" fill="#10B981" />
    <text x="245" y="191" textAnchor="middle" fill="white" fontSize="7">Deploy</text>
    
    <path d="M90 187 L100 187" stroke="#64748B" strokeWidth="1" />
    <path d="M150 187 L160 187" stroke="#64748B" strokeWidth="1" />
    <path d="M210 187 L220 187" stroke="#64748B" strokeWidth="1" />
    
    <text x="320" y="191" fill="#64748B" fontSize="8" fontWeight="bold">CI/CD Pipeline</text>
  </svg>
);

// Ilustrasi UTS
export const UTSIllustration: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto max-w-md mx-auto">
    {/* Exam paper */}
    <rect x="100" y="20" width="200" height="160" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    
    {/* Header */}
    <rect x="100" y="20" width="200" height="40" fill="#3B82F6" rx="5" />
    <text x="200" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">UJIAN TENGAH</text>
    <text x="200" y="58" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">SEMESTER</text>
    
    {/* Lines */}
    <rect x="115" y="75" width="170" height="8" rx="2" fill="#E2E8F0" />
    <rect x="115" y="90" width="150" height="8" rx="2" fill="#E2E8F0" />
    <rect x="115" y="105" width="160" height="8" rx="2" fill="#E2E8F0" />
    <rect x="115" y="120" width="140" height="8" rx="2" fill="#E2E8F0" />
    
    {/* Checkboxes */}
    <rect x="115" y="140" width="12" height="12" rx="2" fill="none" stroke="#10B981" strokeWidth="2" />
    <path d="M117 146 L120 149 L125 142" stroke="#10B981" strokeWidth="2" fill="none" />
    <rect x="135" y="140" width="60" height="10" rx="2" fill="#E2E8F0" />
    
    <rect x="115" y="158" width="12" height="12" rx="2" fill="none" stroke="#64748B" strokeWidth="2" />
    <rect x="135" y="158" width="80" height="10" rx="2" fill="#E2E8F0" />
    
    {/* Pencil */}
    <rect x="310" y="60" width="10" height="80" fill="#F59E0B" transform="rotate(30 315 100)" />
    <polygon points="315,145 310,155 320,155" fill="#FFD699" transform="rotate(30 315 150)" />
    <rect x="310" y="55" width="10" height="10" fill="#EC4899" transform="rotate(30 315 60)" />
    
    {/* Timer */}
    <circle cx="60" cy="100" r="35" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="3" />
    <circle cx="60" cy="100" r="30" fill="white" />
    <line x1="60" y1="100" x2="60" y2="80" stroke="#1E293B" strokeWidth="2" />
    <line x1="60" y1="100" x2="75" y2="105" stroke="#EF4444" strokeWidth="1.5" />
    <circle cx="60" cy="100" r="3" fill="#1E293B" />
    <text x="60" y="145" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="bold">90 min</text>
    
    {/* Badge */}
    <circle cx="340" cy="160" r="25" fill="#F59E0B" />
    <text x="340" y="155" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Materi</text>
    <text x="340" y="168" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1-7</text>
  </svg>
);

// Ilustrasi UAS
export const UASIllustration: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto max-w-md mx-auto">
    {/* Graduation cap */}
    <polygon points="200,30 280,60 200,90 120,60" fill="#1E293B" />
    <rect x="185" y="25" width="30" height="8" fill="#1E293B" />
    <line x1="200" y1="60" x2="200" y2="90" stroke="#F59E0B" strokeWidth="2" />
    <circle cx="200" cy="93" r="5" fill="#F59E0B" />
    <path d="M200 98 L200 115 Q200 120 190 125" stroke="#F59E0B" strokeWidth="2" fill="none" />
    
    {/* Certificate */}
    <rect x="80" y="100" width="240" height="90" rx="5" fill="white" stroke="#D4AF37" strokeWidth="3" />
    <rect x="90" y="110" width="220" height="70" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,3" />
    
    <text x="200" y="130" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">UJIAN AKHIR SEMESTER</text>
    <text x="200" y="148" textAnchor="middle" fill="#64748B" fontSize="10">Rekayasa Perangkat Lunak</text>
    
    <rect x="140" y="155" width="120" height="15" rx="3" fill="#10B981" />
    <text x="200" y="166" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">COMPREHENSIVE</text>
    
    {/* Stars */}
    <polygon points="95,125 98,133 107,133 100,139 103,147 95,142 87,147 90,139 83,133 92,133" fill="#F59E0B" />
    <polygon points="305,125 308,133 317,133 310,139 313,147 305,142 297,147 300,139 293,133 302,133" fill="#F59E0B" />
    
    {/* Seal */}
    <circle cx="320" cy="165" r="18" fill="#EF4444" />
    <circle cx="320" cy="165" r="14" fill="none" stroke="white" strokeWidth="1" />
    <text x="320" y="163" textAnchor="middle" fill="white" fontSize="6">FINAL</text>
    <text x="320" y="172" textAnchor="middle" fill="white" fontSize="6">EXAM</text>
    
    {/* Books stack */}
    <rect x="20" y="140" width="45" height="10" rx="2" fill="#3B82F6" />
    <rect x="22" y="128" width="45" height="10" rx="2" fill="#10B981" />
    <rect x="18" y="116" width="45" height="10" rx="2" fill="#8B5CF6" />
    <rect x="24" y="104" width="45" height="10" rx="2" fill="#F59E0B" />
    
    {/* Badge */}
    <circle cx="42" cy="70" r="22" fill="#EC4899" />
    <text x="42" y="65" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Materi</text>
    <text x="42" y="78" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1-15</text>
  </svg>
);

// Ilustrasi Reuse
export const ReuseIllustration: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto max-w-lg mx-auto">
    {/* Component Library */}
    <rect x="20" y="20" width="120" height="160" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
    <rect x="20" y="20" width="120" height="25" rx="5" fill="#8B5CF6" />
    <text x="80" y="37" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Component Library</text>
    
    {/* Components */}
    <rect x="30" y="55" width="45" height="35" rx="3" fill="white" stroke="#3B82F6" strokeWidth="2" />
    <rect x="35" y="60" width="35" height="8" rx="2" fill="#3B82F6" />
    <rect x="35" y="72" width="20" height="5" rx="1" fill="#E2E8F0" />
    <rect x="35" y="80" width="28" height="5" rx="1" fill="#E2E8F0" />
    <text x="52" y="100" textAnchor="middle" fill="#64748B" fontSize="7">Button</text>
    
    <rect x="85" y="55" width="45" height="35" rx="3" fill="white" stroke="#10B981" strokeWidth="2" />
    <rect x="90" y="60" width="35" height="15" rx="2" fill="#10B981" opacity="0.2" />
    <rect x="93" y="63" width="10" height="10" rx="5" fill="#10B981" />
    <text x="107" y="100" textAnchor="middle" fill="#64748B" fontSize="7">Avatar</text>
    
    <rect x="30" y="110" width="45" height="35" rx="3" fill="white" stroke="#F59E0B" strokeWidth="2" />
    <rect x="35" y="115" width="35" height="6" rx="1" fill="#F59E0B" />
    <rect x="35" y="125" width="35" height="6" rx="1" fill="#E2E8F0" />
    <rect x="35" y="135" width="25" height="6" rx="1" fill="#E2E8F0" />
    <text x="52" y="155" textAnchor="middle" fill="#64748B" fontSize="7">Card</text>
    
    <rect x="85" y="110" width="45" height="35" rx="3" fill="white" stroke="#EC4899" strokeWidth="2" />
    <rect x="90" y="118" width="35" height="20" rx="2" fill="#EC4899" opacity="0.1" />
    <rect x="93" y="121" width="29" height="5" rx="1" fill="#E2E8F0" />
    <rect x="93" y="129" width="29" height="5" rx="1" fill="#EC4899" />
    <text x="107" y="155" textAnchor="middle" fill="#64748B" fontSize="7">Input</text>
    
    {/* Arrows to projects */}
    <path d="M140 60 Q160 60 180 40" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="4,2" />
    <path d="M140 100 L180 100" stroke="#10B981" strokeWidth="2" fill="none" strokeDasharray="4,2" />
    <path d="M140 140 Q160 140 180 160" stroke="#F59E0B" strokeWidth="2" fill="none" strokeDasharray="4,2" />
    
    {/* Projects using components */}
    <rect x="180" y="20" width="90" height="60" rx="5" fill="white" stroke="#3B82F6" strokeWidth="2" />
    <text x="225" y="35" textAnchor="middle" fill="#3B82F6" fontSize="9" fontWeight="bold">Project A</text>
    <rect x="190" y="45" width="25" height="12" rx="2" fill="#3B82F6" />
    <rect x="220" y="45" width="40" height="25" rx="2" fill="#F59E0B" opacity="0.3" />
    
    <rect x="180" y="90" width="90" height="60" rx="5" fill="white" stroke="#10B981" strokeWidth="2" />
    <text x="225" y="105" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="bold">Project B</text>
    <circle cx="200" cy="125" r="10" fill="#10B981" opacity="0.5" />
    <rect x="220" y="115" width="40" height="25" rx="2" fill="#EC4899" opacity="0.3" />
    
    <rect x="290" y="55" width="90" height="60" rx="5" fill="white" stroke="#8B5CF6" strokeWidth="2" />
    <text x="335" y="70" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontWeight="bold">Project C</text>
    <rect x="300" y="80" width="25" height="12" rx="2" fill="#3B82F6" />
    <circle cx="355" cy="95" r="10" fill="#10B981" opacity="0.5" />
    
    {/* Framework label */}
    <rect x="290" y="130" width="90" height="50" rx="5" fill="#1E293B" />
    <text x="335" y="150" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Frameworks</text>
    <text x="335" y="165" textAnchor="middle" fill="#10B981" fontSize="8">React, Angular</text>
    <text x="335" y="175" textAnchor="middle" fill="#3B82F6" fontSize="8">Vue, Next.js</text>
  </svg>
);

export default {
  IntroductionIllustration,
  ProcessIllustration,
  AgileIllustration,
  RequirementsIllustration,
  UMLIllustration,
  ArchitectureIllustration,
  DesignPatternIllustration,
  TestingIllustration,
  EvolutionIllustration,
  SecurityIllustration,
  QualityIllustration,
  ProjectManagementIllustration,
  GitIllustration,
  UTSIllustration,
  UASIllustration,
  ReuseIllustration
};
