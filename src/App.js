import { Layout } from "./components/atom/Layout/Layout";
import Home from "./components/organisms/Home/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>
  );
}

export default App;
