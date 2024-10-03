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
    { name: "Arto Hellas", number: "30-40605080" , id: 1},
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newFilter, setNewFilter] = useState("");

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
      id: persons.length + 1,
    };

    setPersons([...persons, newNameObject]);
    setNewName("");
    setNewNumber("");
  };

  const filterPersons = (event) => {
    setIsFiltered(true);

    setFilteredPersons(
      persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    );
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setNewFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search filter: <input value={newFilter} onChange={handleFilter} />{" "}
        <button onClick={filterPersons}>Apply</button>
      </div>
      <h3>Add new contact</h3>
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
        {isFiltered
          ? filteredPersons.map((person) => (
              <Person
                key={person.id}
                name={person.name}
                number={person.number}
              />
            ))
          : persons.map((person) => (
              <Person
                key={person.id}
                name={person.name}
                number={person.number}
              />
            ))}
      </ul>
      ...
    </div>
  );
};

export default App;
