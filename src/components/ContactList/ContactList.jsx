/* import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";


const ContactList = () => {


  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          contact={{ id, name, number }}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
 */