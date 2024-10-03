import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonRender from "./components/PersonRender";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "30-40605080", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [isFiltered, setIsFiltered] = useState(false);
	const [filteredPersons, setFilteredPersons] = useState([]);
	const [newFilter, setNewFilter] = useState("");

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

			<Filter
				newFilter={newFilter}
				handleFilter={handleFilter}
				setIsFiltered={setIsFiltered}
				setFilteredPersons={setFilteredPersons}
				persons={persons}
			/>

			<h3>Add new contact</h3>

			<PersonForm
				persons={persons}
				setPersons={setPersons}
				newName={newName}
				handleNewName={handleNewName}
				newNumber={newNumber}
				handleNewNumber={handleNewNumber}
				setNewName={setNewName}
				setNewNumber={setNewNumber}
			/>

			<h2>Numbers</h2>

			<PersonRender
				isFiltered={isFiltered}
				filteredPersons={filteredPersons}
				persons={persons}
			/>
		</div>
	);
};

export default App;
