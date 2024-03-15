import ReactDOM from "react-dom/client";
import { Home } from "./components/Home/Home.tsx";
import "./styles/index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);
