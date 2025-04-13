# Modern Login Form with React

A modern, responsive login form built with React and Firebase. Features a clean design with social authentication options, form validation, and a seamless user experience.

## Features

- Clean and modern UI design
- Social authentication (Google, GitHub)
- Email/Password authentication
- Form validation
- Responsive layout
- Custom form inputs with icons
- Interactive hover states
- Password visibility toggle
- Toast notifications
- Protected routes
- User session management

## Technologies Used

- React
- Firebase Authentication
- React Router DOM
- React Toastify
- Vite
- CSS3 (with modern features)
- Google Material Symbols

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Sachin-Sati/Login-Form-React.git
```

2. Install dependencies:
```bash
cd Login-Form-React
npm install
```

3. Set up Firebase:
   - Create a Firebase project
   - Enable Authentication (Email/Password, Google, GitHub)
   - Copy your Firebase config
   - Create `.env` file and add your Firebase credentials

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
Login-Form-React/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   ├── SignUpForm.jsx
│   │   ├── InputField.jsx
│   │   └── SocialLogin.jsx
│   ├── utils/
│   │   ├── firebase.js
│   │   └── toast.js
│   ├── App.jsx
│   └── index.css
├── public/
│   ├── google.svg
│   └── github.svg
└── ...
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Contributing

Feel free to submit issues and pull requests.

## License

MIT License

Copyright (c) 2024