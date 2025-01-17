import MainPage from "../MainPage";
import BookingMovie from "../MainPage/BookingMovie";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "",
    element: MainPage,
    chilren: [
      {
        path: "",
        element: BookingMovie,
      },
    ],
  },
];

export const renderRoutes = () => {
  return routes.map((route) => {
    if (route.chilren) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.chilren.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
