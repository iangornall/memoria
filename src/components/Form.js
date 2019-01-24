import React from 'react';
import FormDisplay from './FormDisplay';
import { connect } from 'react-redux';
import { add } from '../reducers/appointmentsReducer';
import { unset } from '../reducers/hourReducer';
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: '',
      phoneFormatError: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    let appointment = this.props.appointments[this.props.hour];
    appointment ? this.setState({
      name: appointment.name,
      phone: appointment.phone.replace(/(\d{3})(\d{3})(\d{4})/g, 
        (match, p1, p2, p3) => ([p1, p2, p3].join('-')))
    }) : this.setState({
      name: '',
      phone: ''
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    let phoneNumber = this.state.phone.match(/\d+/g);
    phoneNumber && typeof phoneNumber === "object" && (phoneNumber = phoneNumber.join(''));
    if (phoneNumber && phoneNumber.length === 10) {
      this.props.dispatch(add({
        hour: this.props.hour,
        appointment: {
          name: this.state.name,
          phone: phoneNumber
        }
      }));
      this.props.dispatch(unset());
    } else {
      this.setState({
        phoneFormatError: true
      })
    }
  }
  render(){
    return (
      <FormDisplay 
        {...this.state} 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
let mapStateToProps = (state) => ({
  hour: state.hour,
  appointments: state.appointments
});
export default connect(mapStateToProps)(Form);