import React, { Component } from 'react'

export default class Recipe extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.id)
        this.state = {
          recipeData: ""
        };
      }

       
    
      componentDidMount(){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
            recipeData: responseData.meals,
            });
            console.log(this.state.recipeData);
        })
        .catch((error) => {
            console.log("apiCall did not work", error);
        });
      }

    render() {
        return (
            <div>
                <h1>Recipe</h1>
                 {this.state.recipeData ? (
                <div>
              <h1>{this.state.recipeData[0].strMeal}</h1>
              <img src={this.state.recipeData[0].strMealThumb}/>
              <p>{this.state.recipeData[0].strInstructions}</p>
              <ul>
                  <li>{this.state.recipeData[0].strMeasure1} - {this.state.recipeData[0].Ingredient1}</li>
                  <li>{this.state.recipeData[0].strMeasure2} - {this.state.recipeData[0].strIngredient2}</li>
                  <li>{this.state.recipeData[0].strMeasure3} - {this.state.recipeData[0].strIngredient3}</li>
                  <li>{this.state.recipeData[0].strMeasure4} - {this.state.recipeData[0].strIngredient4}</li>
                  <li>{this.state.recipeData[0].strMeasure5} - {this.state.recipeData[0].strIngredient5}</li>
                  <li>{this.state.recipeData[0].strMeasure6} - {this.state.recipeData[0].strIngredient6}</li>
                  <li>{this.state.recipeData[0].strMeasure7} - {this.state.recipeData[0].strIngredient7}</li>
                  <li>{this.state.recipeData[0].strMeasure8} - {this.state.recipeData[0].strIngredient8}</li>
                  <h1></h1>
              </ul>
              <iframe src={this.state.recipeData[0].strYoutube}></iframe>
              </div>
            ) : (
                <div></div>
            )}
            </div>
        )
    }
}

