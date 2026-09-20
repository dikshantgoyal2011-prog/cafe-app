# Hungry Birds Cafe — Android packaging

This repository contains the mobile-first Hungry Birds Cafe web app and Capacitor configuration for generating an Android app.

## Local web preview

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Create the Android project

Install Node.js 20+ and Android Studio, then run from the repository root:

```bash
npm install
npx cap add android
npm run cap:sync
npx cap open android
```

The Android project is generated locally in `android/` and is intentionally not committed until Android Studio creates it.

## Build a Play Store bundle

In Android Studio:

1. Set the release application ID to `com.hungrybirdscafe.app`.
2. Create and safely store a release upload key.
3. Select **Build > Generate Signed Bundle / APK**.
4. Choose **Android App Bundle** and `release`.
5. Upload the generated `.aab` file to Google Play Console.

Before publishing, replace placeholder contact/address details, add a privacy-policy URL, app icon, screenshots, feature graphic, data-safety answers, and complete Play Console testing/review requirements. Never commit keystores or passwords.
