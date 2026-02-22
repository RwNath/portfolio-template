"use client";

import { useState } from "react";
import { QueryClientProvider as TanstackQueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
    const [client] = useState(() => new QueryClient());

    return <TanstackQueryClientProvider client={client}>{children}</TanstackQueryClientProvider>;
}