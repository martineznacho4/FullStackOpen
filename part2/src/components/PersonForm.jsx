const PersonForm = ({states, setters, handlers, personService}) => {
	const addContact = (event) => {
		event.preventDefault();

		const found = states.persons.some((person) => person.name === states.newName);

		if (found) {
			alert(`${states.newName} is already added to the Phonebook`);
			return;
		}

		const newNameObject = {
			name: states.newName,
			number: states.newNumber,
		};

		personService.create(newNameObject).then((newPerson) => {
			
			setters.setPersons([...states.persons, newPerson]);
			setters.setNewName("");
			setters.setNewNumber("");
			
		})

	};

	return (
		<form onSubmit={addContact}>
			<div>
				name: <input value={states.newName} onChange={handlers.handleNewName} />
			</div>
			<div>
				number: <input value={states.newNumber} onChange={handlers.handleNewNumber} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
