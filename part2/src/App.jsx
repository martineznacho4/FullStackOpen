import { useState } from "react";

const Person = ({ name }) => {
  return <p>{name}</p>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");

  const addContact = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName,
    };

    setPersons([...persons, newNameObject]);
    setNewName("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} />
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
