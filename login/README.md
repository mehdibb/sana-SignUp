(***Several bugs to be fixed***)A simple Sign Up page made with:
*React
*Redux
*Redux-form
*Redux-dev-tools
*Semantic UI
*Redux-thunk
*React-Router
*Google Maps React
*Axios

Features:
*Fully responsive page design even on mobile phones
*Client side form validation using redux-form
*Responsive Google map component using redux
*User friendly UX design for form-submit button depending on the state of the 
  app (filling form/waiting for the server response/ response status-ok)
*User friendly 2nd page loading state while waiting for the server response.
*Redux store design is focused on scalability.
*Server calls are used by axios.create functions in order to be reusable.

Bug:
*The submit button is partially covered with google map component.(to be resolved soon)
*The google map component is in the development-only mode due to the google billing error.
*The second page addresses list is responsive but i couldn't work on it due to the CORS-policy error cause by the server.I even tried to solve it using heroku-cors-anywhere but it didn't end up working.

ToDos:
*Actually I made use of semantic due to the shortage of time and in order to focus on redux and redux-form technologies. I'll be looking forward to refactor the code in order to use only css(flex-box).
