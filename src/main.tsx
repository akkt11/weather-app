import ReactDOM from "react-dom/client";
import { Home } from "./components/Home/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/index.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Home />
    <ReactQueryDevtools buttonPosition="bottom-left" />
  </QueryClientProvider>
);
