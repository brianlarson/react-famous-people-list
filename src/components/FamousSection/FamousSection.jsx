import React, { useEffect, useState } from 'react';
import axios from "axios";
import './FamousSection.css';

function FamousSection() {

  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function
  useEffect(() => {
    fetchPeople();
  }, []);

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

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
  
  }

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <ul>
          {/* TODO: Render the list of famous people */}
          {famousPeopleArray.map((item) => {
            return (
              <li key={item.id}>{item.name} as {item.role}</li>
            );
          })}
        </ul>
      </section>
    );
}

export default FamousSection;
