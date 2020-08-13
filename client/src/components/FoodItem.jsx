import React, {useState, useEffect} from 'react'
import { readOneFood } from '../services/foods'

export default function FoodItem(props) {
  const [food, setFoodItem] = useState(null);

  useEffect(() => {
    getFoodItem()
  }, [])

  const getFoodItem = async () => {
    const foodItem = await readOneFood(props.match.params.id)
    setFoodItem(foodItem)
  }
  return (
    <div>
      <h3></h3>
    </div>
  )
}
