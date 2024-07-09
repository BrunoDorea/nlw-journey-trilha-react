import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/nlw-journey-trilha-react/",
    element: <CreateTripPage />
  },
  {
    path: "/nlw-journey-trilha-react/trips/:tripId",
    element: <TripDetailsPage />
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
