import React from 'react'
import MealCard from './MealCard'

const MealList = (props)=> {
    
    let results = props.data;

    let mealSearch = results.map(meal =>
        <MealCard 
        key={meal.idMeal}
        fuck={meal.idMeal}
        id={meal.idMeal}
        imageLocation={meal.strMealThumb} 
        title={meal.strMeal} 
        category={meal.strArea}
        />
        )

    
    return (
        <div className="row">
            {mealSearch}
        </div>
    )
}

export default MealList