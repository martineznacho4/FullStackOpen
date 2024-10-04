import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonRender from "./components/PersonRender";
import axios from "axios";

const App = () => {
	useEffect(() => {
		axios
		.get("http://localhost:3001/persons")
		.then((response) => {
			setPersons(response.data);
		});
	}, []);

	const [persons, setPersons] = useState([]);
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
