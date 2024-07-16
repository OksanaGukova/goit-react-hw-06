import { useDispatch } from "react-redux";
import { ImPhone } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li>
      <div>
        <div>
          <BsPeopleFill />
          <p>{contact.name}</p>
        </div>
        <div>
          <ImPhone />
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
