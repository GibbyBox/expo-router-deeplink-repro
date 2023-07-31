import { Tabs } from "expo-router";
import Head from "expo-router/head";

// export const unstable_settings = {
// 	initialRouteName: '/index',
// };

export default function Layout() {
  return (
    <>
      <Head>
        <title>Expo Router Layouts Demo</title>
        <meta name="description" content="Expo Router Layouts Demo" />
      </Head>
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: "#000",
        }}
      />
    </>
  );
}
