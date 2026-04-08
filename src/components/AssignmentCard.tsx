import React, { useState } from 'react';
import { Assignment } from '../data/types';

interface AssignmentCardProps {
  assignment: Assignment;
  index: number;
}

export default function AssignmentCard({ assignment, index }: AssignmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeIcon = () => {
    switch (assignment.type) {
      case 'individual': return '👤';
      case 'kelompok': return '👥';
      case 'survey': return '📊';
      case 'presentasi': return '🎤';
      case 'praktikum': return '💻';
      case 'laporan': return '📝';
      default: return '📋';
    }
  };

  const getTypeColor = () => {
    switch (assignment.type) {
      case 'individual': return 'from-blue-500 to-blue-600';
      case 'kelompok': return 'from-purple-500 to-purple-600';
      case 'survey': return 'from-green-500 to-green-600';
      case 'presentasi': return 'from-orange-500 to-orange-600';
      case 'praktikum': return 'from-pink-500 to-pink-600';
      case 'laporan': return 'from-cyan-500 to-cyan-600';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const getDifficultyColor = () => {
    switch (assignment.difficulty) {
      case 'mudah': return 'bg-green-100 text-green-700 border-green-300';
      case 'sedang': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'sulit': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${getTypeColor()} p-5 text-white`}>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <span className="text-3xl">{getTypeIcon()}</span>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">{assignment.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">
                  {assignment.type.charAt(0).toUpperCase() + assignment.type.slice(1)}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor()}`}>
                  {assignment.difficulty.charAt(0).toUpperCase() + assignment.difficulty.slice(1)}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">
                  ⏱️ {assignment.duration}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="p-5 border-b border-slate-100">
        <p className="text-slate-700 leading-relaxed">{assignment.description}</p>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-5 space-y-5 animate-fadeIn">
          {/* Instructions */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="text-lg">📋</span>
              Instruksi Tugas
            </h4>
            <ol className="space-y-2">
              {assignment.instructions.map((instruction, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="flex-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="text-lg">📦</span>
              Hasil yang Dikumpulkan
            </h4>
            <ul className="space-y-2">
              {assignment.deliverables.map((deliverable, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="text-lg">🎯</span>
              Kompetensi yang Dikembangkan
            </h4>
            <div className="flex flex-wrap gap-2">
              {assignment.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Resources */}
          {assignment.resources && assignment.resources.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="text-lg">📚</span>
                Sumber Referensi
              </h4>
              <ul className="space-y-2">
                {assignment.resources.map((resource, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 hover:text-blue-600 cursor-pointer">
                    <span>📖</span>
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Rubric */}
          {assignment.rubric && assignment.rubric.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="text-lg">📊</span>
                Kriteria Penilaian
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border border-slate-200 px-3 py-2 text-left font-bold text-slate-700">Kriteria</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-bold text-slate-700">Excellent</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-bold text-slate-700">Good</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-bold text-slate-700">Satisfactory</th>
                      <th className="border border-slate-200 px-3 py-2 text-center font-bold text-slate-700">Poin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignment.rubric.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{item.criteria}</td>
                        <td className="border border-slate-200 px-3 py-2 text-slate-600">{item.excellent}</td>
                        <td className="border border-slate-200 px-3 py-2 text-slate-600">{item.good}</td>
                        <td className="border border-slate-200 px-3 py-2 text-slate-600">{item.satisfactory}</td>
                        <td className="border border-slate-200 px-3 py-2 text-center font-bold text-blue-600">{item.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}