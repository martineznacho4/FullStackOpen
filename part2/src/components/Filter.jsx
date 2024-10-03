const Filter = ({
	newFilter,
	handleFilter,
	setIsFiltered,
	setFilteredPersons,
	persons,
}) => {
	const filterPersons = (event) => {
		setIsFiltered(true);

		setFilteredPersons(
			persons.filter((person) =>
				person.name.toLowerCase().includes(newFilter.toLowerCase())
			)
		);
	};

	return (
		<div>
			Search filter: <input value={newFilter} onChange={handleFilter} />{" "}
			<button onClick={filterPersons}>Apply</button>
		</div>
	);
};

export default Filter;
