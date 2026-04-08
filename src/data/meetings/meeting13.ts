import { Meeting } from '../types';

export const meeting13: Meeting = {
  id: 13,
  title: "Software Quality Management",
  type: "materi",
  description: "Memahami konsep quality management dan teknik untuk memastikan kualitas software.",
  objectives: [
    "Memahami quality attributes",
    "Mengenal quality management processes",
    "Mampu melakukan quality assurance",
    "Memahami quality metrics"
  ],
  subtopics: [
    {
      title: "Software Quality",
      content: `**Software Quality adalah degree to which software meets requirements dan user expectations.**

**Quality Attributes (ISO 25010):**

**Functional Suitability:**
- Functional completeness
- Functional correctness
- Functional appropriateness

**Performance Efficiency:**
- Time behavior
- Resource utilization
- Capacity

**Compatibility:**
- Co-existence
- Interoperability

**Usability:**
- Appropriateness recognizability
- Learnability
- Operability
- User error protection
- User interface aesthetics
- Accessibility

**Reliability:**
- Maturity
- Availability
- Fault tolerance
- Recoverability

**Security:**
- Confidentiality
- Integrity
- Non-repudiation
- Accountability
- Authenticity

**Maintainability:**
- Modularity
- Reusability
- Analyzability
- Modifiability
- Testability

**Portability:**
- Adaptability
- Installability
- Replaceability`
    },
    {
      title: "Quality Management",
      content: `**Quality Management Activities:**

**1. Quality Planning**
- Define quality standards
- Define quality procedures
- Allocate responsibilities

**2. Quality Assurance (QA)**
- Process-oriented
- Prevent defects
- Reviews dan audits
- Process improvement

**3. Quality Control (QC)**
- Product-oriented
- Detect defects
- Testing
- Inspections

**Quality Metrics:**
- Defect density
- Mean Time Between Failures (MTBF)
- Code coverage
- Cyclomatic complexity
- Technical debt ratio
- Customer satisfaction

**Quality Standards:**
- ISO 9001
- ISO 25010 (Software Quality)
- CMMI (Capability Maturity Model Integration)`
    }
  ],
  references: [
    "ISO/IEC 25010:2011 - Systems and software Quality Requirements and Evaluation",
    "Sommerville, I. (2016). Software Engineering. Chapter 24."
  ],
  assignments: [
    {
      id: "tugas-13-1",
      title: "Quality Metrics Analysis dan Improvement Plan",
      type: "individual",
      description: "Analisis quality metrics dari project open source, identifikasi area yang perlu improvement, dan buat action plan untuk meningkatkan kualitas.",
      instructions: [
        "LANGKAH 1 - PILIH PROJECT: Pilih project open source dari GitHub dengan kriteria: (a) Minimal 1000 stars, (b) Active development (commit dalam 3 bulan terakhir), (c) Ada test suite, (d) Bahasa pemrograman yang Anda kuasai.",
        "LANGKAH 2 - SETUP ANALYSIS TOOLS: Install dan setup tools: (a) SonarQube untuk overall quality, (b) Code coverage tool (JaCoCo, coverage.py, Istanbul), (c) Complexity analyzer, (d) Dependency checker.",
        "LANGKAH 3 - COLLECT METRICS: Kumpulkan metrics: (a) Code coverage percentage, (b) Cyclomatic complexity, (c) Code duplication percentage, (d) Technical debt ratio, (e) Bug density, (f) Maintainability index, (g) Security vulnerabilities, (h) Outdated dependencies.",
        "LANGKAH 4 - BENCHMARK: Bandingkan metrics dengan industry standards: (a) Code coverage: target >80%, (b) Complexity: target <10 per method, (c) Duplication: target <3%, (d) Technical debt: target <5%.",
        "LANGKAH 5 - IDENTIFY ISSUES: Identifikasi top 10 quality issues berdasarkan metrics. Prioritaskan berdasarkan impact dan effort to fix.",
        "LANGKAH 6 - ROOT CAUSE ANALYSIS: Untuk setiap issue, lakukan root cause analysis: (a) Mengapa issue ini terjadi?, (b) Apa dampaknya?, (c) Bagaimana mencegahnya di masa depan?",
        "LANGKAH 7 - IMPROVEMENT PLAN: Buat detailed action plan: (a) What: Apa yang akan di-improve, (b) Why: Mengapa penting, (c) How: Bagaimana cara improve, (d) When: Timeline, (e) Who: Siapa yang bertanggung jawab, (f) Success criteria.",
        "LANGKAH 8 - IMPLEMENT SAMPLE: Pilih 2-3 improvements dan implementasikan sebagai proof of concept. Ukur improvement metrics setelah implementasi.",
        "LANGKAH 9 - DOKUMENTASI: Tulis Quality Analysis Report: (1) Project overview, (2) Current metrics, (3) Benchmark comparison, (4) Issues identified, (5) Root cause analysis, (6) Improvement plan, (7) Sample implementation results, (8) Recommendations."
      ],
      deliverables: [
        "Quality metrics report (format PDF dengan charts)",
        "SonarQube analysis results (screenshots atau export)",
        "Benchmark comparison table",
        "Top 10 quality issues list dengan prioritization",
        "Improvement action plan (format Excel atau Project plan)",
        "Sample implementation (code changes dengan before-after metrics)",
        "Quality Analysis Report (format PDF, minimal 10 halaman)"
      ],
      duration: "2 minggu (14 hari kalender)",
      difficulty: "sedang",
      skills: [
        "Quality metrics analysis",
        "Benchmarking",
        "Root cause analysis",
        "Action planning",
        "Data visualization"
      ],
      resources: [
        "SonarQube documentation",
        "ISO 25010 quality model",
        "Industry benchmark data",
        "Template improvement plan"
      ]
    }
  ]
};
