/* import { useDispatch } from "react-redux";
import { ImPhone } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li>
      <div>
        <div>
          <BsPeopleFill />
          <p>{name}</p>
        </div>
        <div>
          <ImPhone />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
 */