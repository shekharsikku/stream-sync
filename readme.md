# Stream Sync - Video Calling App

![Demo App](/public/images/screen-sync-demo.png)

## 🌟 Introduction

Built with the latest Next.js and TypeScript. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.

## ⚙️ Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- Clerk
- GetStream

## 🔋 Features

👉 **Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.

👉 **New Meeting**: Quickly start a new meeting, configuring camera and microphone settings before joining.

👉 **Meeting Controls**: Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).

👉 **Exit Meeting**: Participants can leave a meeting, or creators can end it for all attendees.

👉 **Schedule Future Meetings**: Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.

👉 **Past Meetings List**: Access a list of previously held meetings, including details and metadata.

👉 **View Recorded Meetings**: Access recordings of past meetings for review or reference.

👉 **Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others.

👉 **Join Meetings via Link**: Easily join meetings created by others by providing a link.

👉 **Secure Real-time Functionality**: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

👉 **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions, and many more, including code architecture and reusability. 

## ⭐ Quick Start

**⏳ Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### 🚀 Setup Instructions

**Clone This Repository**

```bash
git clone https://github.com/shekharsikku/stream-sync.git
cd stream-sync
```

**Install Node Modules**

```bash
npm install
```

**Environment Variables Setup**

Rename, **local.env** filename to **.env** and add all required fields!
```env
CLERK_SECRET_KEY=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""

NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"

NEXT_PUBLIC_STREAM_API_KEY=""
STREAM_SECRET_KEY=""

NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

**⏳ Note**

Replace the placeholder values with your actual Clerk & GetStream credentials. You can obtain these credentials by signing up on the [Clerk Website](https://clerk.com/) and [GetStream Website](https://getstream.io/)

**⚠️ Warning**

Change **NEXT_PUBLIC_BASE_URL** according to your app host address.

**Start Development**
```bash
npm run dev
```

**Build App**
```bash
npm run build
```

**Start App**
```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
```bash
http://localhost:3000
```

*** 

## 📣 Contribution

Welcome contributors to **Stream Sync - Video Calling App** Project. I'm excited to have you here.

Want to contribute code? Fork the repository, make your changes, and submit a pull request.

### ⚡ How to Contribute

- 🐞 Bug Found/Fix?
- ✨ Add New Features?


### 🪄 Code by **Shekhar Sharma**

***
