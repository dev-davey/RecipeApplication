import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle  } from 'reactstrap'
import {Link} from 'react-router-dom'

// props needed for meal cards:
// title
// image
// category
// key

const MealCard = (props)=>{
    console.log(props.title)
 return(
    <div className = "col-4 mt-2 mb-2">
    <Card style={{ width: '18rem', textAlign: "center" }}>
        <CardTitle>{props.title}</CardTitle>
        <CardBody>
            <CardImg variant="top" src={props.imageLocation} />
            <CardText>
                {props.category}
                <Link to={`/recipe/${props.id}`}>
                    <button> Recipe</button>
                </Link>
            </CardText>
        </CardBody>
    </Card>
    </div>
 )
}

export default MealCard