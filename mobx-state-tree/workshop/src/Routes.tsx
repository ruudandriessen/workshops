import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";
import { RootLayoutPage } from "./routes/RootLayoutPage";
import { NewTaskPage } from "./routes/NewTaskPage";
import { BacklogPage } from "./routes/BacklogPage";
import { NewEpicPage } from "./routes/NewEpicPage";

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
            {
                path: "/epics/new",
                element: <NewEpicPage />,
            },
        ]
        },
  ]);

  export function Routes() {
    return <RouterProvider router={router} />
  }
