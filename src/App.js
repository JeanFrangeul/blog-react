import './App.css';
import Meal from './Meal.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [meal, setMeal] = useState(null);

  useEffect(() => {
      (async function () {

          axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
          .then((response) => {
              setMeal(response.data.meals[0]);
          })

          /* ici on utilise FETCH()
          const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

          const response = await fetch(url);

          const mealsFromApi = await response.json();

          meal = mealsFromApi.meals[0];
          */
          
      })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World !!
        </p>
      </header>
      <Meal meal={meal}/>
    </div>
  );
};

export default App;