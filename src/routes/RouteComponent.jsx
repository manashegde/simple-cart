import React from "react";
import { Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { loginPath } from "./routes";
import Layout from "../components/Layout";

const RouteComponent = (props) => {
  const { component: Component, isProtected } = props;
  const isUserLoggedIn = () => {
    return sessionStorage.getItem("token") ? true : false;
  };
  const isAuthenticated = isUserLoggedIn();

  const RenderProtectedComponent = () =>
    //If user is not authenticated then send him back to login page
    isAuthenticated ? (
      <Layout>{RenderComponent()}</Layout>
    ) : (
      <Navigate to={loginPath} />
    );

  const RenderComponent = () => (
    <ErrorBoundary FallbackComponent={() => <div>Error</div>}>
      <Component />
    </ErrorBoundary>
  );

  return isProtected ? RenderProtectedComponent() : RenderComponent();
};

export default RouteComponent;
