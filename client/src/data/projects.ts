import TaskWiseMarketingWebsite from "../assets/projects/taskwise/taskwise-promo.webp"
import TaskWiseTeamCardView from "../assets/projects/taskwise/taskwise-team-tasks-cardview.webp"
import TaskWiseDashboard from "../assets/projects/taskwise/taskwise-dashboard.webp"
import TaskWiseAiAssistant from "../assets/projects/taskwise/taskwise-ai-assistant.webp"
import TaskWiseTeamProfiles from "../assets/projects/taskwise/taskwise-team-profiles.webp"
import TaskWiseTeamInbox from "../assets/projects/taskwise/taskwise-team-inbox.webp"
import AquaPonnectControl from "../assets/projects/aquaponnect/AquaPonnectControl.webp"
import AquaPonnectGraph from "../assets/projects/aquaponnect/AquaPonnectGraph.webp"
import AquaPonnectMonitor from "../assets/projects/aquaponnect/AquaPonnectMonitor.webp"
import AquaPonnectCertificate from "../assets/projects/aquaponnect/AquaPonnectCertificate.webp"
import ApplAiStatus from "../assets/projects/applai/ApplAiStatus.webp"
import ApplAiSort from "../assets/projects/applai/ApplAiSort.webp"
import ApplAiInsight from "../assets/projects/applai/ApplAiInsight.webp"
import ApplAiForm from "../assets/projects/applai/ApplAiJobForm.webp"
import ApplAiLogin from "../assets/projects/applai/ApplAiLogin.webp"
import WatchRoomLanding from "../assets/projects/watchroom/watch-room-landing.webp"
import WatchRoomAuth from "../assets/projects/watchroom/watch-room-auth.webp"
import WatchRoomCreate from "../assets/projects/watchroom/watch-room-create.webp"
import WatchRoomJoin from "../assets/projects/watchroom/watch-room-join.webp"
import WatchRoomWatch from "../assets/projects/watchroom/watch-room-watch.webp"
import WatchRoomSettings from "../assets/projects/watchroom/watch-room-settings.webp"

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
        snippets: [{ source: TaskWiseMarketingWebsite, caption: "Marketing Website"}, { source: TaskWiseTeamCardView, caption: "Team Tasks Card View"}, { source: TaskWiseDashboard, caption: "Dashboard"}, { source: TaskWiseAiAssistant, caption: "AI Assistant"}, { source: TaskWiseTeamProfiles, caption: "Team Members"}, { source: TaskWiseTeamInbox, caption: "Team inbox and user notifications"}],
        repo: "https://github.com/dexterr404/task-wise",
        live: "https://task-wise-nine.vercel.app/"
    },
        {
        id: "watchroom",
            title: "WatchRoom",
            shortdesc: "Real-time video watch and chat platform built with React, TypeScript, Node.js, Supabase, and Mux. Enables users to stream, chat, and share videos together in private or public rooms with secure authentication and live collaboration.",
            longdesc: `🎬 WatchRoom — Project Overview
            WatchRoom is a modern, full-stack platform that lets users watch videos together in real time while chatting, sharing reactions, and managing participants securely. It’s designed for movie nights, study sessions, and team watch parties — combining live video playback, chat, and access control in one seamless experience.

            ✨ Key Features

            🎥 Video Streaming
            ● Watch videos together — YouTube, Vimeo, or any uploaded video
            ● Adaptive bitrate streaming for smooth playback on any connection
            ● Automatic thumbnail generation and room-based video management

            💬 Live Chat & Interaction
            ● Real-time messaging using Supabase Realtime
            ● Auto-scroll for new messages and live participant updates
            ● Timestamps, sender names, and chat moderation options

            🔒 Private & Secure Rooms
            ● Create private or public rooms with shareable access keys
            ● Room owners can regenerate keys to block unwanted users
            ● Instant “kick user” control for active moderation

            🧍 Participant System
            ● Displays live participant list
            ● Distinguishes between room owner and regular members
            ● Automatic removal of disconnected users

            📤 Video Uploads via Mux
            ● Secure upload endpoint to Mux
            ● Automatic encoding and playback-ready streaming links
            ● Playback IDs and Asset IDs stored per room

            🔐 Authentication & Security
            ● Google OAuth2 login via Supabase Auth
            ● JWT-secured API calls for backend access
            ● Row Level Security (RLS) enforced on all Supabase tables
            ● HTTPS and environment-based configuration in production

            ⚙️ Owner Controls
            ● Toggle privacy (public/private)
            ● Manage participants and regenerate keys
            ● Update room settings, title, and thumbnails
            ● Delete or reset rooms instantly

            💼 User Experience
            ● Modern, responsive interface built with React and Tailwind CSS
            ● Real-time updates using React Query (TanStack)
            ● Fast navigation and state management with React Router
            ● Optimized for mobile, tablet, and desktop experiences

            🛠️ Tech Stack

            Frontend
            ⚛️ React + TypeScript (Vite)
            💨 Tailwind CSS
            🔄 React Query (TanStack)
            🧭 React Router DOM
            🎞️ React Player

            Backend
            🧩 Node.js + Express + TypeScript
            🗄️ PostgreSQL (via Supabase)
            🔐 Supabase Auth + JWT validation
            📡 Supabase Realtime (chat + participants)
            🎬 Mux API (video upload & streaming)

            Infrastructure & Services
            ☁️ Render (Backend deployment)
            🚀 Vercel (Frontend hosting)
            🎞️ Mux (Video encoding and playback)
            🐘 Supabase (Database, Auth, and Realtime API)

            ⚡ Architecture Highlights
            ● Real-time messaging and participant sync with Supabase Realtime
            ● Secure Mux integration for adaptive video streaming
            ● Clean RESTful API design
            ● Modular code structure for scalability and clarity

            📊 Planned Features / Roadmap
            ● Synced play, pause, and seek controls across all users
            ● Emoji and reaction support in chat
            ● Enhanced Mux thumbnail previews
            ● Owner-only announcements and pinned messages
            ● Improved analytics for room activity
            `,
        snippets: [
            { source: WatchRoomLanding, caption: "Landing Page" },
            { source: WatchRoomAuth, caption: "Authentication" },
            { source: WatchRoomCreate, caption: "Create Room " },
            { source: WatchRoomJoin, caption: "Join Room" },
            { source: WatchRoomWatch, caption: "Watch Room" },
            { source: WatchRoomSettings, caption: "Watch Room Settings"}
        ],
        repo: "https://github.com/dexterr404/watch-room",
        live: "https://watch-room.dexterr404.dev/"
    },
    {
        id: "applai",
        title: "ApplAi",
        shortdesc: "AI-powered job application tracker and interview preparation platform built with TypeScript, React, Node.js, and PostgreSQL. Features secure resume management, smart job tracking, and GPT-driven interview insights.",
        longdesc: `🚀 ApplAi — Project Overview
        ApplAi is a smart platform for managing job applications while preparing for interviews with AI assistance. It combines comprehensive tracking, secure resume storage, and OpenAI-powered insights to help users optimize their job search and interview preparation.

        ✨ Key Features

        📋 Job Application Management
        ● Create, read, update, and delete job applications
        ● Track company, position, location, salary, and application dates
        ● Smart filtering and search for easy management
        ● Direct links to job postings
        ● Status tracking for all application stages

        📄 Resume Management
        ● Securely upload resumes to Cloudinary
        ● Organize resumes per job application
        ● Preview or download resumes directly from job cards
        ● One-click resume replacement

        🧠 AI-Powered Interview Preparation
        ● Generate role-specific interview questions using OpenAI GPT
        ● Receive tailored preparation tips per job
        ● Smart insights and professional advice
        ● Cached AI responses for optimal performance and cost reduction
        ● Persistent storage of AI insights for future reference

        🔐 Secure Authentication
        ● Google OAuth2 login integration
        ● JWT-based secure sessions
        ● Automatic logout on token expiration
        ● Protected API endpoints

        💼 User Experience
        ● Modern UI built with React, Tailwind CSS, and TypeScript
        ● Fully responsive design across all devices
        ● Fast API-driven updates using React Query
        ● Intuitive navigation with React Router DOM

        🛠️ Tech Stack

        Frontend
        ⚛️ React + TypeScript (Vite)
        💨 Tailwind CSS
        🔄 React Query (TanStack)
        🧭 React Router DOM

        Backend
        🧩 Node.js + Express + TypeScript
        🐘 PostgreSQL (Neon)
        🔐 JWT + Google OAuth2
        🤖 OpenAI API

        Infrastructure & Services
        ☁️ Vercel (Frontend hosting)
        🚀 Railway (Backend deployment)
        📂 Cloudinary (Resume storage)

        ⚡ Architecture Highlights
        ● Clean relational database design
        ● JWT-protected API routes
        ● AI insights cached per job
        ● Modern, responsive interface

        📊 Planned Features / Roadmap
        ● Refresh token support for automatic re-authentication
        ● Email notifications for deadlines
        ● Advanced analytics dashboard
        ● Resume parsing and keyword matching
        ● Multi-resume support and team collaboration
        ● Calendar integration and cover letter generator

        `,
        snippets: [
            { source: ApplAiLogin, caption: "Login Page" },
            { source: ApplAiStatus, caption: "Job Applications Status" },
            { source: ApplAiForm, caption: "Job Application Form" },
            { source: ApplAiInsight, caption: "AI Interview Preparation" },
            { source: ApplAiSort, caption: "Job Sorting" }
        ],
        repo: "https://github.com/dexterr404/applai",
        live: "https://applai.dexterr404.dev"
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