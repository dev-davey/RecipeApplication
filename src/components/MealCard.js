import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, button  } from 'reactstrap'
import {Link} from 'react-router-dom'

// props needed for meal cards:
// title
// image
// category
// key

const MealCard = (props)=>{
    console.log(props.title)

 return(
    <div className = "col-sm-4 mt-3 mb-3">
    <Card style={{ width: '100%', textAlign: "center" }}>
        <CardTitle><h5>{props.title}</h5></CardTitle>
        <CardBody>
            <CardImg variant="top" src={props.imageLocation} />
            <CardText className="mt-2">
                <h5>{props.category}</h5>
            </CardText>
            <Link to={`/recipe/${props.id}`}>
                    <button className="btn btn-outline-secondary recipeButton"> Recipe</button>
            </Link>
        </CardBody>
    </Card>
    </div>
 )
}

export default MealCard