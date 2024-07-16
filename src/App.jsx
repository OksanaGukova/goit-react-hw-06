
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <div>
            <h1>Contact Manager</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
          </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
