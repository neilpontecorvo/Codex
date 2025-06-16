# Life Calculator App

This repository contains the web-based Life Expectancy Calculator along with minimal SwiftUI examples for iOS and macOS. The native apps simply load the web interface using `WKWebView` so the HTML, CSS and JavaScript are bundled inside the application.

## Directory Overview

- `index.html`, `style.css`, `app.js` – the stand‑alone web version of the calculator
- `ios/` – SwiftUI sample for iOS
- `macos/` – SwiftUI sample for macOS

The iOS and macOS folders do not include an Xcode project. Instead, create a new Xcode project and add these files so the resources are copied into the app bundle.

## Building the macOS App

See [macos/README.md](macos/README.md) for detailed steps on creating the project and bundling the resources in Xcode.
