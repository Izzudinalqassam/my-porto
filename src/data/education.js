/**
 * Tujuan: Data pendidikan dan program Izzudin Alqassam
 * Caller: EducationSection.jsx via TimelineItem
 * Dependensi: -
 * Main Functions: education (array)
 * Side Effects: None
 * Last Updated: 2026-06-26 (sync dengan cv_alqa.md, tambah #JuaraGCP)
 */

const education = [
  {
    id: 1,
    degree: "Bachelor of Information Technology (S1)",
    institution: "Universitas Bina Sarana Informatika",
    location: "Bekasi, Indonesia",
    period: "September 2021 - December 2025",
    gpa: "4.00/4.00",
    icon: "GraduationCap",
    level: "S1",
    highlights: [
      "Thesis: Perancangan Sistem Monitoring Karyawan Secara Real Time Berbasis IOT dan Website Pada PT Jababeka & Co",
      "Selected for and successfully completed two Kampus Merdeka MSIB cohorts (Batch 5 & 7)",
      "Specializations: System Administration, Cloud Computing, Cybersecurity, Full-stack Web Development"
    ],
    achievements: [
      "Perfect GPA: 4.00/4.00",
      "Two successful MSIB program completions",
      "BNSP National Certifications (Network Administrator & Software Developer)"
    ],
    skills: ["System Administration", "Cloud Computing", "Cybersecurity", "Web Development", "Database Systems", "Networking"]
  },
  {
    id: 2,
    degree: "#JuaraGCP Season 12 — Google Cloud AI Study Jam",
    institution: "Google Cloud",
    location: "Online",
    period: "January 2026 - March 2026",
    gpa: null,
    icon: "Cloud",
    level: "Program",
    highlights: [
      "Participated in a structured self-paced learning program focused on AI, ML, Data, and Security using Google Cloud Platform",
      "Completed hands-on labs using Gemini, Vertex AI, and Agent Development Kit (ADK)",
      "Verify Badges: credly.com/users/izzudin-al-qassam"
    ],
    achievements: [
      "Earned 10+ Google Cloud badges (including 6+ skill badges)",
      "Completed real-world scenarios and guided labs on Vertex AI and ADK"
    ],
    skills: ["Google Cloud Platform", "Vertex AI", "Gemini", "ADK", "Machine Learning", "Data", "Security"]
  }
];

export default education;
