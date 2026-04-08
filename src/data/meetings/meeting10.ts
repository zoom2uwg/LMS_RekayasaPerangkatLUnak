import { Meeting } from '../types';

export const meeting10: Meeting = {
  id: 10,
  title: "Software Evolution & Maintenance",
  type: "materi",
  description: "Memahami proses evolusi software dan strategi maintenance untuk sistem jangka panjang.",
  objectives: [
    "Memahami konsep software evolution",
    "Mengenal tipe-tipe maintenance",
    "Mampu mengelola technical debt",
    "Memahami refactoring dan legacy systems"
  ],
  subtopics: [
    {
      title: "Software Evolution",
      content: `**Software Evolution adalah proses perubahan software setelah delivery.**

**Lehman's Laws of Software Evolution:**

**1. Continuing Change**
- Software must continually adapt atau menjadi less useful

**2. Increasing Complexity**
- Complexity increases unless work done to maintain/reduce it

**3. Self Regulation**
- Evolution process is self-regulating

**4. Conservation of Organizational Stability**
- Average effective global activity rate is invariant

**5. Conservation of Familiarity**
- Incremental growth limits

**6. Continuing Growth**
- Functional content must continually increase

**7. Declining Quality**
- Quality declines unless rigorously maintained

**8. Feedback System**
- Evolution processes are multi-level, multi-loop feedback systems

**Evolution vs Development:**
- Development: Create new system
- Evolution: Modify existing system
- Evolution often more expensive (70-80% of costs)

**Challenges:**
- Understanding existing code
- Impact analysis
- Regression testing
- Technical debt
- Documentation outdated`
    },
    {
      title: "Software Maintenance",
      content: `**Software Maintenance adalah modifikasi software setelah delivery.**

**Types of Maintenance:**

**1. Corrective Maintenance (21%)**
- Fix bugs dan errors
- Reactive
- Emergency fixes

**2. Adaptive Maintenance (25%)**
- Adapt to environment changes
- OS updates
- Hardware changes
- Regulatory changes

**3. Perfective Maintenance (50%)**
- Add new features
- Improve performance
- Enhance usability
- User requests

**4. Preventive Maintenance (4%)**
- Improve maintainability
- Refactoring
- Documentation updates
- Code optimization

**Maintenance Costs:**
- 60-90% of total software costs
- Legacy systems expensive to maintain
- Documentation crucial

**Maintenance Process:**
1. Change request
2. Impact analysis
3. Release planning
4. Change implementation
5. System release
6. Change documentation`
    },
    {
      title: "Technical Debt & Refactoring",
      content: `**Technical Debt:**

Metaphor untuk cost of additional rework caused by choosing easy solution now instead of better approach.

**Causes:**
- Time pressure
- Lack of knowledge
- Poor design decisions
- Changing requirements
- Lack of testing

**Types:**
- **Deliberate** - Conscious decision
- **Accidental** - Lack of knowledge
- **Bit rot** - Gradual degradation

**Managing Technical Debt:**
- Track dan measure
- Prioritize repayment
- Allocate time for refactoring
- Code reviews
- Automated testing

**Refactoring:**

Restructuring code without changing external behavior.

**When to Refactor:**
- Code smells detected
- Before adding features
- During bug fixes
- Regular maintenance

**Common Refactorings:**
- Extract method
- Rename variable
- Move method
- Extract class
- Inline method

**Refactoring Tools:**
- IDE support (IntelliJ, VS Code)
- Static analysis tools
- Automated refactoring

**Legacy Systems:**

Old systems that remain critical to business.

**Challenges:**
- Outdated technology
- Poor documentation
- Original developers gone
- Fear of breaking
- High maintenance cost

**Strategies:**
- Incremental modernization
- Strangler pattern
- API wrapping
- Gradual replacement`
    }
  ],
  references: [
    "Sommerville, I. (2016). Software Engineering. Chapter 9.",
    "Fowler, M. (2018). Refactoring: Improving the Design of Existing Code. 2nd Edition.",
    "Feathers, M. (2004). Working Effectively with Legacy Code."
  ],
  assignments: [
    {
      id: "tugas-10-1",
      title: "Analisis dan Refactoring Legacy Code",
      type: "kelompok",
      description: "Ambil legacy code dari project open source, analisis technical debt-nya, dan lakukan refactoring untuk meningkatkan maintainability.",
      instructions: [
        "LANGKAH 1 - PILIH LEGACY PROJECT: Cari project open source yang sudah lama (>3 tahun) dan memiliki code smell. Sumber: GitHub dengan filter 'good first issue' atau 'help wanted'. Contoh: old WordPress plugins, legacy Java applications, old Python scripts.",
        "LANGKAH 2 - SETUP PROJECT: Clone repository, setup development environment, dan pastikan aplikasi bisa dijalankan. Dokumentasikan langkah setup untuk reproducibility.",
        "LANGKAH 3 - CODE ANALYSIS: Gunakan static analysis tools untuk mengidentifikasi masalah: (a) SonarQube untuk overall quality, (b) PMD/Checkstyle untuk Java, (c) Pylint untuk Python, (d) ESLint untuk JavaScript. Generate report.",
        "LANGKAH 4 - IDENTIFIKASI TECHNICAL DEBT: Buat daftar technical debt yang ditemukan: (a) Code smells (God Class, Long Method, dll), (b) Security vulnerabilities, (c) Performance issues, (d) Outdated dependencies, (e) Missing tests. Prioritaskan berdasarkan impact dan effort.",
        "LANGKAH 5 - BUAT REFACTORING PLAN: Pilih 5-10 technical debt items untuk di-refactor. Buat plan: (a) Apa yang akan di-refactor, (b) Mengapa penting, (c) Bagaimana cara refactor-nya, (d) Estimasi effort, (e) Risk dan mitigation.",
        "LANGKAH 6 - WRITE TESTS FIRST: Sebelum refactor, tulis characterization tests untuk memastikan behavior tidak berubah. Minimal 80% coverage untuk code yang akan di-refactor.",
        "LANGKAH 7 - REFACTOR INCREMENTALLY: Lakukan refactoring step-by-step. Setiap refactoring: (a) Commit dengan message jelas, (b) Run tests untuk ensure no regression, (c) Update documentation jika perlu.",
        "LANGKAH 8 - MEASURE IMPROVEMENT: Jalankan static analysis lagi setelah refactoring. Bandingkan metrics before-after: (a) Code complexity, (b) Code duplication, (c) Test coverage, (d) Technical debt ratio.",
        "LANGKAH 9 - DOKUMENTASI: Tulis laporan yang berisi: (1) Deskripsi project, (2) Technical debt yang ditemukan, (3) Refactoring plan, (4) Proses refactoring, (5) Before-after metrics, (6) Challenges dan solutions, (7) Lesson learned.",
        "LANGKAH 10 - CONTRIBUTE BACK (BONUS): Submit Pull Request ke project original. Jika PR di-merge, bonus +20 poin!"
      ],
      deliverables: [
        "Link ke original repository dan forked repository",
        "Static analysis report before refactoring",
        "Technical debt inventory (format Excel atau Markdown)",
        "Refactoring plan document (format PDF)",
        "Refactored code dengan test coverage report",
        "Static analysis report after refactoring",
        "Comparison metrics (before vs after)",
        "Laporan lengkap (format PDF, minimal 12 halaman)",
        "Pull Request link (jika ada, bonus)"
      ],
      duration: "3 minggu (21 hari kalender)",
      difficulty: "sulit",
      skills: [
        "Legacy code analysis",
        "Refactoring techniques",
        "Technical debt management",
        "Static code analysis",
        "Test-driven refactoring",
        "Open source contribution"
      ],
      resources: [
        "Working Effectively with Legacy Code - Michael Feathers",
        "SonarQube Community Edition",
        "Refactoring Guru website",
        "GitHub search: label:'good first issue'",
        "Characterization testing guide"
      ],
      rubric: [
        {
          criteria: "Technical Debt Analysis",
          excellent: "Analisis sangat mendalam dengan tools yang tepat dan prioritization yang baik",
          good: "Analisis cukup baik dengan identifikasi masalah utama",
          satisfactory: "Analisis kurang mendalam atau prioritization kurang tepat",
          points: 25
        },
        {
          criteria: "Refactoring Quality",
          excellent: "Refactoring sangat baik dengan improvement metrics yang signifikan (>30%)",
          good: "Refactoring baik dengan improvement yang terukur (>15%)",
          satisfactory: "Refactoring minimal atau improvement kurang signifikan",
          points: 35
        },
        {
          criteria: "Testing",
          excellent: "Test coverage >80% dan semua tests passing setelah refactoring",
          good: "Test coverage >60% dengan tests passing",
          satisfactory: "Test coverage <60% atau ada failing tests",
          points: 20
        },
        {
          criteria: "Documentation",
          excellent: "Dokumentasi sangat lengkap, profesional, dan insightful",
          good: "Dokumentasi lengkap dan terstruktur",
          satisfactory: "Dokumentasi kurang lengkap",
          points: 20
        }
      ]
    }
  ]
};
