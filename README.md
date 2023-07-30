# Deep Linking into Background App Repro

Repro is using [Evan Bacon's Router Layouts example](https://github.com/EvanBacon/expo-router-layouts-example).
The expo router package was updated to the latest v1 version and expo doctor issues were resolved.

## Steps to reproduce

Run the following command in terminal while the project is running.

```
npx uri-scheme open exp://127.0.0.1:19000/--/material-top-tabs/second --ios
```

## Checklist

### Expo Go

- [x] Deep linking when app is closed works
- [x] Deep linking when app is in background works

### Dev Client

- [ ] Deep linking when app is closed works
- [ ] Deep linking when app is in background works
