import ContactForm from "./components/ContactForm/ContactForm";


function App() {
    const Layout = ({ children }) => {
      return <main>{children}</main>;
    };

    return (
        <Layout>
      <h1 >Phonebook</h1>
      <ContactForm  />
{/*       <SearchBox />
      <ContactList/> */}
        </Layout>
   
  );
}

export default App
