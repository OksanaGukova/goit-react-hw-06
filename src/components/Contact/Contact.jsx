import { useDispatch } from "react-redux";
import { ImPhone } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";


export default function Contact({ name, number, contact }) {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li >
      <div >
        <div >
          <BsPeopleFill />
          <p>{name}</p>
        </div>
        <div >
          <ImPhone />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}