import axios from 'axios';
import DisplayEmployee from './components/DisplayEmployee';
import React, { useState } from "react";
import './App.css';


const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};




function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=en')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setEmployee(data.results[0]);
        console.log(data);
      });
  };
  
/*Quelques explications :

  .then permet de spécifier, entre parenthèses, 
  ce qui doit être fait après avoir reçu les données demandées, 
  grâce à une fonction de rappel (souvent sous forme de fonction fléchée" pour un code plus concis).
  La réponse est un objet contenant plusieurs attributs : parmi eux, seules les data nous intéressent. 
  La fonction de rappel donnée au premier .then fait référence à response.data qui sera récupérée comme
  data dans le paramètre de la fonction donnée au second .then. 
  La valeur de employee est alors remplacée dans l'état par data.results[0].

Ce data.results[0] est digne d'attention : l'étape suivante montre le lien entre la structure des données reçues, 
et l'extraction des informations nécessaires dans notre code.*/


  return (
    <div className='App'>
      <DisplayEmployee employee={employee} />
      <div>
        <button type="button" onClick={getEmployee}>Get employee</button>
      </div>
    </div>
  );
}





  /*
  return (
    <DisplayEmployee employee={sampleEmployee} />
)}
*/

export default App;
