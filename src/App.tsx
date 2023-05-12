import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;
//3rd-party
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//routes
import { Layout } from "./components/Layout";
import { ToastContainer } from "react-toastify";
import { ConnectionProvider } from "@solana/wallet-adapter-react";

import Home from "./pages/Home";
import Garage from "./pages/Garage";
import GaragesingleView from "./pages/GarageSingleView";
import ErrorPage from "./pages/ErrorPage";
import GarageSingleView from "./pages/GarageSingleView";
import GarageEquipView from "./pages/GarageEquipView";

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
    path: "/garage",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Garage /> }],
  },
  {
    path: "/garage/item",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <GarageSingleView /> }],
  },
  {
    path: "/garage/item/equip",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <GarageEquipView /> }],
  },
]);

function App() {
  return (
    <ConnectionProvider endpoint={import.meta.env.VITE_RPC_URL}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ConnectionProvider>
  );
}

export default App;
