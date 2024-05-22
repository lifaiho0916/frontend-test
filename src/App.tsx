import { Provider } from "react-redux";
import { store } from "store";
import AppRouter from "router";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <Toaster />
    </Provider>
  );
}
export default App;
