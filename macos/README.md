# macOS App

This directory contains a minimal SwiftUI application that embeds the Life Expectancy Calculator website in a `WKWebView`.

## How to create the Xcode project

1. Open Xcode and choose **File > New > Project…**.
2. Select **App** under the macOS tab and click **Next**.
3. Enter a product name, set **Interface** to **SwiftUI**, and choose **None** for the **Storage** option.
4. Finish creating the project in a convenient location.
5. In the project navigator, right‑click the top-level group and select **Add Files to "[Your Project]"…**.
6. Choose the entire `macos` folder from this repository. Enable **Copy items if needed** and select **Create Groups** when prompted.
7. Ensure the HTML, CSS and JavaScript files inside `WebResources` are listed under **Copy Bundle Resources** in the target's *Build Phases*.
8. Build and run. `ContentView` loads `index.html` from the bundle so the calculator appears in the app window.

These steps bundle the web resources with your macOS app without modifying the Swift code.
