import { AuthProvider, useAuth } from "@/lib/auth-context";
import { fontFamily } from "@/styles/fontFamily";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  Text,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../src/app/store";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "auth";

    if (!user && !inAuthGroup && !isLoadingUser) {
      router.replace("/auth");
    } else if (user && inAuthGroup && !isLoadingUser) {
      router.replace("/");
    }
  }, [user, segments, isLoadingUser]);

  return <>{children}</>;
}

export default function RootLayout() {
  const scheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    [fontFamily.bold]: require("../assets/fonts/SUSEMonoBold.ttf"),
    [fontFamily.boldItalic]: require("../assets/fonts/SUSEMonoBoldItalic.ttf"),
    [fontFamily.extraBold]: require("../assets/fonts/SUSEMonoExtraBold.ttf"),
    [fontFamily.extraBoldItalic]: require("../assets/fonts/SUSEMonoExtraBoldItalic.ttf"),
    [fontFamily.extraLight]: require("../assets/fonts/SUSEMonoExtraLight.ttf"),
    [fontFamily.extraLightItalic]: require("../assets/fonts/SUSEMonoExtraLightItalic.ttf"),
    [fontFamily.italic]: require("../assets/fonts/SUSEMonoItalic.ttf"),
    [fontFamily.light]: require("../assets/fonts/SUSEMonoLight.ttf"),
    [fontFamily.lightItalic]: require("../assets/fonts/SUSEMonoLightItalic.ttf"),
    [fontFamily.medium]: require("../assets/fonts/SUSEMonoMedium.ttf"),
    [fontFamily.mediumItalic]: require("../assets/fonts/SUSEMonoMediumItalic.ttf"),
    [fontFamily.regular]: require("../assets/fonts/SUSEMonoRegular.ttf"),
    [fontFamily.semiBold]: require("../assets/fonts/SUSEMonoSemiBold.ttf"),
    [fontFamily.semiBoldItalic]: require("../assets/fonts/SUSEMonoSemiBoldItalic.ttf"),
    [fontFamily.thin]: require("../assets/fonts/SUSEMonoThin.ttf"),
    [fontFamily.thinItalic]: require("../assets/fonts/SUSEMonoThinItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // or return null
  }

  const theme = scheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AuthProvider>
          <PaperProvider theme={theme}>
            <SafeAreaProvider>
              <RouteGuard>
                <Stack>
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                </Stack>
              </RouteGuard>
            </SafeAreaProvider>
          </PaperProvider>
        </AuthProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
