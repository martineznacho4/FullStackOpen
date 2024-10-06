const Filter = ({ states, handlers, setters }) => {
	const filterPersons = (event) => {
		setters.setIsFiltered(true);

		setters.setFilteredPersons(
			states.persons.filter((person) =>
				person.name
					.toLowerCase()
					.includes(states.newFilter.toLowerCase())
			)
		);
	};

	return (
		<div>
			Search filter:{" "}
			<input value={states.newFilter} onChange={handlers.handleFilter} />{" "}
			<button onClick={filterPersons}>Apply</button>
		</div>
	);
};

export default Filter;
