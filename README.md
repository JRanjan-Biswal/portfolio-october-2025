# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

🌐 **Live Demo:** [https://jyoti-ranjan-biswal.vercel.app/](https://jyoti-ranjan-biswal.vercel.app/)

## 🚀 Features

- Modern UI with Shadcn components
- Responsive design
- Dark/Light mode support
- Interactive animations with Framer Motion
- Type-safe development with TypeScript
- Contact form with email integration (Gmail SMTP)
- Sections for:
  - Hero/Introduction
  - Projects
  - Skills
  - Experience
  - Contact

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- Shadcn UI Components
- React Router DOM

## 🏃‍♂️ Getting Started

### Frontend Setup

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

### Backend Setup (Contact Form)

1. Navigate to the server directory
```bash
cd server
```

2. Install server dependencies
```bash
npm install
```

3. Configure Gmail SMTP:
   - Copy `env.example` to `.env`
   - Enable 2-Step Verification on your Google account
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Add your Gmail credentials to `.env`:
     ```
     GMAIL_USER=your-email@gmail.com
     GMAIL_APP_PASSWORD=your-16-char-app-password
     PORT=3001
     ```

4. Start the backend server
```bash
npm start
# or for development with auto-reload
npm run dev
```

5. (Optional) Set frontend API URL in `.env` file:
   ```
   VITE_API_URL=http://localhost:3001
   ```
   If not set, it defaults to `http://localhost:3001`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Project Structure

```
src/
├── components/     # UI components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── pages/         # Page components
└── App.tsx        # Main application component
```

## 📄 License

[Your chosen license]

---
Built with ❤️ using React + TypeScript