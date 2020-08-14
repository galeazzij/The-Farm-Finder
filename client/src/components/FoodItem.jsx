import React, {useState, useEffect} from 'react'
import { readOneFood, addFarm } from '../services/foods'
import { Link } from 'react-router-dom'

export default function FoodItem(props) {
  const [food, setFoodItem] = useState(null);
  const [farmId, setFarmId] = useState(null);

  useEffect(() => {
    getFoodItem()
  }, [])

  const getFoodItem = async () => {
    const foodItem = await readOneFood(props.match.params.id)
    setFoodItem(foodItem)
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setFarmId(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const foodItem = await addFarm(farmId, food.id);
    setFoodItem(foodItem);
  }

  return (
    <div>
      {
        food && (
          <>
              <h3>{food.name}</h3>
            {food.farms.map((farm) => (
              <Link to={`/farms/${farm.id}`}><p key={farm.id}>{farm.name}</p></Link>
            ))}
            
            <form onSubmit={handleSubmit}>
              <select onChange={handleChange}>
                <option selected disabled>-- Select a farm --</option>
                {props.farms.map((farm) => (
                  <option value={farm.id}>{farm.name}</option>
                ))}
              </select>
              <button>Add</button>
            </form>
          </>
        
        )
      }
      
    </div>
  )
}
