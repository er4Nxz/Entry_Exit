# 🇬🇧 English

## 🎯 Overview

Entry_Exit is a real-world staff attendance management system developed by **Erfan Ahmadi** for **Asman Tajhiz**.

This project was created to solve an actual business need and provides a simple solution for managing employee attendance records. The application allows users to log their entry and exit times, view attendance records, and calculate total working hours.

The system works completely offline using localStorage and supports Jalali date formatting for better compatibility with Persian users.

---

## 🧩 Features

- Employee login system
- Record employee entry time
- Record employee exit time
- Calculate total working hours
- Jalali date support
- 24-hour time format
- Dashboard for attendance management
- Table-based record display
- Offline data storage using localStorage
- Responsive user interface

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/er4Nxz/Entry_Exit.git

# Navigate into project folder
cd Entry_Exit

# Install dependencies
npm install

# Run development server
npm run dev
🚀 Example Snippets
Saving Attendance Records
const records = JSON.parse(
  localStorage.getItem("records")
) || [];

localStorage.setItem(
  "records",
  JSON.stringify(records)
);
Jalali Date Formatting
import moment from "moment-jalaali";

const date = moment().format(
  "jYYYY/jMM/jDD"
);

const time = moment().format(
  "HH:mm"
);
Working Time Calculation
const timeToMinutes = (time) => {
  const [hour, minute] = time.split(":");
  return Number(hour) * 60 + Number(minute);
};
🛠️ Technologies Used
React 19
Vite
JavaScript ES6
React Router DOM
Tailwind CSS
Bootstrap 5
DaisyUI
React Icons
moment-jalaali
localStorage
Animate.css
📁 Project Structure
Entry_Exit/
├── Code/
│   ├── public/
│   │
│   ├── src/
│   │   ├── App/
│   │   │
│   │   ├── Components/
│   │   │   ├── Dashboard/
│   │   │   │   ├── Button/
│   │   │   │   ├── Delete/
│   │   │   │   ├── Table/
│   │   │   │   └── TotalTime/
│   │   │   │
│   │   │   ├── Header/
│   │   │   └── Login/
│   │   │
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
💡 Lessons Learned
Developing a real-world business application
Managing application state and user interactions
Working with offline-first applications
Handling Jalali dates and time calculations
Creating reusable React components
Improving problem-solving through practical projects
🧾 License

This project is licensed under the MIT License. Free for personal and educational use.

<br/>
🇮🇷 فارسی
🎯 معرفی پروژه

Entry_Exit یک سیستم مدیریت ورود و خروج پرسنل است که توسط عرفان احمدی برای شرکت آسمان تجهیز توسعه داده شده است.

این پروژه برخلاف پروژه‌های تمرینی، برای یک نیاز واقعی کاری ساخته شد و امکان ثبت ورود و خروج کارکنان، مشاهده اطلاعات حضور و غیاب و محاسبه زمان کاری را فراهم می‌کند.

این سیستم به صورت کاملاً آفلاین با استفاده از localStorage کار می‌کند و از تاریخ جلالی پشتیبانی می‌کند.

🧩 ویژگی‌ها
سیستم ورود کاربران
ثبت ساعت ورود کارکنان
ثبت ساعت خروج کارکنان
محاسبه مجموع زمان کاری
پشتیبانی از تاریخ جلالی
نمایش ساعت به صورت ۲۴ ساعته
داشبورد مدیریت حضور و غیاب
نمایش اطلاعات در قالب جدول
ذخیره‌سازی آفلاین با localStorage
طراحی واکنش‌گرا
⚙️ نصب و اجرا
git clone https://github.com/er4Nxz/Entry_Exit.git

cd Entry_Exit

npm install

npm run dev
🚀 نمونه کد
ذخیره اطلاعات حضور و غیاب
const records = JSON.parse(
  localStorage.getItem("records")
) || [];

localStorage.setItem(
  "records",
  JSON.stringify(records)
);
مدیریت تاریخ جلالی
import moment from "moment-jalaali";

const date = moment().format(
  "jYYYY/jMM/jDD"
);
🛠️ تکنولوژی‌ها
React 19
Vite
JavaScript ES6
React Router DOM
Tailwind CSS
Bootstrap 5
DaisyUI
React Icons
moment-jalaali
localStorage
Animate.css
📁 ساختار پروژه
Entry_Exit/
├── Code/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Dashboard/
│   │   │   │   ├── Button/
│   │   │   │   ├── Delete/
│   │   │   │   ├── Table/
│   │   │   │   └── TotalTime/
│   │   │   │
│   │   │   ├── Header/
│   │   │   └── Login/
│   │   │
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
💡 نکات و تجربیات
توسعه یک پروژه واقعی برای محیط کاری
مدیریت وضعیت و تعاملات کاربر
ساخت برنامه‌های آفلاین با localStorage
کار با تاریخ جلالی و محاسبات زمانی
ساخت کامپوننت‌های قابل استفاده مجدد
افزایش تجربه حل مسئله در پروژه‌های واقعی
🧾 لایسنس

تحت مجوز MIT License — برای استفاده شخصی و آموزشی آزاد است.
