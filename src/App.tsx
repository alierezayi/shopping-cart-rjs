import RootLayout from "./layouts/RootLayout";
import Providers from "./providers";
import Router from "./router";

function App() {
  return (
    <Providers>
      <RootLayout>
        <Router />
      </RootLayout>
    </Providers>
  );
}

export default App;
