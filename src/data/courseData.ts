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

export const courseData: Meeting[] = [
  {
    id: 1,
    title: "Pengantar Rekayasa Perangkat Lunak",
    type: "materi",
    description: "Memahami konsep dasar rekayasa perangkat lunak, sejarah perkembangan, dan pentingnya dalam pengembangan sistem modern.",
    objectives: [
      "Memahami definisi dan ruang lingkup Rekayasa Perangkat Lunak",
      "Mengetahui sejarah dan evolusi pengembangan perangkat lunak",
      "Memahami perbedaan antara programming dan software engineering",
      "Mengenal tantangan dalam pengembangan perangkat lunak modern"
    ],
    subtopics: [
      {
        title: "Definisi Rekayasa Perangkat Lunak",
        content: `Rekayasa Perangkat Lunak (Software Engineering) adalah pendekatan sistematis, disiplin, dan terukur untuk pengembangan, pengoperasian, dan pemeliharaan perangkat lunak.

**Menurut IEEE (1993):**
"Software Engineering adalah aplikasi pendekatan yang sistematis, disiplin, dan dapat dikuantifikasi untuk pengembangan, operasi, dan pemeliharaan perangkat lunak."

**Menurut Pressman (2014):**
"Software Engineering mencakup proses, metode, dan alat yang memungkinkan profesional membangun perangkat lunak berkualitas tinggi."

**Komponen Utama:**
1. **Process (Proses)** - Kerangka kerja untuk aktivitas pengembangan
2. **Methods (Metode)** - Teknik untuk membangun perangkat lunak
3. **Tools (Alat)** - Dukungan otomatis untuk proses dan metode
4. **Quality (Kualitas)** - Fokus pada hasil yang memenuhi kebutuhan`
      },
      {
        title: "Sejarah dan Evolusi",
        content: `**Era 1 (1950-1965): Era Pionir**
- Perangkat lunak dikembangkan tanpa metodologi formal
- Program dibuat untuk hardware spesifik
- Tidak ada dokumentasi yang terstruktur

**Era 2 (1965-1975): Software Crisis**
- Istilah "Software Crisis" muncul di NATO Conference 1968
- Proyek over budget, terlambat, dan tidak memenuhi kebutuhan
- Lahirnya konsep Software Engineering

**Era 3 (1975-1985): Metodologi Terstruktur**
- Structured Programming dan Structured Analysis
- Waterfall Model oleh Winston Royce
- CASE Tools mulai dikembangkan

**Era 4 (1985-2000): Object-Oriented**
- Paradigma Object-Oriented Programming
- UML sebagai standar pemodelan
- Component-Based Development

**Era 5 (2000-sekarang): Agile & DevOps**
- Agile Manifesto (2001)
- Continuous Integration/Continuous Deployment
- Cloud Computing dan Microservices`
      },
      {
        title: "Software vs Program",
        content: `**Program:**
- Kode yang dapat dieksekusi
- Dikembangkan oleh individu atau tim kecil
- Fokus pada fungsionalitas dasar
- Dokumentasi minimal

**Software (Perangkat Lunak):**
- Kumpulan program + dokumentasi + data
- Dikembangkan dengan proses terstruktur
- Fokus pada kualitas dan maintainability
- Dokumentasi lengkap (user manual, technical docs)

**Karakteristik Perangkat Lunak:**
1. **Intangible** - Tidak dapat dilihat atau disentuh
2. **Tidak aus** - Tidak mengalami kerusakan fisik
3. **Kompleks** - Tingkat kompleksitas tinggi
4. **Conformity** - Harus sesuai dengan kebutuhan
5. **Changeability** - Dapat dan sering berubah
6. **Invisibility** - Struktur tidak terlihat langsung`
      },
      {
        title: "Tantangan Modern",
        content: `**Tantangan Teknis:**
1. Skalabilitas sistem untuk jutaan pengguna
2. Keamanan dan privasi data
3. Integrasi dengan sistem legacy
4. Real-time processing requirements

**Tantangan Organisasi:**
1. Komunikasi dalam tim terdistribusi
2. Koordinasi antar stakeholder
3. Perubahan requirements yang cepat
4. Time-to-market yang singkat

**Tantangan Kualitas:**
1. Memastikan reliability dan availability
2. Testing sistem yang kompleks
3. Technical debt management
4. Performance optimization

**Solusi Modern:**
- Adopsi metodologi Agile
- DevOps dan automation
- Microservices architecture
- Cloud-native development`
      }
    ],
    references: [
      "Pressman, R.S. & Maxim, B.R. (2020). Software Engineering: A Practitioner's Approach. 9th Edition. McGraw-Hill.",
      "Sommerville, I. (2016). Software Engineering. 10th Edition. Pearson.",
      "IEEE Standard Glossary of Software Engineering Terminology (IEEE Std 610.12-1990)"
    ]
  },
  {
    id: 2,
    title: "Proses Perangkat Lunak",
    type: "materi",
    description: "Mempelajari berbagai model proses pengembangan perangkat lunak dan cara memilih model yang tepat untuk proyek.",
    objectives: [
      "Memahami konsep proses perangkat lunak",
      "Mengenal berbagai model proses (Waterfall, Incremental, dll)",
      "Mampu membandingkan kelebihan dan kekurangan setiap model",
      "Dapat memilih model proses yang sesuai dengan kebutuhan proyek"
    ],
    subtopics: [
      {
        title: "Aktivitas Dasar Proses",
        content: `**4 Aktivitas Fundamental:**

**1. Specification (Spesifikasi)**
- Menentukan apa yang harus dilakukan sistem
- Requirements elicitation dan analysis
- Dokumentasi requirements
- Validasi requirements

**2. Development (Pengembangan)**
- Design sistem dan komponen
- Implementation/coding
- Unit testing
- Integration

**3. Validation (Validasi)**
- Memastikan sistem memenuhi requirements
- Testing (unit, integration, system, acceptance)
- Quality assurance
- User acceptance testing

**4. Evolution (Evolusi)**
- Mengubah sistem sesuai kebutuhan baru
- Maintenance dan enhancement
- Bug fixing
- Performance tuning`
      },
      {
        title: "Model Waterfall",
        content: `**Definisi:**
Model sekuensial linear yang mengikuti fase-fase berurutan.

**Fase-fase Waterfall:**
1. Requirements Definition
2. System and Software Design
3. Implementation and Unit Testing
4. Integration and System Testing
5. Operation and Maintenance

**Kelebihan:**
- Mudah dipahami dan dikelola
- Dokumentasi yang lengkap di setiap fase
- Cocok untuk proyek dengan requirements yang stabil
- Progress dapat diukur dengan jelas

**Kekurangan:**
- Tidak fleksibel terhadap perubahan
- Customer harus menunggu hingga akhir untuk melihat hasil
- Risiko tinggi untuk proyek kompleks
- Sulit kembali ke fase sebelumnya

**Kapan Menggunakan:**
- Requirements sangat jelas dan stabil
- Teknologi yang digunakan sudah mature
- Proyek jangka pendek dengan scope terbatas
- Proyek dengan regulasi ketat (embedded systems, medical)`
      },
      {
        title: "Model Incremental & Iterative",
        content: `**Model Incremental:**

Sistem dikembangkan dan delivered dalam increment (bagian-bagian).

**Karakteristik:**
- Setiap increment menambah fungsionalitas
- Increment awal = fitur inti (core features)
- Customer dapat menggunakan increment awal
- Requirements untuk increment selanjutnya dapat disesuaikan

**Model Iterative:**

Sistem dikembangkan melalui siklus iterasi yang berulang.

**Karakteristik:**
- Setiap iterasi menghasilkan versi sistem yang lebih lengkap
- Feedback digunakan untuk iterasi berikutnya
- Requirements dapat berevolusi

**Kelebihan Incremental/Iterative:**
- Risiko lebih rendah
- Customer dapat melihat progress lebih awal
- Lebih fleksibel terhadap perubahan
- Easier testing dan debugging

**Contoh: Rational Unified Process (RUP)**
- Inception → Elaboration → Construction → Transition
- Setiap fase memiliki beberapa iterasi`
      },
      {
        title: "Model Spiral",
        content: `**Dikembangkan oleh Barry Boehm (1988)**

Model yang menggabungkan iterative development dengan analisis risiko sistematis.

**4 Kuadran Spiral:**

**1. Objective Setting**
- Identifikasi objectives untuk fase
- Identifikasi constraints
- Identifikasi alternatif

**2. Risk Assessment & Reduction**
- Analisis risiko untuk setiap alternatif
- Langkah-langkah untuk mengurangi risiko
- Prototyping jika diperlukan

**3. Development & Validation**
- Memilih model development
- Develop dan test

**4. Planning**
- Review hasil dengan customer
- Merencanakan fase berikutnya

**Kelebihan:**
- Risk-driven approach
- Cocok untuk proyek besar dan kompleks
- Fleksibel terhadap perubahan
- Early consideration of reuse

**Kekurangan:**
- Memerlukan expertise dalam risk assessment
- Model yang kompleks
- Biaya tinggi untuk evaluasi risiko`
      },
      {
        title: "V-Model",
        content: `**V-Model (Verification and Validation Model)**

Extension dari Waterfall dengan penekanan pada testing.

**Struktur V-Model:**

Sisi Kiri (Verification):
1. Requirements Analysis → Acceptance Testing
2. System Design → System Testing
3. Architecture Design → Integration Testing
4. Module Design → Unit Testing
5. Coding (di titik bawah V)

Sisi Kanan (Validation):
- Setiap fase development memiliki fase testing yang bersesuaian

**Prinsip:**
- Untuk setiap fase development, ada fase testing yang sesuai
- Testing direncanakan paralel dengan development
- Early defect detection

**Kelebihan:**
- Testing terintegrasi dengan development
- Defect dapat ditemukan lebih awal
- Simple dan mudah dipahami
- Cocok untuk proyek yang memerlukan high reliability

**Kekurangan:**
- Tidak fleksibel seperti Waterfall
- Tidak ada early prototypes
- Sulit untuk concurrent activities`
      }
    ],
    references: [
      "Sommerville, I. (2016). Software Engineering. 10th Edition. Chapter 2.",
      "Pressman, R.S. (2020). Software Engineering: A Practitioner's Approach. Chapter 3.",
      "Boehm, B. (1988). A Spiral Model of Software Development and Enhancement. IEEE Computer."
    ]
  },
  {
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
        title: "Agile Manifesto",
        content: `**Agile Manifesto (2001)**

Dibuat oleh 17 praktisi software development di Snowbird, Utah.

**4 Nilai Inti Agile:**

1. **Individuals and interactions** over processes and tools
   - Kolaborasi tim lebih penting dari tools
   - Face-to-face communication

2. **Working software** over comprehensive documentation
   - Deliver software yang berfungsi secara reguler
   - Dokumentasi seperlunya

3. **Customer collaboration** over contract negotiation
   - Customer sebagai bagian dari tim
   - Feedback berkelanjutan

4. **Responding to change** over following a plan
   - Embrace change, bahkan di akhir development
   - Adaptive planning

**12 Prinsip Agile:**
1. Kepuasan customer melalui early & continuous delivery
2. Welcome changing requirements
3. Deliver working software frequently
4. Business dan developers bekerja bersama
5. Build projects around motivated individuals
6. Face-to-face conversation
7. Working software adalah ukuran progress
8. Sustainable development pace
9. Continuous attention to technical excellence
10. Simplicity - maximize work not done
11. Self-organizing teams
12. Regular reflection dan adaptation`
      },
      {
        title: "Scrum Framework",
        content: `**Scrum adalah framework Agile paling populer**

**3 Pilar Scrum:**
1. **Transparency** - Aspek signifikan harus visible
2. **Inspection** - Sering memeriksa artefak dan progress
3. **Adaptation** - Menyesuaikan proses jika diperlukan

**Scrum Roles:**

**Product Owner:**
- Bertanggung jawab untuk product backlog
- Menentukan prioritas fitur
- Represents stakeholders

**Scrum Master:**
- Facilitator untuk tim
- Menghilangkan impediments
- Ensures Scrum practices

**Development Team:**
- Self-organizing
- Cross-functional
- 3-9 orang ideal

**Scrum Events:**

**Sprint:** Time-box 2-4 minggu
**Sprint Planning:** Merencanakan work untuk sprint
**Daily Scrum:** 15-menit daily standup
**Sprint Review:** Demo hasil ke stakeholders
**Sprint Retrospective:** Evaluasi proses tim

**Scrum Artifacts:**
- Product Backlog
- Sprint Backlog
- Increment (Potentially Shippable Product)`
      },
      {
        title: "Extreme Programming (XP)",
        content: `**XP - Framework yang fokus pada technical excellence**

**5 Nilai XP:**
1. **Communication** - Komunikasi terbuka
2. **Simplicity** - Do the simplest thing
3. **Feedback** - Feedback cepat dan sering
4. **Courage** - Berani mengambil keputusan
5. **Respect** - Saling menghormati

**Praktik-praktik XP:**

**Planning:**
- User Stories
- Release Planning
- Iteration Planning
- Small Releases

**Designing:**
- Simplicity
- System Metaphor
- CRC Cards
- Spike Solutions

**Coding:**
- Pair Programming
- Collective Code Ownership
- Continuous Integration
- Coding Standards

**Testing:**
- Test-Driven Development (TDD)
- Unit Testing
- Acceptance Testing

**TDD Cycle:**
1. Write a failing test (Red)
2. Write minimal code to pass (Green)
3. Refactor (Refactor)

**Pair Programming:**
- 2 programmers, 1 komputer
- Driver: menulis kode
- Navigator: review dan think ahead
- Roles bergantian`
      },
      {
        title: "Kanban",
        content: `**Kanban - Visual workflow management**

Berasal dari Toyota Production System.

**Prinsip Kanban:**

1. **Visualize the workflow**
   - Kanban board dengan kolom status
   - Kartu untuk setiap work item

2. **Limit Work in Progress (WIP)**
   - Batasi jumlah item di setiap stage
   - Fokus pada completion

3. **Manage flow**
   - Monitor dan optimize flow
   - Identify bottlenecks

4. **Make policies explicit**
   - Definisi of Done
   - Rules jelas untuk semua

5. **Implement feedback loops**
   - Regular reviews
   - Continuous improvement

6. **Improve collaboratively**
   - Kaizen - continuous improvement
   - Experiment dengan changes

**Kanban Board Typical Columns:**
| To Do | In Progress | Review | Done |

**Metrics:**
- Lead Time: waktu dari request hingga delivery
- Cycle Time: waktu dari mulai work hingga done
- Throughput: jumlah items completed per periode`
      },
      {
        title: "Kapan Menggunakan Agile",
        content: `**Agile Cocok Untuk:**

✅ Requirements tidak jelas atau sering berubah
✅ Customer dapat terlibat aktif
✅ Tim kecil dan co-located
✅ Proyek yang memerlukan feedback cepat
✅ Inovasi dan kreativitas tinggi
✅ Time-to-market penting

**Agile Kurang Cocok Untuk:**

❌ Requirements sangat fixed (regulatory)
❌ Customer tidak bisa terlibat
❌ Tim besar dan distributed
❌ Proyek dengan scope dan budget fixed
❌ Safety-critical systems
❌ Outsourcing dengan kontrak ketat

**Scaling Agile:**

**SAFe (Scaled Agile Framework)**
- Untuk enterprise level
- Team, Program, Large Solution, Portfolio levels

**LeSS (Large Scale Scrum)**
- Multiple teams working on one product
- Minimalist approach

**Spotify Model**
- Squads, Tribes, Chapters, Guilds
- Autonomous teams with alignment

**Hybrid Approaches:**
- Wagile (Waterfall + Agile)
- Water-Scrum-Fall
- Disciplined Agile (DA)`
      }
    ],
    references: [
      "Beck, K. et al. (2001). Manifesto for Agile Software Development. agilemanifesto.org",
      "Schwaber, K. & Sutherland, J. (2020). The Scrum Guide.",
      "Beck, K. (2004). Extreme Programming Explained. 2nd Edition.",
      "Anderson, D. (2010). Kanban: Successful Evolutionary Change for Your Technology Business."
    ]
  },
  {
    id: 4,
    title: "Requirements Engineering",
    type: "materi",
    description: "Mempelajari teknik-teknik untuk mengumpulkan, menganalisis, dan mendokumentasikan kebutuhan perangkat lunak.",
    objectives: [
      "Memahami pentingnya requirements engineering",
      "Menguasai teknik elicitation requirements",
      "Mampu menulis requirements yang baik",
      "Memahami proses validasi dan manajemen requirements"
    ],
    subtopics: [
      {
        title: "Pengantar Requirements",
        content: `**Definisi Requirements:**

Deskripsi layanan yang harus disediakan sistem dan batasan operasinya.

**Jenis Requirements:**

**1. Functional Requirements**
- Apa yang harus dilakukan sistem
- Fitur dan fungsi spesifik
- Input, process, output
- Contoh: "Sistem harus dapat memproses pembayaran dengan kartu kredit"

**2. Non-Functional Requirements**
- Bagaimana sistem melakukan fungsinya
- Constraints pada sistem
- Quality attributes

**Kategori Non-Functional:**
- **Performance:** Response time, throughput
- **Reliability:** MTBF, availability
- **Usability:** Learnability, efficiency
- **Security:** Authentication, authorization
- **Scalability:** Horizontal, vertical scaling
- **Maintainability:** Modifiability, testability

**3. Domain Requirements**
- Berasal dari domain aplikasi
- Regulasi dan standar industri
- Contoh: "Sistem perbankan harus comply dengan regulasi OJK"

**Requirements Levels:**
- **User Requirements:** High-level, natural language
- **System Requirements:** Detailed, technical specs`
      },
      {
        title: "Requirements Elicitation",
        content: `**Proses mengumpulkan requirements dari stakeholders**

**Teknik Elicitation:**

**1. Interviews**
- One-on-one atau group
- Structured atau unstructured
- Pertanyaan terbuka dan tertutup
- Tips: Active listening, note-taking

**2. Questionnaires/Surveys**
- Untuk banyak stakeholders
- Quantifiable data
- Closed dan open questions
- Online distribution

**3. Observation (Ethnography)**
- Mengamati users dalam environment mereka
- Memahami actual vs stated needs
- Contextual inquiry
- Time-consuming tapi valuable

**4. Workshops**
- JAD (Joint Application Development)
- Brainstorming sessions
- Collaborative decision making
- Facilitated discussions

**5. Document Analysis**
- Existing system documentation
- Business process documents
- Reports dan forms
- Competitor analysis

**6. Prototyping**
- Low-fidelity: Paper prototypes
- High-fidelity: Interactive mockups
- Clarify requirements
- Early user feedback

**7. Use Cases & User Stories**
- Use Cases: Actor-system interactions
- User Stories: "As a [user], I want [goal], so that [benefit]"`
      },
      {
        title: "Analisis dan Dokumentasi",
        content: `**Requirements Analysis:**

**Aktivitas Analisis:**
1. Requirements classification
2. Prioritization
3. Conflict resolution
4. Negotiation

**Prioritization Techniques:**

**MoSCoW Method:**
- **Must have:** Essential requirements
- **Should have:** Important but not critical
- **Could have:** Nice to have
- **Won't have:** Out of scope (this time)

**Kano Model:**
- Basic needs (expected)
- Performance needs (satisfaction linear)
- Excitement needs (delighters)

**Requirements Documentation:**

**Software Requirements Specification (SRS)**

**IEEE 830 Structure:**
1. Introduction
   - Purpose, Scope, Definitions
2. Overall Description
   - Product perspective, Functions, User characteristics
3. Specific Requirements
   - Functional, Non-functional requirements
4. Appendices

**Karakteristik Good Requirements:**
- **Complete:** Semua informasi tersedia
- **Consistent:** Tidak ada kontradiksi
- **Unambiguous:** Satu interpretasi
- **Verifiable:** Dapat ditest
- **Traceable:** Dapat dilacak sumbernya
- **Modifiable:** Mudah diubah
- **Prioritized:** Ada ranking importance`
      },
      {
        title: "Use Case Modeling",
        content: `**Use Case Diagram - UML**

**Komponen Use Case Diagram:**

**1. Actor**
- Entitas external yang berinteraksi dengan sistem
- Primary Actor: Memulai use case
- Secondary Actor: Bereaksi atau supporting
- Dapat berupa: User, External system, Time

**2. Use Case**
- Unit fungsionalitas yang meaningful
- Verb phrase: "Place Order", "Login"
- Represents goals

**3. Relationships:**
- **Association:** Actor - Use Case
- **Include:** Use case selalu include use case lain
- **Extend:** Use case optional extends use case lain
- **Generalization:** Inheritance

**Use Case Description Template:**

\`\`\`
Use Case Name: Place Order
Actor: Customer
Preconditions: Customer logged in, cart not empty
Main Flow:
1. Customer selects checkout
2. System displays order summary
3. Customer confirms shipping address
4. Customer selects payment method
5. System processes payment
6. System confirms order
7. System sends confirmation email

Alternative Flows:
3a. Customer updates address
5a. Payment fails

Postconditions: Order created, inventory updated
\`\`\`

**Tips Use Case:**
- Fokus pada WHAT, bukan HOW
- Gunakan active voice
- Satu primary actor per use case
- Avoid functional decomposition`
      },
      {
        title: "Requirements Validation & Management",
        content: `**Requirements Validation:**

**Tujuan:**
- Memastikan requirements benar dan lengkap
- Menemukan masalah sebelum development

**Teknik Validasi:**

**1. Requirements Reviews**
- Formal inspection
- Walkthrough dengan stakeholders
- Checklist-based review

**2. Prototyping**
- Validate understanding
- User feedback
- Executable specification

**3. Test Case Generation**
- Jika tidak bisa buat test case, requirements tidak jelas
- Early test planning

**4. Automated Consistency Analysis**
- Tools untuk check consistency
- Requirements management tools

**Requirements Management:**

**Aktivitas:**
1. **Change Management**
   - Change request process
   - Impact analysis
   - Change control board

2. **Version Control**
   - Baseline management
   - Version history

3. **Traceability**
   - Forward: requirements → design → code → test
   - Backward: code → requirements

**Traceability Matrix:**
| Req ID | Design | Code Module | Test Case |
|--------|--------|-------------|-----------|
| R001   | D001   | Module A    | TC001     |

**Tools:**
- JIRA, Azure DevOps
- IBM DOORS
- Polarion
- Helix RM`
      }
    ],
    references: [
      "Sommerville, I. (2016). Software Engineering. Chapter 4-5.",
      "Wiegers, K. & Beatty, J. (2013). Software Requirements. 3rd Edition.",
      "IEEE Std 830-1998. Recommended Practice for Software Requirements Specifications."
    ]
  },
  {
    id: 5,
    title: "System Modeling",
    type: "materi",
    description: "Mempelajari teknik pemodelan sistem menggunakan UML untuk mendokumentasikan dan mengkomunikasikan desain.",
    objectives: [
      "Memahami pentingnya pemodelan sistem",
      "Menguasai berbagai diagram UML",
      "Mampu membuat model yang efektif",
      "Memahami hubungan antar diagram UML"
    ],
    subtopics: [
      {
        title: "Pengantar UML",
        content: `**Unified Modeling Language (UML)**

Standard visual modeling language untuk software systems.

**Sejarah UML:**
- 1990s: Banyak metodologi OO (Booch, OMT, OOSE)
- 1995: "Three Amigos" - Booch, Rumbaugh, Jacobson
- 1997: UML 1.0 diadopsi OMG
- 2005: UML 2.0
- Current: UML 2.5 (2015)

**Tipe Diagram UML:**

**Structural Diagrams (Static):**
1. Class Diagram
2. Object Diagram
3. Component Diagram
4. Deployment Diagram
5. Package Diagram
6. Composite Structure Diagram

**Behavioral Diagrams (Dynamic):**
1. Use Case Diagram
2. Activity Diagram
3. State Machine Diagram
4. Sequence Diagram
5. Communication Diagram
6. Timing Diagram
7. Interaction Overview Diagram

**Kegunaan UML:**
- Visualize: Gambaran sistem
- Specify: Detail spesifikasi
- Construct: Blueprint untuk implementation
- Document: Dokumentasi arsitektur

**Tools UML:**
- Enterprise Architect
- Visual Paradigm
- StarUML
- Lucidchart
- draw.io (free)`
      },
      {
        title: "Class Diagram",
        content: `**Class Diagram - Most important UML diagram**

Menunjukkan struktur statis sistem: classes, attributes, operations, dan relationships.

**Komponen Class:**

\`\`\`
+------------------+
|    ClassName     |  ← Class Name
+------------------+
| - attribute1     |  ← Attributes
| # attribute2     |
| + attribute3     |
+------------------+
| + method1()      |  ← Operations
| - method2()      |
+------------------+
\`\`\`

**Visibility:**
- + Public
- - Private
- # Protected
- ~ Package

**Relationships:**

**1. Association**
- Hubungan struktural antar class
- Multiplicity: 1, 0..1, *, 1..*
- Bidirectional atau unidirectional

**2. Aggregation (Has-a)**
- Part dapat exist tanpa whole
- Diamond kosong di sisi whole
- Contoh: Department → Employee

**3. Composition (Part-of)**
- Part tidak exist tanpa whole
- Diamond penuh di sisi whole
- Contoh: House → Room

**4. Inheritance (Is-a)**
- Generalization/Specialization
- Arrow dengan triangle head
- Contoh: Animal → Dog

**5. Dependency**
- Hubungan "uses"
- Dashed arrow
- Temporary relationship

**6. Realization/Implementation**
- Class implements interface
- Dashed arrow dengan triangle`
      },
      {
        title: "Sequence Diagram",
        content: `**Sequence Diagram - Interaction over time**

Menunjukkan interaksi antar objek dalam urutan waktu.

**Komponen:**

**1. Lifeline**
- Represents participant
- Vertical dashed line
- Box dengan nama objek/class

**2. Activation Bar**
- Rectangle pada lifeline
- Menunjukkan object sedang active

**3. Messages:**
- **Synchronous:** Solid arrow, sender waits
- **Asynchronous:** Open arrowhead, sender continues
- **Return:** Dashed arrow
- **Self-message:** Arrow ke lifeline sendiri

**4. Combined Fragments:**

**alt (alternative):**
\`\`\`
[condition 1]
   messages...
[else]
   messages...
\`\`\`

**opt (optional):**
\`\`\`
[condition]
   messages...
\`\`\`

**loop:**
\`\`\`
loop [condition]
   messages...
\`\`\`

**par (parallel):**
Concurrent execution

**Contoh Sequence - Login:**
\`\`\`
User -> LoginForm: enter credentials
LoginForm -> AuthService: authenticate(user, pass)
AuthService -> Database: validateUser(user, pass)
Database --> AuthService: result
AuthService --> LoginForm: authResult
LoginForm --> User: display result
\`\`\``
      },
      {
        title: "Activity Diagram",
        content: `**Activity Diagram - Workflow modeling**

Menunjukkan flow aktivitas dalam proses atau use case.

**Komponen:**

**1. Initial Node**
- Filled circle
- Starting point

**2. Activity/Action**
- Rounded rectangle
- Unit of behavior

**3. Control Flow**
- Arrow antar activities
- Menunjukkan sequence

**4. Decision Node (Diamond)**
- Branching berdasarkan condition
- Guards: [condition]

**5. Merge Node**
- Diamond tanpa condition
- Menggabungkan branches

**6. Fork & Join**
- Horizontal/vertical bar
- Fork: Split ke parallel activities
- Join: Synchronize parallel activities

**7. Final Node**
- Circle dengan filled circle di dalam
- End point

**8. Swimlanes**
- Partisi untuk different actors/systems
- Horizontal atau vertical lanes

**Contoh Activity - Order Processing:**
\`\`\`
(Start)
   |
[Receive Order]
   |
<Check Stock> ─[Out of Stock]→ [Notify Customer] → (End)
   |
[In Stock]
   |
═══════════ (Fork)
   |         |
[Pack]    [Process Payment]
   |         |
═══════════ (Join)
   |
[Ship Order]
   |
(End)
\`\`\``
      },
      {
        title: "State Machine Diagram",
        content: `**State Machine Diagram - Object lifecycle**

Menunjukkan states dari objek dan transisi antar states.

**Komponen:**

**1. State**
- Rounded rectangle
- Kondisi objek pada waktu tertentu
- Dapat memiliki: entry, do, exit actions

**2. Initial State**
- Filled circle

**3. Final State**
- Circle dengan filled circle

**4. Transition**
- Arrow antar states
- Label: trigger [guard] / action

**5. Composite State**
- State yang berisi sub-states
- Hierarchical modeling

**6. History State**
- H dalam circle
- Remember sub-state sebelumnya

**Contoh - Order State Machine:**
\`\`\`
(●) → [New]
         |
    place order
         ↓
     [Pending] ─────cancel──────┐
         |                      |
    confirm payment             |
         ↓                      ↓
   [Processing] ──cancel──→ [Cancelled]
         |
    ship order
         ↓
    [Shipped]
         |
    deliver
         ↓
   [Delivered] → (◉)
\`\`\`

**State dengan Actions:**
\`\`\`
┌─────────────────┐
│    Processing   │
├─────────────────┤
│ entry/ startTimer
│ do/ processItems
│ exit/ notifyShipping
└─────────────────┘
\`\`\`

**Kapan Menggunakan:**
- Object dengan complex lifecycle
- Reactive systems
- Protocol modeling
- UI navigation flows`
      }
    ],
    references: [
      "Fowler, M. (2003). UML Distilled. 3rd Edition. Addison-Wesley.",
      "OMG Unified Modeling Language Specification v2.5.1",
      "Sommerville, I. (2016). Software Engineering. Chapter 5."
    ]
  },
  {
    id: 6,
    title: "Architectural Design",
    type: "materi",
    description: "Mempelajari prinsip-prinsip desain arsitektur perangkat lunak dan berbagai architectural patterns.",
    objectives: [
      "Memahami pentingnya arsitektur perangkat lunak",
      "Mengenal berbagai architectural patterns",
      "Mampu memilih arsitektur yang tepat untuk kebutuhan",
      "Memahami quality attributes dalam arsitektur"
    ],
    subtopics: [
      {
        title: "Pengantar Arsitektur Software",
        content: `**Definisi Software Architecture:**

"The fundamental organization of a system, embodied in its components, their relationships to each other and the environment, and the principles governing its design and evolution." - IEEE 1471

**Mengapa Arsitektur Penting:**
1. **Communication:** Stakeholder discussion tool
2. **Early decisions:** Critical early design choices
3. **Transferable abstraction:** Reusable patterns
4. **Quality attributes:** Enables system qualities

**Arsitektur vs Design:**
- **Architecture:** High-level structure, major components
- **Design:** Detailed design, algorithms, data structures

**Architecture Description:**

**4+1 View Model (Kruchten):**

1. **Logical View**
   - Fungsionalitas sistem
   - Class diagrams, sequence diagrams

2. **Development View**
   - Programmer's perspective
   - Component dan package diagrams

3. **Process View**
   - System dynamics, concurrency
   - Activity diagrams

4. **Physical View**
   - Deployment, infrastructure
   - Deployment diagrams

5. **+1 Scenarios**
   - Use cases yang illustrate views

**Architectural Drivers:**
- Functional requirements
- Quality attribute requirements
- Constraints (technical, business, regulatory)`
      },
      {
        title: "Layered Architecture",
        content: `**Layered Architecture Pattern**

Memisahkan sistem menjadi layers dengan tanggung jawab berbeda.

**Struktur Umum:**
\`\`\`
┌─────────────────────────┐
│   Presentation Layer    │  UI, Views
├─────────────────────────┤
│   Application Layer     │  Controllers, Services
├─────────────────────────┤
│   Business Logic Layer  │  Domain logic, Rules
├─────────────────────────┤
│   Data Access Layer     │  Repositories, DAOs
├─────────────────────────┤
│   Database Layer        │  Database, External services
└─────────────────────────┘
\`\`\`

**Prinsip:**
- Layer hanya berkomunikasi dengan layer adjacent
- Strict: hanya layer di bawahnya
- Relaxed: dapat skip layers

**Contoh: 3-Tier Architecture**
1. Presentation Tier (Client)
2. Application/Logic Tier (Server)
3. Data Tier (Database)

**Kelebihan:**
✅ Separation of concerns
✅ Maintainability
✅ Testability (can mock layers)
✅ Reusability of layers
✅ Team organization alignment

**Kekurangan:**
❌ Performance overhead (layer traversal)
❌ Complexity for simple applications
❌ Tight coupling within layers
❌ Monolithic deployment

**Kapan Menggunakan:**
- Enterprise applications
- Web applications
- Systems requiring clear separation`
      },
      {
        title: "Client-Server & Microservices",
        content: `**Client-Server Architecture**

**Struktur:**
\`\`\`
┌────────┐     request     ┌────────┐
│ Client │ ───────────────→│ Server │
│        │ ←───────────────│        │
└────────┘    response     └────────┘
\`\`\`

**Variasi:**
- 2-tier: Client langsung ke database
- 3-tier: Client → App Server → Database
- N-tier: Multiple server layers

---

**Microservices Architecture**

Aplikasi sebagai collection of loosely coupled services.

**Karakteristik:**
1. **Independently deployable**
2. **Organized around business capabilities**
3. **Owned by small teams**
4. **Technology heterogeneity**
5. **Decentralized data management**

**Struktur:**
\`\`\`
         ┌─────────────────┐
         │   API Gateway   │
         └────────┬────────┘
    ┌─────────────┼─────────────┐
    ▼             ▼             ▼
┌───────┐    ┌───────┐    ┌───────┐
│User   │    │Order  │    │Payment│
│Service│    │Service│    │Service│
└───┬───┘    └───┬───┘    └───┬───┘
    │            │            │
  [DB1]        [DB2]        [DB3]
\`\`\`

**Kelebihan:**
✅ Independent deployment
✅ Technology flexibility
✅ Scalability per service
✅ Fault isolation
✅ Team autonomy

**Kekurangan:**
❌ Distributed system complexity
❌ Network latency
❌ Data consistency challenges
❌ Operational complexity
❌ Testing complexity`
      },
      {
        title: "MVC dan Variasi",
        content: `**Model-View-Controller (MVC)**

Pattern untuk memisahkan presentation dari logic.

**Komponen:**

**Model:**
- Data dan business logic
- Notifies views of changes
- Independent dari UI

**View:**
- User interface
- Displays data dari model
- Sends user actions ke controller

**Controller:**
- Handles user input
- Updates model
- Selects view

**Flow:**
\`\`\`
User → Controller → Model
              ↓
         View ← Model
              ↓
            User
\`\`\`

---

**Variasi MVC:**

**MVP (Model-View-Presenter)**
- View lebih passive
- Presenter handles semua logic
- Better testability
- Common di Android (traditional)

**MVVM (Model-View-ViewModel)**
- Two-way data binding
- ViewModel exposes data untuk View
- Popular di: WPF, Angular, Vue
- Reactive programming

**Comparison:**
| Aspect | MVC | MVP | MVVM |
|--------|-----|-----|------|
| Binding | Manual | Manual | Automatic |
| View Logic | In Controller | In Presenter | In ViewModel |
| Testability | Moderate | High | High |
| Complexity | Low | Medium | Medium |

**MVC Frameworks:**
- Web: Laravel, Rails, ASP.NET MVC, Spring MVC
- Mobile: iOS UIKit
- JavaScript: Express.js (sort of)`
      },
      {
        title: "Event-Driven & Domain-Driven",
        content: `**Event-Driven Architecture (EDA)**

Sistem yang berkomunikasi melalui events.

**Komponen:**
- **Event Producer:** Generates events
- **Event Channel:** Transports events
- **Event Consumer:** Reacts to events

**Patterns:**

**1. Publish-Subscribe**
\`\`\`
Publisher → Event Bus → Subscriber1
                    → Subscriber2
\`\`\`

**2. Event Sourcing**
- Store events, not state
- Rebuild state dari event history
- Complete audit trail

**3. CQRS (Command Query Responsibility Segregation)**
- Separate read dan write models
- Optimized untuk each operation

**Tools:** Kafka, RabbitMQ, AWS SNS/SQS

---

**Domain-Driven Design (DDD)**

Approach yang fokus pada business domain.

**Strategic Design:**
- **Bounded Context:** Boundary dengan clear interface
- **Ubiquitous Language:** Shared language dengan domain experts
- **Context Map:** Relationships antar bounded contexts

**Tactical Design:**

**Entities:**
- Objects dengan identity
- Identity tidak berubah

**Value Objects:**
- Objects tanpa identity
- Immutable
- Equality by attributes

**Aggregates:**
- Cluster of entities dan value objects
- Root entity controls access

**Domain Services:**
- Operations yang tidak belong ke entity
- Stateless

**Repositories:**
- Abstraction untuk data access
- Collection-like interface

**DDD + Microservices:**
- Bounded Context = Microservice boundary
- Natural fit untuk decomposition`
      }
    ],
    references: [
      "Bass, L., Clements, P. & Kazman, R. (2012). Software Architecture in Practice. 3rd Edition.",
      "Richards, M. (2015). Software Architecture Patterns. O'Reilly.",
      "Evans, E. (2003). Domain-Driven Design. Addison-Wesley.",
      "Newman, S. (2021). Building Microservices. 2nd Edition. O'Reilly."
    ]
  },
  {
    id: 7,
    title: "Design and Implementation",
    type: "materi",
    description: "Mempelajari prinsip-prinsip desain berorientasi objek dan design patterns.",
    objectives: [
      "Memahami prinsip-prinsip desain OOP (SOLID)",
      "Mengenal berbagai design patterns",
      "Mampu menerapkan patterns dalam implementasi",
      "Memahami code quality dan refactoring"
    ],
    subtopics: [
      {
        title: "SOLID Principles",
        content: `**SOLID - 5 Prinsip OOP Design**

**S - Single Responsibility Principle**
"A class should have only one reason to change."

❌ Bad:
\`\`\`
class User {
  saveToDatabase() { }
  sendEmail() { }
  generateReport() { }
}
\`\`\`

✅ Good:
\`\`\`
class User { }
class UserRepository { saveToDatabase() }
class EmailService { sendEmail() }
class ReportGenerator { generateReport() }
\`\`\`

---

**O - Open/Closed Principle**
"Open for extension, closed for modification."

Use abstraction dan inheritance untuk extend behavior.

---

**L - Liskov Substitution Principle**
"Subtypes must be substitutable for their base types."

Derived class harus bisa menggantikan base class tanpa breaking.

---

**I - Interface Segregation Principle**
"Clients should not be forced to depend on interfaces they do not use."

Prefer small, focused interfaces over large ones.

---

**D - Dependency Inversion Principle**
"High-level modules should not depend on low-level modules. Both should depend on abstractions."

\`\`\`
// High-level
class OrderService {
  constructor(private repo: IOrderRepository) { }
}

// Interface (abstraction)
interface IOrderRepository {
  save(order: Order): void;
}

// Low-level
class MySQLOrderRepository implements IOrderRepository { }
\`\`\``
      },
      {
        title: "Creational Patterns",
        content: `**Creational Design Patterns**

Patterns untuk object creation mechanisms.

---

**1. Singleton**
Ensure class hanya punya satu instance.

\`\`\`typescript
class Database {
  private static instance: Database;
  
  private constructor() { }
  
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
\`\`\`

Use case: Configuration, Logging, Connection pools

---

**2. Factory Method**
Define interface untuk creating object, biarkan subclass decide.

\`\`\`typescript
abstract class Creator {
  abstract createProduct(): Product;
  
  operation(): string {
    const product = this.createProduct();
    return product.operation();
  }
}

class ConcreteCreatorA extends Creator {
  createProduct(): Product {
    return new ConcreteProductA();
  }
}
\`\`\`

---

**3. Abstract Factory**
Create families of related objects.

---

**4. Builder**
Construct complex objects step by step.

\`\`\`typescript
const user = new UserBuilder()
  .setName("John")
  .setEmail("john@example.com")
  .setAge(25)
  .build();
\`\`\`

---

**5. Prototype**
Clone existing objects tanpa depending on classes.

Use case: Ketika object creation expensive.`
      },
      {
        title: "Structural Patterns",
        content: `**Structural Design Patterns**

Patterns untuk composing classes dan objects.

---

**1. Adapter**
Convert interface of class ke interface yang client expect.

\`\`\`typescript
// Target interface
interface MediaPlayer {
  play(filename: string): void;
}

// Adaptee
class VLCPlayer {
  playVLC(filename: string) { }
}

// Adapter
class VLCAdapter implements MediaPlayer {
  constructor(private vlc: VLCPlayer) { }
  
  play(filename: string) {
    this.vlc.playVLC(filename);
  }
}
\`\`\`

---

**2. Decorator**
Attach additional responsibilities dynamically.

\`\`\`typescript
interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost() { return 10; }
  description() { return "Simple coffee"; }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) { }
  cost() { return this.coffee.cost() + 2; }
  description() { return this.coffee.description() + ", milk"; }
}
\`\`\`

---

**3. Facade**
Simplified interface to complex subsystem.

---

**4. Proxy**
Placeholder for another object (lazy loading, access control).

---

**5. Composite**
Compose objects into tree structures.
Part-whole hierarchies.`
      },
      {
        title: "Behavioral Patterns",
        content: `**Behavioral Design Patterns**

Patterns untuk object communication.

---

**1. Observer**
One-to-many dependency, notify all dependents.

\`\`\`typescript
interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];
  
  attach(observer: Observer) {
    this.observers.push(observer);
  }
  
  notify(data: any) {
    this.observers.forEach(o => o.update(data));
  }
}
\`\`\`

Use case: Event systems, MVC, Reactive programming

---

**2. Strategy**
Define family of algorithms, make them interchangeable.

\`\`\`typescript
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) { /* credit card logic */ }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number) { /* paypal logic */ }
}

class ShoppingCart {
  constructor(private strategy: PaymentStrategy) { }
  checkout(amount: number) {
    this.strategy.pay(amount);
  }
}
\`\`\`

---

**3. Command**
Encapsulate request as object.
Supports undo, queue, logging.

---

**4. State**
Object behavior changes based on internal state.

---

**5. Template Method**
Define skeleton of algorithm, let subclasses override steps.`
      },
      {
        title: "Code Quality & Refactoring",
        content: `**Code Quality Indicators**

**Code Smells:**
- Long Method
- Large Class
- Duplicate Code
- Dead Code
- Long Parameter List
- Feature Envy
- Inappropriate Intimacy
- Comments (explaining bad code)

---

**Refactoring Techniques:**

**1. Extract Method**
Long method → smaller methods

**2. Extract Class**
Class doing too much → multiple classes

**3. Rename**
Improve naming untuk clarity

**4. Move Method/Field**
Relocate ke more appropriate class

**5. Replace Conditional with Polymorphism**
Switch statements → strategy/state pattern

**6. Introduce Parameter Object**
Related parameters → object

---

**Code Metrics:**

**Cyclomatic Complexity**
- Number of independent paths
- Lower = better
- Target: < 10

**Coupling**
- Dependencies antar modules
- Loose coupling preferred

**Cohesion**
- Relatedness within module
- High cohesion preferred

---

**Clean Code Principles:**

1. **Meaningful Names**
2. **Small Functions**
3. **One Level of Abstraction**
4. **DRY (Don't Repeat Yourself)**
5. **YAGNI (You Aren't Gonna Need It)**
6. **KISS (Keep It Simple, Stupid)**

**Tools:**
- ESLint, SonarQube
- Code review
- Pair programming`
      }
    ],
    references: [
      "Gamma, E. et al. (1994). Design Patterns: Elements of Reusable Object-Oriented Software.",
      "Martin, R.C. (2008). Clean Code: A Handbook of Agile Software Craftsmanship.",
      "Fowler, M. (2018). Refactoring: Improving the Design of Existing Code. 2nd Edition."
    ]
  },
  {
    id: 8,
    title: "Ujian Tengah Semester (UTS)",
    type: "uts",
    description: "Evaluasi pemahaman materi pertemuan 1-7",
    objectives: [
      "Mengevaluasi pemahaman konsep dasar RPL",
      "Menguji kemampuan analisis proses perangkat lunak",
      "Mengukur penguasaan requirements engineering",
      "Menilai kemampuan pemodelan dan desain"
    ],
    subtopics: [
      {
        title: "Cakupan Materi UTS",
        content: `**Materi yang Diujikan:**

**1. Pengantar RPL (Pertemuan 1)**
- Definisi dan ruang lingkup RPL
- Sejarah dan evolusi
- Karakteristik perangkat lunak
- Tantangan pengembangan modern

**2. Proses Perangkat Lunak (Pertemuan 2)**
- Aktivitas fundamental
- Model Waterfall, Incremental, Spiral
- V-Model
- Pemilihan model proses

**3. Agile Development (Pertemuan 3)**
- Agile Manifesto dan prinsip
- Scrum Framework
- Extreme Programming
- Kanban

**4. Requirements Engineering (Pertemuan 4)**
- Jenis requirements
- Teknik elicitation
- Dokumentasi SRS
- Validasi requirements

**5. System Modeling (Pertemuan 5)**
- UML diagrams
- Class diagram
- Sequence diagram
- Activity & State diagrams

**6. Architectural Design (Pertemuan 6)**
- Arsitektur patterns
- Layered, Client-Server, Microservices
- MVC dan variasi

**7. Design & Implementation (Pertemuan 7)**
- SOLID principles
- Design patterns (Creational, Structural, Behavioral)
- Code quality & refactoring`
      },
      {
        title: "Bentuk Soal UTS",
        content: `**Komposisi Soal:**

**A. Pilihan Ganda (30%)**
- 15 soal @ 2 poin
- Konsep dasar dan definisi
- Perbandingan model/pattern

**Contoh:**
Manakah yang BUKAN merupakan nilai inti Agile Manifesto?
a) Individuals over processes
b) Working software over documentation
c) Contract negotiation over collaboration ✓
d) Responding to change over following plan

---

**B. Isian Singkat (20%)**
- 10 soal @ 2 poin
- Terminologi dan komponen

**Contoh:**
Sebutkan 3 roles dalam Scrum Framework!
Jawaban: Product Owner, Scrum Master, Development Team

---

**C. Essay (50%)**
- 5 soal @ 10 poin

**Contoh Soal:**
1. Jelaskan perbedaan Waterfall dan Agile, kapan masing-masing cocok digunakan?

2. Buatlah Use Case Diagram untuk sistem perpustakaan online dengan minimal 5 use cases.

3. Jelaskan dan berikan contoh penerapan prinsip Single Responsibility Principle.

4. Bandingkan arsitektur Monolithic dengan Microservices.

5. Analisis sebuah kasus: Tentukan model proses yang tepat dan jelaskan alasannya.`
      },
      {
        title: "Tips Mengerjakan UTS",
        content: `**Persiapan Sebelum Ujian:**

✅ Review semua slide dan catatan kuliah
✅ Pahami konsep, bukan hanya hafal definisi
✅ Latihan membuat diagram UML
✅ Pahami perbedaan antar model/pattern
✅ Kerjakan latihan soal tahun sebelumnya
✅ Diskusi dengan teman sekelas

---

**Strategi Saat Ujian:**

**1. Manajemen Waktu**
- Alokasikan waktu per bagian
- Kerjakan yang mudah dulu
- Sisakan waktu untuk review

**2. Pilihan Ganda**
- Baca soal dengan teliti
- Eliminasi jawaban yang jelas salah
- Perhatikan kata "BUKAN", "KECUALI"

**3. Essay**
- Baca semua soal dulu
- Buat outline singkat
- Jawab dengan struktur jelas
- Gunakan diagram jika diminta
- Berikan contoh konkret

**4. Diagram UML**
- Ikuti notasi yang benar
- Lengkapi dengan label
- Perhatikan relationship
- Beri keterangan jika perlu

---

**Yang Sering Ditanyakan:**

🔥 Perbandingan model proses
🔥 Komponen Scrum
🔥 Jenis requirements
🔥 Class diagram relationships
🔥 SOLID principles
🔥 Design patterns dan use cases`
      }
    ],
    references: []
  },
  {
    id: 9,
    title: "Software Testing",
    type: "materi",
    description: "Mempelajari teknik-teknik pengujian perangkat lunak untuk memastikan kualitas.",
    objectives: [
      "Memahami konsep dan tujuan testing",
      "Mengenal berbagai level dan jenis testing",
      "Mampu merancang test cases yang efektif",
      "Memahami test automation"
    ],
    subtopics: [
      {
        title: "Fundamentals of Testing",
        content: `**Definisi Testing:**

"Testing adalah proses mengeksekusi program dengan tujuan menemukan kesalahan." - Glen Myers

**Tujuan Testing:**
1. Menemukan defects
2. Memverifikasi requirements terpenuhi
3. Memvalidasi user expectations
4. Membangun confidence in quality
5. Mencegah defects (preventive testing)

**Prinsip Testing:**

**1. Testing shows presence of defects**
Testing dapat menunjukkan ada bug, tapi tidak bisa membuktikan tidak ada bug.

**2. Exhaustive testing is impossible**
Tidak mungkin test semua kombinasi input.

**3. Early testing**
Testing harus dimulai sedini mungkin.

**4. Defect clustering**
Sebagian besar defects ada di modul tertentu (Pareto principle).

**5. Pesticide paradox**
Test cases yang sama lama-lama tidak menemukan bug baru.

**6. Testing is context dependent**
Pendekatan testing berbeda untuk aplikasi berbeda.

**7. Absence of errors fallacy**
Software tanpa bug belum tentu memenuhi kebutuhan user.

**Verification vs Validation:**
- **Verification:** "Are we building the product right?"
- **Validation:** "Are we building the right product?"`
      },
      {
        title: "Testing Levels",
        content: `**Testing Pyramid:**
\`\`\`
         /\\
        /  \\
       / UI \\     ← Few, slow, expensive
      /------\\
     /  Int.  \\   ← Integration tests
    /----------\\
   /   Unit     \\ ← Many, fast, cheap
  /--------------\\
\`\`\`

---

**1. Unit Testing**
- Test individual components/functions
- Isolated dari dependencies
- Fast execution
- Developers responsibility

\`\`\`typescript
// Example with Jest
describe('Calculator', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
\`\`\`

---

**2. Integration Testing**
- Test interactions antar components
- Detect interface defects
- Test database connections, APIs

**Approaches:**
- Big Bang: Test semua sekaligus
- Top-Down: Test dari top modules
- Bottom-Up: Test dari bottom modules
- Sandwich: Kombinasi

---

**3. System Testing**
- Test complete system
- Functional dan non-functional
- End-to-end scenarios
- QA team responsibility

---

**4. Acceptance Testing**
- User validates system
- UAT (User Acceptance Testing)
- Alpha testing (internal)
- Beta testing (external users)`
      },
      {
        title: "Black-Box Testing",
        content: `**Black-Box Testing**

Test berdasarkan specifications tanpa melihat internal code.

---

**1. Equivalence Partitioning**
Bagi input domain ke partitions yang equivalent.

**Contoh: Age validation (18-65)**
- Invalid: < 18
- Valid: 18-65
- Invalid: > 65

Test cases: 15, 30, 70

---

**2. Boundary Value Analysis**
Test pada boundaries of partitions.

**Contoh: Age 18-65**
Test: 17, 18, 19, 64, 65, 66

---

**3. Decision Table Testing**
Test combinations of conditions.

| Condition | Rule 1 | Rule 2 | Rule 3 |
|-----------|--------|--------|--------|
| Premium user | Y | Y | N |
| In stock | Y | N | - |
| **Action** | | | |
| Free shipping | X | | |
| Standard ship | | | X |

---

**4. State Transition Testing**
Test berdasarkan state machine.

States: Idle → Active → Suspended → Closed

---

**5. Use Case Testing**
Derive test cases dari use cases.
Test main flow dan alternative flows.

---

**6. Error Guessing**
Test based on experience.
Common mistakes, edge cases.`
      },
      {
        title: "White-Box Testing",
        content: `**White-Box Testing**

Test berdasarkan internal code structure.

---

**1. Statement Coverage**
Execute setiap statement minimal sekali.

\`\`\`
if (a > 0) {
  x = 1;      // Statement 1
}
y = 2;        // Statement 2
\`\`\`

Test: a = 1 (covers both statements)

---

**2. Branch Coverage**
Execute setiap branch (true/false).

\`\`\`
if (a > 0) {
  x = 1;
} else {
  x = 2;
}
\`\`\`

Tests needed:
- a = 1 (true branch)
- a = -1 (false branch)

---

**3. Path Coverage**
Execute setiap possible path.

Number of paths dapat sangat besar (loops!).

---

**4. Condition Coverage**
Test setiap kondisi boolean.

\`\`\`
if (a > 0 && b < 10)
\`\`\`

Test both conditions true/false.

---

**5. MC/DC (Modified Condition/Decision Coverage)**
- Setiap condition affects decision independently
- Required untuk safety-critical systems
- Aviation: DO-178B Level A

---

**Code Coverage Tools:**
- JavaScript: Istanbul/nyc, Jest coverage
- Java: JaCoCo, Cobertura
- Python: coverage.py
- C/C++: gcov, LCOV

**Target Coverage:**
- 80% statement coverage typical
- 100% untuk critical code`
      },
      {
        title: "Test Automation",
        content: `**Test Automation**

Menggunakan tools untuk execute tests automatically.

**Benefits:**
- Faster execution
- Repeatable
- Consistent
- Regression testing
- CI/CD integration

---

**Test Automation Frameworks:**

**Unit Testing:**
- JavaScript: Jest, Mocha, Jasmine
- Python: pytest, unittest
- Java: JUnit, TestNG
- C#: NUnit, xUnit

**Integration/API Testing:**
- Postman, REST Assured
- Supertest, Axios

**UI/E2E Testing:**
- Selenium, Cypress
- Playwright, Puppeteer
- Appium (mobile)

---

**Test-Driven Development (TDD)**

\`\`\`
Red → Green → Refactor

1. Write failing test
2. Write minimal code to pass
3. Refactor
4. Repeat
\`\`\`

---

**Behavior-Driven Development (BDD)**

Gherkin syntax:
\`\`\`gherkin
Feature: User Login
  Scenario: Successful login
    Given user is on login page
    When user enters valid credentials
    And clicks login button
    Then user should see dashboard
\`\`\`

Tools: Cucumber, SpecFlow, Behave

---

**CI/CD Integration:**

\`\`\`yaml
# GitHub Actions example
test:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v2
    - run: npm install
    - run: npm test
\`\`\``
      }
    ],
    references: [
      "Myers, G.J. et al. (2011). The Art of Software Testing. 3rd Edition.",
      "ISTQB Foundation Level Syllabus.",
      "Sommerville, I. (2016). Software Engineering. Chapter 8."
    ]
  },
  {
    id: 10,
    title: "Software Evolution",
    type: "materi",
    description: "Memahami bagaimana perangkat lunak berevolusi dan teknik maintenance.",
    objectives: [
      "Memahami alasan software evolution",
      "Mengenal jenis-jenis maintenance",
      "Memahami teknik re-engineering",
      "Mengenal legacy system management"
    ],
    subtopics: [
      {
        title: "Pentingnya Software Evolution",
        content: `**Software Evolution:**

Perubahan software setelah initial release untuk:
- Memperbaiki bugs
- Menambah fitur
- Adaptasi environment baru
- Meningkatkan kualitas

**Lehman's Laws of Software Evolution:**

**1. Continuing Change**
Software harus terus berubah atau menjadi progressively less useful.

**2. Increasing Complexity**
Complexity meningkat kecuali ada effort untuk menguranginya.

**3. Self Regulation**
Evolution process self-regulating dengan distribution mendekati normal.

**4. Conservation of Organizational Stability**
Average effective global activity rate cenderung constant.

**5. Conservation of Familiarity**
Incremental change di setiap release cenderung constant.

**6. Continuing Growth**
Functional content harus terus meningkat untuk maintain satisfaction.

**7. Declining Quality**
Quality akan decline kecuali dipertahankan dan diadaptasi.

**8. Feedback System**
Evolution processes are multi-level feedback systems.

---

**Biaya Maintenance:**
- 60-80% dari total cost software
- Meningkat seiring waktu
- Prevention lebih murah dari correction`
      },
      {
        title: "Types of Maintenance",
        content: `**4 Tipe Software Maintenance:**

**1. Corrective Maintenance (20-25%)**
Memperbaiki bugs dan errors.

- Bug fixing
- Emergency patches
- Crash resolution

**2. Adaptive Maintenance (20-25%)**
Adaptasi ke perubahan environment.

- OS upgrades
- New hardware
- Third-party updates
- Regulatory changes

**3. Perfective Maintenance (50-55%)**
Menambah atau improve functionality.

- New features
- Performance optimization
- UI improvements
- User requests

**4. Preventive Maintenance (5%)**
Mencegah future problems.

- Code refactoring
- Documentation updates
- Technical debt reduction

---

**Maintenance Process:**

\`\`\`
Change Request
    ↓
Impact Analysis
    ↓
Change Planning
    ↓
Change Implementation
    ↓
Testing
    ↓
Release
    ↓
Evaluation
\`\`\`

**Challenges:**
- Understanding legacy code
- Lack of documentation
- Side effects of changes
- Staff turnover
- Technical debt`
      },
      {
        title: "Reengineering",
        content: `**Software Reengineering:**

Reorganizing dan restructuring existing software tanpa mengubah functionality.

---

**Reengineering Process:**

\`\`\`
┌─────────────┐
│ Source Code │
└──────┬──────┘
       ↓
┌─────────────────┐
│ Reverse         │
│ Engineering     │ → Documentation/Models
└────────┬────────┘
         ↓
┌─────────────────┐
│ Restructuring/  │
│ Refactoring     │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Forward         │
│ Engineering     │
└────────┬────────┘
         ↓
┌─────────────────┐
│ New System      │
└─────────────────┘
\`\`\`

---

**Reverse Engineering:**
- Extract design dari existing code
- Generate documentation
- Understand system structure

**Code Restructuring:**
- Improve code without changing behavior
- Better modularization
- Remove code smells

**Data Reengineering:**
- Restructure database
- Data migration
- Schema evolution

---

**Refactoring vs Reengineering:**

| Aspect | Refactoring | Reengineering |
|--------|-------------|---------------|
| Scope | Small changes | Large-scale |
| Timing | Continuous | One-time project |
| Risk | Low | High |
| Impact | Incremental | Significant |

---

**When to Reengineer:**
- System still provides value
- Modernization needed
- Skills available
- Business case positive`
      },
      {
        title: "Legacy System Management",
        content: `**Legacy Systems:**

Older systems yang masih critical untuk business operations.

**Karakteristik:**
- Old technology
- Poor documentation
- Original developers unavailable
- High maintenance cost
- Business-critical

---

**Legacy System Assessment:**

**Quadrant Analysis:**

\`\`\`
High Business Value
       │
  Keep │ Transform
       │
───────┼───────
       │
Replace│ Eliminate
       │
Low    └─────────────
       Low           High
       Technical Quality
\`\`\`

---

**Migration Strategies:**

**1. Big Bang**
- Replace semua sekaligus
- High risk, high disruption
- Fast completion

**2. Parallel Running**
- Run old dan new simultaneously
- Compare results
- Gradual transition

**3. Phased Migration**
- Migrate component by component
- Lower risk
- Longer timeline

**4. Strangler Fig Pattern**
- Gradually replace parts
- Route traffic to new components
- Eventually "strangle" old system

---

**Technical Approaches:**

**Wrapping:**
- Add new interface to legacy
- Preserve existing functionality
- API layer

**Migration:**
- Move to new platform
- May preserve some components

**Retirement:**
- Phase out system
- Archive data
- End of life planning`
      },
      {
        title: "Technical Debt",
        content: `**Technical Debt:**

"Implied cost of additional rework caused by choosing quick solution over better approach."

**Analogi Hutang:**
- Principal: effort to fix
- Interest: ongoing maintenance cost
- Bankruptcy: system unmaintainable

---

**Sources of Technical Debt:**

**Intentional:**
- Time pressure ("ship now, fix later")
- Prototypes becoming production
- Known shortcuts

**Unintentional:**
- Poor design decisions
- Lack of knowledge
- Requirements change
- Outdated dependencies

---

**Types:**

1. **Code Debt**
   - Poor code quality
   - Missing tests
   - Copy-paste code

2. **Design Debt**
   - Bad architecture decisions
   - Missing abstractions

3. **Documentation Debt**
   - Missing/outdated docs
   - Poor comments

4. **Testing Debt**
   - Low coverage
   - No automation

5. **Infrastructure Debt**
   - Outdated tools
   - Manual processes

---

**Managing Technical Debt:**

**1. Make it Visible**
- Track in backlog
- Metrics and dashboards

**2. Allocate Time**
- 20% rule for maintenance
- "Boy Scout Rule"

**3. Prioritize**
- Impact vs effort
- Focus on high-traffic areas

**4. Prevent Accumulation**
- Code reviews
- Definition of Done
- Automated checks

**Tools:**
- SonarQube, CodeClimate
- Dependency scanners`
      }
    ],
    references: [
      "Sommerville, I. (2016). Software Engineering. Chapter 9.",
      "Lehman, M.M. (1980). Programs, Life Cycles, and Laws of Software Evolution.",
      "Fowler, M. (2019). Refactoring. 2nd Edition."
    ]
  },
  {
    id: 11,
    title: "Software Reuse",
    type: "materi",
    description: "Mempelajari strategi dan teknik reuse untuk meningkatkan produktivitas.",
    objectives: [
      "Memahami benefit dan challenge software reuse",
      "Mengenal berbagai level reuse",
      "Memahami component-based development",
      "Mengenal frameworks dan product lines"
    ],
    subtopics: [
      {
        title: "Konsep Software Reuse",
        content: `**Software Reuse:**

Menggunakan existing software artifacts untuk membangun sistem baru.

**Benefits:**

1. **Reduced Development Time**
   - Don't reinvent the wheel
   - Faster time to market

2. **Lower Development Cost**
   - Less code to write
   - Reduced testing effort

3. **Increased Reliability**
   - Tested components
   - Proven in production

4. **Reduced Risk**
   - Known behavior
   - Predictable performance

5. **Standards Compliance**
   - Standard components
   - Interoperability

---

**Challenges:**

1. **Finding Reusable Assets**
   - Discoverability
   - Documentation quality

2. **Integration Effort**
   - Learning curve
   - Compatibility issues

3. **Maintenance Dependencies**
   - Version updates
   - Security patches

4. **Not Invented Here Syndrome**
   - Resistance to use external code
   - Trust issues

5. **Legal/Licensing Issues**
   - License compatibility
   - Patent concerns

---

**Reuse vs Build Decision:**

Consider:
- Availability of suitable assets
- Cost of adaptation
- Strategic importance
- Maintenance responsibility
- License implications`
      },
      {
        title: "Levels of Reuse",
        content: `**Reuse dapat terjadi di berbagai levels:**

---

**1. Code-Level Reuse**

**Functions/Methods:**
\`\`\`typescript
// Utility function reused across project
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
\`\`\`

**Classes:**
Inherit atau compose existing classes.

---

**2. Library Reuse**

**Karakteristik:**
- Collection of related functions
- Application calls library
- No control flow

**Examples:**
- Lodash, Moment.js
- NumPy, Pandas
- Apache Commons

---

**3. Framework Reuse**

**Karakteristik:**
- Inversion of Control
- Framework calls your code
- Provides architecture

**Examples:**
- React, Angular, Vue
- Spring, Django, Laravel
- Express, FastAPI

**Library vs Framework:**
\`\`\`
Library: Your code → calls → Library
Framework: Framework → calls → Your code
\`\`\`

---

**4. Component/Service Reuse**

**Karakteristik:**
- Self-contained units
- Well-defined interfaces
- Deploy independently

**Examples:**
- REST APIs
- npm packages
- Docker containers

---

**5. System Reuse**

**Karakteristik:**
- Complete application
- Configuration/customization
- Product lines

**Examples:**
- CMS (WordPress)
- ERP systems
- CRM platforms`
      },
      {
        title: "Component-Based Development",
        content: `**Component-Based Software Engineering (CBSE)**

Membangun sistem dari pre-existing components.

---

**Component Characteristics:**

1. **Standardized**
   - Standard interface
   - Well-documented API

2. **Independent**
   - Loosely coupled
   - Self-contained

3. **Composable**
   - Can be combined
   - Plug-and-play

4. **Deployable**
   - Can be installed separately
   - Version management

5. **Replaceable**
   - Can swap components
   - Same interface, different implementation

---

**CBSE Process:**

\`\`\`
Requirements
    ↓
Component Identification
    ↓
Component Search/Selection
    ↓
Component Adaptation
    ↓
Integration
    ↓
Testing
\`\`\`

---

**Component Models:**

**CORBA (Common Object Request Broker)**
- Language-neutral
- Distributed objects

**JavaBeans/EJB**
- Java ecosystem
- Enterprise applications

**COM/.NET Components**
- Microsoft platform
- Windows integration

---

**Modern Component Approaches:**

**Microservices:**
- Independent services
- API communication
- Container deployment

**Package Managers:**
- npm, pip, Maven
- Dependency management
- Version control

**Web Components:**
- Custom HTML elements
- Shadow DOM
- Framework-agnostic`
      },
      {
        title: "Frameworks dan Libraries",
        content: `**Application Frameworks**

Reusable design + implementation untuk aplikasi tertentu.

---

**Types of Frameworks:**

**1. Web Application Frameworks**

**Frontend:**
- React - Component-based UI
- Angular - Full-featured SPA
- Vue - Progressive framework

**Backend:**
- Express.js - Minimal Node.js
- Django - Python "batteries included"
- Spring Boot - Java enterprise
- Laravel - PHP elegant syntax

**2. Mobile Frameworks**

**Native:**
- Swift/SwiftUI (iOS)
- Kotlin (Android)

**Cross-platform:**
- React Native
- Flutter
- Xamarin

**3. Testing Frameworks**
- JUnit, pytest, Jest
- Selenium, Cypress

---

**Framework Selection Criteria:**

✅ Community size & activity
✅ Documentation quality
✅ Learning curve
✅ Performance
✅ Long-term viability
✅ License compatibility
✅ Ecosystem (plugins, tools)

---

**Open Source Libraries**

**Advantages:**
- Free to use
- Community support
- Transparent code
- Customizable

**Considerations:**
- License type (MIT, GPL, Apache)
- Maintenance activity
- Security track record
- Breaking changes

**License Compatibility:**
\`\`\`
MIT/BSD → Very permissive
Apache 2.0 → Patent grant
LGPL → Share library changes
GPL → Share all changes (copyleft)
\`\`\``
      },
      {
        title: "Software Product Lines",
        content: `**Software Product Line (SPL)**

Family of systems yang share common core dengan variasi untuk different customers/markets.

---

**Concept:**

\`\`\`
        Core Platform
       /     |     \\
  Product  Product  Product
     A        B        C
(Feature (Feature (Feature
 Set 1)   Set 2)   Set 3)
\`\`\`

---

**Product Line Components:**

**1. Core Assets**
- Common architecture
- Shared components
- Reusable artifacts

**2. Variation Points**
- Where products differ
- Configuration options

**3. Product-Specific**
- Unique features
- Custom integrations

---

**Variability Mechanisms:**

**1. Compile-time:**
- Preprocessor directives
- Configuration files

**2. Link-time:**
- Different libraries
- Plugins

**3. Runtime:**
- Feature flags
- Dynamic loading

---

**Example: Mobile App Product Line**

**Core:**
- Authentication
- Database
- UI framework

**Variants:**
- Free vs Premium
- iOS vs Android
- Different branding

---

**Benefits:**
- Reduced development cost
- Faster time to market
- Consistent quality
- Easier maintenance

**Challenges:**
- Upfront investment
- Complexity management
- Variability documentation

---

**Feature Modeling:**

Feature diagrams menunjukkan:
- Mandatory features
- Optional features
- Alternative features
- Dependencies/constraints`
      }
    ],
    references: [
      "Sommerville, I. (2016). Software Engineering. Chapter 15-16.",
      "Szyperski, C. (2002). Component Software. 2nd Edition.",
      "Pohl, K. et al. (2005). Software Product Line Engineering."
    ]
  },
  {
    id: 12,
    title: "Software Security",
    type: "materi",
    description: "Mempelajari aspek keamanan dalam pengembangan perangkat lunak.",
    objectives: [
      "Memahami pentingnya software security",
      "Mengenal common vulnerabilities",
      "Memahami secure development practices",
      "Mengenal security testing"
    ],
    subtopics: [
      {
        title: "Pengantar Software Security",
        content: `**Software Security:**

Membangun software yang tetap berfungsi dengan benar di bawah serangan.

**CIA Triad:**

**Confidentiality (Kerahasiaan)**
- Data hanya diakses oleh pihak berwenang
- Encryption, access control

**Integrity (Integritas)**
- Data tidak diubah tanpa izin
- Hashing, digital signatures

**Availability (Ketersediaan)**
- System accessible when needed
- Redundancy, DDoS protection

---

**Additional Properties:**

**Authentication**
- Verify identity

**Authorization**
- Verify permissions

**Non-repudiation**
- Cannot deny actions

**Accountability**
- Track user actions (audit logs)

---

**Security vs Safety:**
- **Security:** Protection from malicious threats
- **Safety:** Protection from accidental harm

---

**Cost of Security Breaches:**

1. **Direct costs:**
   - Incident response
   - Legal/regulatory fines
   - Customer compensation

2. **Indirect costs:**
   - Reputation damage
   - Customer loss
   - Stock price impact

**Security is a process, not a product!**`
      },
      {
        title: "OWASP Top 10",
        content: `**OWASP Top 10 (2021)**

Top 10 web application security risks:

---

**A01: Broken Access Control**
- Unauthorized access to resources
- Mitigation: Proper authz checks, deny by default

**A02: Cryptographic Failures**
- Sensitive data exposure
- Mitigation: Strong encryption, proper key management

**A03: Injection**
- SQL, NoSQL, Command injection
\`\`\`sql
-- Vulnerable
SELECT * FROM users WHERE id = '$input'
-- Input: 1' OR '1'='1

-- Safe: Parameterized query
SELECT * FROM users WHERE id = ?
\`\`\`

**A04: Insecure Design**
- Missing security controls in design
- Mitigation: Threat modeling, secure design patterns

**A05: Security Misconfiguration**
- Default configs, unnecessary features
- Mitigation: Hardening, automated config checks

**A06: Vulnerable Components**
- Using components with known vulnerabilities
- Mitigation: Dependency scanning, updates

**A07: Authentication Failures**
- Weak authentication mechanisms
- Mitigation: MFA, secure session management

**A08: Software and Data Integrity Failures**
- Untrusted sources, insecure CI/CD
- Mitigation: Digital signatures, secure pipelines

**A09: Security Logging & Monitoring Failures**
- Insufficient logging
- Mitigation: Comprehensive logging, alerting

**A10: Server-Side Request Forgery (SSRF)**
- Server makes requests to unintended locations
- Mitigation: Input validation, network segmentation`
      },
      {
        title: "Secure Development Lifecycle",
        content: `**Microsoft SDL (Security Development Lifecycle)**

\`\`\`
Training → Requirements → Design → 
Implementation → Verification → Release → Response
\`\`\`

---

**1. Training**
- Security awareness
- Secure coding practices

**2. Requirements**
- Security requirements
- Privacy requirements
- Risk assessment

**3. Design**
- Threat modeling
- Attack surface analysis
- Secure architecture patterns

**4. Implementation**
- Secure coding standards
- Code review
- Static analysis

**5. Verification**
- Security testing
- Penetration testing
- Code scanning

**6. Release**
- Final security review
- Incident response plan
- Security documentation

**7. Response**
- Monitor vulnerabilities
- Patch management
- Post-incident analysis

---

**DevSecOps:**

Security integrated into DevOps pipeline.

\`\`\`
Code → Build → Test → Deploy
  ↓       ↓       ↓       ↓
SAST    SCA    DAST   Monitor
\`\`\`

**SAST:** Static Application Security Testing
**SCA:** Software Composition Analysis
**DAST:** Dynamic Application Security Testing

---

**Shift Left Security:**
Find security issues earlier (cheaper to fix).`
      },
      {
        title: "Secure Coding Practices",
        content: `**Input Validation:**

\`\`\`typescript
// ❌ Trusting user input
const userId = req.params.id;
db.query(\`SELECT * FROM users WHERE id = \${userId}\`);

// ✅ Parameterized query
db.query('SELECT * FROM users WHERE id = ?', [userId]);

// ✅ Input validation
function validateEmail(email: string): boolean {
  const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return pattern.test(email);
}
\`\`\`

---

**Authentication Best Practices:**

1. **Password Storage**
\`\`\`typescript
// Use bcrypt or argon2
const hash = await bcrypt.hash(password, 12);
const match = await bcrypt.compare(input, hash);
\`\`\`

2. **Session Management**
   - Secure, HttpOnly cookies
   - Session timeout
   - Regenerate session ID on login

3. **Multi-Factor Authentication**
   - Something you know + have + are

---

**Output Encoding:**

\`\`\`typescript
// Prevent XSS
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
\`\`\`

---

**Error Handling:**

\`\`\`typescript
// ❌ Exposing internal errors
catch (error) {
  res.json({ error: error.stack });
}

// ✅ Generic error messages
catch (error) {
  logger.error(error); // Log details
  res.json({ error: 'Something went wrong' });
}
\`\`\`

---

**Principle of Least Privilege:**
Grant minimum permissions needed.`
      },
      {
        title: "Security Testing",
        content: `**Types of Security Testing:**

---

**1. Static Application Security Testing (SAST)**
- Analyze source code
- Find vulnerabilities without running
- Early in development

**Tools:**
- SonarQube, Checkmarx
- Fortify, Veracode
- ESLint security plugins

---

**2. Dynamic Application Security Testing (DAST)**
- Test running application
- Black-box approach
- Find runtime vulnerabilities

**Tools:**
- OWASP ZAP
- Burp Suite
- Nikto

---

**3. Software Composition Analysis (SCA)**
- Analyze dependencies
- Find vulnerable libraries
- License compliance

**Tools:**
- Snyk, Dependabot
- WhiteSource
- npm audit

---

**4. Penetration Testing**
- Simulated attacks
- Manual + automated
- Find real-world vulnerabilities

**Methodology:**
1. Reconnaissance
2. Scanning
3. Exploitation
4. Post-exploitation
5. Reporting

---

**5. Threat Modeling**

**STRIDE Model:**
- **S**poofing identity
- **T**ampering with data
- **R**epudiation
- **I**nformation disclosure
- **D**enial of service
- **E**levation of privilege

**Process:**
1. Identify assets
2. Create architecture overview
3. Decompose application
4. Identify threats
5. Document & rate threats
6. Mitigate

---

**Bug Bounty Programs:**
- External researchers find bugs
- Reward for responsible disclosure
- HackerOne, Bugcrowd`
      }
    ],
    references: [
      "OWASP Foundation. OWASP Top 10 (2021). owasp.org",
      "Howard, M. & Lipner, S. (2006). The Security Development Lifecycle.",
      "McGraw, G. (2006). Software Security: Building Security In."
    ]
  },
  {
    id: 13,
    title: "Software Quality Management",
    type: "materi",
    description: "Mempelajari konsep dan praktik untuk menjamin kualitas perangkat lunak.",
    objectives: [
      "Memahami konsep software quality",
      "Mengenal quality standards dan models",
      "Memahami quality assurance activities",
      "Mengenal metrics dan measurement"
    ],
    subtopics: [
      {
        title: "Konsep Software Quality",
        content: `**Definisi Quality:**

"Degree to which a system satisfies stated and implied needs of stakeholders." - ISO 25010

**Quality Perspectives:**

**1. Manufacturing View**
- Conformance to specifications
- Zero defects

**2. User View**
- Fitness for purpose
- Meets user needs

**3. Product View**
- Internal characteristics
- Maintainability, reliability

**4. Value View**
- Quality at acceptable cost
- ROI of quality

---

**ISO/IEC 25010 Quality Model:**

**Product Quality:**

1. **Functional Suitability**
   - Completeness, correctness, appropriateness

2. **Performance Efficiency**
   - Time behavior, resource utilization

3. **Compatibility**
   - Co-existence, interoperability

4. **Usability**
   - Learnability, operability, accessibility

5. **Reliability**
   - Maturity, availability, fault tolerance

6. **Security**
   - Confidentiality, integrity, authenticity

7. **Maintainability**
   - Modularity, reusability, modifiability

8. **Portability**
   - Adaptability, installability, replaceability

---

**Quality Costs:**

**Prevention Costs:** Training, process improvement
**Appraisal Costs:** Testing, reviews, inspections
**Internal Failure:** Rework, debugging
**External Failure:** Support, patches, reputation`
      },
      {
        title: "Quality Assurance vs Quality Control",
        content: `**Quality Assurance (QA)**

**Focus:** Process-oriented
**Goal:** Prevent defects
**Approach:** Proactive

**QA Activities:**
- Define processes and standards
- Process audits
- Training programs
- Process improvement
- Methodology selection

---

**Quality Control (QC)**

**Focus:** Product-oriented
**Goal:** Detect defects
**Approach:** Reactive

**QC Activities:**
- Testing
- Code reviews
- Inspections
- Defect tracking
- Metrics collection

---

**Comparison:**

| Aspect | QA | QC |
|--------|----|----|
| Focus | Process | Product |
| Timing | Throughout | End of phase |
| Nature | Preventive | Corrective |
| Responsibility | Everyone | QC team |

---

**Quality Assurance Plan:**

1. **Introduction**
   - Purpose, scope
   
2. **Quality Objectives**
   - Measurable goals
   
3. **Process Standards**
   - Development methodology
   - Coding standards
   
4. **Quality Activities**
   - Reviews, testing
   
5. **Tools**
   - Testing tools, metrics tools
   
6. **Responsibilities**
   - Roles and duties
   
7. **Metrics**
   - What to measure`
      },
      {
        title: "Reviews dan Inspections",
        content: `**Software Reviews:**

Examination of software artifacts untuk find problems.

---

**Types of Reviews:**

**1. Informal Review**
- Desk check
- Pair programming
- Ad-hoc

**2. Walkthrough**
- Author presents
- Team provides feedback
- Informal atmosphere

**3. Technical Review**
- Team review
- Checklist-based
- Documented findings

**4. Formal Inspection (Fagan)**
- Highly structured
- Defined roles
- Metrics collected

---

**Fagan Inspection Process:**

\`\`\`
Planning → Overview → Preparation → 
Meeting → Rework → Follow-up
\`\`\`

**Roles:**
- **Moderator:** Leads the process
- **Author:** Created the artifact
- **Reader:** Presents the artifact
- **Recorder:** Documents issues
- **Inspectors:** Find defects

---

**Review Checklist Example (Code):**

✓ Does the code match design?
✓ Are all variables initialized?
✓ Are boundary conditions handled?
✓ Is error handling appropriate?
✓ Are coding standards followed?
✓ Is the code readable?
✓ Are there any security issues?

---

**Benefits of Reviews:**

- Find defects early (cheaper to fix)
- Knowledge sharing
- Improve code quality
- Team learning
- Standards compliance

**Studies show:**
- Reviews find 60-90% of defects
- Earlier than testing
- More cost-effective`
      },
      {
        title: "Quality Standards",
        content: `**ISO 9001**

Quality Management System standard.

**Principles:**
1. Customer focus
2. Leadership
3. Engagement of people
4. Process approach
5. Improvement
6. Evidence-based decision making
7. Relationship management

---

**CMMI (Capability Maturity Model Integration)**

**Maturity Levels:**

**Level 1: Initial**
- Ad hoc, chaotic
- Success depends on individuals

**Level 2: Managed**
- Basic project management
- Repeatable processes

**Level 3: Defined**
- Organization-wide processes
- Standard practices

**Level 4: Quantitatively Managed**
- Metrics-based management
- Statistical process control

**Level 5: Optimizing**
- Continuous improvement
- Innovation focus

---

**ISO/IEC 12207**

Software Life Cycle Processes standard.

**Primary Processes:**
- Acquisition
- Supply
- Development
- Operation
- Maintenance

**Supporting Processes:**
- Documentation
- Configuration Management
- Quality Assurance
- Verification
- Validation

---

**Agile vs Standards:**

Standards can complement Agile:
- Define "what" not "how"
- Quality focus aligns
- Adapt practices, not principles`
      },
      {
        title: "Quality Metrics",
        content: `**Software Metrics:**

Quantitative measures of software attributes.

---

**Types of Metrics:**

**1. Product Metrics**
- Size: LOC, Function Points
- Complexity: Cyclomatic complexity
- Quality: Defect density

**2. Process Metrics**
- Defect removal efficiency
- Review coverage
- Test coverage

**3. Project Metrics**
- Schedule variance
- Effort variance
- Productivity

---

**Common Quality Metrics:**

**Defect Density**
\`\`\`
Defects per KLOC = (Total Defects / KLOC) 
\`\`\`

**Defect Removal Efficiency (DRE)**
\`\`\`
DRE = (Defects found before release / 
       Total defects) × 100%
\`\`\`

**Mean Time Between Failures (MTBF)**
\`\`\`
MTBF = Total operating time / 
       Number of failures
\`\`\`

**Code Coverage**
\`\`\`
Coverage = (Lines tested / Total lines) × 100%
\`\`\`

---

**GQM (Goal-Question-Metric)**

**Goal:** Improve code quality
**Question:** What is current defect rate?
**Metric:** Defects per KLOC

---

**Metrics Pitfalls:**

❌ Gaming metrics
❌ Measuring wrong things
❌ Too many metrics
❌ Not acting on data

**Best Practices:**

✅ Measure what matters
✅ Use balanced set
✅ Communicate purpose
✅ Act on insights
✅ Review regularly`
      }
    ],
    references: [
      "ISO/IEC 25010:2011 Systems and software Quality Requirements and Evaluation",
      "CMMI Institute. CMMI for Development, Version 2.0",
      "Sommerville, I. (2016). Software Engineering. Chapter 24."
    ]
  },
  {
    id: 14,
    title: "Software Project Management",
    type: "materi",
    description: "Mempelajari teknik dan praktik untuk mengelola proyek pengembangan perangkat lunak.",
    objectives: [
      "Memahami konsep project management",
      "Menguasai teknik estimasi dan planning",
      "Memahami risk management",
      "Mengenal tools dan metrics project management"
    ],
    subtopics: [
      {
        title: "Pengantar Project Management",
        content: `**Project Management:**

Aplikasi knowledge, skills, tools untuk project activities agar memenuhi requirements.

**Project Characteristics:**
- Temporary (ada start dan end)
- Unique deliverable
- Progressive elaboration

---

**Triple Constraint (Iron Triangle):**

\`\`\`
      Scope
       /\\
      /  \\
     /    \\
    /______\\
  Time    Cost
  
  + Quality (center)
\`\`\`

Trade-offs: Change one, affects others.

---

**Project Manager Responsibilities:**

1. **Planning**
   - Define scope, schedule, budget
   - Resource allocation

2. **Organizing**
   - Team structure
   - Communication channels

3. **Leading**
   - Motivate team
   - Resolve conflicts

4. **Controlling**
   - Monitor progress
   - Take corrective action

---

**Software Project Challenges:**

- Intangible product
- Changing requirements
- Technical uncertainty
- Team dynamics
- Integration complexity

---

**Project Success Factors:**

✅ Clear objectives
✅ Stakeholder engagement
✅ Competent team
✅ Realistic estimates
✅ Effective communication
✅ Risk management
✅ Executive support`
      },
      {
        title: "Project Planning",
        content: `**Project Planning Process:**

\`\`\`
Define Scope
    ↓
Create WBS
    ↓
Estimate Effort
    ↓
Schedule Tasks
    ↓
Allocate Resources
    ↓
Define Milestones
    ↓
Create Plan Document
\`\`\`

---

**Work Breakdown Structure (WBS)**

Hierarchical decomposition of project work.

\`\`\`
E-Commerce Project
├── 1. Planning
│   ├── 1.1 Requirements
│   └── 1.2 Design
├── 2. Development
│   ├── 2.1 Frontend
│   ├── 2.2 Backend
│   └── 2.3 Database
├── 3. Testing
└── 4. Deployment
\`\`\`

**Rules:**
- 100% rule: WBS captures all work
- Mutually exclusive elements
- Deliverable-oriented

---

**Scheduling:**

**Gantt Chart:**
Visual timeline of tasks.

\`\`\`
Task       |Week1|Week2|Week3|Week4|
-----------|-----|-----|-----|-----|
Design     |████████|     |     |
Development|     |████████████|     |
Testing    |     |     |     |████|
\`\`\`

**Network Diagram (PERT/CPM):**
Shows task dependencies.

**Critical Path:**
Longest path = minimum project duration.

---

**Agile Planning:**

- Release planning
- Sprint planning
- Daily planning
- Velocity-based estimation`
      },
      {
        title: "Estimation Techniques",
        content: `**Why Estimation is Difficult:**

- Intangible nature of software
- Requirements uncertainty
- Technical complexity
- Human factors
- Optimism bias

---

**Estimation Techniques:**

**1. Expert Judgment**
- Based on experience
- Quick but subjective
- Delphi technique for consensus

**2. Analogy-Based**
- Compare with similar past projects
- Adjust for differences
- Requires historical data

**3. Top-Down**
- Estimate overall, decompose
- Quick, less accurate

**4. Bottom-Up**
- Estimate each task, sum up
- More accurate, time-consuming

---

**5. Algorithmic Models:**

**COCOMO II (Constructive Cost Model)**

\`\`\`
Effort = A × Size^B × M

A = constant
Size = KLOC or Function Points
B = scale factor (1.01 - 1.26)
M = effort multipliers
\`\`\`

**Function Point Analysis:**
- Count functional components
- Adjust for complexity
- Convert to effort

---

**6. Planning Poker (Agile)**

1. Present user story
2. Each member selects card
3. Reveal simultaneously
4. Discuss differences
5. Re-vote until consensus

**Story Points:**
Relative sizing (1, 2, 3, 5, 8, 13, 21...)

---

**Estimation Best Practices:**

✅ Use multiple techniques
✅ Include contingency
✅ Track actuals vs estimates
✅ Re-estimate as you learn
✅ Communicate uncertainty`
      },
      {
        title: "Risk Management",
        content: `**Risk:**

Uncertain event that, if occurs, has positive or negative effect on project objectives.

---

**Risk Management Process:**

\`\`\`
Identify → Analyze → Plan → 
Monitor → Control
\`\`\`

---

**1. Risk Identification**

**Techniques:**
- Brainstorming
- Checklists
- SWOT analysis
- Expert interviews

**Common Software Risks:**
- Requirements volatility
- Technology issues
- Staff turnover
- Schedule pressure
- Scope creep
- Integration problems

---

**2. Risk Analysis**

**Qualitative:**

| Probability | Low | Medium | High |
|-------------|-----|--------|------|
| **High Impact** | Medium | High | Critical |
| **Medium Impact** | Low | Medium | High |
| **Low Impact** | Low | Low | Medium |

**Quantitative:**
\`\`\`
Risk Exposure = Probability × Impact
\`\`\`

---

**3. Risk Response Planning**

**Strategies:**

**For Threats:**
- **Avoid:** Eliminate the risk
- **Transfer:** Shift to third party
- **Mitigate:** Reduce probability/impact
- **Accept:** Acknowledge and prepare

**For Opportunities:**
- **Exploit:** Ensure it happens
- **Share:** Partner with others
- **Enhance:** Increase probability
- **Accept:** Take if it happens

---

**4. Monitor & Control**

- Risk register maintenance
- Regular risk reviews
- Trigger conditions
- Contingency execution

---

**Risk Register:**

| ID | Risk | Prob | Impact | Response | Owner |
|----|------|------|--------|----------|-------|
| R1 | Staff leave | M | H | Cross-train | PM |
| R2 | Tech issue | L | H | Prototype | Tech Lead |`
      },
      {
        title: "Project Monitoring & Control",
        content: `**Monitoring Activities:**

- Track progress vs plan
- Collect metrics
- Status reporting
- Issue tracking
- Risk monitoring

---

**Earned Value Management (EVM)**

**Key Metrics:**

**Planned Value (PV):** Budgeted cost of scheduled work

**Earned Value (EV):** Budgeted cost of completed work

**Actual Cost (AC):** Actual cost of completed work

**Variances:**
\`\`\`
Schedule Variance (SV) = EV - PV
Cost Variance (CV) = EV - AC

SV > 0: Ahead of schedule
CV > 0: Under budget
\`\`\`

**Indices:**
\`\`\`
Schedule Performance Index (SPI) = EV / PV
Cost Performance Index (CPI) = EV / AC

> 1: Favorable
< 1: Unfavorable
\`\`\`

---

**Agile Metrics:**

**Velocity:**
Story points completed per sprint.

**Burndown Chart:**
\`\`\`
Story Points
    |\\
    | \\
    |  \\ Ideal
    |   \\______ Actual
    |__________ 
        Days
\`\`\`

**Cumulative Flow Diagram**
Shows WIP and bottlenecks.

---

**Project Reporting:**

**Status Report:**
- Progress summary
- Accomplishments
- Issues/risks
- Next steps
- Metrics

**Dashboard:**
- Visual indicators
- Real-time data
- Key metrics

---

**Tools:**

- Jira, Azure DevOps
- MS Project
- Asana, Trello
- GitHub Projects`
      }
    ],
    references: [
      "PMI. (2021). A Guide to the Project Management Body of Knowledge (PMBOK Guide). 7th Edition.",
      "Stellman, A. & Greene, J. (2014). Head First PMP.",
      "Pressman, R.S. (2020). Software Engineering. Chapter 36-37."
    ]
  },
  {
    id: 15,
    title: "Software Configuration Management",
    type: "materi",
    description: "Mempelajari teknik untuk mengelola perubahan dalam pengembangan perangkat lunak.",
    objectives: [
      "Memahami konsep configuration management",
      "Menguasai version control",
      "Memahami build dan release management",
      "Mengenal CI/CD practices"
    ],
    subtopics: [
      {
        title: "Pengantar Configuration Management",
        content: `**Software Configuration Management (SCM):**

Discipline untuk controlling evolution of software systems.

**Why SCM is Important:**

- Multiple developers working together
- Changes throughout lifecycle
- Multiple versions and variants
- Need to reproduce any version
- Audit and compliance requirements

---

**Configuration Items (CI):**

Any artifact under CM control:
- Source code
- Documentation
- Test cases
- Build scripts
- Configuration files
- Libraries/dependencies

---

**SCM Activities:**

**1. Configuration Identification**
- Define items to control
- Naming conventions
- Relationships between items

**2. Configuration Control**
- Change management
- Approval process
- Impact analysis

**3. Status Accounting**
- Track status of items
- Change history
- Reports

**4. Configuration Auditing**
- Verify completeness
- Compliance checking
- Baseline integrity

---

**Baseline:**

Formally approved version of configuration item(s).

**Types:**
- Functional Baseline (requirements)
- Design Baseline
- Product Baseline (release)

Baselines provide reference points.`
      },
      {
        title: "Version Control Systems",
        content: `**Version Control System (VCS):**

Software untuk tracking changes to files.

---

**Types:**

**1. Local VCS**
- Simple database
- Single user
- Example: RCS

**2. Centralized VCS (CVCS)**
- Single central server
- Checkout/checkin model
- Examples: SVN, CVS

**3. Distributed VCS (DVCS)**
- Every user has full repository
- Work offline
- Examples: Git, Mercurial

---

**Git Basics:**

\`\`\`bash
# Initialize repository
git init

# Clone existing
git clone <url>

# Stage changes
git add <file>
git add .

# Commit
git commit -m "message"

# Push to remote
git push origin main

# Pull changes
git pull origin main

# View history
git log

# Create branch
git branch feature-x
git checkout feature-x
# or
git checkout -b feature-x

# Merge branch
git checkout main
git merge feature-x
\`\`\`

---

**Git Workflow Models:**

**1. Centralized**
- Single main branch
- Simple, small teams

**2. Feature Branch**
- Branch per feature
- Merge when complete

**3. GitFlow**
- main, develop, feature, release, hotfix
- Structured releases

**4. GitHub Flow**
- main + feature branches
- Continuous deployment

**5. Trunk-Based**
- Small, frequent commits to main
- Feature flags`
      },
      {
        title: "Branching Strategies",
        content: `**GitFlow:**

\`\`\`
main      ─────●─────────────────●─────
               ↑                  ↑
hotfix         ├──●──┤            │
               │                  │
release        │    ──●──●───────┤
               │    ↑            │
develop  ●─────●────●────●───────●─────
          \\     ↑    ↑
feature    \\───●    │
                \\──●┘
\`\`\`

**Branches:**
- **main:** Production code
- **develop:** Integration branch
- **feature/*:** New features
- **release/*:** Release preparation
- **hotfix/*:** Production fixes

---

**GitHub Flow:**

\`\`\`
main     ●──────●──────●──────●──────
          \\    / \\    / \\    /
feature    ●──●   ●──●   ●──●
\`\`\`

**Steps:**
1. Create branch from main
2. Add commits
3. Open Pull Request
4. Discuss and review
5. Deploy and test
6. Merge to main

---

**Trunk-Based Development:**

\`\`\`
main     ●──●──●──●──●──●──●──●──●──
\`\`\`

**Principles:**
- Short-lived branches (< 1 day)
- Small, frequent commits
- Feature flags for incomplete work
- Continuous integration

---

**Pull/Merge Requests:**

**Code Review Process:**
1. Developer creates PR
2. Reviewers assigned
3. Automated checks run
4. Review comments
5. Address feedback
6. Approve and merge

**PR Best Practices:**
- Small, focused changes
- Clear description
- Link to issue/ticket
- Include tests`
      },
      {
        title: "Build Management",
        content: `**Build Process:**

Transform source code into executable software.

\`\`\`
Source → Compile → Link → Package → Artifact
\`\`\`

---

**Build Automation:**

**Benefits:**
- Consistent builds
- Reproducible
- Faster
- Less error-prone

**Build Tools:**

**Java:** Maven, Gradle
\`\`\`xml
<!-- Maven pom.xml -->
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
    </plugin>
  </plugins>
</build>
\`\`\`

**JavaScript:** npm, Webpack, Vite
\`\`\`json
{
  "scripts": {
    "build": "vite build",
    "test": "jest"
  }
}
\`\`\`

**Python:** pip, setuptools

**.NET:** MSBuild, dotnet CLI

---

**Dependency Management:**

**Package Managers:**
- npm (JavaScript)
- pip (Python)
- Maven/Gradle (Java)
- NuGet (.NET)

**Dependency Versioning:**
\`\`\`
^1.2.3  → 1.x.x (minor updates OK)
~1.2.3  → 1.2.x (patch updates OK)
1.2.3   → exact version
\`\`\`

**Lock Files:**
- package-lock.json
- Pipfile.lock
- Reproducible installs

---

**Build Environments:**

- Development
- Testing/QA
- Staging
- Production

**Environment Configuration:**
- Environment variables
- Configuration files
- Secrets management`
      },
      {
        title: "CI/CD Pipeline",
        content: `**Continuous Integration (CI):**

Automatically build and test code changes.

**CI Pipeline:**
\`\`\`
Code Push → Build → Unit Test → 
Static Analysis → Integration Test → Artifact
\`\`\`

**CI Best Practices:**
- Commit frequently
- Don't commit broken code
- Fix broken builds immediately
- Keep builds fast
- Test in production-like environment

---

**Continuous Delivery (CD):**

Automated deployment to staging; manual approval to production.

**Continuous Deployment:**

Automated deployment all the way to production.

\`\`\`
CI → Deploy to Staging → 
Acceptance Test → Deploy to Production
\`\`\`

---

**CI/CD Tools:**

- **GitHub Actions**
- **GitLab CI**
- Jenkins
- CircleCI
- Azure DevOps

---

**GitHub Actions Example:**

\`\`\`yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        if: github.ref == 'refs/heads/main'
        run: ./deploy.sh
\`\`\`

---

**Release Management:**

- Version numbering (SemVer)
- Release notes
- Tagging releases
- Rollback procedures`
      }
    ],
    references: [
      "Chacon, S. & Straub, B. (2014). Pro Git. 2nd Edition.",
      "Humble, J. & Farley, D. (2010). Continuous Delivery.",
      "Sommerville, I. (2016). Software Engineering. Chapter 25."
    ]
  },
  {
    id: 16,
    title: "Ujian Akhir Semester (UAS)",
    type: "uas",
    description: "Evaluasi komprehensif seluruh materi Rekayasa Perangkat Lunak.",
    objectives: [
      "Mengevaluasi pemahaman seluruh materi RPL",
      "Menguji kemampuan analisis dan sintesis",
      "Mengukur kemampuan aplikasi konsep",
      "Menilai kemampuan problem-solving"
    ],
    subtopics: [
      {
        title: "Cakupan Materi UAS",
        content: `**Materi UAS mencakup Pertemuan 1-15**

**Fokus Utama (Pertemuan 9-15):**

**9. Software Testing**
- Testing levels dan types
- Black-box dan white-box testing
- Test automation

**10. Software Evolution**
- Types of maintenance
- Reengineering
- Technical debt

**11. Software Reuse**
- Levels of reuse
- Component-based development
- Frameworks dan product lines

**12. Software Security**
- OWASP Top 10
- Secure development lifecycle
- Security testing

**13. Software Quality Management**
- Quality models (ISO 25010)
- QA vs QC
- Reviews dan inspections
- Quality metrics

**14. Software Project Management**
- Planning dan estimation
- Risk management
- Monitoring (EVM, Agile metrics)

**15. Configuration Management**
- Version control (Git)
- Branching strategies
- CI/CD pipelines

---

**Materi UTS (Review):**
- Proses perangkat lunak
- Agile development
- Requirements engineering
- System modeling (UML)
- Architectural design
- Design patterns (SOLID)`
      },
      {
        title: "Bentuk Soal UAS",
        content: `**Komposisi Soal UAS:**

**A. Pilihan Ganda (25%)**
- 12-15 soal
- Konsep dan definisi
- Perbandingan teknik/method

**B. True/False + Justifikasi (15%)**
- 5 soal
- Jelaskan jika False

**C. Isian Singkat (15%)**
- 8-10 soal
- Terminologi dan komponen

**D. Essay/Case Study (45%)**
- 4-5 soal
- Analisis kasus
- Aplikasi konsep
- Problem solving

---

**Contoh Soal:**

**Pilihan Ganda:**
Testing technique yang membagi input domain menjadi kelas-kelas yang equivalent disebut:
a) Boundary value analysis
b) Decision table
c) Equivalence partitioning ✓
d) State transition

**True/False:**
"Unit testing harus dilakukan oleh QA team."
FALSE - Unit testing adalah tanggung jawab developer.

**Essay:**
Sebuah startup fintech ingin membangun aplikasi mobile banking. Tentukan:
1. Model proses yang tepat dan alasannya
2. Quality attributes yang paling penting
3. Security considerations
4. Testing strategy yang direkomendasikan

**Case Study:**
Diberikan project scenario, analisis:
- Risk assessment
- Estimation approach
- CI/CD pipeline design`
      },
      {
        title: "Tips Sukses UAS",
        content: `**Persiapan Sebelum UAS:**

**1. Review Materi**
✅ Baca ulang semua materi kuliah
✅ Fokus pada konsep dan hubungan antar topik
✅ Pahami "why" bukan hanya "what"

**2. Latihan Soal**
✅ Kerjakan soal-soal latihan
✅ Buat mind map antar topik
✅ Diskusi dengan teman

**3. Persiapan Fisik**
✅ Istirahat cukup malam sebelumnya
✅ Makan dengan baik
✅ Datang lebih awal

---

**Strategi Mengerjakan UAS:**

**1. Baca Semua Soal Dulu**
- Identifikasi soal mudah vs sulit
- Alokasi waktu

**2. Kerjakan yang Mudah Dulu**
- Bangun confidence
- Amankan nilai

**3. Essay Tips**
- Buat outline singkat
- Jawab dengan struktur jelas
- Gunakan terminologi yang benar
- Berikan contoh konkret
- Jangan lupa kesimpulan

**4. Case Study Tips**
- Baca kasus dengan teliti
- Identifikasi requirements/constraints
- Apply konsep yang relevan
- Justify keputusan Anda

---

**Topik yang Sering Muncul:**

🔥 Perbandingan testing techniques
🔥 OWASP Top 10 vulnerabilities
🔥 Quality metrics (DRE, coverage)
🔥 Risk management process
🔥 Git workflow dan branching
🔥 CI/CD pipeline
🔥 Maintenance types
🔥 Design patterns application

---

**Yang Harus Dihindari:**

❌ Menghafal tanpa memahami
❌ Skip materi tertentu
❌ Menjawab tanpa struktur
❌ Tidak memberikan contoh
❌ Panik saat tidak tahu jawaban`
      },
      {
        title: "Rangkuman Seluruh Materi",
        content: `**Mind Map Rekayasa Perangkat Lunak:**

\`\`\`
                    RPL
                     │
    ┌────────────────┼────────────────┐
    │                │                │
 Process         Technical        Management
    │                │                │
 ┌──┴──┐        ┌────┴────┐      ┌───┴───┐
Waterfall     Analysis    Testing  Planning
Agile         Design      Security  Tracking
Scrum         Implement   Quality   Risk
XP            Evolution   Reuse     SCM
\`\`\`

---

**Key Takeaways per Topik:**

**Process:**
- Pilih model sesuai context
- Agile untuk uncertainty
- Waterfall untuk stability

**Requirements:**
- Functional vs Non-functional
- Elicitation → Analysis → Validation
- Requirements change - manage them

**Design:**
- Architecture before coding
- SOLID principles
- Design patterns untuk common problems

**Testing:**
- Test early, test often
- Multiple levels (unit → acceptance)
- Automate what makes sense

**Security:**
- Security by design
- Know OWASP Top 10
- Defense in depth

**Quality:**
- Prevention > Detection
- Measure to improve
- Reviews are cost-effective

**Project Management:**
- Plan but be adaptive
- Manage risks proactively
- Track and communicate

**Configuration Management:**
- Version everything
- Automate builds
- CI/CD is essential

---

**Final Advice:**

"Rekayasa Perangkat Lunak adalah tentang membangun software yang BENAR dengan cara yang BENAR - memenuhi kebutuhan user, berkualitas tinggi, delivered on time dan budget, dan maintainable untuk masa depan."`
      }
    ],
    references: [
      "Semua referensi dari Pertemuan 1-15"
    ]
  }
];
