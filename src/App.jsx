import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import initialContacts from './contacts.json'
/* import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox"; */



function App() {
    const Layout = ({ children }) => {
      return <main>{children}</main>;
    };

    const [contacts, setContacts] = useState(() => {
      const savedContacts = localStorage.getItem("contacts");
      return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    });

    useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
       {/*  <SearchBox  /> */}
      {/*   <ContactList /> */}
      </Layout>
    );
}

export default App
