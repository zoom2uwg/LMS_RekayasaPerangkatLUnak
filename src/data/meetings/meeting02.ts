import { Meeting } from '../types';

export const meeting02: Meeting = {
  id: 2,
  title: "Proses Perangkat Lunak",
  type: "materi",
  description: "Mempelajari berbagai model proses pengembangan perangkat lunak dan cara memilih model yang tepat untuk proyek.",
  objectives: [
    "Memahami konsep proses perangkat lunak",
    "Mengenal berbagai model proses (Waterfall, Incremental, Spiral, dll)",
    "Mampu membandingkan kelebihan dan kekurangan setiap model",
    "Dapat memilih model proses yang sesuai dengan kebutuhan proyek"
  ],
  subtopics: [
    {
      title: "Aktivitas Dasar Proses",
      content: `**Software Process adalah sekumpulan aktivitas terstruktur untuk mengembangkan sistem perangkat lunak.**

**4 Aktivitas Fundamental:**

**1. Specification (Spesifikasi)**
- Menentukan apa yang harus dilakukan sistem
- Requirements elicitation dan analysis
- Dokumentasi requirements
- Validasi requirements dengan stakeholders
- Output: Software Requirements Specification (SRS)

**2. Development (Pengembangan)**
- Design sistem dan komponen
  - Architectural design
  - Database design
  - Interface design
- Implementation/coding
- Unit testing
- Integration
- Code review

**3. Validation (Validasi)**
- Memastikan sistem memenuhi requirements
- Testing levels:
  - Unit testing
  - Integration testing
  - System testing
  - Acceptance testing
- Quality assurance
- User acceptance testing (UAT)
- Bug fixing

**4. Evolution (Evolusi)**
- Mengubah sistem sesuai kebutuhan baru
- Maintenance types:
  - Corrective: Bug fixes
  - Adaptive: Environment changes
  - Perfective: Enhancements
  - Preventive: Future-proofing
- Performance tuning
- Refactoring

**Supporting Activities:**
- Project management
- Configuration management
- Quality management
- Documentation`
    },
    {
      title: "Model Waterfall",
      content: `**Waterfall Model - Sequential Linear Approach**

Dikembangkan oleh Winston Royce (1970), model paling klasik dalam software engineering.

**Fase-fase Waterfall:**

**1. Requirements Definition**
- Gather semua requirements
- Document dalam SRS
- Sign-off dari stakeholders
- Deliverable: Requirements Document

**2. System and Software Design**
- High-level design (architecture)
- Detailed design (components)
- Database design
- Interface design
- Deliverable: Design Document

**3. Implementation and Unit Testing**
- Coding berdasarkan design
- Unit testing setiap module
- Code review
- Deliverable: Source Code + Unit Test Results

**4. Integration and System Testing**
- Integrate semua modules
- System testing
- Performance testing
- Security testing
- Deliverable: Test Reports

**5. Operation and Maintenance**
- Deployment ke production
- User training
- Bug fixes
- Updates dan enhancements
- Deliverable: Deployed System

**Kelebihan Waterfall:**
✅ Mudah dipahami dan dikelola
✅ Dokumentasi yang lengkap di setiap fase
✅ Cocok untuk proyek dengan requirements yang stabil
✅ Progress dapat diukur dengan jelas
✅ Milestones yang jelas
✅ Good for fixed-price contracts

**Kekurangan Waterfall:**
❌ Tidak fleksibel terhadap perubahan
❌ Customer harus menunggu hingga akhir untuk melihat hasil
❌ Risiko tinggi untuk proyek kompleks
❌ Sulit kembali ke fase sebelumnya
❌ Testing terlambat
❌ Integration issues discovered late

**Kapan Menggunakan Waterfall:**
- Requirements sangat jelas dan stabil
- Teknologi yang digunakan sudah mature
- Proyek jangka pendek dengan scope terbatas
- Proyek dengan regulasi ketat (embedded systems, medical devices)
- Team tidak berpengalaman dengan Agile
- Fixed budget dan timeline

**Contoh Proyek Cocok:**
- Sistem payroll sederhana
- Migration project dengan scope jelas
- Compliance-driven projects`
    },
    {
      title: "Model Incremental & Iterative",
      content: `**Model Incremental - Build in Pieces**

Sistem dikembangkan dan delivered dalam increment (bagian-bagian).

**Karakteristik Incremental:**
- Setiap increment menambah fungsionalitas
- Increment awal = fitur inti (core features)
- Customer dapat menggunakan increment awal
- Requirements untuk increment selanjutnya dapat disesuaikan
- Parallel development possible

**Proses Incremental:**
1. Define outline requirements
2. Assign requirements ke increments
3. Design architecture untuk whole system
4. Develop dan deliver increment 1
5. Repeat untuk increment berikutnya

**Model Iterative - Refine Through Cycles**

Sistem dikembangkan melalui siklus iterasi yang berulang.

**Karakteristik Iterative:**
- Setiap iterasi menghasilkan versi sistem yang lebih lengkap
- Feedback digunakan untuk iterasi berikutnya
- Requirements dapat berevolusi
- Continuous refinement

**Iterative Process:**
1. Initial planning
2. Iteration planning
3. Development
4. Review dan feedback
5. Adjust dan repeat

**Kelebihan Incremental/Iterative:**
✅ Risiko lebih rendah
✅ Customer dapat melihat progress lebih awal
✅ Lebih fleksibel terhadap perubahan
✅ Easier testing dan debugging
✅ Early ROI (Return on Investment)
✅ Parallel development
✅ Easier to manage

**Kekurangan:**
❌ Requires good planning dan design
❌ Needs clear definition of increments
❌ May require more resources
❌ Integration challenges

**Rational Unified Process (RUP):**

Framework iterative dan incremental yang comprehensive.

**4 Fase RUP:**

**1. Inception**
- Scope the project
- Business case
- Initial architecture
- Risk assessment

**2. Elaboration**
- Refine requirements
- Design architecture
- Mitigate risks
- Detailed planning

**3. Construction**
- Build the system
- Multiple iterations
- Testing
- Documentation

**4. Transition**
- Deploy to users
- Training
- Support
- Feedback

**Setiap fase memiliki beberapa iterasi dengan fokus berbeda.**`
    },
    {
      title: "Model Spiral",
      content: `**Spiral Model - Risk-Driven Approach**

Dikembangkan oleh Barry Boehm (1988), menggabungkan iterative development dengan analisis risiko sistematis.

**4 Kuadran Spiral:**

**Kuadran 1: Objective Setting (Determine Objectives)**
- Identifikasi objectives untuk fase ini
- Identifikasi constraints (budget, schedule, tech)
- Identifikasi alternatif approaches
- Define success criteria

**Kuadran 2: Risk Assessment & Reduction**
- Analisis risiko untuk setiap alternatif
- Identify major risks:
  - Technical risks
  - Schedule risks
  - Cost risks
  - Business risks
- Langkah-langkah untuk mengurangi risiko
- Prototyping jika diperlukan
- Risk mitigation strategies

**Kuadran 3: Development & Validation**
- Memilih model development (Waterfall, Incremental, etc)
- Develop dan test
- Implementation
- Verification dan validation

**Kuadran 4: Planning**
- Review hasil dengan customer
- Evaluate progress
- Merencanakan fase berikutnya
- Decide: continue, modify, or terminate

**Spiral Cycles:**
- Setiap loop adalah satu phase
- Radius spiral = cumulative cost
- Angular dimension = progress
- Multiple loops untuk complete system

**Risk Analysis dalam Spiral:**

**Common Risks:**
- Personnel shortfalls
- Unrealistic schedules
- Wrong requirements
- Wrong interfaces
- Gold-plating
- Continuous requirements changes
- Shortfalls in external components

**Risk Mitigation Techniques:**
- Prototyping
- Simulation
- Benchmarking
- Reference checking
- Questionnaires
- Analytic modeling

**Kelebihan Spiral:**
✅ Risk-driven approach
✅ Cocok untuk proyek besar dan kompleks
✅ Fleksibel terhadap perubahan
✅ Early consideration of reuse
✅ Customer involvement throughout
✅ Handles risks proactively

**Kekurangan Spiral:**
❌ Memerlukan expertise dalam risk assessment
❌ Model yang kompleks
❌ Biaya tinggi untuk evaluasi risiko
❌ Time-consuming
❌ Requires risk assessment expertise
❌ May be overkill untuk small projects

**Kapan Menggunakan Spiral:**
- Large, expensive, complicated projects
- High-risk projects
- Requirements unclear atau complex
- Significant changes expected
- Long-term projects
- New technology involved`
    },
    {
      title: "V-Model & RAD",
      content: `**V-Model (Verification and Validation Model)**

Extension dari Waterfall dengan penekanan pada testing dan quality assurance.

**Struktur V-Model:**

**Sisi Kiri (Verification - "Are we building it right?"):**
1. Requirements Analysis → Acceptance Test Design
2. System Design → System Test Design
3. Architecture Design → Integration Test Design
4. Module Design → Unit Test Design
5. Coding (di titik bawah V)

**Sisi Kanan (Validation - "Are we building the right thing?"):**
- Setiap fase development memiliki fase testing yang bersesuaian
- Testing direncanakan paralel dengan development

**Prinsip V-Model:**
- Untuk setiap fase development, ada fase testing yang sesuai
- Testing direncanakan sejak awal
- Early defect detection
- Test cases dibuat bersamaan dengan requirements

**Kelebihan V-Model:**
✅ Testing terintegrasi dengan development
✅ Defect dapat ditemukan lebih awal
✅ Simple dan mudah dipahami
✅ Cocok untuk proyek yang memerlukan high reliability
✅ Clear milestones
✅ Works well untuk small projects

**Kekurangan V-Model:**
❌ Tidak fleksibel seperti Waterfall
❌ Tidak ada early prototypes
❌ Sulit untuk concurrent activities
❌ Expensive untuk changes

---

**RAD (Rapid Application Development)**

Model yang menekankan pada rapid prototyping dan quick feedback.

**Fase RAD:**

**1. Requirements Planning**
- Workshop dengan users
- Define requirements
- Quick decisions

**2. User Design**
- Iterative design dengan users
- Prototyping
- JAD (Joint Application Development) sessions
- Continuous user feedback

**3. Construction**
- RAD tools dan 4GL
- Reuse components
- Code generation
- Rapid development

**4. Cutover**
- Testing
- Training
- Deployment
- Quick transition

**Karakteristik RAD:**
- Time-boxed (60-90 days typical)
- Heavy user involvement
- Prototyping
- Reusable components
- Small teams
- Automated tools

**Kelebihan RAD:**
✅ Fast development
✅ User involvement
✅ Reduced development time
✅ Early feedback
✅ Flexibility

**Kekurangan RAD:**
❌ Requires skilled developers
❌ Needs committed users
❌ Not suitable untuk large teams
❌ Requires RAD tools
❌ May compromise quality

**Kapan Menggunakan RAD:**
- Time-to-market critical
- Requirements moderately well known
- User involvement possible
- Small to medium projects
- Technical architecture clear`
    }
  ],
  references: [
    "Sommerville, I. (2016). Software Engineering. 10th Edition. Chapter 2.",
    "Pressman, R.S. (2020). Software Engineering: A Practitioner's Approach. Chapter 3.",
    "Boehm, B. (1988). A Spiral Model of Software Development and Enhancement. IEEE Computer.",
    "Royce, W. (1970). Managing the Development of Large Software Systems. IEEE WESCON."
  ],
  assignments: [
    {
      id: "tugas-2-1",
      title: "Analisis Model Proses di Perusahaan IT",
      type: "survey",
      description: "Mewawancarai praktisi IT di perusahaan lokal untuk memahami model proses pengembangan software yang digunakan dan menganalisis kesesuaiannya dengan karakteristik proyek.",
      instructions: [
        "Identifikasi perusahaan IT atau startup di sekitar kampus",
        "Hubungi dan buat janji dengan software developer atau project manager",
        "Siapkan pertanyaan tentang model proses yang digunakan (Waterfall, Agile, Hybrid, dll)",
        "Tanyakan alasan pemilihan model proses tersebut",
        "Eksplorasi kelebihan dan kekurangan yang mereka alami",
        "Analisis kesesuaian model proses dengan karakteristik proyek",
        "Bandingkan dengan teori yang dipelajari di kelas",
        "Buat laporan dan rekomendasi"
      ],
      deliverables: [
        "Laporan hasil wawancara (minimal 8 halaman)",
        "Recording wawancara (audio/video dengan izin)",
        "Analisis kesesuaian model proses",
        "Perbandingan dengan teori",
        "Presentasi (10-15 slide)"
      ],
      duration: "2 minggu",
      difficulty: "sulit",
      skills: [
        "Networking dan komunikasi profesional",
        "Analisis proses bisnis",
        "Critical thinking",
        "Penulisan laporan"
      ],
      resources: [
        "LinkedIn untuk mencari praktisi IT",
        "Template pertanyaan wawancara",
        "Framework analisis model proses"
      ],
      rubric: [
        {
          criteria: "Kualitas Wawancara",
          excellent: "Wawancara mendalam dengan pertanyaan yang relevan dan menggali informasi komprehensif",
          good: "Wawancara cukup baik dengan informasi yang relevan",
          satisfactory: "Wawancara terbatas pada pertanyaan dasar",
          points: 30
        },
        {
          criteria: "Analisis Model Proses",
          excellent: "Analisis mendalam dengan keterkaitan teori dan praktik yang kuat",
          good: "Analisis cukup baik dengan beberapa keterkaitan teori",
          satisfactory: "Analisis permukaan tanpa kedalaman",
          points: 30
        },
        {
          criteria: "Rekomendasi",
          excellent: "Rekomendasi berbasis data dan analisis yang solid",
          good: "Rekomendasi relevan namun kurang didukung data",
          satisfactory: "Rekomendasi umum tanpa landasan",
          points: 20
        },
        {
          criteria: "Presentasi",
          excellent: "Presentasi profesional, menarik, dan informatif",
          good: "Presentasi cukup baik dan informatif",
          satisfactory: "Presentasi kurang terstruktur",
          points: 20
        }
      ]
    },
    {
      id: "tugas-2-2",
      title: "Simulasi Proyek: Pemilihan Model Proses",
      type: "kelompok",
      description: "Menganalisis skenario proyek fiktif dan memilih model proses yang tepat beserta justifikasinya.",
      instructions: [
        "Bentuk kelompok 4-5 orang",
        "Pilih salah satu skenario proyek yang disediakan dosen",
        "Analisis karakteristik proyek (requirements, tim, budget, timeline, risiko)",
        "Identifikasi model proses yang paling sesuai",
        "Buat justifikasi pemilihan dengan pro dan kontra",
        "Rancang timeline dan milestone proyek",
        "Identifikasi risiko utama dan strategi mitigasi",
        "Presentasikan hasil analisis"
      ],
      deliverables: [
        "Dokumen analisis proyek (10-15 halaman)",
        "Timeline proyek (Gantt chart atau diagram serupa)",
        "Risk assessment matrix",
        "Presentasi kelompok (15-20 slide)"
      ],
      duration: "1 minggu",
      difficulty: "sedang",
      skills: [
        "Analisis proyek",
        "Pengambilan keputusan",
        "Perencanaan proyek",
        "Kerja tim"
      ],
      resources: [
        "Skenario proyek (disediakan dosen)",
        "Template risk assessment",
        "Tools: Trello, Asana, atau Microsoft Project"
      ]
    },
    {
      id: "tugas-2-3",
      title: "Diagram Model Proses",
      type: "praktikum",
      description: "Membuat diagram visual untuk berbagai model proses menggunakan tools diagramming.",
      instructions: [
        "Pilih tools diagramming (draw.io, Lucidchart, atau Visio)",
        "Buat diagram untuk 3 model proses: Waterfall, Spiral, dan V-Model",
        "Setiap diagram harus menunjukkan fase, aktivitas, dan deliverables",
        "Tambahkan keterangan untuk setiap fase",
        "Buat perbandingan visual antar model",
        "Ekspor dalam format PDF dan PNG"
      ],
      deliverables: [
        "3 diagram model proses (Waterfall, Spiral, V-Model)",
        "Tabel perbandingan antar model",
        "File source (editable) dan export (PDF/PNG)"
      ],
      duration: "4 hari",
      difficulty: "mudah",
      skills: [
        "Visualisasi",
        "Penggunaan tools diagramming",
        "Attention to detail"
      ]
    }
  ]
};
