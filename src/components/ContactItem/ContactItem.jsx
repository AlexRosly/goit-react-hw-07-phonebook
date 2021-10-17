import ContactList from '../ContactList/ContactList';
import { useDeleteContactMutation } from "../../redux/contactSlice";



export const ContactItem = ({ contacts }) => {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

    return <div>{contacts && <ContactList contacts={contacts} onDelete={deleteContact} deleting={isDeleting} />}</div>
};