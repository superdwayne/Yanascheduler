import React, { Component } from "react";
import Request from './requests';
import moment from 'moment'


import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      name: '',
      date: ''
    }
  }


  componentDidMount() {

    const params = {
      method: 'GET',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    Request(`http://localhost:8080/`, params, (response) => {
      console.log( ">>>" , response)
      this.setState({  entries: response })
    });

  }

  myDetails = (e) => {
    this.setState({ name: e.target.value });
  }

  myDetailsTime = (e) => {
    this.setState({ time: e.target.value });
  }

  myDetailsDate = (e) => {
    this.setState({ date: e.target.value });
  }



  //  pushtoE =  (e) => {
  //   if (this.state.entries.lenth > 0) {
  //     console.log('hello')
      
  //     this.forceUpdate();
  //     this.state.entries.map((people) =>
  //       console.log(">>>", people))
  //   } else {
  //     this.state.entries.map((people) =>
  //       console.log(">>>", people))
  //     console.log('bye')
      
  //     this.forceUpdate();
  //   }

  // }

  render() {

    const min = '2021-02-08'
    const max = ['2021-02-14', '2021-02-21', '2021-02-28']

    return (
      <div className="App">


      <section className="half">
          <p>Hello my name is Yana Evelyn Paisley-Marshall</p>
          <p>I was born on the 1st of Feburary at 11:02</p>
          <p>Want to meet me? Book a *slot by using the form</p>
          <p>Spaces are limited atm as I'm still growing</p>
        
          <small>* times may be subject to change, as I may be sleeping, but I'll do my best</small>
        </section>

        <section className="half">
          <form method="post" action="http://localhost:8080/" encType="application/json">
            <input type='text' required onChange={this.myDetails} value={this.state.name} placeholder="Name" name='name'></input>
            <input type='date' required min={min} max={this.state.date > moment().add(6, 'days').format('YYYY-MM-DD') ? max[1] : max[0] } onChange={this.myDetailsDate} placeholder="date" value={this.state.date} name='date'></input>
          
      

            {/* { moment(Date.now()).format('YYYY-MM-DD') < max ? 'hello' : 'bye' } */}
          {console.log(">>>" ,moment().add(7, 'days').format('YYYY-MM-DD'))}
          {/* if moment > that input(max)
          provide more dates
          & relase the booking button */}
            <select required name="time" id="time" onChange={this.myDetailsTime} >
              <option value={this.state.time} name='time'>12:00</option>
              <option value={this.state.time} name='time'>16:00</option>
            </select>

            {/* { moment().add(8, 'days').format('YYYY-MM-DD') > this.state.date  ? null : <button className="active" type="submit" >I'm ready to meet Yana</button> } */}
            
            {this.state.entries.length > 3 ? <button type="submit" disabled>Sorry we're booked up </button> : <button type="submit" >I'm ready to meet Yana</button> }
          </form>

          {this.state.entries.length > 0 ? <h3 >Booked meeting this week</h3> : null}
          
          <div className="container">
            {this.state.entries.map(people =>

              <div className="people">
                <ul>
                  <li>Who: <strong>{people.name}</strong></li>
                  <li>When: <strong>{people.date}</strong></li>
                  <li>Time: <strong>{people.time}</strong></li>
                </ul>


              </div>)}
          </div>

        </section>
       
      </div>
    )
  }
}

export default App;

