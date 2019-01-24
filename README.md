Technologies used:
React with Redux and Styled Components

I used create-react-app and redux-starter-kit to build basic scaffolding with best practices implemented.  I have used redux before without the starter kit, but I found the included tools made for more readable code.

I used Styled Components to build out styles because it gives you modular, reusable code.  This enabled me to reuse styled components from a prior project.

Application Requirements:

1. Using your preferred Javascript framework, build a screen which shows a list of hour long slots from 9am to 5pm.

I built a list from an array of times.

2. When one time slot is clicked, pop up a modal which asks for name and phone number.

I used onClick event to trigger a function that dispatched a 'set' action to redux with the hour clicked.  This ran the associated function in the hourReducer, setting the 'hour' in state.

I set the modal to be visible only when the hour was greater than -1, the initial state.

3. When the name and phone number is submitted, the time slot selected should change to red, indicating the time slot is no longer available.

I updated the schedule code to check the 'appointments' in the redux and apply a class when the appointments array at the matching hour index was truthy.

4. If the red time slot is clicked on again, the modal will pop up with the name and phone number for that appointment prepopulated.  Users will be able to edit the name and phone number to change the user for the appointment.

I updated the form component code with a ComponentDidUpdate lifecycle method that would check if the 'hour' in state had changed.  If it did, and the 'appointments' at index 'hour' was truthy, the function used setState to update the local form state with data from appointments. If the appointment was falsy, it used setState to set the variables to empty strings.

