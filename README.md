
# 💊 Chemist Registration Form

A multi-step Chemist Registration form built using **React** and **Vite**. This form is part of a larger project involving hospital and ambulance registration. It is designed to collect structured information about chemists in a clean and user-friendly manner.

## 🚀 Features

- Multi-step form using React components
- Step-wise validation for better user experience
- State management with Context API
- Input field validation (required, file size, etc.)
- Visual feedback on errors and navigation control
- Clean and responsive UI
- Dynamic location selection using `country-state-city` package

## 🧩 Technologies Used

- React (with hooks and Context API)
- Vite (for fast development server and build)
- Tailwind CSS (for styling)
- Heroicons & Font Awesome (for icons)
- [country-state-city](https://www.npmjs.com/package/country-state-city) (for dynamic country, state, and city dropdowns)

## 📁 Folder Structure

```
Chemist-Registration-Form1/
│
├── public/                       # Static assets
├── src/
│   ├── assets/                  # Icons and images
│   ├── components/              # Form step components
│   │   ├── Chemist_Info.jsx
│   │   ├── LocationServices.jsx
│   │   ├── Contact_Details.jsx
│   │   ├── Document_Verification.jsx
│   │   ├── StepControl.jsx
│   │   └── Stepper.jsx
│   ├── contexts/                # Context for form state
│   │   └── stepperContexts.js
│   ├── validations/             # Step-wise validation logic
│   │   ├── validateStep1.js
│   │   ├── validateStep2.js
│   │   ├── validateStep3.js
│   │   └── validateStep4.js
│   ├── App.jsx                  # Main application
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md                    # Project documentation
```

## 📝 Form Steps

1. **Chemist Information**
   - Name, License No., PAN No., Shop Name

2. **Location & Services**
   - Country, State, City, Services Offered (powered by `country-state-city`)

3. **Contact Details**
   - Email, Phone Number, Emergency Contact

4. **Document Verification**
   - Upload Aadhar Card, PAN Card, License, etc.
   - File validation (≤ 10MB, proper file type)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Chetanmittal27/Chemist-Registration-Form1.git
cd Chemist-Registration-Form1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will be running on `http://localhost:5173` (by default).

## 📦 Build for Production

```bash
npm run build
```

## ✅ To Do

- Backend integration for form submission
- Toast notifications for success/error
- Mobile responsiveness polish
- Reusability of validation logic across forms

## 🙌 Author

**Chetan Mittal**  
👨‍💻 Vice President, MCE Student Community  
💼 Corporate Head, Department of Mathematics and Computing, DTU  
🌐 [GitHub](https://github.com/Chetanmittal27)