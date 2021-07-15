import {  button  } from 'reactstrap'
import {Link} from 'react-router-dom'
import "../css/mealcard.css"

// props needed for meal cards:
// title
// image
// category
// key

const MealCard = (props)=>{

 return(
    <div className="col-sm-4 col-6 mt-3 mb-3 col-lg-3 meal-card">
            <img className="img-fluid w-90 mb-3" variant="top" src={props.imageLocation} alt="Recipe" />
            <div className="card-text">
                <h5>{props.category}</h5>
                <h5>{props.title}</h5>
                <p>{props.instructions.slice(0, 300) + ' ' + '...'}</p>
            </div>
            <div className="text-center">  
            <Link to={`/recipe/${props.id}/${props.title}`}>
                    <button className="btn btn-outline-secondary recipeButton mb-3"> Recipe</button>
            </Link>
            </div>  
    </div>
 )
}

export default MealCard