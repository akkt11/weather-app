import ReactDOM from "react-dom/client";
import { Home } from "./components/Home/Home.tsx";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./styles/index.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (_, query) => {
      if (query?.meta?.errorMessage) {
        toast.error(query.meta.errorMessage as string);
      }
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer
      theme="colored"
      hideProgressBar
      pauseOnHover={false}
      limit={1}
    />
    <Home />
    <ReactQueryDevtools buttonPosition="bottom-left" />
  </QueryClientProvider>
);
