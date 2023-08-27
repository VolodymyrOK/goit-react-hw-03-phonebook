import { Input } from './Filter.styled';

export const Filter = ({ filter, onFilterElement }) => {
  return (
    <>
      <Input
        type="text"
        value={filter}
        placeholder="Search..."
        onChange={evt => {
          console.log(evt.target.value);
          onFilterElement(evt.target.value);
        }}
      ></Input>
    </>
  );
};
