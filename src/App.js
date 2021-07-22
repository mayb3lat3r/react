import './App.css';
import { Component } from 'react';
import React from 'react';
import Car from './Car/Car';




class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2001},
      {name: 'Lamba', year: 2009},
      {name: 'Gelik', year: 2021}
    ],
    pageTitle: 'My autopark in 2030:'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    console.log('Render')

    return(
     <div className="App">
       <h1>{this.state.pageTitle}</h1>

      <input onChange={this.handleInput} type="text" />

      <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>Change title</button>
      { this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}   
          />
        )
      }) }

       {/* <Car carName={cars[0].name} year={cars[0].year} onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}>Red</Car>
       <Car carName={cars[1].name} year={cars[1].year} onChangeTitle={() => this.changeTitleHandler.bind(this, cars[1].name)}>Blue</Car>
       <Car carName={cars[2].name} year={cars[2].year}>Blue</Car> */}
     </div>
    )
  }
}

export default App;
