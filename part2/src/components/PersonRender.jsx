import Person from "./Person";

const PersonRender = ({ states, setters, handlers, personService }) => {
	return (
		<ul>
			{states.isFiltered
				? states.filteredPersons.map((person) => (
						<Person
							key={person.id}
							name={person.name}
							number={person.number}
							personService={personService}
							handleRemove={() => {
								handlers.handleRemove(person.id);
							}}
						/>
				  ))
				: states.persons.map((person) => (
						<Person
							key={person.id}
							name={person.name}
							number={person.number}
							personService={personService}
							handleRemove={() => {
								handlers.handleRemove(person.id);
							}}
						/>
				  ))}
		</ul>
	);
};

export default PersonRender;
