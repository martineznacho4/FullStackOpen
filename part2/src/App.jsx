import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonRender from "./components/PersonRender";
import axios from "axios";
import personService from "./service/persons";

const App = () => {
	useEffect(() => {
		personService.getAll().then((initialData) => setPersons(initialData));
	}, []);

	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [isFiltered, setIsFiltered] = useState(false);
	const [filteredPersons, setFilteredPersons] = useState([]);
	const [newFilter, setNewFilter] = useState("");

	const states = {
		persons,
		newName,
		newNumber,
		isFiltered,
		filteredPersons,
		newFilter,
	};

	const setters = {
		setPersons,
		setNewName,
		setNewNumber,
		setIsFiltered,
		setFilteredPersons,
		setNewFilter,
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

	const handleRemove = (id) => {
		if (
			window.confirm(
				`Do you really want to remove ${
					persons.find((person) => person.id === id).name
				}?`
			)
		) {
			personService
				.remove(id)
				.then((deletedPerson) => {
					setPersons(persons.filter((person) => person.id !== id));
				})
				.catch((error) => {
					alert(`Unable to remove the id: ${id}`);
				});
		}
	};

	const handlers = {
		handleNewName,
		handleNewNumber,
		handleFilter,
		handleRemove,
	};

	return (
		<div>
			<h2>Phonebook</h2>

			<Filter states={states} setters={setters} handlers={handlers} />

			<h3>Add new contact</h3>

			<PersonForm
				states={states}
				setters={setters}
				handlers={handlers}
				personService={personService}
			/>

			<h2>Numbers</h2>

			<PersonRender
				states={states}
				setters={setters}
				handlers={handlers}
				personService={personService}
			/>
		</div>
	);
};

export default App;
