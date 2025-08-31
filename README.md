# اپلیکیشن WebView وردپرس - React Native Expo

این پروژه یک اپلیکیشن ساده React Native Expo است که از WebView برای نمایش سایت‌های وردپرس استفاده می‌کند. این پروژه طوری طراحی شده که بتوانید به راحتی آدرس سایت را تغییر دهید و اپلیکیشن‌های متعددی بسازید.

## ویژگی‌ها

- ✅ WebView کامل برای نمایش سایت وردپرس
- ✅ پیکربندی آسان از طریق فایل `.env`
- ✅ عملکرد دوبار زدن دکمه Back برای خروج از اپلیکیشن
- ✅ نمایش پیام Toast هنگام فشردن یک بار دکمه Back
- ✅ سازگار با Android و iOS
- ✅ پشتیبانی از JavaScript و Local Storage

## نصب و راه‌اندازی

### پیش‌نیازها

- Node.js (نسخه 18 یا بالاتر)
- pnpm
- Expo CLI
- Android Studio (برای Android)
- Xcode (برای iOS)

### مراحل نصب

1. کلون کردن پروژه:
```bash
git clone https://github.com/kazemsoft/rn-expo-wp.git
cd rn-expo-wp
```

2. نصب وابستگی‌ها:
```bash
pnpm install
```

3. کپی کردن فایل پیکربندی:
```bash
cp env.example .env
```

4. ویرایش فایل `.env` و تنظیم آدرس سایت:
```bash
# WordPress Website URL
WEBSITE_URL=https://your-wordpress-site.com

# App Configuration
APP_NAME=WordPress WebView App
```

5. اجرای پروژه:
```bash
pnpm start
```

## استفاده مجدد برای سایت‌های مختلف

برای ایجاد اپلیکیشن جدید برای سایت دیگر:

1. فایل `.env` را ویرایش کنید:
```bash
WEBSITE_URL=https://your-new-wordpress-site.com
APP_NAME=Your New App Name
```

2. فایل `app.json` را ویرایش کنید:
```json
{
  "expo": {
    "name": "Your New App Name",
    "slug": "your-new-app-slug",
    ...
  }
}
```

3. اپلیکیشن را دوباره بیلد کنید:
```bash
# برای Android
expo build:android

# برای iOS
expo build:ios
```

## ساختار پروژه

```
rn-expo-wp/
├── App.js              # کامپوننت اصلی اپلیکیشن
├── app.json           # پیکربندی Expo
├── package.json       # وابستگی‌ها و اسکریپت‌ها
├── babel.config.js    # پیکربندی Babel
├── .env              # متغیرهای محیطی (باید خودتان بسازید)
├── env.example       # نمونه فایل متغیرهای محیطی
└── README.md         # مستندات
```

## عملکرد دکمه Back

- **یک بار فشردن**: اگر در WebView امکان برگشت وجود داشته باشد، به صفحه قبل می‌رود. در غیر این صورت پیام "برای خروج دوباره کلیک کنید" نمایش می‌دهد.
- **دوبار فشردن پشت سر هم**: از اپلیکیشن خارج می‌شود.

## دستورات مفید

```bash
# اجرای پروژه
pnpm start

# اجرای روی Android
pnpm android

# اجرای روی iOS
pnpm ios

# اجرای روی وب
pnpm web

# بیلد برای Android
pnpm build:android

# بیلد برای iOS
pnpm build:ios
```

## تنظیمات اضافی

### تغییر آیکون اپلیکیشن

آیکون‌های خود را در پوشه `assets/` قرار دهید:
- `icon.png` (1024x1024)
- `adaptive-icon.png` (1024x1024)
- `splash.png` (1242x2436)

### تنظیمات WebView

در فایل `App.js` می‌توانید تنظیمات WebView را تغییر دهید:

```javascript
<WebView
  source={{ uri: WEBSITE_URL }}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  // سایر تنظیمات...
/>
```

## مشکلات رایج

### خطای "Unable to resolve module '@env'"

اگر این خطا را مشاهده می‌کنید:
1. مطمئن شوید فایل `.env` وجود دارد
2. Metro bundler را ری‌استارت کنید
3. cache را پاک کنید: `expo start --clear`

### مشکل در بارگذاری سایت

1. مطمئن شوید URL در فایل `.env` صحیح است
2. اتصال اینترنت را بررسی کنید
3. مطمئن شوید سایت HTTPS دارد

## مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## مشارکت

برای مشارکت در پروژه:
1. Fork کنید
2. Branch جدید بسازید
3. تغییرات خود را Commit کنید
4. Pull Request ارسال کنید

---

**توجه**: این پروژه برای استفاده شخصی و تجاری آزاد است. با تغییر فایل `.env` می‌توانید بی‌نهایت اپلیکیشن مختلف بسازید.
