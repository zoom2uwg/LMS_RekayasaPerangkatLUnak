// Types untuk course data
export interface SubTopic {
  title: string;
  content: string;
}

export interface Meeting {
  id: number;
  title: string;
  type: 'materi' | 'uts' | 'uas';
  description: string;
  objectives: string[];
  subtopics: SubTopic[];
  references?: string[];
}
