import "./App.css";
import React, { Component } from "react";
// import Form from './components/Form'
import MealList from "./components/MealList";
// We needed to import bootstrap in app.js
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import Recipe from './components/Recipe'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      foodType: "",
    };
  }

  componentDidMount(){
    this.apiCall('');
  }

  apiCall = (query) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData.meals,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log("apiCall did not work", error);
      });
  };

  handleInputChange = (e) => {
    this.setState({
      foodType: e.target.value,
    });
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.apiCall(this.state.foodType);
  };

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App}>
          <h1>Search A Recipe</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="foodType"
              placeholder="Search A Food Type"
              onChange={this.handleInputChange}
            />
            <button type="submit">Search</button>
          </form>

            {this.state.data ? (
              <MealList data={this.state.data} />
            ) : (
                <div></div>
            )}
          </Route>
            
            <Route path="/Recipe/:id" component={Recipe} />
          </div>
        </Router>        
    
    );
  }
}
