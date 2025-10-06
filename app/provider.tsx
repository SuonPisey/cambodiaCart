"use client";
import Footer from "@/components/footer";
import Navigation from "@/components/navbar";
import { useParams, usePathname } from "next/navigation";
import AuthLayout from "./auth/authLayout";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const route = usePathname();
  if (route.startsWith("/auth")) {
    return (
      <>
        <AuthLayout>{children}</AuthLayout>
      </>
    );
  } else {
    return (
      <>
        <Navigation />
        {children} <Footer />
      </>
    );
  }
};

export default Provider;
