import React from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../reducers/appointmentsReducer';
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps){
    if (this.props.hour != prevProps.hour){
      let appointment = this.props.appointments[this.props.hour];
      appointment ? this.setState({
        name: appointment.name,
        phone: appointment.phone
      }) : this.setState({
        name: '',
        phone: ''
      })
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(add({
      hour: this.props.hour,
      appointment: {
        name: this.state.name,
        phone: this.state.phone
      }
    }));
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange} 
          />
        </label>
        <label>Phone number
          <input 
            type="text" 
            placeholder="Phone number" 
            name="phone" 
            value={this.state.phone} 
            onChange={this.handleChange} 
          />
        </label>
        <input type="submit" onSubmit={this.handleSubmit} />
      </form>
    )
  }
}
let mapStateToProps = (state) => ({
  hour: state.hour,
  appointments: state.appointments
});
export default connect(mapStateToProps)(Form);