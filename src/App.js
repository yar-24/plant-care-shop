import Navigation from "./Navigation";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
      </Router>
    </Provider>
  );
}

export default App;
