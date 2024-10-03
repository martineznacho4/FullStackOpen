import Person from "./Person";

const PersonRender = ({ isFiltered, filteredPersons, persons }) => {
	return (
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
	);
};

export default PersonRender;
