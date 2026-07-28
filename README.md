# Entry_Exit

> A staff attendance tracker built to replace paper sign-in sheets at Asman Tajhiz — fully offline, no backend needed.

![status](https://img.shields.io/badge/status-in%20production-brightgreen) ![license](https://img.shields.io/badge/license-MIT-blue) ![react](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=FFD62E) ![tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

🔗 [Live Demo](https://er4nxz.github.io/Entry_Exit/)

**English** | [فارسی](#فارسی)

---

## 📖 About

When I joined Asman Tajhiz, I noticed that everyone — including myself — had to log their entry and exit times by hand on a paper sheet. It felt outdated and unnecessarily tedious for something I already had the skills to solve.

So I built a simple system where anyone can select their name, "log in" to record their entry time, and later log their exit the same way. Using what I'd learned about localStorage, I was able to build the entire thing **without needing a backend or JSON Server** — it runs fully offline and just works.

## ✨ Features

- Staff login by name selection
- Record entry time
- Record exit time
- Automatic total working-hours calculation
- Jalali (Persian) calendar support
- 24-hour time format
- Attendance management dashboard
- Table-based record display
- Fully offline data storage with localStorage
- Responsive user interface

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/er4Nxz/Entry_Exit.git
cd Entry_Exit
npm install
```

### Usage

```bash
npm run dev
```

## 📁 Project Structure

```
Entry_Exit/
├── Code/
├── assets/
├── index.html
└── README.md
```

## 🛠️ Tech Stack

- React (Components, Hooks)
- React Router DOM
- Tailwind CSS
- Bootstrap 5
- DaisyUI
- React Icons
- moment-jalaali
- localStorage
- JavaScript (ES6)
- Vite

## 💡 What I Learned

- Building a fully offline-first application with localStorage
- Solving a real daily inconvenience at my workplace with code
- Working with Jalali dates and time calculations
- Managing user interactions and application state without a backend
- Building reusable, clean React components

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for personal and educational use.

---
---

<a name="فارسی"></a>
## فارسی

**[English](#entry_exit)** | فارسی

---

## 📖 درباره پروژه

وقتی وارد شرکت آسمان تجهیز شدم، دیدم که همه — از جمله خودم — باید ورود و خروجمون رو دستی روی یه برگه‌ی کاغذی می‌نوشتیم. حس می‌کردم این کار قدیمی و بی‌دلیل وقت‌گیره، در حالی که مهارت حل کردنش رو داشتم.

برای همین یه سیستم ساده ساختم که هرکسی بتونه اسمش رو انتخاب کنه، «لاگین» کنه و ورودش رو ثبت کنه، و بعداً به همون شکل خروجشو ثبت کنه. با دانشی که از localStorage داشتم، تونستم کل این پروژه رو **بدون نیاز به بک‌اند یا JSON Server** بسازم؛ کاملاً آفلاین کار می‌کنه و به‌سادگی جواب می‌ده.

## ✨ ویژگی‌ها

- ورود کارکنان با انتخاب نام
- ثبت ساعت ورود
- ثبت ساعت خروج
- محاسبه‌ی خودکار مجموع ساعات کاری
- پشتیبانی از تقویم جلالی
- نمایش ساعت به‌صورت ۲۴ ساعته
- داشبورد مدیریت حضور و غیاب
- نمایش اطلاعات در قالب جدول
- ذخیره‌سازی کاملاً آفلاین با localStorage
- رابط کاربری واکنش‌گرا

## 🚀 شروع سریع

### پیش‌نیازها

- نصب بودن Node.js و npm

### نصب

```bash
git clone https://github.com/er4Nxz/Entry_Exit.git
cd Entry_Exit
npm install
```

### اجرا

```bash
npm run dev
```

## 📁 ساختار پروژه

```
Entry_Exit/
├── Code/
├── assets/
├── index.html
└── README.md
```

## ⚙️ تکنولوژی‌های استفاده‌شده

- React (کامپوننت‌ها و Hooks)
- React Router DOM
- Tailwind CSS
- Bootstrap 5
- DaisyUI
- React Icons
- moment-jalaali
- localStorage
- JavaScript (ES6)
- Vite

## 💡 نکات و تجربیات یادگرفته‌شده

- ساخت یه اپلیکیشن کاملاً آفلاین با localStorage
- حل یه مشکل واقعی و روزمره‌ی محیط کار با کدنویسی
- کار با تاریخ جلالی و محاسبات زمانی
- مدیریت تعاملات کاربر و وضعیت اپلیکیشن بدون بک‌اند
- ساخت کامپوننت‌های تمیز و قابل استفاده مجدد

## 📄 لایسنس

این پروژه تحت لایسنس [MIT](LICENSE) منتشر شده — برای استفاده شخصی و آموزشی آزاده.
