import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonRender from "./components/PersonRender";
import Notification from "./components/Notification";
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
	const [notification, setNotification] = useState(null);

	const states = {
		persons,
		newName,
		newNumber,
		isFiltered,
		filteredPersons,
		newFilter,
		notification,
	};

	const setters = {
		setPersons,
		setNewName,
		setNewNumber,
		setIsFiltered,
		setFilteredPersons,
		setNewFilter,
		setNotification,
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
		const user = persons.find((person) => person.id === id);
		if (window.confirm(`Do you really want to remove ${user.name}?`)) {
			personService
				.remove(id)
				.then(
					(deletedPerson) => {
						setPersons(
							persons.filter((person) => person.id !== id)
						);
					},
					setNotification(`Removed ${user.name} from the Phonebook`),

					setTimeout(() => {
						setNotification(null);
					}, 5000)
				)
				.catch((error) => {
					setNotification(`Unable to remove ${user.name}`);

					setTimeout(() => {
						setNotification(null);
					}, 5000);
				});
		}
	};

	const handleUpdateNumber = (id, newPhoneNumber) => {
		const person = persons.find((p) => p.id === id);

		const updatedPerson = { ...person, number: newPhoneNumber };

		personService
			.update(id, updatedPerson)
			.then(
				(returnedPerson) =>
					setPersons(
						persons.map((person) =>
							person.id !== id ? person : returnedPerson
						)
					),
				setNotification(`Updated ${person.name}'s number`),
				setTimeout(() => {
					setNotification(null);
				}, 5000)
			)
			.catch((error) => {
				setNotification(`Unable to update ${person.name}'s number`),
					setTimeout(() => {
						setNotification(null);
					}, 5000);
			});
	};

	const handlers = {
		handleNewName,
		handleNewNumber,
		handleFilter,
		handleRemove,
		handleUpdateNumber,
	};

	return (
		<div>
			<h2>Phonebook</h2>

			<Notification message={notification} />

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
