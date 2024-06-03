import Breadcrumbs from "@/components/template/header/breadcrumbs";
import Footer from "@/containers/templates/footer";
import Header from "@/containers/templates/header";
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
