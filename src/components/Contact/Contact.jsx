import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contacts = ({ contacts }) => {
  const dispatch = useDispatch();
  const { name, phone, id } = contacts;
  return (
    <>
      <div>
        <p>
          <RiContactsFill />
          {name}
        </p>
        <p>
          <FaPhone />
          {phone}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contacts;
