import React, { Component } from 'react'
import YoutubeEmbed from './YoutubeEmbed';

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
            <div className="text-center recipeContainer container">
              <div className="recipeHeader">
                <h1>The Recipe</h1>
              </div>  
                 {this.state.recipeData ? (
                <div>
              <h1>{this.state.recipeData[0].strMeal}</h1>
              <img className="mb-4 recipeImg" src={this.state.recipeData[0].strMealThumb}/>
              <h5>Instructions</h5>
              <p>{this.state.recipeData[0].strInstructions}</p>
              
              <h5>Ingredients</h5>
              <ul>
                  <li>{this.state.recipeData[0].strMeasure1} {this.state.recipeData[0].strIngredient1}</li>
                  <li>{this.state.recipeData[0].strMeasure2} {this.state.recipeData[0].strIngredient2}</li>
                  <li>{this.state.recipeData[0].strMeasure3} {this.state.recipeData[0].strIngredient3}</li>
                  <li>{this.state.recipeData[0].strMeasure4} {this.state.recipeData[0].strIngredient4}</li>
                  <li>{this.state.recipeData[0].strMeasure5} {this.state.recipeData[0].strIngredient5}</li>
                  <li>{this.state.recipeData[0].strMeasure6} {this.state.recipeData[0].strIngredient6}</li>
                  <li>{this.state.recipeData[0].strMeasure7} {this.state.recipeData[0].strIngredient7}</li>
                  <li>{this.state.recipeData[0].strMeasure8} {this.state.recipeData[0].strIngredient8}</li>
                  <li>{this.state.recipeData[0].strMeasure9} {this.state.recipeData[0].strIngredient9}</li>
                  <li>{this.state.recipeData[0].strMeasure10} {this.state.recipeData[0].strIngredient10}</li>
                  <li>{this.state.recipeData[0].strMeasure11} {this.state.recipeData[0].strIngredient11}</li>
                  <li>{this.state.recipeData[0].strMeasure12} {this.state.recipeData[0].strIngredient12}</li>
                  <li>{this.state.recipeData[0].strMeasure13} {this.state.recipeData[0].strIngredient13}</li>
                  <li>{this.state.recipeData[0].strMeasure14} {this.state.recipeData[0].strIngredient14}</li>
                  <li>{this.state.recipeData[0].strMeasure15} {this.state.recipeData[0].strIngredient15}</li>
                  <li>{this.state.recipeData[0].strMeasure16} {this.state.recipeData[0].strIngredient16}</li>
                  <li>{this.state.recipeData[0].strMeasure17} {this.state.recipeData[0].strIngredient17}</li>
                  <li>{this.state.recipeData[0].strMeasure18} {this.state.recipeData[0].strIngredient18}</li>
                  <li>{this.state.recipeData[0].strMeasure19} {this.state.recipeData[0].strIngredient19}</li>
                  <li>{this.state.recipeData[0].strMeasure20} {this.state.recipeData[0].strIngredient20}</li>
              </ul>
              <h5 className="mt-5">Watch Instructional Video Below</h5>           
              <YoutubeEmbed embedId={this.state.recipeData[0].strYoutube.slice(this.state.recipeData[0].strYoutube.indexOf('=') + 1,this.state.recipeData[0].strYoutube.length)}/>
              </div>
            ) : (
                <div></div>
            )}
            </div>
        )
    }
}

