const Person = ({ name, number, handleRemove }) => {
	return (
		<>
			<li>
				{name} {number} <button onClick={handleRemove}>Delete</button>
			</li>
		</>
	);
};

export default Person;
