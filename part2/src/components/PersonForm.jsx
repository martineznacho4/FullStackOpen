const PersonForm = ({
	persons,
	setPersons,
	newName,
	handleNewName,
	newNumber,
	handleNewNumber,
	setNewName,
	setNewNumber,
}) => {
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

	return (
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
	);
};

export default PersonForm;
