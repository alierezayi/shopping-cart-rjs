import Breadcrumbs from "@/components/template/Breadcrumbs";
import Footer from "@/containers/templates/Footer";
import Header from "@/containers/templates/Header";
import { Toaster } from "sonner";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="my-10 min-h-[calc(100vh-213px)]">{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}

export default RootLayout;
