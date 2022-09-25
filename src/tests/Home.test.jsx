import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import Home from "../pages/Home";
describe("Login", () => {
  it("Check if Home Component renders", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const node = await screen.findByText("Add to cart");
    expect(node).toBeInTheDocument();
  });
});
