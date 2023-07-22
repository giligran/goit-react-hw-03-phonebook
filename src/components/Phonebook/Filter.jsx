import { Input } from './Phonebook.styled';

function Filter({ filter }) {
  return (
    <label>
      Find contacts by name
      <Input name="filter" onChange={filter}></Input>
    </label>
  );
}

export default Filter;
