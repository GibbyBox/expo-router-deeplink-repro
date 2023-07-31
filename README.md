# Deep Linking into Background App Repro

Repro is using [Evan Bacon's Router Layouts example](https://github.com/EvanBacon/expo-router-layouts-example).
The expo router package was updated to the latest v1 version and expo doctor issues were resolved.

## Steps to reproduce

1. Start the app `yarn start` / `npm start` / `npx expo start`
1. Open up expo in ios simulator and leave it in the foreground or in the background
1. Run either as appropriate for the os
  * `npx uri-scheme open exp://127.0.0.1:8081/--/material-top-tabs/second --ios`
