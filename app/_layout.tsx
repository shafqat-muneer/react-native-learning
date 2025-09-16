import { AuthProvider } from "@/lib/auth-context";
import { Stack, useRootNavigationState, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const isAuth = false;

  useEffect(() => {
    if (!navigationState?.key) return;

    // Delay redirect until after Stack has mounted
    const timeout = setTimeout(() => {
      if (!isAuth) {
        router.replace("/auth");
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [navigationState, isAuth, router]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RouteGuard>
    </AuthProvider>
  );
}

// import { Stack, useRouter } from "expo-router";
// import { useEffect } from "react";

// function RouteGuard({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const isAuth = false;

//   useEffect(() => {
//     if (!isAuth) {
//       router.replace("/auth");
//     }
//   });

//   return <>{children}</>;
// }

// export default function RootLayout() {
//   return (
//     <RouteGuard>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       </Stack>
//     </RouteGuard>
//   );
// }
