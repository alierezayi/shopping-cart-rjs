import Footer from "@/containers/templates/Footer";
import Header from "@/containers/templates/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="my-10">{children}</main>
      <Footer />
    </>
  );
}

export default RootLayout;
