import React from 'react'
import Tile from '../styled-components/Tile';
import Text from '../styled-components/Text';
import InputBox from '../styled-components/InputBox';
import Button from '../styled-components/Button';
let FormDisplay = ({name, phone, phoneFormatError, handleChange, handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <label>
      <Tile>
        <Text marginBottom="0.5em">Name:</Text>
        <InputBox 
          type="text" 
          placeholder="Full Name" 
          name="name" 
          value={name} 
          onChange={handleChange} 
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
          value={phone} 
          onChange={handleChange} 
        />
        {phoneFormatError &&
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
);
export default FormDisplay;