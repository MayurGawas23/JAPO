import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../utils/auth";

export default function RouteGuard({ children }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    const path = router.pathname;

    // NOT LOGGED IN → BLOCK ALL PROTECTED ROUTES
    if (!user) {
      if (
        path.startsWith("/editor") ||
        path.startsWith("/reviewer") ||
        path.startsWith("/author")
      ) {
        router.replace("/");
      }
      return;
    }

    // EDITOR ONLY
    if (path.startsWith("/editor") && user.role !== "editor") {
      router.replace("/");
      return;
    }
//     console.log("AUTH USER:", user);
// console.log("USER ROLE:", user?.role);
// console.log("PATH:", router.pathname);

    // REVIEWER
    if (
      path.startsWith("/reviewer") &&
      !["reviewer", "editor"].includes(user.role)
    ) {
      router.replace("/unauthorized");
      return;
    }
  }, [user, loading, router.pathname]);

  if (loading) return null;

  return children;
}
