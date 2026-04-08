import { Meeting } from '../types';

export const meeting15: Meeting = {
  id: 15,
  title: "Software Configuration Management",
  type: "materi",
  description: "Memahami version control, build management, dan release management dalam software development.",
  objectives: [
    "Memahami konsep configuration management",
    "Menguasai version control dengan Git",
    "Memahami branching strategies",
    "Mengenal CI/CD practices"
  ],
  subtopics: [
    {
      title: "Configuration Management",
      content: `**Software Configuration Management (SCM) adalah proses tracking dan controlling changes dalam software.**

**SCM Activities:**

**1. Version Control**
- Track changes to code
- Maintain history
- Enable collaboration
- Rollback capabilities

**2. Build Management**
- Compile source code
- Run tests
- Package artifacts
- Automate builds

**3. Release Management**
- Version numbering
- Release notes
- Deployment procedures
- Rollback plans

**4. Change Management**
- Change requests
- Impact analysis
- Approval process
- Implementation tracking

**Benefits:**
- Team collaboration
- Code history
- Parallel development
- Backup dan recovery
- Traceability`
    },
    {
      title: "Git & CI/CD",
      content: `**Git Version Control:**

**Basic Concepts:**
- **Repository** - Project storage
- **Commit** - Snapshot of changes
- **Branch** - Parallel development line
- **Merge** - Combine branches
- **Remote** - Server repository

**Git Workflow:**
1. Clone repository
2. Create branch
3. Make changes
4. Commit changes
5. Push to remote
6. Create pull request
7. Code review
8. Merge to main

**Branching Strategies:**

**Git Flow:**
- main (production)
- develop (integration)
- feature/* (new features)
- release/* (release preparation)
- hotfix/* (production fixes)

**GitHub Flow:**
- main (production)
- feature branches
- Pull requests
- Deploy from main

**Trunk-Based Development:**
- Single main branch
- Short-lived feature branches
- Frequent integration

**CI/CD (Continuous Integration/Continuous Deployment):**

**Continuous Integration:**
- Automated builds
- Automated tests
- Frequent commits
- Fast feedback

**Continuous Deployment:**
- Automated deployment
- Production releases
- Monitoring
- Rollback capability

**CI/CD Tools:**
- Jenkins
- GitLab CI
- GitHub Actions
- CircleCI
- Travis CI`
    }
  ],
  references: [
    "Chacon, S. & Straub, B. (2014). Pro Git. 2nd Edition.",
    "Humble, J. & Farley, D. (2010). Continuous Delivery."
  ],
  assignments: [
    {
      id: "tugas-15-1",
      title: "Setup CI/CD Pipeline",
      type: "praktikum",
      description: "Setup complete CI/CD pipeline untuk aplikasi, dari commit hingga automated deployment, dengan automated testing dan quality gates.",
      instructions: [
        "LANGKAH 1 - PREPARE APPLICATION: Siapkan aplikasi untuk CI/CD: (a) Pilih atau buat aplikasi sederhana (web app dengan backend dan frontend), (b) Pastikan ada unit tests dan integration tests, (c) Push ke GitHub repository.",
        "LANGKAH 2 - CHOOSE CI/CD PLATFORM: Pilih platform CI/CD: (a) GitHub Actions (recommended, free untuk public repos), (b) GitLab CI, (c) CircleCI, (d) Jenkins (self-hosted). Setup account dan connect ke repository.",
        "LANGKAH 3 - CONFIGURE BUILD: Buat build configuration file: (a) GitHub Actions: .github/workflows/ci.yml, (b) GitLab: .gitlab-ci.yml. Configure build steps: install dependencies, compile/build, run linter.",
        "LANGKAH 4 - AUTOMATED TESTING: Configure automated testing: (a) Run unit tests, (b) Run integration tests, (c) Generate code coverage report, (d) Fail build jika tests fail atau coverage <80%.",
        "LANGKAH 5 - QUALITY GATES: Integrate quality checks: (a) SonarCloud untuk code quality, (b) Snyk atau Dependabot untuk security vulnerabilities, (c) Set quality gates: fail jika ada critical issues.",
        "LANGKAH 6 - BUILD ARTIFACTS: Configure artifact generation: (a) Build Docker image, (b) Push ke Docker Hub atau GitHub Container Registry, (c) Tag dengan version number dan commit SHA.",
        "LANGKAH 7 - DEPLOYMENT STAGES: Setup multi-stage deployment: (a) Development: auto-deploy setiap commit ke dev environment, (b) Staging: auto-deploy setiap merge ke main branch, (c) Production: manual approval required.",
        "LANGKAH 8 - DEPLOYMENT TARGET: Deploy ke platform: (a) Heroku (free tier), (b) Vercel/Netlify (untuk frontend), (c) AWS/GCP/Azure (jika ada akses), (d) Self-hosted server. Configure deployment scripts.",
        "LANGKAH 9 - MONITORING: Setup basic monitoring: (a) Health check endpoint, (b) Uptime monitoring (UptimeRobot), (c) Error tracking (Sentry free tier), (d) Notification ke Slack/Discord jika deployment fail.",
        "LANGKAH 10 - DOCUMENTATION: Tulis dokumentasi lengkap: (1) Architecture diagram, (2) CI/CD pipeline flow, (3) Configuration explanation, (4) How to trigger deployment, (5) Troubleshooting guide, (6) Metrics dan monitoring.",
        "LANGKAH 11 - DEMO: Buat video demo yang menunjukkan: (a) Commit code change, (b) CI pipeline running, (c) Tests passing, (d) Quality gates passing, (e) Automated deployment, (f) Application running di production."
      ],
      deliverables: [
        "GitHub repository dengan CI/CD configured",
        "CI/CD configuration files (workflows/pipeline files)",
        "Deployed application (live URL)",
        "CI/CD pipeline documentation (format Markdown)",
        "Architecture diagram (CI/CD flow)",
        "Video demo (5-10 menit, upload ke YouTube)",
        "Laporan implementasi (format PDF, minimal 8 halaman)",
        "Screenshots dari: pipeline runs, test results, quality gates, deployments"
      ],
      duration: "2 minggu (14 hari kalender)",
      difficulty: "sulit",
      skills: [
        "CI/CD setup",
        "Pipeline configuration",
        "Automated testing",
        "Docker containerization",
        "Cloud deployment",
        "DevOps practices"
      ],
      resources: [
        "GitHub Actions documentation",
        "Docker documentation",
        "Heroku deployment guide",
        "SonarCloud setup guide",
        "Example CI/CD configurations"
      ],
      rubric: [
        {
          criteria: "Pipeline Completeness",
          excellent: "Pipeline lengkap dengan build, test, quality gates, dan multi-stage deployment",
          good: "Pipeline lengkap dengan build, test, dan deployment",
          satisfactory: "Pipeline hanya build dan test, tanpa deployment",
          points: 35
        },
        {
          criteria: "Automation Quality",
          excellent: "Fully automated dengan quality gates dan proper error handling",
          good: "Automated dengan beberapa manual steps",
          satisfactory: "Partially automated dengan banyak manual intervention",
          points: 30
        },
        {
          criteria: "Documentation",
          excellent: "Dokumentasi sangat lengkap, jelas, dan mudah diikuti",
          good: "Dokumentasi lengkap dan cukup jelas",
          satisfactory: "Dokumentasi kurang lengkap atau tidak jelas",
          points: 20
        },
        {
          criteria: "Demo & Presentation",
          excellent: "Video demo sangat jelas dan menunjukkan semua aspek pipeline",
          good: "Video demo cukup jelas",
          satisfactory: "Video demo kurang jelas atau tidak lengkap",
          points: 15
        }
      ]
    }
  ]
};
