import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";

import { Footer, Header, Sidebar } from "@/components";

function MainHeader() {
  const { theme, setTheme } = useTheme();
  return <Header theme={theme} setTheme={setTheme} />;
}

function MainFooter() {
  const { theme, setTheme } = useTheme();
  return <Footer theme={theme} setTheme={setTheme} />;
}

function MainSidebar() {
  const { theme, setTheme } = useTheme();
  return <Sidebar theme={theme} setTheme={setTheme} />;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <div className="flex h-screen w-screen bg-light dark:bg-dark">
          <MainSidebar />
          <div className="flex flex-col w-full mx-6 md:mx-12">
            <MainHeader />
            <Component {...pageProps} />
            <MainFooter />
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  );
}
