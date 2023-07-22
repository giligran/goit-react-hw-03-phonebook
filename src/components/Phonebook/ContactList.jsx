import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Button } from './Phonebook.styled';

function ContactList({ users, onDelete }) {
  return (
    <ul>
      {users.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {`${name}: ${number}`}
            <Button onClick={() => onDelete(id)}>Delete contact</Button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
