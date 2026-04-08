import { Meeting } from '../types';

export const meeting03: Meeting = {
  id: 3,
  title: "Agile Software Development",
  type: "materi",
  description: "Memahami prinsip-prinsip Agile dan implementasinya dalam pengembangan perangkat lunak modern.",
  objectives: [
    "Memahami filosofi dan nilai-nilai Agile",
    "Mengenal berbagai framework Agile (Scrum, XP, Kanban)",
    "Memahami praktik-praktik Agile development",
    "Mampu mengidentifikasi kapan Agile cocok digunakan"
  ],
  subtopics: [
    {
      title: "Agile Manifesto & Prinsip",
      content: `**Agile Manifesto (2001)**

Dibuat oleh 17 praktisi software development di Snowbird, Utah.

**4 Nilai Inti Agile:**

**1. Individuals and interactions over processes and tools**
- Kolaborasi tim lebih penting dari tools
- Face-to-face communication adalah yang terbaik
- Self-organizing teams
- Trust dan respect

**2. Working software over comprehensive documentation**
- Deliver software yang berfungsi secara reguler
- Dokumentasi seperlunya, tidak berlebihan
- Code is the truth
- Executable specifications

**3. Customer collaboration over contract negotiation**
- Customer sebagai bagian dari tim
- Feedback berkelanjutan
- Shared understanding
- Partnership mindset

**4. Responding to change over following a plan**
- Embrace change, bahkan di akhir development
- Adaptive planning
- Iterative approach
- Continuous improvement

**12 Prinsip Agile:**

**Delivery & Value:**
1. Kepuasan customer melalui early & continuous delivery
2. Welcome changing requirements, even late in development
3. Deliver working software frequently (weeks rather than months)
7. Working software adalah ukuran utama progress

**Collaboration:**
4. Business people dan developers bekerja bersama daily
5. Build projects around motivated individuals
6. Face-to-face conversation adalah metode paling efisien

**Technical Excellence:**
9. Continuous attention to technical excellence dan good design
10. Simplicity - maximize the amount of work not done

**Team & Process:**
8. Sustainable development - maintain constant pace
11. Self-organizing teams menghasilkan best architectures
12. Regular reflection dan adaptation untuk improve effectiveness`
    },
    {
      title: "Scrum Framework",
      content: `**Scrum - Framework Agile Paling Populer**

**3 Pilar Scrum (Empirical Process Control):**

**1. Transparency**
- Aspek signifikan harus visible bagi yang bertanggung jawab
- Common language dan standards
- Definition of Done yang jelas

**2. Inspection**
- Sering memeriksa artefak dan progress
- Detect variances
- Not so frequent that inspection gets in the way

**3. Adaptation**
- Menyesuaikan proses jika diperlukan
- Minimize further deviation
- Continuous improvement

**Scrum Roles:**

**Product Owner (PO):**
- Bertanggung jawab untuk product backlog
- Menentukan prioritas fitur
- Represents stakeholders dan business
- Accepts atau rejects work results
- One person, not committee

**Scrum Master (SM):**
- Servant leader untuk tim
- Facilitator untuk Scrum events
- Menghilangkan impediments
- Ensures Scrum practices diikuti
- Coaches team dan organization
- Protects team dari external interruptions

**Development Team:**
- Self-organizing dan cross-functional
- 3-9 orang ideal
- No sub-teams atau hierarchies
- Collectively responsible
- Full-time commitment

**Scrum Events:**

**Sprint (Time-box 2-4 minggu):**
- Container untuk semua events
- Fixed duration
- No changes yang endanger Sprint Goal
- Potentially shippable increment

**Sprint Planning (8 hours untuk 1-month sprint):**
- What can be delivered?
- How will work be achieved?
- Sprint Goal
- Sprint Backlog

**Daily Scrum (15 menit):**
- Same time, same place
- What did I do yesterday?
- What will I do today?
- Any impediments?
- Not status meeting

**Sprint Review (4 hours untuk 1-month sprint):**
- Demo hasil ke stakeholders
- Inspect increment
- Adapt product backlog
- Collaborative working session

**Sprint Retrospective (3 hours untuk 1-month sprint):**
- Inspect how last sprint went
- What went well?
- What could be improved?
- Create improvement plan

**Scrum Artifacts:**

**Product Backlog:**
- Ordered list of everything needed
- Single source of requirements
- Never complete
- Dynamic

**Sprint Backlog:**
- Product Backlog items untuk Sprint
- Plan untuk delivering increment
- Visible, real-time picture

**Increment:**
- Sum of all Product Backlog items completed
- Must be "Done"
- Potentially releasable`
    },
    {
      title: "Extreme Programming (XP)",
      content: `**XP - Technical Excellence Framework**

Created by Kent Beck, fokus pada engineering practices.

**5 Nilai XP:**

**1. Communication**
- Komunikasi terbuka dan jujur
- Daily standup
- Pair programming
- Collective code ownership

**2. Simplicity**
- Do the simplest thing that could possibly work
- YAGNI (You Aren't Gonna Need It)
- Avoid over-engineering
- Refactor continuously

**3. Feedback**
- Feedback cepat dan sering
- Unit tests
- Customer feedback
- Continuous integration

**4. Courage**
- Berani mengambil keputusan
- Refactor when needed
- Throw away code
- Tell the truth about progress

**5. Respect**
- Saling menghormati
- Everyone contributes value
- No one is more important

**13 Praktik XP:**

**Fine-Scale Feedback:**

**1. Pair Programming**
- 2 programmers, 1 komputer
- Driver: menulis kode
- Navigator: review dan think ahead
- Roles bergantian setiap 30 menit
- Benefits: Code quality, knowledge sharing, fewer bugs

**2. Planning Game**
- Customer defines business value
- Developers estimate effort
- Collaborative planning

**3. Test-Driven Development (TDD)**
- Red: Write failing test
- Green: Write minimal code to pass
- Refactor: Improve code
- Benefits: Better design, confidence, documentation

**4. Whole Team**
- Cross-functional team
- Customer on-site
- Collective ownership

**Continuous Process:**

**5. Continuous Integration**
- Integrate dan test several times per day
- Automated build
- Fast feedback
- Reduce integration problems

**6. Refactoring**
- Improve code structure without changing behavior
- Keep code clean
- Reduce technical debt
- Continuous improvement

**7. Small Releases**
- Release frequently
- Get feedback quickly
- Reduce risk

**Shared Understanding:**

**8. Coding Standards**
- Consistent code style
- Easier to read dan maintain
- Team agreement

**9. Collective Code Ownership**
- Anyone can change any code
- No code silos
- Shared responsibility

**10. Simple Design**
- Passes all tests
- No duplication
- Expresses intent
- Minimal classes dan methods

**11. System Metaphor**
- Shared story of how system works
- Common vocabulary
- Guide architecture

**Programmer Welfare:**

**12. Sustainable Pace**
- 40-hour work week
- No overtime
- Avoid burnout
- Long-term productivity

**13. Acceptance Tests**
- Customer-defined tests
- Verify features work
- Automated when possible`
    },
    {
      title: "Kanban & Lean",
      content: `**Kanban - Visual Workflow Management**

Berasal dari Toyota Production System, diadaptasi untuk software development.

**6 Prinsip Kanban:**

**1. Visualize the Workflow**
- Kanban board dengan kolom status
- Kartu untuk setiap work item
- Make work visible
- Identify bottlenecks

**2. Limit Work in Progress (WIP)**
- Batasi jumlah item di setiap stage
- Fokus pada completion, bukan starting
- Reduce multitasking
- Improve flow

**3. Manage Flow**
- Monitor dan optimize flow
- Identify dan remove bottlenecks
- Smooth and predictable delivery
- Metrics: Lead time, cycle time

**4. Make Policies Explicit**
- Definition of Done
- Entry/exit criteria untuk setiap column
- Rules jelas untuk semua
- Shared understanding

**5. Implement Feedback Loops**
- Daily standup
- Regular reviews
- Retrospectives
- Continuous improvement

**6. Improve Collaboratively, Evolve Experimentally**
- Kaizen - continuous improvement
- Experiment dengan changes
- Data-driven decisions
- Evolutionary change

**Kanban Board Structure:**

| Backlog | To Do | In Progress | Review | Done |
|---------|-------|-------------|--------|------|
| WIP: ∞  | WIP:5 | WIP: 3      | WIP: 2 | WIP:∞|

**Kanban Metrics:**

**Lead Time:**
- Waktu dari request hingga delivery
- Customer perspective
- Includes waiting time

**Cycle Time:**
- Waktu dari mulai work hingga done
- Team perspective
- Active work time

**Throughput:**
- Jumlah items completed per periode
- Velocity equivalent
- Predictability measure

**Cumulative Flow Diagram (CFD):**
- Visual representation of work stages
- Identify bottlenecks
- Predict delivery dates

---

**Lean Software Development**

7 Prinsip Lean (dari Mary & Tom Poppendieck):

**1. Eliminate Waste**
- Partially done work
- Extra features
- Relearning
- Task switching
- Waiting
- Handoffs
- Defects

**2. Amplify Learning**
- Short iterations
- Feedback loops
- Experiments
- Retrospectives

**3. Decide as Late as Possible**
- Keep options open
- Last responsible moment
- More information = better decisions

**4. Deliver as Fast as Possible**
- Speed = competitive advantage
- Fast feedback
- Reduce risk

**5. Empower the Team**
- Self-organizing teams
- Trust dan respect
- Decision-making authority

**6. Build Integrity In**
- Refactoring
- Automated testing
- Continuous integration
- Quality built-in

**7. See the Whole**
- Systems thinking
- Optimize the whole, not parts
- Value stream mapping`
    },
    {
      title: "Scaling Agile & Hybrid",
      content: `**Scaling Agile untuk Large Organizations**

**SAFe (Scaled Agile Framework)**

4 Levels:

**Team Level:**
- Scrum/XP teams
- 5-9 people
- 2-week sprints

**Program Level:**
- Agile Release Train (ART)
- 50-125 people
- 5 teams
- Program Increment (PI) Planning

**Large Solution Level:**
- Multiple ARTs
- Complex solutions
- Solution Train

**Portfolio Level:**
- Strategic themes
- Value streams
- Lean portfolio management

**LeSS (Large-Scale Scrum)**

Principles:
- One Product Backlog
- One Product Owner
- One Definition of Done
- One potentially shippable product increment
- Multiple teams (2-8 teams)

**Spotify Model**

**Squads:**
- Small cross-functional teams (6-12 people)
- Autonomous
- Own features end-to-end

**Tribes:**
- Collection of squads (40-150 people)
- Work in related areas
- Tribe lead

**Chapters:**
- People with similar skills
- Across squads
- Knowledge sharing
- Line management

**Guilds:**
- Community of interest
- Across tribes
- Voluntary
- Knowledge sharing

---

**Hybrid Approaches**

**Water-Scrum-Fall:**
- Waterfall untuk planning dan deployment
- Scrum untuk development
- Common in large enterprises

**Disciplined Agile (DA):**
- Hybrid toolkit
- Choose your way of working (WoW)
- Context-sensitive

**Kapan Menggunakan Agile:**

✅ **Agile Cocok:**
- Requirements tidak jelas atau sering berubah
- Customer dapat terlibat aktif
- Tim kecil dan co-located (atau remote dengan good tools)
- Proyek yang memerlukan feedback cepat
- Inovasi dan kreativitas tinggi
- Time-to-market penting
- Complex problems

❌ **Agile Kurang Cocok:**
- Requirements sangat fixed (regulatory)
- Customer tidak bisa terlibat
- Tim sangat besar dan distributed
- Proyek dengan scope dan budget fixed
- Safety-critical systems dengan extensive documentation
- Outsourcing dengan kontrak ketat
- Predictable, well-understood problems`
    }
  ],
  references: [
    "Beck, K. et al. (2001). Manifesto for Agile Software Development. agilemanifesto.org",
    "Schwaber, K. & Sutherland, J. (2020). The Scrum Guide.",
    "Beck, K. (2004). Extreme Programming Explained. 2nd Edition.",
    "Anderson, D. (2010). Kanban: Successful Evolutionary Change for Your Technology Business.",
    "Poppendieck, M. & Poppendieck, T. (2003). Lean Software Development: An Agile Toolkit."
  ],
  assignments: [
    {
      id: "tugas-3-1",
      title: "Praktik Scrum: Simulasi Sprint",
      type: "kelompok",
      description: "Mensimulasikan proses Scrum dalam tim untuk mengembangkan aplikasi sederhana selama 2 sprint.",
      instructions: [
        "Bentuk tim Scrum dengan roles: Product Owner, Scrum Master, Development Team (4-6 orang)",
        "Pilih ide aplikasi sederhana (to-do list, calculator, dll)",
        "Buat Product Backlog dengan minimal 10 user stories",
        "Lakukan Sprint Planning untuk Sprint 1 (1 minggu)",
        "Jalankan Daily Scrum setiap hari (15 menit)",
        "Lakukan Sprint Review dan Retrospective di akhir Sprint 1",
        "Ulangi untuk Sprint 2 dengan perbaikan dari retrospective",
        "Dokumentasikan seluruh proses dan hasil"
      ],
      deliverables: [
        "Product Backlog (dengan prioritas)",
        "Sprint Backlog untuk setiap sprint",
        "Foto/video Daily Scrum",
        "Sprint Review presentation",
        "Retrospective notes",
        "Aplikasi yang berfungsi (minimal viable product)",
        "Laporan pengalaman menerapkan Scrum (5-8 halaman)"
      ],
      duration: "2 minggu",
      difficulty: "sulit",
      skills: [
        "Kerja tim Agile",
        "Manajemen proyek",
        "Pengembangan software",
        "Komunikasi",
        "Refleksi dan continuous improvement"
      ],
      resources: [
        "Trello atau Jira (untuk backlog management)",
        "The Scrum Guide",
        "Template user stories",
        "Git untuk version control"
      ],
      rubric: [
        {
          criteria: "Implementasi Scrum",
          excellent: "Semua ceremony dan artefak Scrum diimplementasikan dengan benar dan konsisten",
          good: "Sebagian besar ceremony dan artefak Scrum diimplementasikan dengan baik",
          satisfactory: "Implementasi Scrum tidak lengkap atau tidak konsisten",
          points: 30
        },
        {
          criteria: "Produk",
          excellent: "Aplikasi berfungsi dengan baik dan memenuhi acceptance criteria",
          good: "Aplikasi berfungsi dengan beberapa fitur utama",
          satisfactory: "Aplikasi belum berfungsi dengan baik",
          points: 25
        },
        {
          criteria: "Dokumentasi",
          excellent: "Dokumentasi lengkap, terstruktur, dan mencerminkan pemahaman mendalam tentang Scrum",
          good: "Dokumentasi cukup lengkap dan terstruktur",
          satisfactory: "Dokumentasi kurang lengkap",
          points: 25
        },
        {
          criteria: "Kolaborasi Tim",
          excellent: "Tim bekerja sama dengan baik, semua anggota berkontribusi aktif",
          good: "Tim bekerja sama dengan baik namun ada anggota yang kurang aktif",
          satisfactory: "Kolaborasi tim kurang efektif",
          points: 20
        }
      ]
    },
    {
      id: "tugas-3-2",
      title: "Kanban Board Implementation",
      type: "praktikum",
      description: "Membuat dan mengelola Kanban board digital untuk proyek pribadi atau tugas kuliah.",
      instructions: [
        "Pilih tools Kanban (Trello, Notion, atau Kanbanize)",
        "Buat board dengan minimal 4 kolom: Backlog, To Do, In Progress, Done",
        "Definisikan WIP limits untuk setiap kolom",
        "Tambahkan minimal 15 task cards dengan deskripsi yang jelas",
        "Kelola board selama 1 minggu dengan update harian",
        "Catat metrics: Lead time, Cycle time, Throughput",
        "Buat Cumulative Flow Diagram",
        "Analisis bottleneck dan area improvement"
      ],
      deliverables: [
        "Screenshot Kanban board awal dan akhir",
        "Cumulative Flow Diagram",
        "Metrics report (Lead time, Cycle time, Throughput)",
        "Analisis bottleneck dan rekomendasi improvement",
        "Refleksi pengalaman menggunakan Kanban"
      ],
      duration: "1 minggu",
      difficulty: "sedang",
      skills: [
        "Manajemen waktu",
        "Visualisasi workflow",
        "Data analysis",
        "Self-management"
      ],
      resources: [
        "Trello (free)",
        "Notion (free untuk personal)",
        "Panduan membuat CFD"
      ]
    },
    {
      id: "tugas-3-3",
      title: "Survey: Adopsi Agile di Industri Lokal",
      type: "survey",
      description: "Meneliti tingkat adopsi metodologi Agile di perusahaan IT lokal dan tantangan yang dihadapi.",
      instructions: [
        "Buat kuesioner tentang adopsi Agile (Google Forms)",
        "Distribusikan ke minimal 10 praktisi IT di perusahaan lokal",
        "Pertanyaan mencakup: framework Agile yang digunakan, tingkat keberhasilan, tantangan, dll",
        "Kumpulkan dan analisis data",
        "Wawancara mendalam 2-3 responden (opsional, bonus nilai)",
        "Buat laporan dan presentasi temuan"
      ],
      deliverables: [
        "Kuesioner (link Google Forms)",
        "Data mentah (spreadsheet)",
        "Analisis data dengan visualisasi",
        "Laporan hasil survey (8-10 halaman)",
        "Presentasi (10-15 slide)"
      ],
      duration: "2 minggu",
      difficulty: "sedang",
      skills: [
        "Riset survey",
        "Analisis data",
        "Statistik dasar",
        "Penulisan laporan"
      ]
    },
    {
      id: "tugas-3-4",
      title: "XP Practices Experiment",
      type: "praktikum",
      description: "Mencoba praktik-praktik Extreme Programming dalam sesi coding berpasangan.",
      instructions: [
        "Bentuk pasangan (pair programming)",
        "Pilih problem sederhana untuk diselesaikan (disediakan dosen)",
        "Terapkan TDD: tulis test terlebih dahulu, lalu implementasi",
        "Lakukan pair programming dengan bergantian role (driver/navigator) setiap 20 menit",
        "Praktikkan continuous integration dengan commit setiap test pass",
        "Refactor code secara berkala",
        "Dokumentasikan pengalaman dan pembelajaran"
      ],
      deliverables: [
        "Source code dengan test cases",
        "Git commit history menunjukkan TDD cycle",
        "Screenshot pair programming session",
        "Refleksi pengalaman (2-3 halaman)"
      ],
      duration: "3 hari",
      difficulty: "sedang",
      skills: [
        "Test-Driven Development",
        "Pair programming",
        "Refactoring",
        "Version control"
      ],
      resources: [
        "IDE dengan testing framework",
        "Git dan GitHub/GitLab",
        "Problem set (disediakan dosen)"
      ]
    }
  ]
};
