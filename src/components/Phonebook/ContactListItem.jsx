import { Button } from './Phonebook.styled';

function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li>
      {`${name}: ${number}`}
      <Button onClick={() => onDelete(id)}>Delete contact</Button>
    </li>
  );
}

export default ContactListItem;
