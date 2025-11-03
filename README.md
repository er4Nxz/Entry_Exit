# Entry_Exit (Staff Attendance)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Jalali](https://img.shields.io/badge/Calendar-Jalali-0A0A0A?style=for-the-badge)
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

---

## 🇬🇧 English

### 🎯 Overview
*Entry_Exit is a lightweight staff attendance tracker built by Erfan Ahmadi for Asman Tajhiz.  
It works fully offline using localStorage, supports Jalali dates (via `moment-jalaali`), and lets users log entry/exit and see total work time.

### 🧩 Features
- Login with predefined users  
- Log entry and exit timestamps  
- Jalali date & 24h time format  
- Total work time per user (minutes → HH:MM)  
- Simple dashboard + table view  
- Fully offline (no server) via localStorage

### ⚙️ Installation & Setup
# Clone the repository
git clone https://github.com/er4Nxz/Entry_Exit.git
cd Entry_Exit/Code

# Install dependencies
npm install

# Run development server
npm run dev

### 🚀 Example Snippets
Reading & writing records in localStorage
// Read existing records
const records = JSON.parse(localStorage.getItem("records")) || [];

// Add new record
const newRecord = { User: user, date: nowDate, entry: nowTime, exit: "" };
localStorage.setItem("records", JSON.stringify([...records, newRecord]));

Total work time calculation (minutes → sum)
```jsx
// TotalTime.jsx
const timeToMinutes = (t) => (!t ? 0 : t.split(":").map(Number)[0]  60 + t.split(":").map(Number)[1]);

const totalWorkMinutes = records
  .filter((r) => r.User === user && r.entry && r.exit)
  .reduce((sum, r) => sum + (timeToMinutes(r.exit) - timeToMinutes(r.entry)), 0);


**Jalali date & time**
```jsx
import moment from "moment-jalaali";
const nowDate = moment().format("jYYYY/jMM/jDD");
const nowTime = moment().format("HH:mm");

### 🛠️ Technologies Used
- *React (Components, Hooks)
- React Router DOM (routing)
- moment-jalaali (Jalali calendar formatting)
- React Icons
- localStorage (offline persistence)
- JavaScript (ES6)

### 📁 Project Structure

Entry_Exit/
├── Code/
│   ├── src/
│   │   ├── App/App.jsx
│   │   ├── Components/
│   │   │   ├── Header/ + Logout/
│   │   │   ├── Login/
│   │   │   └── Dashboard/
│   │   │       ├── Button/  ├── Delete/  ├── Table/  └── TotalTime/
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   └── index.html
└── (assets, favicons)

### 💡 Lessons Learned
- Designing an offline-first UX with localStorage  
- Time computations and Jalali date handling  
- Clean separation of login, dashboard, and stats components

### 🧾 License
This project is licensed under the MIT License. Free for personal and educational use.

---

## 🇮🇷 فارسی

### 🎯 معرفی پروژه
Entry_Exit یک ابزار ساده و سریع برای ثبت ورود و خروج پرسنل است که توسط عرفان احمدی برای آسمان تجهیز ساخته شده.  
این برنامه به‌صورت آفلاین و با localStorage کار می‌کند، از تقویم جلالی پشتیبانی می‌کند و مجموع زمان کارکرد هر کاربر را محاسبه می‌کند.

### 🧩 ویژگی‌ها
- ورود با کاربران از پیش‌تعریف‌شده  
- ثبت ساعت ورود و خروج
- تاریخ جلالی و ساعت ۲۴ ساعته  
- محاسبه‌ی کل زمان کاری هر کاربر  
- داشبورد ساده با جدول  
- کاملاً آفلاین (بدون سرور) با localStorage

### ⚙️ نصب و اجرا
git clone https://github.com/er4Nxz/Entry_Exit.git
cd Entry_Exit/Code

npm install
npm run dev

### 🚀 نمونه کد
خواندن/نوشتن رکوردها در localStorage
const records = JSON.parse(localStorage.getItem("records")) || [];
localStorage.setItem("records", JSON.stringify([...records, newRecord]));

محاسبه‌ی زمان کل کارکرد
```jsx
const timeToMinutes = (t) => (!t ? 0 : t.split(":").map(Number)[0]  60 + t.split(":").map(Number)[1]);
const totalWorkMinutes = records
  .filter((r) => r.User === user && r.entry && r.exit)
  .reduce((sum, r) => sum + (timeToMinutes(r.exit) - timeToMinutes(r.entry)), 0);
```

*تاریخ جلالی*
```jsx
import moment from "moment-ja

laali";
const nowDate = moment().format("jYYYY/jMM/jDD");
const nowTime = moment().format("HH:mm");


### 🛠️ تکنولوژی‌ها
- **React** (کامپوننت‌ها و Hooks)
- **React Router DOM** (مسیربندی)
- **moment-jalaali** (فرمت جلالی)
- **React Icons**
- **localStorage** (ذخیره‌سازی آفلاین)
- **JavaScript ES6**

### 📁 ساختار پروژه
Entry_Exit/
├── Code/
│   ├── src/
│   │   ├── App/App.jsx
│   │   ├── Components/
│   │   │   ├── Header/ + Logout/
│   │   │   ├── Login/
│   │   │   └── Dashboard/
│   │   │       ├── Button/  ├── Delete/  ├── Table/  └── TotalTime/
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   └── index.html
└── (assets, favicons)
```

### 💡 نکات و تجربیات
- طراحی تجربه *آفلاین‌اول با localStorage  
- محاسبات زمانی و مدیریت تاریخ جلالی  
- تفکیک تمیز لاگین/داشبورد/گزارش‌ها

### 🧾 لایسنس
تحت مجوز MIT License — برای استفاده شخصی و آموزشی آزاد است.

---

Developed with ❤️ by Erfan Ahmadi*
