// Types untuk course data
export interface SubTopic {
  title: string;
  content: string;
}

export interface Assignment {
  id: string;
  title: string;
  type: 'individual' | 'kelompok' | 'survey' | 'presentasi' | 'praktikum' | 'laporan';
  description: string;
  instructions: string[];
  deliverables: string[];
  duration: string;
  difficulty: 'mudah' | 'sedang' | 'sulit';
  skills: string[];
  resources?: string[];
  rubric?: RubricItem[];
}

export interface RubricItem {
  criteria: string;
  excellent: string;
  good: string;
  satisfactory: string;
  points: number;
}

export interface Meeting {
  id: number;
  title: string;
  type: 'materi' | 'uts' | 'uas';
  description: string;
  objectives: string[];
  subtopics: SubTopic[];
  references?: string[];
  assignments?: Assignment[];
}
