
import './registerNew'
import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames'
import _ from 'lodash'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});


class Register extends Component {
    constructor(props){
		super(props);

		this.state = {
			message: null,
			isLogin: true,
			
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			

			error: {
				name: null,
				email: null,
				password: null,
				confirmPassword: null,
			}
		}

        this.onTextFieldChange = this.onTextFieldChange.bind(this)
		
	}

	_formValidation(fieldsToValidate = [], callback = () => {}){
	

		const allFields = {

			name: {
				message: "Your name is required.",
				doValidate: () => {
					const value = _.trim(_.get(this.state, 'name', ""));

				
					if(value.length > 0){
						return true;
					}

					return false;
				}
			},

			email: {
				message: "Email is not correct",
				doValidate: () => {

					const value = _.get(this.state, 'email', '');

					if(value.length >0 ){

						return true;
					}
					return false;
				}
			},

			password: {
				message: "Password shoud has more than 3 characters.",
				doValidate: () => {


					const value = _.get(this.state, 'password', '');


					if(value && value.length > 3){

							return true;
					}

					return false;

				}
			},

			confirmPassword: {
				message: "Password does not match.",
				doValidate: () => {


					const passwordValue = _.get(this.state, 'password');
					const value = _.get(this.state, 'confirmPassword', '');


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
    
    _onSubmit = (e) => {
        e.preventDefault();
        console.log("form is valid");
    
        const fieldNeedToValidate = ['name', 'email', 'password', 'confirmPassword'];
    
        this.formValidation(fieldNeedToValidate, (isValid) => {
          console.log(("form is validate", isValid));
    
          const { name, email, password, confirmpassword } = this.state;
    
          let userData = {
            name,
            email,
            password,
            confirmpassword,
        
          }
          this.props.changeState(userData);
    
          this.setState({
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            
    

          })
    
    
        });
    
      }
      onTextFieldChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
        console.log({[name]:value})
      }
    

    render() {
        const { classes } = this.props;
        const {user,loading,error} = this.state;
        // const isvalid = name ==='' || email ==='' || password ==='' || confirmpassword ==='' || cellNo ==='' || address ==='' ||  city ===''||province===''|| checkbox===''  || emailError !=='' || passwordError !== '' || loading; 
        
        return (
            
            <div>
                <div>
                    <FormControl className={classNames(classes.margin , {'error': _.get(error, 'name')})}>
                    
                        <InputLabel htmlFor="input-with-icon-adornment">Full Name</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            value={this.state.name} onChange={this.onTextFieldChange}
                            name="name"
                            
                            
                        />
                        
                    </FormControl>
                    <br />
                    <TextField
                        className={classNames(classes.margin , {'error': _.get(error, 'email')})}
                        id="input-with-icon-textfield"
                        label="Email"
                        name="email"
                        value={this.state.email}
                         onChange={this.onTextFieldChange}
                    />
                    <br />
                    <FormControl className={classNames(classes.margin , {'error': _.get(error, 'password')})} >
                        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            value={this.state.password} onChange={this.onTextFieldChange}
                            name="password"
                        />
                        
                    </FormControl>
                    <br />
                    <TextField
                        // className={classes.margin}
                        id="input-with-icon-textfield"
                        label="Confirm Password"
                        className={classNames(classes.margin , {'error': _.get(error, 'confirmPassword')})}
                        value={this.state.confirmPassword} onChange={this.onTextFieldChange}
                        name="confirmPassword"
                    />
                    <br />
                    <Button
                                        onClick={this.onSubmitHandler}
                                        // disabled={isvalid}
                                        type="submit"
                                        variant="contained" size="medium" color="primary" className="singUpBtn">
                                            {
                                            loading ?
                                            <CircularProgress size={20} />
                                            :
                                            <span>
                                            Submit
                                          
                                                
                                           
                                            </span>
                                          }
                                        </Button>
                    
                </div>
            </div>
        )
    }
}
Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);