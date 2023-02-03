import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import { ToastContainer } from "react-toastify";

// my components
import Nav from "../../components/Nav";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const route = useRouter();
  return (
    <SessionProvider session={session}>
      <ToastContainer />
      {route.pathname !== "/" && <Nav />}
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
