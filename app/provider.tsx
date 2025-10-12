"use client";
import Navigation from "@/components/navbar";
import { usePathname } from "next/navigation";
import AuthLayout from "./auth/authLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const route = usePathname();
  const queryClient = new QueryClient();

  if (route.startsWith("/auth")) {
    return (
      <>
        <AuthLayout>{children}</AuthLayout>
      </>
    );
  } else {
    return (
      <>
        {" "}
        <QueryClientProvider client={queryClient}>
          <Navigation />
          {children}
          {/* <Footer />  */}
        </QueryClientProvider>
      </>
    );
  }
};

export default Provider;
