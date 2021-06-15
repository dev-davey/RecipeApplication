import "./App.css";
import React, { Component } from "react";
// import Form from './components/Form'
import MealList from "./components/MealList";
// We needed to import bootstrap in app.js
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router, 
  Route, 
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
      })
      .catch((error) => {
        console.log("apiCall did not work", error);
      });
  };

  handleInputChange = (e) => {
    this.setState({
      foodType: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.apiCall(this.state.foodType);
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Route exact path="/" component={App}>
            <div className="heading">
              <h1 className="text-center">Welcome To The Recipe App</h1>
            </div>
            <form onSubmit={this.handleSubmit} className="form">
              <input
                type="text"
                name="foodType"
                placeholder="Search A Food Type"
                onChange={this.handleInputChange}
                className="searchBox"
              />
              <button type="submit" className="btn btn-primary btn-block">Search</button>
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
