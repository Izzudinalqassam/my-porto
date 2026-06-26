/**
 * Tujuan: Data pengalaman profesional Izzudin Alqassam
 * Caller: ExperienceSection.jsx via TimelineItem
 * Dependensi: -
 * Main Functions: experiences (array)
 * Side Effects: None
 * Last Updated: 2026-06-26 (sync dengan cv_alqa.md)
 */

const experiences = [
  {
    id: 1,
    title: "TechOps Engineer",
    company: "PT Nodeflux Teknologi Indonesia",
    period: "February 2025 - Present",
    location: "South Jakarta, Indonesia",
    skills: ["Linux", "Ansible", "Docker", "Docker Compose", "PostgreSQL", "Prometheus", "Grafana", "SigNoz", "Shell Scripting"],
    icon: "Rocket",
    level: "Contract",
    achievements: [
      "Manage and maintain 100+ Linux production servers across diverse client environments, ensuring 99.9% infrastructure stability",
      "Automated provisioning and deployment workflows for 50+ Docker-based services using Ansible, minimizing manual intervention",
      "Administer production PostgreSQL databases and deploy AI/computer vision solutions using Docker containers",
      "Implemented centralized monitoring using Prometheus, Grafana, and SigNoz for 100+ infrastructure components",
      "Monitor system logs and workloads to conduct root-cause analysis (RCA) on production incidents with 24/7 operational support"
    ]
  },
  {
    id: 2,
    title: "IT Programmer",
    company: "PT Jababeka, Tbk",
    period: "September 2024 - January 2025",
    location: "Cikarang, Indonesia",
    skills: ["PHP", "MySQL", "ESP8266", "RFID", "IoT", "Web Development", "REST API"],
    icon: "Code",
    level: "Internship (MSIB Batch 7)",
    achievements: [
      "Architected a web-based workforce attendance and vehicle tracking system using PHP, MySQL, and ESP8266 microcontrollers, reducing manual data entry by ~50%",
      "Engineered a relational MySQL database with 10+ optimized tables to synchronize real-time RFID transaction logs for 100+ personnel",
      "Designed and implemented an internal EHS management system, streamlining reporting workflows and cutting administrative overhead by 50%",
      "Formulated over 20 pages of exhaustive technical documentation covering system architecture and deployment guidelines"
    ]
  },
  {
    id: 3,
    title: "Technical Support",
    company: "Universitas Bina Sarana Informatika",
    period: "May 2024 - September 2024",
    location: "Cikarang, Indonesia",
    skills: ["Technical Support", "Network Monitoring", "AV Systems", "System Administration", "Hardware Troubleshooting"],
    icon: "GraduationCap",
    level: "Internship",
    achievements: [
      "Prepared, verified, and maintained campus computer labs and classroom technical setups weekly for dozens of academic staff",
      "Responded to real-time technical disruptions during live classes and campus events, rapidly resolving issues within minutes",
      "Monitored campus-wide network and detected connectivity issues proactively"
    ]
  },
  {
    id: 4,
    title: "IBM Cloud & Cyber Security",
    company: "PT Kinema Systrans Multimedia (Infinite Learning)",
    period: "August 2023 - January 2024",
    location: "Online, Indonesia",
    skills: ["IBM Cloud", "Red Hat Enterprise Linux (RHEL)", "IBM QRadar", "Cybersecurity", "Firewall Configuration", "System Hardening"],
    icon: "Shield",
    level: "Internship (MSIB Batch 5)",
    achievements: [
      "Administered Red Hat Enterprise Linux (RHEL) virtual machines, configuring user access rights, directory permissions, and core service setups",
      "Conducted security monitoring and log analysis using IBM QRadar to detect potential network anomalies",
      "Applied basic firewall rules to secure test environments",
      "Recognized as the Most Active Student with the Highest Academic Performance"
    ]
  },
  {
    id: 5,
    title: "IT Support",
    company: "PT Prima Unggul Persada",
    period: "May 2023 - August 2023",
    location: "Cikarang, Indonesia",
    skills: ["Helpdesk Support", "Hardware Maintenance", "Backup Management", "Preventive Maintenance", "Troubleshooting"],
    icon: "Monitor",
    level: "Internship",
    achievements: [
      "Resolved hardware, software, and basic connectivity issues for office users, maintaining workstation readiness",
      "Assisted in processing daily technical helpdesk requests and escalating critical issues to senior engineers",
      "Executed routine preventive maintenance checks and assisted with data backup workflows"
    ]
  }
];

export default experiences;
