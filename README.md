# La Persistència de la Memòria

## Technologies used:
 * React 
 * Redux
 * Styled Components
 * Jest

This application should exhibit best practices for application development where possible.

 * I used create-react-app and redux-starter-kit to build basic scaffolding with best practices implemented.  I have used redux before without the starter kit,and I found the included tools made for more readable code.

 * I used Styled Components to build out styles because it gives you modular, reusable code.  This enabled me to reuse styled components from a prior project.

 * I broke apart the lifecycle and logic components from the display components for ease of testing.

 * I used Jest to create smoke screen tests to be sure components rendered.  I had not previously performed testing with Jest, and I found it helped identify bugs.  Due to the scope of the project, I tested functionality as a user. However, I am interested in learning more and writing automated tests in the future on larger projects at Cox.

## Application Requirements:

#### 1. Using your preferred Javascript framework, build a screen which shows a list of hour long slots from 9am to 5pm.

I built a list from an array of times with React.

#### 2. When one time slot is clicked, pop up a modal which asks for name and phone number.

I used an onClick event to trigger a function that dispatched a 'set' action to redux with the hour clicked.  This ran the associated function in the hourReducer, setting the 'hour' in state.

I set the modal to render only when the hour was greater than -1, the initial state.

#### 3. When the name and phone number is submitted, the time slot selected should change to red, indicating the time slot is no longer available.

I updated the schedule code to check the 'appointments' in the redux store and apply a class when the appointments array at the matching hour index was truthy.

#### 4. If the red time slot is clicked on again, the modal will pop up with the name and phone number for that appointment prepopulated.  Users will be able to edit the name and phone number to change the user for the appointment.

I updated the form component code with a ComponentDidMount lifecycle method.  When the 'appointments' at index 'hour' in the Redux store is truthy, the function uses setState to update the local form state with data from appointments.
