import { Meeting } from '../types';

export const meeting11: Meeting = {
  id: 11,
  title: "Software Reuse",
  type: "materi",
  description: "Memahami konsep reuse dalam software engineering dan implementasi component-based development.",
  objectives: [
    "Memahami benefits dan challenges software reuse",
    "Mengenal berbagai bentuk reuse",
    "Memahami component-based software engineering",
    "Mampu menggunakan frameworks dan libraries"
  ],
  subtopics: [
    {
      title: "Konsep Software Reuse",
      content: `**Software Reuse adalah penggunaan kembali software artifacts dalam pengembangan sistem baru.**

**Benefits of Reuse:**
- Reduced development time dan cost
- Increased reliability (tested components)
- Reduced process risk
- Effective use of specialists
- Standards compliance
- Accelerated development

**Challenges:**
- Increased maintenance costs
- Lack of tool support
- Not-invented-here syndrome
- Creating dan maintaining component library
- Finding dan adapting reusable components

**Levels of Reuse:**
1. **Code Reuse** - Copy-paste code
2. **Design Reuse** - Reuse design patterns
3. **Architecture Reuse** - Reuse architectural patterns
4. **Component Reuse** - Reuse binary components
5. **Application Reuse** - Reuse entire applications`
    },
    {
      title: "Component-Based Development",
      content: `**Component-Based Software Engineering (CBSE)**

**Component:**
- Independent, deployable unit
- Well-defined interfaces
- Encapsulated implementation
- Composable dengan components lain

**Component Models:**
- **EJB (Enterprise JavaBeans)**
- **COM/DCOM (Microsoft)**
- **.NET Components**
- **CORBA Components**

**Component Development Process:**
1. Identify candidate components
2. Search for reusable components
3. Validate components
4. Adapt components if needed
5. Integrate components
6. Test integrated system

**Design for Reuse:**
- Generalization
- Configurability
- Documentation
- Standard interfaces`
    }
  ],
  references: [
    "Sommerville, I. (2016). Software Engineering. Chapter 16.",
    "Szyperski, C. (2002). Component Software: Beyond Object-Oriented Programming."
  ],
  assignments: [
    {
      id: "tugas-11-1",
      title: "Evaluasi dan Integrasi Library/Framework",
      type: "kelompok",
      description: "Evaluasi 3 library/framework berbeda untuk kebutuhan yang sama, pilih yang terbaik, dan integrasikan ke dalam aplikasi demo.",
      instructions: [
        "LANGKAH 1 - PILIH DOMAIN: Pilih salah satu domain untuk evaluasi: (a) Authentication Library (OAuth, JWT, Passport.js), (b) UI Component Library (Material-UI, Ant Design, Bootstrap), (c) State Management (Redux, MobX, Zustand), (d) ORM (Sequelize, TypeORM, Prisma).",
        "LANGKAH 2 - IDENTIFIKASI REQUIREMENTS: Tentukan kriteria evaluasi: (a) Functionality (fitur yang disediakan), (b) Performance (speed, memory usage), (c) Documentation quality, (d) Community support (GitHub stars, issues, updates), (e) Learning curve, (f) License, (g) Bundle size.",
        "LANGKAH 3 - RESEARCH: Untuk setiap library/framework, kumpulkan data: (a) Official documentation, (b) GitHub statistics, (c) npm/PyPI downloads, (d) Stack Overflow questions, (e) Blog posts dan tutorials, (f) Known issues dan limitations.",
        "LANGKAH 4 - HANDS-ON EVALUATION: Buat 3 aplikasi demo kecil, masing-masing menggunakan library berbeda. Implementasikan use case yang sama untuk fair comparison. Ukur: (a) Time to implement, (b) Lines of code needed, (c) Performance metrics, (d) Developer experience.",
        "LANGKAH 5 - COMPARISON MATRIX: Buat tabel perbandingan dengan scoring system (1-5) untuk setiap kriteria. Hitung total score dan ranking.",
        "LANGKAH 6 - DECISION: Pilih library terbaik berdasarkan evaluation. Buat justifikasi yang kuat dengan data dan reasoning.",
        "LANGKAH 7 - INTEGRATION: Integrasikan library terpilih ke dalam aplikasi yang lebih lengkap. Tunjukkan best practices dalam penggunaannya.",
        "LANGKAH 8 - DOKUMENTASI: Tulis evaluation report yang berisi: (1) Requirements dan kriteria, (2) Research findings, (3) Hands-on evaluation results, (4) Comparison matrix, (5) Decision dan justifikasi, (6) Integration guide, (7) Recommendations.",
        "LANGKAH 9 - PRESENTASI: Siapkan presentasi dengan live demo ketiga library dan penjelasan mengapa memilih yang terpilih."
      ],
      deliverables: [
        "Evaluation criteria document (format PDF)",
        "Research report untuk setiap library (format Markdown)",
        "3 demo applications (source code di GitHub)",
        "Comparison matrix (format Excel dengan charts)",
        "Evaluation report lengkap (format PDF, minimal 10 halaman)",
        "Final integrated application (source code)",
        "Integration guide (format Markdown)",
        "Presentasi PowerPoint (15-20 slide)"
      ],
      duration: "2 minggu (14 hari kalender)",
      difficulty: "sedang",
      skills: [
        "Technology evaluation",
        "Comparative analysis",
        "Decision making",
        "Library integration",
        "Technical writing"
      ],
      resources: [
        "npm trends (https://npmtrends.com)",
        "GitHub compare tool",
        "Stack Overflow trends",
        "Template comparison matrix"
      ]
    }
  ]
};
