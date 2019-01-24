import React from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../reducers/appointmentsReducer';
import { unset } from '../reducers/hourReducer';
import Tile from '../styled-components/Tile';
import Text from '../styled-components/Text';
import InputBox from '../styled-components/InputBox';
import Button from '../styled-components/Button';
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
      <form onSubmit={this.handleSubmit}>
        <label>
          <Tile>
            <Text marginBottom="0.5em">Name:</Text>
            <InputBox 
              type="text" 
              placeholder="Full Name" 
              name="name" 
              value={this.state.name} 
              onChange={this.handleChange} 
            />
          </Tile>
        </label>        
        <label>
          <Tile>
            <Text marginBottom="0.5em">Phone number:</Text>
            <InputBox 
              type="text" 
              placeholder="xxx-xxx-xxxx" 
              name="phone" 
              value={this.state.phone} 
              onChange={this.handleChange} 
            />
            {this.state.phoneFormatError &&
              <Text marginTop="0.5rem" className="red">Please enter your ten digit phone number.</Text>
            }
          </Tile>
        </label>
        <label>
          <Tile>
            <Button type="submit">Submit</Button>
          </Tile>
        </label>
      </form>
    )
  }
}
let mapStateToProps = (state) => ({
  hour: state.hour,
  appointments: state.appointments
});
export default connect(mapStateToProps)(Form);