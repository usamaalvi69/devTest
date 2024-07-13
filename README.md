## TenTwenty – React Native Assignment

Tasks:

1. Movie List Screen: List down all upcoming movies on the list 
2. Movie Detail Screen: When a user selects any movie from the movie list screen, it navigates to the Movie detail screen.  After pressing the “​Watch Trailer​” button on the movie details screen, the application should display a full-screen movie player and should automatically start the playback (to get the needed URLs to use the “movie/#MOVIE_ID#/videos” API call). After the trailer is finished the player should be automatically closed, and the app should return to the detail page. The playback can be also canceled by pressing the “Done” button.	
3. Movie Details API
4. Movie search screen 

Key Features and Implementation Details

• Architecture: Used a component-based architecture.

• State Management: Used Redux for state management, employing Redux Toolkit to manage global state and createAsyncThunk functions for fetching movie data.

• NetworkService: a class and a singleton instance (networkService) that encapsulates functionalities for making HTTP requests using axios.

• Support potential localization: Used react-native-localization for the possibility of adapting the app to different languages.

• Environment Setup for Api requests: Place the .env file in the project root directory to manage sensitive data.
Here's an example structure:

API_KEY=your_actual_tmdb_api_key
API_BASE_URL=https://api.themoviedb.org/3
IMG_URL=https://image.tmdb.org/t/p

## Code Structure:

```plaintext
├── src/                     # Source code directory
│   ├── assets/              # Static assets
│   │   ├── fonts            # Fonts directory
│   │   └── images           # Images directory
│   ├── components/          # Reusable UI components
│   │   ├── Btn/
│   │   │   ├── index.js     # Example component
│   │   └── ...              # Other reusable components
│   ├── constants/           # Global constants and variables
│   │   ├── dimensions       # Responsive dimensions
│   │   └── navigation       # Route names
│   ├── screens/             # App screens (containers)
│   │   ├── Home/            # Home screen directory
│   │   │   ├── index.js     # Home screen logic and UI
│   │   │   └── styles.js    # Home screen styles (optional)
│   │   ├── Search/          # Search screen directory
│   │   │   ├── index.js     # Search screen logic and UI
│   │   │   └── styles.js    # Search screen styles (optional)
│   │   └── Detail/          # Movie detail screen directory
│   │       ├── index.js     # Movie detail screen logic and UI
│   │       └── styles.js    # Movie detail screen styles (optional)
│   ├── networking/          # Data fetching and manipulation services
│   │   └── config.js        # Example service for interacting with TMDB API
│   └── helpers/             # Utility functions
│       └── formatDate.js    # Example utility for formatting dates
└── App.js                   # Main app component




This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.



