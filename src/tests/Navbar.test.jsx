import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
describe("Navbar", () => {
  it("Check if Navbar Component renders", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const node = await screen.findByText("Simple Cart");
    expect(node).toBeInTheDocument();
  });
});
