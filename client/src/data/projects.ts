import TaskWiseMarketingWebsite from "../assets/projects/taskwise/taskwise-promo.webp"
import TaskWiseTeamCardView from "../assets/projects/taskwise/taskwise-team-tasks-cardview.webp"
import TaskWiseDashboard from "../assets/projects/taskwise/taskwise-dashboard.webp"
import TaskWiseAiAssistant from "../assets/projects/taskwise/taskwise-ai-assistant.webp"
import AquaPonnectControl from "../assets/projects/aquaponnect/AquaPonnectControl.webp"
import AquaPonnectGraph from "../assets/projects/aquaponnect/AquaPonnectGraph.webp"
import AquaPonnectMonitor from "../assets/projects/aquaponnect/AquaPonnectMonitor.webp"
import AquaPonnectCertificate from "../assets/projects/aquaponnect/AquaPonnectCertificate.webp"

type Snippets = {
    source: string;
    caption?: string;
}

type Project = {
  id: string;
  title: string;
  shortdesc: string;
  longdesc: string;
  snippets: Snippets[];
  techStack?: string[];
  repo?: string;
  live?: string;
  link?: string;
}

export const projects: Project[] = [
    {
        id: "taskwise",
        title: "TaskWise",
        shortdesc: "Full-stack AI-powered task management SaaS built with MERN stack. Features real-time collaboration, RAG-enhanced insights, multi-tenant architecture, and PayPal subscriptions.",
        longdesc: `🚀 TaskWise — Project Overview
        TaskWise is a multi-tenant SaaS platform designed for efficient task management — from personal goals to team collaboration. It offers modern UI, deep analytics, and AI-powered insights, enabling users to work smarter and faster.

        ✨ Key Features

        🧍 Personal Task Management
        ● Create, edit, duplicate, archive, or unarchive tasks
        ● Smooth list view CRUD operations
        ● Track deadlines, progress, and completion
        ● Fully responsive interface with light/dark/system themes

        👥 Team Collaboration
        ● Three task views: Card, Table, List
        ● Filter tasks by description, subtasks, or assigned users
        ● Assign/unassign tasks to members
        ● Comment and upload images
        ● Smart notifications and read/unread tracking
        ● Invite members via shareable team links

        🧩 Roles & Permissions
        ● Leader → Full access
        ● Admin → Edit-only access
        ● Member → View-only access

        📦 Archiving System
        ● Tasks are archived, not deleted, ensuring safe retrieval
        ● Supports both personal and team tasks

        🧾 Logging & History
        ● Team activity log tracks: joins, leaves, task updates, comments, and more
        ● Filter logs by user, entity, or action type

        🤖 AI-Powered Features
        ● RAG Implementation (Retrieval-Augmented Generation) powers intelligent assistance:
        ● Personalized task insights (trends, deadlines, ongoing tasks)
        ● AI Assistant Chatbot for context-aware queries
        ● FAQ Helpbot on promo website
        ● Combines OpenAI API + Supabase vector embeddings for precise, dynamic responses
        Example queries your AI assistant can answer:
        -“What tasks are due this week?”
        -“Summarize our team's progress this month”

        💳 Subscription & Monetization
        Plan |	Description	 |  Key Benefits
        🆓 Free |    For individuals exploring TaskWise |	Join/create up to 3 teams, 12h AI insight cooldown
        -----------------------------------------
        💎 Pro ($5/mo)|	Full platform access |	Unlimited teams, 30min AI insight cooldown, AI chatbot access

        ● Secure recurring PayPal subscriptions
        ● Cancel anytime — access retained until billing period ends
        ● Automatic subscription checks using NodeCron

        📊 Dashboard Highlights
        ● Metric cards for task totals (Done, Ongoing, Pending)
        ● Growth analytics month-to-month
        ● AI-powered insights
        ● Interactive calendar with due dates
        ● Focus Mode: Countdown timer for selected tasks

        🛠️ Tech Stack

        Frontend
        ⚛️ React (Vite)
        💨 Tailwind CSS
        🎨 Material-UI (MUI)
        🎞️ Framer Motion

        Backend
        🧩 Node.js + Express
        🍃 MongoDB + Mongoose
        🔐 JWT Authentication + Google OAuth2
        🔄 Socket.io for real-time updates
        🕓 NodeCron (subscription checks)
        💵 PayPal REST API

        AI & Data
        🤖 OpenAI API (Insights & Chatbot)
        🧠 Supabase (Vector embeddings + FAQ search)

        Infrastructure
        ☁️ Cloudinary (Image uploads)
        📮 Resend (Email service)
        🚀 Upstash Redis (Caching & rate limiting)
        
        🌗 Theme & Responsiveness
        ● Light, Dark, and System-adaptive themes
        ● Fully responsive across all screen sizes
        ● Built with modern UI principles — fluid grids, shadows, and micro-animations

        🔐 Authentication
        ● Secure login via Google OAuth2 or email/password
        ● Access tokens handled with JWT
        ● Session protection with rate-limiting middleware

        ⚡ Real-Time Collaboration
        ● WebSocket-driven updates for:
            -Task creation/updates
            -Comment additions
            -Member online/offline presence
        ● Optimized for low-latency team interactions

        `,
        snippets: [{ source: TaskWiseMarketingWebsite, caption: "Marketing Website"}, { source: TaskWiseTeamCardView, caption: "Team Tasks Card View"}, { source: TaskWiseDashboard, caption: "Dashboard"}, { source: TaskWiseAiAssistant, caption: "AI Assistant"}],
        repo: "https://github.com/dexterr404/task-wise",
        live: "https://task-wise-nine.vercel.app/"
    },
    {
        id: "aquaponnect",
        title: "AquaPonnect",
        shortdesc: "Designed and implemented a full-stack IoT monitoring solution for aquaponics, leveraging Kotlin and Firebase for real-time data sync.",
        longdesc: `🐟 AquaPonnect — Real-Time IoT Aquaponics Monitoring System
        AquaPonnect is an Android-based IoT solution that enables real-time monitoring and remote control of aquaponics systems through cloud integration. It connects sensors, controllers, and mobile devices into one cohesive platform for smarter and more sustainable aquaponics management.

        🌐 Overview
        Built with Firebase Realtime Database and ESP32 microcontrollers, AquaPonnect allows users to monitor system parameters like pH levels, water temperature, and total dissolved solids, while also remotely controlling devices such as pumps and feeders.

        ⚙️ Key Features
        📱 Android App (Kotlin) — Developed a mobile application for real-time monitoring and control of aquaponics systems.
        ☁️ Cloud Integration (Firebase Realtime Database) — Enabled seamless, two-way data synchronization between devices and the cloud.
        ⚙️ Embedded Systems (C++ / ESP32) — Designed and programmed microcontrollers to collect sensor data, control actuators, and communicate with the cloud.
        📊 Real-Time Data Visualization — Displays live readings from sensors with automatic updates via Firebase synchronization.
        🔁 Two-Way Cloud Communication — Enables seamless data flow between the mobile app, cloud database, and IoT hardware.
        ⚡ Remote Device Control — Users can toggle pumps and feeders directly from the app.
        🚨 Automated Alerts — Push notifications are sent when critical thresholds (e.g., pH or temperature) are reached.
        🧩 Offline Resilience — Automatically queues and syncs updates once the connection is restored.

        🧠 Technical Highlights
        ● Designed and implemented the cloud and embedded architecture, ensuring stable real-time communication between ESP32 devices and Firebase.
        ● Developed the embedded firmware for sensor reading, motor control, and data synchronization.
        ● Built the Android application for monitoring, device management, and visualization using Firebase SDK and custom UI components.
        ● Optimized the data pipeline to reduce latency and improve synchronization reliability.
        ● Created network architecture diagrams to document system flow and support scalability planning.

        🏆 Impact
        Our team’s work on AquaPonnect was recognized as the Best Capstone Project for delivering an impactful, research-backed technology solution.
        The system was successfully deployed in a neighboring college, demonstrating its real-world viability and potential for broader implementation in sustainable aquaponics management.`,
        snippets: [{ source: AquaPonnectControl, caption: "Control Panel"}, { source: AquaPonnectGraph, caption: "Sensor Graphs"}, { source: AquaPonnectMonitor, caption: "Monitor Panel"}, { source: AquaPonnectCertificate, caption: "Best Capstone Project"}],
        link: "https://youtu.be/ehTAsen7YzU"
    }
]