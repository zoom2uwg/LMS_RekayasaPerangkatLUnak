import { Meeting } from '../types';

export const meeting14: Meeting = {
  id: 14,
  title: "Software Project Management",
  type: "materi",
  description: "Memahami prinsip-prinsip project management dalam konteks software development.",
  objectives: [
    "Memahami project planning dan scheduling",
    "Mengenal risk management",
    "Mampu melakukan effort estimation",
    "Memahami team management"
  ],
  subtopics: [
    {
      title: "Project Planning",
      content: `**Software Project Management melibatkan planning, monitoring, dan controlling software projects.**

**Project Planning Activities:**

**1. Scope Definition**
- Define project boundaries
- Identify deliverables
- Define constraints

**2. Work Breakdown Structure (WBS)**
- Decompose project into tasks
- Hierarchical structure
- Manageable work packages

**3. Scheduling**
- Task dependencies
- Critical path
- Gantt charts
- PERT charts

**4. Resource Allocation**
- Team members
- Equipment
- Budget

**5. Risk Planning**
- Identify risks
- Assess probability dan impact
- Mitigation strategies

**Estimation Techniques:**

**1. Expert Judgment**
- Based on experience
- Quick but subjective

**2. Analogy-Based**
- Compare dengan similar projects
- Historical data

**3. Algorithmic Models**
- COCOMO (Constructive Cost Model)
- Function Point Analysis
- Use Case Points

**4. Bottom-Up**
- Estimate individual tasks
- Aggregate to total

**5. Planning Poker**
- Team-based estimation
- Consensus-driven`
    },
    {
      title: "Risk & Team Management",
      content: `**Risk Management:**

**Risk Categories:**
- **Technical risks** - Technology, requirements, quality
- **Project risks** - Schedule, resources, budget
- **Business risks** - Market, strategic, organizational

**Risk Management Process:**
1. **Risk Identification** - Brainstorm potential risks
2. **Risk Analysis** - Assess probability dan impact
3. **Risk Planning** - Develop mitigation strategies
4. **Risk Monitoring** - Track risks throughout project

**Risk Matrix:**
- High probability, High impact → Immediate action
- High probability, Low impact → Monitor closely
- Low probability, High impact → Contingency plan
- Low probability, Low impact → Accept

**Team Management:**

**Team Structure:**
- **Democratic** - Consensus decision making
- **Chief Programmer** - Technical leader
- **Hierarchical** - Traditional management

**Motivation:**
- Clear goals
- Recognition
- Career development
- Work-life balance

**Communication:**
- Daily standups
- Regular meetings
- Documentation
- Collaboration tools`
    }
  ],
  references: [
    "Sommerville, I. (2016). Software Engineering. Chapter 22-23.",
    "PMI (2017). A Guide to the Project Management Body of Knowledge (PMBOK Guide)."
  ],
  assignments: [
    {
      id: "tugas-14-1",
      title: "Project Planning dan Risk Management",
      type: "kelompok",
      description: "Buat project plan lengkap untuk pengembangan aplikasi, termasuk WBS, schedule, resource allocation, dan risk management plan.",
      instructions: [
        "LANGKAH 1 - DEFINE PROJECT: Pilih project aplikasi yang akan direncanakan: (a) Mobile app untuk kampus, (b) Web-based learning management system, (c) E-commerce platform, (d) Healthcare appointment system. Definisikan scope, objectives, dan deliverables.",
        "LANGKAH 2 - STAKEHOLDER ANALYSIS: Identifikasi semua stakeholders: (a) Siapa saja stakeholders?, (b) Apa interest mereka?, (c) Apa influence mereka?, (d) Bagaimana strategi engagement? Buat stakeholder matrix.",
        "LANGKAH 3 - WORK BREAKDOWN STRUCTURE: Buat WBS dengan minimal 3 levels: (a) Level 1: Major phases (Requirements, Design, Development, Testing, Deployment), (b) Level 2: Major deliverables, (c) Level 3: Work packages. Gunakan tools seperti MindMeister atau WBS Chart Pro.",
        "LANGKAH 4 - TASK ESTIMATION: Untuk setiap work package, estimate effort menggunakan: (a) Expert judgment, (b) Three-point estimation (Optimistic, Most Likely, Pessimistic), (c) PERT formula: (O + 4M + P) / 6. Dokumentasikan assumptions.",
        "LANGKAH 5 - SCHEDULE: Buat project schedule dengan Gantt chart: (a) Identifikasi dependencies antar tasks, (b) Tentukan critical path, (c) Allocate resources, (d) Identify milestones. Gunakan Microsoft Project, GanttProject, atau ProjectLibre.",
        "LANGKAH 6 - RESOURCE PLANNING: Plan resources: (a) Team members dengan roles dan responsibilities (RACI matrix), (b) Equipment dan tools, (c) Budget breakdown, (d) Training needs.",
        "LANGKAH 7 - RISK MANAGEMENT: Identifikasi minimal 15 risks: (a) Technical risks, (b) Project risks, (c) Business risks. Untuk setiap risk: assess probability dan impact, calculate risk score, plan mitigation strategies. Buat risk register.",
        "LANGKAH 8 - COMMUNICATION PLAN: Buat communication plan: (a) Stakeholder communication matrix, (b) Meeting schedule, (c) Reporting structure, (d) Escalation procedures.",
        "LANGKAH 9 - QUALITY PLAN: Define quality standards dan procedures: (a) Quality metrics, (b) Review processes, (c) Testing strategy, (d) Acceptance criteria.",
        "LANGKAH 10 - DOKUMENTASI: Compile semua ke dalam Project Management Plan document dengan struktur: (1) Executive Summary, (2) Project Overview, (3) Scope Management, (4) Schedule Management, (5) Cost Management, (6) Quality Management, (7) Resource Management, (8) Risk Management, (9) Communication Management."
      ],
      deliverables: [
        "Project Charter (format PDF, 2-3 halaman)",
        "Work Breakdown Structure (diagram dan document)",
        "Project Schedule (Gantt chart dari MS Project atau sejenisnya)",
        "Resource Plan dengan RACI matrix",
        "Risk Register (format Excel dengan 15+ risks)",
        "Communication Plan",
        "Project Management Plan (format PDF, minimal 20 halaman)",
        "Presentasi (20-25 slide)"
      ],
      duration: "3 minggu (21 hari kalender)",
      difficulty: "sulit",
      skills: [
        "Project planning",
        "Work breakdown",
        "Scheduling",
        "Risk management",
        "Resource management",
        "Stakeholder management"
      ],
      resources: [
        "PMBOK Guide",
        "Microsoft Project atau ProjectLibre (free)",
        "Template Project Management Plan",
        "Risk register template",
        "RACI matrix template"
      ]
    }
  ]
};
