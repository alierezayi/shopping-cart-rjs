import Footer from "@/containers/templates/Footer";
import Header from "@/containers/templates/Header";
import { Toaster } from "sonner";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="my-10">{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}

export default RootLayout;
