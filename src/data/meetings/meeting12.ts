import { Meeting } from '../types';

export const meeting12: Meeting = {
  id: 12,
  title: "Software Security",
  type: "materi",
  description: "Memahami prinsip-prinsip keamanan software dan implementasi secure coding practices.",
  objectives: [
    "Memahami security threats dan vulnerabilities",
    "Mengenal OWASP Top 10",
    "Mampu menerapkan secure coding practices",
    "Memahami security testing"
  ],
  subtopics: [
    {
      title: "Security Fundamentals",
      content: `**Security Principles:**

**CIA Triad:**
1. **Confidentiality** - Data hanya accessible oleh authorized parties
2. **Integrity** - Data tidak diubah tanpa authorization
3. **Availability** - System dan data available saat dibutuhkan

**Additional Principles:**
- **Authentication** - Verify identity
- **Authorization** - Control access
- **Non-repudiation** - Cannot deny actions
- **Accountability** - Track actions

**Common Threats:**
- Unauthorized access
- Data breaches
- Denial of Service (DoS)
- Man-in-the-Middle attacks
- SQL Injection
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)`
    },
    {
      title: "OWASP Top 10 & Secure Coding",
      content: `**OWASP Top 10 (2021):**

1. **Broken Access Control**
2. **Cryptographic Failures**
3. **Injection**
4. **Insecure Design**
5. **Security Misconfiguration**
6. **Vulnerable Components**
7. **Authentication Failures**
8. **Software and Data Integrity Failures**
9. **Security Logging Failures**
10. **Server-Side Request Forgery**

**Secure Coding Practices:**
- Input validation
- Output encoding
- Parameterized queries
- Principle of least privilege
- Defense in depth
- Fail securely
- Keep security simple
- Don't trust external data`
    }
  ],
  references: [
    "OWASP Top 10 - 2021",
    "Seacord, R. (2013). Secure Coding in C and C++."
  ],
  assignments: [
    {
      id: "tugas-12-1",
      title: "Security Audit dan Penetration Testing",
      type: "kelompok",
      description: "Lakukan security audit pada aplikasi web (bisa aplikasi kampus atau demo app), identifikasi vulnerabilities, dan buat recommendations untuk fix.",
      instructions: [
        "LANGKAH 1 - PILIH TARGET: Pilih aplikasi web untuk audit: (a) Aplikasi demo yang sengaja vulnerable (DVWA, WebGoat, Juice Shop), (b) Aplikasi kampus (dengan izin resmi), (c) Own developed application. PENTING: Jangan test aplikasi production tanpa izin!",
        "LANGKAH 2 - SETUP ENVIRONMENT: Setup testing environment: (a) Install Kali Linux atau Parrot OS (VM), (b) Install tools: Burp Suite, OWASP ZAP, Nikto, SQLMap, (c) Setup proxy untuk intercept traffic.",
        "LANGKAH 3 - RECONNAISSANCE: Kumpulkan informasi tentang target: (a) Technology stack (Wappalyzer), (b) Open ports (Nmap), (c) Directory structure (DirBuster), (d) Robots.txt dan sitemap.",
        "LANGKAH 4 - VULNERABILITY SCANNING: Jalankan automated scanners: (a) OWASP ZAP automated scan, (b) Nikto web server scanner, (c) Analyze hasil scan dan prioritize findings.",
        "LANGKAH 5 - MANUAL TESTING: Test untuk OWASP Top 10 vulnerabilities: (a) SQL Injection (test dengan SQLMap), (b) XSS (reflected, stored, DOM-based), (c) Broken Authentication, (d) Sensitive Data Exposure, (e) XML External Entities (XXE), (f) Broken Access Control, (g) Security Misconfiguration, (h) CSRF, (i) Using Components with Known Vulnerabilities, (j) Insufficient Logging.",
        "LANGKAH 6 - EXPLOIT (ETHICAL): Untuk setiap vulnerability yang ditemukan, buat Proof of Concept (PoC). Screenshot atau video sebagai evidence. HANYA untuk learning purpose!",
        "LANGKAH 7 - RISK ASSESSMENT: Untuk setiap vulnerability, tentukan: (a) Severity (Critical/High/Medium/Low), (b) Likelihood, (c) Impact, (d) Risk score (Severity x Likelihood).",
        "LANGKAH 8 - RECOMMENDATIONS: Untuk setiap vulnerability, berikan: (a) Detailed explanation, (b) Proof of Concept, (c) Impact analysis, (d) Remediation steps (how to fix), (e) Code examples untuk fix.",
        "LANGKAH 9 - SECURITY REPORT: Tulis professional security audit report dengan struktur: (1) Executive Summary, (2) Scope, (3) Methodology, (4) Findings (per vulnerability), (5) Risk Matrix, (6) Recommendations, (7) Conclusion.",
        "LANGKAH 10 - RESPONSIBLE DISCLOSURE: Jika menemukan vulnerability di aplikasi real, lakukan responsible disclosure ke pihak terkait. Dokumentasikan proses disclosure."
      ],
      deliverables: [
        "Security Audit Report (format PDF, minimal 15 halaman)",
        "Vulnerability findings dengan PoC (screenshots/videos)",
        "Risk assessment matrix",
        "Remediation guide dengan code examples",
        "Scan results dari automated tools",
        "Presentasi (20-25 slide)",
        "Responsible disclosure documentation (jika applicable)"
      ],
      duration: "3 minggu (21 hari kalender)",
      difficulty: "sulit",
      skills: [
        "Security testing",
        "Penetration testing",
        "Vulnerability assessment",
        "Risk analysis",
        "Ethical hacking",
        "Security reporting"
      ],
      resources: [
        "OWASP Testing Guide",
        "Kali Linux tools documentation",
        "DVWA (Damn Vulnerable Web Application)",
        "WebGoat",
        "OWASP Juice Shop",
        "Burp Suite Community Edition",
        "Template security report"
      ],
      rubric: [
        {
          criteria: "Vulnerability Discovery",
          excellent: "Menemukan 10+ vulnerabilities dengan berbagai severity levels",
          good: "Menemukan 5-9 vulnerabilities",
          satisfactory: "Menemukan <5 vulnerabilities",
          points: 30
        },
        {
          criteria: "Testing Methodology",
          excellent: "Metodologi testing sangat sistematis dan comprehensive",
          good: "Metodologi testing cukup baik dan terstruktur",
          satisfactory: "Metodologi testing kurang sistematis",
          points: 25
        },
        {
          criteria: "Recommendations Quality",
          excellent: "Recommendations sangat detail dengan code examples dan best practices",
          good: "Recommendations cukup detail dan actionable",
          satisfactory: "Recommendations kurang detail atau tidak actionable",
          points: 25
        },
        {
          criteria: "Report Quality",
          excellent: "Report sangat profesional, lengkap, dan well-structured",
          good: "Report profesional dan terstruktur",
          satisfactory: "Report kurang profesional atau tidak lengkap",
          points: 20
        }
      ]
    }
  ]
};
