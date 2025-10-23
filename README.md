# Life Calculator App

This repository hosts the Life Expectancy Calculator experience along with native wrappers for iOS and macOS. The project is now organized into a conventional multi-platform layout so each target has a dedicated workspace and shared documentation.

## Repository Layout

- `src/web/` – stand-alone web client (HTML, CSS, JavaScript)
- `src/ios/` – SwiftUI sample for iOS that embeds the web calculator
- `src/macos/` – SwiftUI sample for macOS that embeds the web calculator
- `docs/` – technical notes and supporting documentation
- `tests/` – placeholder for automated test suites
- `scripts/` – automation helpers such as build or deployment scripts

## Getting Started

1. Explore the `src/web/` directory and open `index.html` in a browser to use the calculator locally.
2. When building native apps, create a new Xcode project and add the files from `src/ios/` or `src/macos/` to bundle the shared web resources.
3. Add new platform-specific resources within their respective folders so the structure stays consistent as the project grows.

## Building the macOS App

See [src/macos/README.md](src/macos/README.md) for detailed steps on creating the project and bundling the resources in Xcode.
