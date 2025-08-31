# WordPress WebView App - React Native Expo

🇺🇸 English | [🇮🇷 فارسی](README-fa.md)

A simple React Native Expo application that uses WebView to display WordPress websites. This project is designed to easily change the website URL and create multiple applications by simply updating configuration files.

## Features

- ✅ Complete WebView for displaying WordPress sites
- ✅ Easy configuration through `.env` file
- ✅ Double back press to exit functionality
- ✅ Toast message display on single back press
- ✅ Compatible with Android and iOS
- ✅ JavaScript and Local Storage support

## Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- pnpm
- Expo CLI
- Android Studio (for Android)
- Xcode (for iOS)

### Installation Steps

1. Clone the project:
```bash
git clone https://github.com/kazemsoft/rn-expo-wp.git
cd rn-expo-wp
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy configuration file:
```bash
cp env.example .env
```

4. Edit `.env` file and set your website URL:
```bash
# WordPress Website URL
WEBSITE_URL=https://your-wordpress-site.com

# App Configuration
APP_NAME=WordPress WebView App
```

5. Run the project:
```bash
pnpm start
```

## Reusing for Different Websites

To create a new app for a different website:

1. Edit the `.env` file:
```bash
WEBSITE_URL=https://your-new-wordpress-site.com
APP_NAME=Your New App Name
```

2. Edit the `app.json` file:
```json
{
  "expo": {
    "name": "Your New App Name",
    "slug": "your-new-app-slug",
    ...
  }
}
```

3. Rebuild the application:
```bash
# For Android
expo build:android

# For iOS
expo build:ios
```

## Project Structure

```
rn-expo-wp/
├── App.js              # Main application component
├── app.json           # Expo configuration
├── package.json       # Dependencies and scripts
├── babel.config.js    # Babel configuration
├── config.js          # App configuration settings
├── index.js           # Entry point
├── setup.js           # Interactive setup script
├── .env              # Environment variables (create yourself)
├── env.example       # Example environment variables
├── README.md         # English documentation
└── README-fa.md      # Persian documentation
```

## Back Button Functionality

- **Single press**: If WebView can go back, navigates to previous page. Otherwise shows "Press again to exit" message.
- **Double press (consecutive)**: Exits the application.

## Useful Commands

```bash
# Run the project
pnpm start

# Run on Android
pnpm android

# Run on iOS
pnpm ios

# Run on web
pnpm web

# Build for Android
pnpm build:android

# Build for iOS
pnpm build:ios

# Interactive setup
pnpm setup
```

## Additional Settings

### Changing App Icons

Place your icons in the `assets/` folder:
- `icon.png` (1024x1024)
- `adaptive-icon.png` (1024x1024)
- `splash.png` (1242x2436)

### WebView Settings

You can modify WebView settings in the `config.js` file:

```javascript
WEBVIEW_SETTINGS: {
  javaScriptEnabled: true,
  domStorageEnabled: true,
  startInLoadingState: true,
  scalesPageToFit: true,
  mixedContentMode: 'compatibility',
  allowsBackForwardNavigationGestures: true,
}
```

## Common Issues

### "Unable to resolve module '@env'" Error

If you encounter this error:
1. Make sure `.env` file exists
2. Restart Metro bundler
3. Clear cache: `expo start --clear`

### Website Loading Issues

1. Ensure URL in `.env` file is correct
2. Check internet connection
3. Make sure website has HTTPS

### Babel/Dependencies Issues

If you encounter bundling errors:
1. Run `pnpm install` to ensure all dependencies are installed
2. Check that babel-preset-expo version matches your Expo version
3. Clear cache with `expo start --clear`

## Quick Setup

For faster setup, use the interactive setup script:

```bash
pnpm setup
```

This will guide you through:
- Setting your WordPress website URL
- Configuring app name
- Creating the `.env` file automatically

## License

This project is released under the MIT License.

## Contributing

To contribute to the project:
1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Submit a Pull Request

## Support

If you encounter any issues or have questions:
1. Check the [Common Issues](#common-issues) section
2. Review the Persian documentation: [README-fa.md](README-fa.md)
3. Create an issue in the GitHub repository

---

**Note**: This project is free for personal and commercial use. By changing the `.env` file, you can create unlimited different applications.