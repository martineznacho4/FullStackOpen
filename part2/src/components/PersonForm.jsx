const PersonForm = ({ states, setters, handlers, personService }) => {
	const addContact = (event) => {
		event.preventDefault();

		let personID;
		const found = states.persons.some((person) => {
			personID = person.id;
			return person.name === states.newName;
		});

		if (
			found &&
			window.confirm(
				`${states.newName} is already on the Phonebook. Replace the old number with a new one?`
			)
		) {
			handlers.handleUpdateNumber(personID, states.newNumber);
		} else {
			const newNameObject = {
				name: states.newName,
				number: states.newNumber,
			};

			personService.create(newNameObject).then((newPerson) => {
				setters.setPersons([...states.persons, newPerson]);
				setters.setNewName("");
				setters.setNewNumber("");
			});
		}
	};

	return (
		<form onSubmit={addContact}>
			<div>
				name:{" "}
				<input
					value={states.newName}
					onChange={handlers.handleNewName}
				/>
			</div>
			<div>
				number:{" "}
				<input
					value={states.newNumber}
					onChange={handlers.handleNewNumber}
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
