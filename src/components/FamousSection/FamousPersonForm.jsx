import React, { useEffect, useState } from 'react';
import axios from "axios";

function famousPersonForm(props) {

	// TODO: on load, call the fetchPeople() function
	useEffect(() => {
		fetchPeople();
	}, []);

	let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: fetch the list of people from the server
  const fetchPeople = () => {
    console.log(`fetchPeople() called…`);

    axios({
      method: "GET",
      url: "/api/people"
    })
      .then((response) => {
        console.log("Response:", response.data);

        // Store response data in state so DOM updates
        setPeopleArray(response.data);
    })
      .catch((error) => {
        console.log("erroror with GET /api/people:", error);
    });
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property

    // Create HTTP POST request with Axios to send a new person to server, then db
    axios({
      method: "POST",
      url: "/api/people",
      data: { name: famousPersonName, role: famousPersonRole }
    })
      .then((response) => {
        console.log(`/api/people POST request sent successfully…`);

        // Get all people (including the new one) from db and update the local state
        // ?? "Will have side effect of reloading the component" 
        // ?? ^^^ Not sure what this means - because of the `useEffect` hook?
        fetchPeople();

        // Set input states to "" to clear them
        setPersonName("");
        setPersonRole("");
    })
      .catch((error) => {
        console.log("erroror with POST /api/people:", error);

    });
  
  }

	return (
		<form onSubmit={addPerson}>
			<label htmlFor="name-input">Name:</label>
			<input 
				id="name-input" 
				onChange={(event) => setPersonName(event.target.value)}
				value={famousPersonName} 
			/>
			<label htmlFor="role-input">Famous for:</label>
			<input 
				id="role-input" 
				onChange={(event) => setPersonRole(event.target.value)}
				value={famousPersonRole} 
			/>
			<button type="submit">Done</button>
		</form>
	);

}

export default famousPersonForm;