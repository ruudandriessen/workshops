import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";
import { RootLayoutPage } from "./routes/RootLayoutPage";
import { NewTaskPage } from "./routes/NewTaskPage";
import { BacklogPage } from "./routes/BacklogPage";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayoutPage />,
        children: [
            {
                index: true,
                element: <BacklogPage />,
            },
            {
                path: "/tasks/new",
                element: <NewTaskPage />,
            },
        ]
        },
  ]);

  export function Routes() {
    return <RouterProvider router={router} />
  }
