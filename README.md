# HealthFitApp

A React Native mobile application for tracking health and fitness activities, workouts, and personal wellness goals.

## 📱 Features

- User authentication and profile management
- Workout tracking and planning
- Nutrition diary and meal planning
- Progress tracking with charts and statistics
- Custom workout routines
- Activity reminders and notifications
- Integration with health devices (coming soon)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/asadraza4522/HelthFitApp.git
cd HealthFitApp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies:
```bash
cd ios
pod install
cd ..
```

### Running the App

#### iOS
```bash
npm run ios
# or
yarn ios
```

#### Android
```bash
npm run android
# or
yarn android
```

## 🛠️ Project Structure

```
HealthFitApp/
├── src/
│   ├── assets/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── services/
│   ├── store/
│   └── utils/
├── ios/
├── android/
└── package.json
```

## 🔧 Configuration

1. Create a `.env` file in the root directory:
```
API_URL=your_api_url
GOOGLE_FIT_API_KEY=your_google_fit_api_key
```

2. Update the `app.json` with your app-specific configurations.

## 📱 Available Scripts

- `npm start` or `yarn start`: Start the Metro bundler
- `npm test` or `yarn test`: Run tests
- `npm run lint` or `yarn lint`: Run ESLint
- `npm run ios` or `yarn ios`: Build and run iOS app
- `npm run android` or `yarn android`: Build and run Android app

## 🔄 State Management

The app uses Redux for state management. Store configuration can be found in `src/store`.

## 📦 Key Dependencies

- `@react-navigation/native`: Navigation library
- `@reduxjs/toolkit`: State management
- `react-native-reanimated`: Animations
- `react-native-charts-wrapper`: Data visualization
- `@react-native-async-storage/async-storage`: Local storage

## 🔐 Environment Setup

### iOS
1. Install Xcode
2. Install iOS Simulator
3. Configure signing certificates

### Android
1. Install Android Studio
2. Configure Android SDK
3. Create/configure Android Virtual Device

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run specific test file
npm run test path/to/test

# Run tests with coverage
npm run test:coverage
```

## 📋 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Authors

- Asad Raza - Initial work - [asadraza4522](https://github.com/asadraza4522)

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.

## 📞 Support

For support, email raza0120@gmail.com

## 🚀 Roadmap

- Integration with Apple HealthKit
- Social features and friend challenges
- Advanced analytics dashboard
- Custom meal planning
- AI-powered workout recommendations

---
Built with ❤️ using React Native
