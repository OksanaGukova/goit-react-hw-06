
import ContactForm from "./components/ContactForm/ContactForm";

/* import ContactList from "./components/ContactList/ContactList"; */
/* import SearchBox from "./components/SearchBox/SearchBox"; */



function App() {
    const Layout = ({ children }) => {
      return <main>{children}</main>;
    };

   
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
       {/*  <SearchBox  /> */}
   {/*     <ContactList />  */}
      </Layout>
    );
}

export default App
