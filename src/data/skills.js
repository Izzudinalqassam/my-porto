/**
 * Tujuan: Data technical skills Izzudin Alqassam
 * Caller: SkillsSection.jsx via SkillCategory
 * Dependensi: -
 * Main Functions: skills (array)
 * Side Effects: None
 * Last Updated: 2026-06-26 (sync dengan cv_alqa.md)
 */

const skills = [
  {
    id: 1,
    name: "OS & Infrastructure",
    items: [
      "Linux (Ubuntu, RHEL)",
      "Windows Administration",
      "User & Permission Management",
      "Server Administration",
      "System Hardening"
    ],
    icon: "Server",
    color: "from-cyan-400 to-teal-500"
  },
  {
    id: 2,
    name: "DevOps & Automation",
    items: [
      "Docker",
      "Docker Compose",
      "Ansible",
      "Git",
      "Shell Scripting",
      "CI/CD Pipelines"
    ],
    icon: "GitBranch",
    color: "from-emerald-400 to-cyan-500"
  },
  {
    id: 3,
    name: "Monitoring & Observability",
    items: [
      "Prometheus",
      "Grafana",
      "SigNoz",
      "Node Exporter",
      "Log Analysis",
      "Root-Cause Analysis"
    ],
    icon: "Activity",
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: 4,
    name: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "Relational Database Design",
      "SQL Development",
      "DBeaver"
    ],
    icon: "Database",
    color: "from-violet-400 to-purple-500"
  },
  {
    id: 5,
    name: "Programming",
    items: [
      "PHP",
      "Python",
      "JavaScript",
      "REST APIs",
      "HTML/CSS"
    ],
    icon: "Code2",
    color: "from-orange-400 to-amber-500"
  },
  {
    id: 6,
    name: "Cloud & Platform",
    items: [
      "Google Cloud Platform",
      "Vertex AI",
      "AWS (Fundamental)",
      "IBM Cloud",
      "GitHub Pages",
      "VM Provisioning"
    ],
    icon: "Cloud",
    color: "from-sky-400 to-blue-500"
  },
  {
    id: 7,
    name: "Networking & Security",
    items: [
      "TCP/IP",
      "MikroTik",
      "Cisco Packet Tracer",
      "IBM QRadar",
      "Firewall Configuration"
    ],
    icon: "Shield",
    color: "from-rose-400 to-pink-500"
  },
  {
    id: 8,
    name: "IoT & Embedded",
    items: [
      "ESP8266",
      "RFID Integration",
      "Real-time Monitoring"
    ],
    icon: "Cpu",
    color: "from-lime-400 to-green-500"
  }
];

export default skills;
