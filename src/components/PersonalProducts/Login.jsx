import React, { useState, useEffect, useReducer, useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import AuthContext from "./AuthContext";

function emailReducer(state, action) {
  switch(action.type) {
    case 'EMAIL_INPUT':
      return {value: action.val, isValid: undefined};
    case 'EMAIL_VALID':
      return {value: action.val, isValid: state.value.includes('@')}
  }
}

function passwordReducer (state, action) {
  switch(action.type){
    case 'PASSWORD_INPUT':
      return {value: action.val, isValid: undefined};
    case 'PASSWORD_VALID':
      return {value: state.value, isValid: state.value.trim().length > 6}
  }
}

function formReducer(state, action) {
    switch(action.type) {
      case 'FORM_VALID':
     return {isValid: action.eVal && action.pVal }
    }
}

function Login(props) {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  //const [formIsValid, setFormIsValid] = useState(false);

  let [emailState, emailDispatcher] = useReducer(emailReducer, {value: '', isValid: undefined});
  let [passwordState, passwordDispatcher] = useReducer(passwordReducer, {value: '', isValid:undefined});
  let [formState, formDispatcher] = useReducer(formReducer, {isValid: undefined});
 
  useEffect(()=>{
    let value = setTimeout(() => {
        console.log('validating form input...')
        formDispatcher({eVal: emailState.isValid, pVal: passwordState.isValid, type: 'FORM_VALID'});
    }, 500);

    return () => {
        console.log('cleanup function executed');
        clearTimeout(value);
    }
  }, [emailState.isValid, passwordState.isValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    emailDispatcher({val: event.target.value, type: 'EMAIL_INPUT'})

   
  };

  let authctx = useContext(AuthContext)

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    passwordDispatcher({val: event.target.value, type: 'PASSWORD_INPUT'})

  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    emailDispatcher({val: emailState.value, type: 'EMAIL_VALID'})
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(passwordState.value.trim().length > 6);
    passwordDispatcher({val: passwordState.value, type:'PASSWORD_VALID'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authctx.onLogin(emailState.value, passwordState.isValid);
  };

  //setFormIsValid(false);
  //props.loginHandled(formIsValid)

  return (
    <form onSubmit={submitHandler}>
      <div data-aos="fade-up" className="container p-4">
        <div className="flex items-center justify-between">
          <div className="mb-2">
            <h1 className="text-xs sm:text-xl">
              To add your product <br />
              Please, Login first!
            </h1>
          </div>
        </div>
        <div className="">
          <div>
            <input
              id="email"
              type="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              placeholder="Email"
              className={emailState.isValid === false? "bg-red-400 border-red-700  p-3 w-full text-black rounded-full border dark:border-gray-500 dark:bg-red-400  mb-4" : "p-3 w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800  mb-4"}
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              placeholder="Password"
              className={passwordState.isValid === false ? "bg-red-400 border-red-700  p-3 w-full text-black rounded-full border dark:border-gray-500 dark:bg-red-400  mb-4" : "p-3 w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800  mb-4"}
            />
          </div>
        </div>
        <div className="flex justify-evenly">
          <button
            type="submit"
            disabled={!formState.isValid}
            onClick={authctx.onLogin}
            className={formState.isValid === true? 'bg-gradient-to-r from-orange-800 to-orange-500 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full':'text-white py-1 px-4 rounded-full bg-gray-500'}
          >
            Login
          </button>
          <button
          disabled={true}
            onClick={authctx.onLogout}
            className="bg-gradient-to-r from-orange-800 to-orange-500
                              hover:scale-105 duration-200 text-white
                              py-1 px-4 rounded-full"
          >
            LogOut
          </button>
        </div>
      </div>
    </form>
  );
}
export default Login;
