import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MeetingContent from './components/MeetingContent';
import { courseData } from './data/courseData';

function App() {
  const [selectedMeeting, setSelectedMeeting] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentMeeting = courseData.find(m => m.id === selectedMeeting) || courseData[0];

  const handleSelectMeeting = (id: number) => {
    setSelectedMeeting(id);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar
        selectedMeeting={selectedMeeting}
        onSelectMeeting={handleSelectMeeting}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <MeetingContent
        meeting={currentMeeting}
        onOpenSidebar={() => setSidebarOpen(true)}
      />
    </div>
  );
}

export default App;
