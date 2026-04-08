import { courseData, Meeting } from '../data/courseData';

interface SidebarProps {
  selectedMeeting: number;
  onSelectMeeting: (id: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ selectedMeeting, onSelectMeeting, isOpen, onClose }: SidebarProps) {
  const getMeetingIcon = (meeting: Meeting) => {
    if (meeting.type === 'uts') return '📝';
    if (meeting.type === 'uas') return '🎓';
    return '📚';
  };

  const getMeetingBadge = (meeting: Meeting) => {
    if (meeting.type === 'uts') {
      return (
        <span className="ml-2 px-2 py-0.5 text-xs font-bold bg-yellow-500 text-white rounded">
          UTS
        </span>
      );
    }
    if (meeting.type === 'uas') {
      return (
        <span className="ml-2 px-2 py-0.5 text-xs font-bold bg-red-500 text-white rounded">
          UAS
        </span>
      );
    }
    return null;
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden animate-fadeIn"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-80 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white
          transform transition-all duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col h-screen shadow-2xl
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <img 
              src="https://ik.imagekit.io/syro1/FSTI/FSTI%20Colour_PNG_300.png" 
              alt="Fakultas Sains dan Teknologi Informasi"
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
            <button 
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-all duration-200 hover:rotate-90 active:scale-95"
              aria-label="Close sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              📘 RPL
            </h1>
            <p className="text-sm text-slate-300">Rekayasa Perangkat Lunak</p>
            <p className="text-xs text-slate-400">S1 Teknik Informatika • Semester 4</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 scrollbar-thin">
          <div className="space-y-2">
            {courseData.map((meeting, index) => (
              <button
                key={meeting.id}
                onClick={() => {
                  onSelectMeeting(meeting.id);
                  onClose();
                }}
                style={{ animationDelay: `${index * 30}ms` }}
                className={`
                  w-full text-left px-4 py-3 rounded-xl
                  transition-all duration-200
                  flex items-start gap-3
                  group relative overflow-hidden
                  hover:scale-[1.02] active:scale-[0.98]
                  ${selectedMeeting === meeting.id 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 scale-[1.02]' 
                    : 'hover:bg-slate-800/80 text-slate-300 hover:text-white hover:shadow-md'
                  }
                  ${meeting.type === 'uts' && selectedMeeting !== meeting.id ? 'bg-yellow-900/20 hover:bg-yellow-900/40 border border-yellow-700/30' : ''}
                  ${meeting.type === 'uas' && selectedMeeting !== meeting.id ? 'bg-red-900/20 hover:bg-red-900/40 border border-red-700/30' : ''}
                `}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                <span className="text-xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
                  {getMeetingIcon(meeting)}
                </span>
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold ${selectedMeeting === meeting.id ? 'text-blue-100' : 'text-slate-400'}`}>
                      Pertemuan {meeting.id}
                    </span>
                    {getMeetingBadge(meeting)}
                  </div>
                  <p className="text-sm font-medium truncate mt-1">
                    {meeting.title}
                  </p>
                </div>
                
                {/* Selected indicator */}
                {selectedMeeting === meeting.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="text-xs text-slate-400 text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p>16 Pertemuan</p>
            </div>
            <div className="flex justify-center gap-3 text-[10px]">
              <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded">UTS: P8</span>
              <span className="px-2 py-1 bg-red-900/30 text-red-400 rounded">UAS: P16</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
