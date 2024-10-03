import { useState } from "react";

const Person = ({ name, number }) => {
  return (
    <p>
      {name} {number}
    </p>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "30-40605080" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addContact = (event) => {
    event.preventDefault();
    const found = persons.some((person) => person.name === newName);

    if (found) {
      alert(`${newName} is already added to the Phonebook`);
      return;
    }

    const newNameObject = {
      name: newName,
      number: newNumber,
    };

    setPersons([...persons, newNameObject]);
    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} number={person.number} />
        ))}
      </ul>
      ...
    </div>
  );
};

export default App;
