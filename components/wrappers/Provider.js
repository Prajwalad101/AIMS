import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";

function Provider({ children, session }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}

export default Provider;
