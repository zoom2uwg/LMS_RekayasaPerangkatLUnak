import { Meeting } from '../data/courseData';
import { useState } from 'react';
import IllustrationRenderer from './IllustrationRenderer';

interface MeetingContentProps {
  meeting: Meeting;
  onOpenSidebar: () => void;
}

export default function MeetingContent({ meeting, onOpenSidebar }: MeetingContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  const getTypeColor = () => {
    if (meeting.type === 'uts') return 'from-yellow-600 to-orange-600';
    if (meeting.type === 'uas') return 'from-red-600 to-pink-600';
    return 'from-blue-600 to-indigo-600';
  };

  const getTypeBadge = () => {
    if (meeting.type === 'uts') return { text: 'UJIAN TENGAH SEMESTER', color: 'bg-yellow-500' };
    if (meeting.type === 'uas') return { text: 'UJIAN AKHIR SEMESTER', color: 'bg-red-500' };
    return { text: 'MATERI PERKULIAHAN', color: 'bg-blue-500' };
  };

  const badge = getTypeBadge();

  const renderContent = (content: string) => {
    // Split content into lines and process
    const lines = content.split('\n');
    const elements: React.ReactElement[] = [];
    let inCodeBlock = false;
    let codeContent: string[] = [];
    

    lines.forEach((line, index) => {
      // Check for code block start/end
      if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          void line.trim().slice(3); // codeLanguage - unused but parsed
          codeContent = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <pre key={`code-${index}`} className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4 text-sm">
              <code>{codeContent.join('\n')}</code>
            </pre>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      // Headers
      if (line.startsWith('**') && line.endsWith('**')) {
        const text = line.slice(2, -2);
        elements.push(
          <h3 key={index} className="text-lg font-bold text-slate-800 mt-6 mb-3">
            {text}
          </h3>
        );
        return;
      }

      // Inline bold
      if (line.includes('**')) {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        elements.push(
          <p key={index} className="text-slate-700 leading-relaxed mb-2">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
        return;
      }

      // List items
      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
        elements.push(
          <li key={index} className="text-slate-700 ml-6 mb-1 list-disc">
            {line.trim().slice(2)}
          </li>
        );
        return;
      }

      // Numbered list
      if (/^\d+\.\s/.test(line.trim())) {
        elements.push(
          <li key={index} className="text-slate-700 ml-6 mb-1 list-decimal">
            {line.trim().replace(/^\d+\.\s/, '')}
          </li>
        );
        return;
      }

      // Checkmarks
      if (line.trim().startsWith('✅') || line.trim().startsWith('❌') || line.trim().startsWith('✓')) {
        elements.push(
          <p key={index} className="text-slate-700 mb-1 pl-2">
            {line}
          </p>
        );
        return;
      }

      // Fire emoji list
      if (line.trim().startsWith('🔥')) {
        elements.push(
          <p key={index} className="text-slate-700 mb-1 pl-2">
            {line}
          </p>
        );
        return;
      }

      // Empty line
      if (line.trim() === '') {
        elements.push(<div key={index} className="h-2" />);
        return;
      }

      // Horizontal rule / table separator
      if (line.trim().startsWith('---') || line.trim().startsWith('───')) {
        elements.push(<hr key={index} className="my-4 border-slate-200" />);
        return;
      }

      // Table rows
      if (line.includes('|')) {
        // Skip rendering individual table rows, handled separately
        return;
      }

      // Regular paragraph
      elements.push(
        <p key={index} className="text-slate-700 leading-relaxed mb-2">
          {line}
        </p>
      );
    });

    return elements;
  };

  return (
    <div className="flex-1 min-h-screen bg-slate-50">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="flex items-center gap-4 p-4">
          <button
            onClick={onOpenSidebar}
            className="p-2 hover:bg-slate-100 rounded-xl transition-all duration-200 active:scale-95 hover:shadow-md"
            aria-label="Open sidebar"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-slate-500 font-medium">Pertemuan {meeting.id}</p>
            <h1 className="font-semibold text-slate-900 truncate">{meeting.title}</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${getTypeColor()} text-white relative overflow-hidden`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 relative z-10">
          <span className={`inline-block px-4 py-1.5 text-xs font-bold ${badge.color} rounded-full mb-4 shadow-lg hover:scale-105 transition-transform duration-200`}>
            {badge.text}
          </span>
          <div className="flex items-start gap-4 md:gap-6 mb-6">
            <span className="text-5xl md:text-6xl hover:scale-110 transition-transform duration-300 cursor-default">
              {meeting.type === 'uts' ? '📝' : meeting.type === 'uas' ? '🎓' : '📚'}
            </span>
            <div className="flex-1">
              <p className="text-blue-200 text-sm font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse"></span>
                Pertemuan {meeting.id}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3 animate-fadeIn">
                {meeting.title}
              </h1>
              <p className="text-blue-50 text-base md:text-lg max-w-3xl leading-relaxed">
                {meeting.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Illustration */}
        <IllustrationRenderer meetingId={meeting.id} />

        {/* Learning Objectives */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 mb-8 hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <span>Capaian Pembelajaran</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {meeting.objectives.map((objective, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-200 hover:scale-[1.02] group border border-slate-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-200">
                  {index + 1}
                </span>
                <p className="text-slate-700 text-sm leading-relaxed flex-1">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Tab Headers */}
          <div className="flex overflow-x-auto border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 scrollbar-thin">
            {meeting.subtopics.map((subtopic, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  flex-shrink-0 px-6 py-4 text-sm font-semibold transition-all duration-200
                  border-b-2 -mb-px relative group
                  ${activeTab === index 
                    ? 'border-blue-600 text-blue-600 bg-white' 
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }
                `}
              >
                {subtopic.title}
                {activeTab === index && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              {meeting.subtopics[activeTab].title}
            </h2>
            <div className="prose prose-slate max-w-none">
              {renderContent(meeting.subtopics[activeTab].content)}
            </div>
          </div>
        </div>

        {/* References */}
        {meeting.references && meeting.references.length > 0 && (
          <div className="mt-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <span>Referensi</span>
            </h3>
            <ul className="space-y-3">
              {meeting.references.map((ref, index) => (
                <li 
                  key={index} 
                  className="text-slate-700 text-sm pl-4 py-2 border-l-4 border-blue-400 bg-white rounded-r-lg hover:border-blue-600 hover:shadow-md transition-all duration-200 hover:translate-x-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {ref}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200">
          {meeting.id > 1 ? (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200 hover:shadow-md active:scale-95"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Pertemuan Sebelumnya</span>
            </button>
          ) : <div />}
          {meeting.id < 16 ? (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200 hover:shadow-md active:scale-95"
            >
              <span className="font-medium">Pertemuan Selanjutnya</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : <div />}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white mt-16">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <div className="inline-block p-3 bg-blue-600/20 rounded-2xl mb-2">
              <span className="text-4xl">📘</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Rekayasa Perangkat Lunak
            </h3>
            <p className="text-slate-400 text-sm">
              S1 Teknik Informatika • Semester 4 • 16 Pertemuan
            </p>
            <div className="flex justify-center gap-6 pt-4 text-sm">
              <span className="px-4 py-2 bg-yellow-900/30 text-yellow-400 rounded-lg border border-yellow-700/30">
                UTS: Pertemuan 8
              </span>
              <span className="px-4 py-2 bg-red-900/30 text-red-400 rounded-lg border border-red-700/30">
                UAS: Pertemuan 16
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
