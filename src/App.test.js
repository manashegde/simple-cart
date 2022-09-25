import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from './pages/Login';
import store from './store/store';
test('check if login page renders', async() => {
  render(  <Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>);
  const linkElement = await screen.findByText("Welcome to SimpleCart");
  expect(linkElement).toBeInTheDocument();
});
