import React from 'react';
import List from './List.jsx';
import Appointments from './Appointments.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doctors: [],
      appointments: [],
      chosenDoctor: {},
      render: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:4000/doctors/all")
    .then(res => res.json())
    .then(doctors => {
      this.setState({doctors});
    });
  }

  handleClick(id) {
    let { doctors } = this.state;
    let chosenDoctor = doctors.find(doctor => doctor.id === id);

    fetch(`http://127.0.0.1:4000/appointments/${id}`)
    .then(res => res.json())
    .then(appointments => {
      this.setState({
        appointments,
        chosenDoctor,
        render: 'apts'
      });
    });
  }

  showAppointments() {
    let {render, chosenDoctor, appointments} = this.state;

    if (render === 'apts') {
      return <Appointments chosenDoctor={chosenDoctor} appointments={appointments}/>
    }

  }

  render() {
    let { doctors, appointments, chosenDoctor } = this.state;

    return (
      <div id="content">
        <List doctors={doctors} handleClick={this.handleClick}/>
        {this.showAppointments()}
      </div>
    );
  }
}



export default App;
