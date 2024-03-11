import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ProviderPropsType } from "../types";

export const withQuery = (component: ProviderPropsType) => (props: any) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient} contextSharing>
      {component(props)}
    </QueryClientProvider>
  );
};
