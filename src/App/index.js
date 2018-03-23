import React from "react";
import { Provider } from "react-redux";
import store from "../state/store";
import { Header, Footer, Main } from "../components";
import style from "../css/style.scss";

const App = () => (
  <Provider store={store}>
    <div id="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);

export default App; 