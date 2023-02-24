import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;
//3rd-party
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//routes
import { Layout } from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Stake from "./pages/Stake";
import Leaderboard from "./pages/Leaderboard";

declare global {
  interface Window {
    xnft: any;
  }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/stake",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Stake /> }],
  },
  {
    path: "/leaderboard",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Leaderboard /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
