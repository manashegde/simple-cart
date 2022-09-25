import { Routes, Route } from "react-router-dom";
import RouteComponent from "./routes/RouteComponent";
import { routes } from "./routes/routes";

function App() {
  return (
    <Routes>
          {routes.map((route,key) => (
            <Route
            key={key}
              path={route.path}
              element={
                <RouteComponent
                  isProtected={route.isProtected}
                  component={route.component}
                />
              }
            />
          ))}
        </Routes>
  )
}

export default App;
