import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";

function Provider({ children, session }) {
  const queryClient = new QueryClient({});

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default Provider;
