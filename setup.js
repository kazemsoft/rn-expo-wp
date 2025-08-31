#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 WordPress WebView App Setup');
console.log('===============================\n');

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setup() {
  try {
    // Check if .env already exists
    if (fs.existsSync('.env')) {
      const overwrite = await question('فایل .env وجود دارد. آیا می‌خواهید آن را بازنویسی کنید؟ (y/N): ');
      if (overwrite.toLowerCase() !== 'y' && overwrite.toLowerCase() !== 'yes') {
        console.log('راه‌اندازی لغو شد.');
        rl.close();
        return;
      }
    }

    // Get website URL
    const websiteUrl = await question('آدرس سایت وردپرس خود را وارد کنید (مثال: https://example.com): ');
    if (!websiteUrl || !websiteUrl.startsWith('http')) {
      console.log('❌ آدرس وارد شده معتبر نیست. باید با http یا https شروع شود.');
      rl.close();
      return;
    }

    // Get app name
    const appName = await question('نام اپلیکیشن را وارد کنید: ') || 'WordPress WebView App';

    // Create .env file
    const envContent = `# WordPress Website URL
WEBSITE_URL=${websiteUrl}

# App Configuration
APP_NAME=${appName}
`;

    fs.writeFileSync('.env', envContent);
    console.log('✅ فایل .env ایجاد شد.');

    // Update app.json if needed
    const appJsonPath = path.join(__dirname, 'app.json');
    if (fs.existsSync(appJsonPath)) {
      const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
      appJson.expo.name = appName;
      fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
      console.log('✅ فایل app.json به‌روزرسانی شد.');
    }

    console.log('\n🎉 راه‌اندازی با موفقیت انجام شد!');
    console.log('\nمراحل بعدی:');
    console.log('1. pnpm install');
    console.log('2. pnpm start');
    console.log('\nبرای تغییر سایت، فایل .env را ویرایش کنید و دوباره اجرا کنید.\n');

  } catch (error) {
    console.error('❌ خطا در راه‌اندازی:', error.message);
  } finally {
    rl.close();
  }
}

setup();
