🇬🇧 English
🎯 Overview

Entry_Exit is a real-world staff attendance management system developed by Erfan Ahmadi for Asman Tajhiz.

This project was created to solve an actual business need and provides a simple solution for managing employee attendance records.

The application allows users to log employee entry and exit times, view attendance records, and calculate total working hours.

The system works completely offline using localStorage and supports Jalali date formatting for better compatibility with Persian users.

🧩 Features
Employee login system
Record employee entry time
Record employee exit time
Calculate total working hours
Jalali date support
24-hour time format
Attendance management dashboard
Table-based record display
Offline data storage using localStorage
Responsive user interface
⚙️ Installation & Setup
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
const records = JSON.parse(localStorage.getItem("records")) || [];

const newRecord = {
  user: user,
  date: nowDate,
  entry: nowTime,
  exit: ""
};

localStorage.setItem(
  "records",
  JSON.stringify([...records, newRecord])
);
Jalali Date & Time
import moment from "moment-jalaali";

const nowDate = moment().format("jYYYY/jMM/jDD");
const nowTime = moment().format("HH:mm");
Working Time Calculation
const timeToMinutes = (time) => {
  if (!time) return 0;

  const [hour, minute] = time.split(":");

  return Number(hour) * 60 + Number(minute);
};
🛠️ Technologies Used
React (Components, Hooks)
React Router DOM
Tailwind CSS
Bootstrap 5
DaisyUI
React Icons
moment-jalaali
localStorage
JavaScript ES6
Vite
💡 Lessons Learned
Developing a real-world attendance management system
Creating offline-first applications with localStorage
Working with Jalali dates and time calculations
Managing user interactions and application state
Building reusable React components
Improving problem-solving skills through practical development
🧾 License

This project is licensed under the MIT License. Free for personal and educational use.

🇮🇷 فارسی
🎯 معرفی پروژه

Entry_Exit یک سیستم مدیریت ورود و خروج پرسنل است که توسط عرفان احمدی برای شرکت آسمان تجهیز توسعه داده شده است.

این پروژه برای حل یک نیاز واقعی کاری ساخته شد و هدف آن ساده‌تر کردن فرآیند ثبت حضور و غیاب کارکنان است.

این برنامه امکان ثبت ساعت ورود و خروج کارکنان، مشاهده سوابق حضور و غیاب و محاسبه مجموع زمان کاری را فراهم می‌کند.

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
رابط کاربری واکنش‌گرا
⚙️ نصب و اجرا
# دریافت پروژه
git clone https://github.com/er4Nxz/Entry_Exit.git

# ورود به پوشه پروژه
cd Entry_Exit

# نصب وابستگی‌ها
npm install

# اجرای پروژه
npm run dev
🚀 نمونه کد
ذخیره اطلاعات ورود و خروج
const records = JSON.parse(localStorage.getItem("records")) || [];

localStorage.setItem(
  "records",
  JSON.stringify(records)
);
تاریخ و ساعت جلالی
import moment from "moment-jalaali";

const nowDate = moment().format("jYYYY/jMM/jDD");
const nowTime = moment().format("HH:mm");
🛠️ تکنولوژی‌ها
React (کامپوننت‌ها و Hooks)
React Router DOM
Tailwind CSS
Bootstrap 5
DaisyUI
React Icons
moment-jalaali
localStorage
JavaScript ES6
Vite
💡 نکات و تجربیات
توسعه یک پروژه واقعی برای محیط کاری
تجربه تبدیل یک نیاز واقعی به یک محصول نرم‌افزاری
ساخت برنامه‌های آفلاین با localStorage
کار با تاریخ جلالی و محاسبات زمانی
ساخت کامپوننت‌های قابل استفاده مجدد
افزایش تجربه حل مسئله در پروژه‌های واقعی
🧾 لایسنس

تحت مجوز MIT License — برای استفاده شخصی و آموزشی آزاد است.
