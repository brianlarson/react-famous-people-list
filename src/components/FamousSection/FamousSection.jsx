import React, { useEffect, useState } from 'react';
// import axios from "axios";

import './FamousSection.css';
import FamousPersonForm from './FamousPersonForm';
import FamousPerson from './FamousPerson';

function FamousSection() {

  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  return (
    <section className="new-person-section">
      <FamousPersonForm />
      {/* 
        // TODO: Figure out how to pass in props for FamousPerson comp below? 🤯 
      */}
      <FamousPerson 
        famousPersonName={famousPersonName} 
        famousPersonRole={famousPersonRole} 
      />
      {/* <ul> */}
        {/* TODO: Render the list of famous people */}
        {/* {famousPeopleArray.map((item) => {
          return (
            <li key={item.id}>{item.name} as {item.role}</li>
          );
        })} */}
      {/* </ul> */}
    </section>
  );

}

export default FamousSection;
