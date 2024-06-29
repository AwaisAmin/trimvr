import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [],
  },
]);

function App() {
  return (
    <>
      <h1>Hello! there</h1>
    </>
  );
}

export default App;
