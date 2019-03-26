 import React, { Component } from 'react'
 import { connect } from 'react-redux'
 import _ from 'lodash'
 import {elMail} from './email'
 import { LOGIN } from '../constants/index'
 import classNames from 'classnames'
 import {startCreateUser,startEmailVerification} from '../redux/actions/userAction'
 import {createUser, register} from '../Register/user'
 import { Link } from 'react-router-dom'
 import './register.css'



    class Register extends Component{
              constructor(props){
                super(props);
                this.state={
                  message: null,
                  isLogin: true,
                  user:{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                  },
                  error:{
                    firstName: null,
                    lastName: null,
                    email: null,
                    password: null
                  }
                }
                this._onSubmit = this._onSubmit.bind(this);
                this._onTextFieldChange = this._onTextFieldChange.bind(this);
                this._formValidation = this._formValidation.bind(this);
              };

              // Functions Declarations
              formValidation(fieldsToValidate = [], callback = () => {}){
                const {isLogin, user} = this.state;
                const allFields = {

                  firstName: {
                    message: "Your First Name is required.",
                    doValidate: () => {
                      const value = _.trim(_.get(user, 'firstName', ""));
                      if (value.length > 0){
                        return true;
                      }
                      return false;
                    }
                  },

                  lastName: {
                    message: "Your Last Name is required.",
                    doValidate: () => {
                      const value = _.trim(_.get(user, 'lastName', ""));
                      if (value.length > 0){
                        return true;
                      }
                      return false;
                    }
                  },
                  
                  email: {
                    message: "Your E-Mail is not correct.",
                    doValidate: () => {
                      const value = _.get(user, 'email', "");
                      if (value.length > 0 && elMail(value)){
                        return true;
                      }
                      return false;
                    }
                  },

                  password: {
                    message: "Password shoud has more than 3 characters.",
                    doValidate: () => {
            
            
                      const value = _.get(user, 'password', '');
            
            
                      if(value && value.length > 3){
            
                          return true;
                      }
            
                      return false;
                    }
                    },

                    confirmPassword: {
                      message: "Password does not match.",
                      doValidate: () => {
              
              
                        const passwordValue = _.get(user, 'password');
                        const value = _.get(user, 'confirmPassword', '');
              
              
                        if(passwordValue === value){
                            return true;
                        }
              
                        return false;
              
                      
                    } 
                  }
                 };


                 let errors = this.state.error;

                 _.each(fieldsToValidate, (field) => {

                  const fieldValidate = _.get(allFields, field);
                  if(fieldValidate){
          
                    errors[field] = null;
          
                    const isFieldValid = fieldValidate.doValidate();
          
                    if(isFieldValid === false){
                      errors[field] = _.get(fieldValidate, 'message');
                    }
                  }
          
              });


              this.setState({
                error: errors,
              }, () => {
              
                console.log("After processed validation the form errors", errors);
          
                let isValid = true;
          
                _.each(errors, (err) => {
          
                  if(err){
                    isValid = false;
          
                  }
                });



                callback(isValid);

		                   })

		

                }
                

              
              
  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form is valid");

    const fieldNeedToValidate = ['firstName', 'lastName', 'password', 'email'];

    this.formValidation(fieldNeedToValidate, (isValid) => {
      console.log(("form is validate", isValid));

      const { firstName, lastName, password, email } = this.state;

      let userData = {
        firstName,
        lastName,
        password,
        email,
      }
      this.props.changeState(userData);

      this.setState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
      })


    });

  }





  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.emailVerification === 'email already in use') {
      this.setState({ emailError: "Email already in use, please use another email" });

    }
    else {
      this.setState({ emailError: '' });
    }

    if (nextProps.userAccount === 'Account has been created!') {
      this.props.history.push(LOGIN);
    }

  }



  onChangeHandler = (e) => {
    let firstName = e.target.firstName;
    let value = e.target.value;
    this.setState({ [firstName]: value });

  }

              









	            _onSubmit(event){

                const {isLogin,user} = this.state; 
                event.preventDefault();


		let fieldNeedToValidate = ['email', 'password'];

		if(!isLogin){

			fieldNeedToValidate = ['firstName', 'lastName', 'email', 'password'];
		}


		this._formValidation(fieldNeedToValidate,(isValid) => {


        console.log("The form is validated? ", isValid);
        

        if(isValid){

					// send request to backend
					if(isLogin){
						// do send data for login endpoint

						register(this.state.user.email, this.state.user.password).then((response) => {

							/// login success

							this.setState({
								message: {
									type: 'success',
									message: 'Login successful.'
								}
              });
              
            }).catch((err) => {


							// login not suscess.
							this.setState({
								message: {
									type: 'error',
									message: 'An error login!'
								}
							});
							console.log(err);
						})


					}else{

						createUser(this.state.user).then((response) => {

							console.log("Hey i got data after send post", response);
						});
					}
					

				}
				//console.log("FOrm is submitted as: ", isLogin  ? "Login" : "Register", 'data:', user);

		});

		
	}

	    _onTextFieldChange(e){

		let {user} = this.state;


		const fieldName = e.target.name;
		const fieldValue = e.target.value;


		user[fieldName] = fieldValue;

		this.setState({user: user});



	}



               

              
    
    render() {
      const { error, emailError } = this.state;
      return (
        <div className="container-fluid mainReg">
            <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 "></div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12  content">
            <div className="head">
            <h6>Madre! Oaxacan Restaurant and Mezcaleria-Online Ordering</h6>
            <form className="needs-validation form" onSubmit={this.onSubmitHandler} component={Link} to='/login' method="POST">
    <div className="form-group">
      <label for="uname">First Name</label>
      <input type="text" 
      idName="uname" 
      placeholder="First Name" 
      name="firstName"  
      className={classNames('firstName f1','form-control', { 'error': _.get(error, 'name') })} 
      required
      value={this.state.name}
      onChange={this.onChangeHandler} 
      />

      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label for="uname">Last Name</label>
      <input type="text" 
      className={classNames('lastName f2','form-control', { 'error': _.get(error, 'name') })} 
      required
      value={this.state.name}
      onChange={this.onChangeHandler} 
      idName="uname" placeholder="Second Name" 
      name="lastName"  required
      
      />
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className={classNames('password f1', 'form-control', { 'error': _.get(error, 'password') })}
      idName="pwd" placeholder="Password" name="password"  required 
      value={this.state.password}
      onChange={this.onChangeHandler}
      onBlur={this.onBlurPasswordHandler}
      />
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label for="uname">E-Mail:</label>
      <input type="email"
      className={classNames('email f1','form-control', { 'error': _.get(error, 'email') })}
       idName="uname" onError="emailError" placeholder="E-mail" name="email" 
       onBlur={this.onBlurEmailHandler} 
       onChange={this.onChangeHandler} 
       FormHelperTextProps={{ error: true }}
       helperText={emailError}
       required  />
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    
    <button type="submit" className="btn btn-primary" >Create New Account</button>
    <h6>Already Registered. <a href="/login">Login</a>!</h6>
    
  </form>
  <div className="col-xl-4 col-lg-4 col-md-4 "></div>
            {/* <span>Powered by:</span> <img src={require('./images/cropped-icon-32x32.png')} alt="Madre" /> <span>Madre</span> */}
            </div>
            </div>
            
            
            </div>
          </div>
      )
    }
} 

const mapStateToProps = state => ({
})



const mapDispatchToProps = (dispatch) =>{
    return ({
      changeState: (userData) =>{
        dispatch(startCreateUser(userData))
      },
      checkEmail: (userData) => {
        dispatch(startEmailVerification(userData))
      },
    })
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Register);