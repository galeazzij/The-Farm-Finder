import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { readAllFarms } from "../services/farms";
import ShowFarms from "./ShowFarms";
import ShowFoods from "./ShowFoods";
import { readAllFoods } from "../services/foods";
import CreateFood from "./CreateFood";
import FoodItem from "./FoodItem";
import UpdateFood from "./UpdateFood";
import ShowOneFarm from "./ShowOneFarm";

export default function Main(props) {
  const { setCurrentUser } = props;

  const [farms, setFarms] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFarms()
    getFoods()
  }, [])

  const getFarms = async () => {
    const farmList = await readAllFarms();
    setFarms(farmList);
  }

  const getFoods = async () => {
    const foodList = await readAllFoods();
    setFoods(foodList);
  }

  return (
    <main>
      <Route path='/login' render={(props) =>
        (<Login {...props}
          setCurrentUser={setCurrentUser}
        />
        )} />
       <Route path='/register' render={(props) =>
        (<Register {...props}
          setCurrentUser={setCurrentUser}
        />
        )} />
       <Route exact path='/farms' render={() =>
        (<ShowFarms 
          farms={farms}
        />
        )} />
       <Route exact path='/farms/:id' render={(props) =>
        (<ShowOneFarm 
          {...props}
          farms={farms}
        />
        )} />
       <Route exact path='/foods' render={() =>
        (<ShowFoods 
          foods={foods}
          setFoods={setFoods}
        />
        )} />
       <Route path='/foods/new' render={(props) =>
        (<CreateFood 
          {...props}
          setFoods={setFoods}
          foods={foods}
        />
        )} />
       <Route exact path='/foods/:id' render={(props) =>
        (<FoodItem 
          {...props}
          farms={farms}
        />
        )} />
       <Route path='/foods/:id/edit' render={(props) =>
        (<UpdateFood
          {...props}
          setFoods={setFoods}
          foods={foods}
        />
        )} />
    </main>
  );
}
