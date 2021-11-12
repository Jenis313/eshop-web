import React, { Component } from 'react';
import SubmitButton from '../../Common/SubmitBtn/SubmitBtn.component';
import { Link } from 'react-router-dom';
const defaultForm = {
    name : '',
    email : '',
    phoneNumber : '',
    username : '',
    password : '',
    confirmPassword : '',
    gender : '',
    dob : '',
    temporaryAddress : '',
    permanentAddress : ''
}
class RegisterComponent extends Component{
   constructor(){
       super();
       this.state = {
           data : {
               ...defaultForm
           },
           error : {
               ...defaultForm
           },
           isSubmitting : false,
           isValidForm: false
       }
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange(e) {
       let {name , value} = e.target;
       this.setState((prevState) => {
           return {
               data : {
               ...prevState.data,
               [name] : value
            }
        }
       }, () => {
        //    form validation
        this.validateForm(name);
       } )
   }
   validateForm(fieldName){
       let errMsg;
       switch(fieldName){
           case 'username': 
                errMsg = this.state.data[fieldName] 
                    ? this.state.data[fieldName].length > 6 
                        ? '' : 'Username must be at least 6 characters'
                    : 'Required field'
                break;
            
            case 'password': 
                errMsg = this.state.data['confirmPassword']
                    ? this.state.data['confirmPassword'] === this.state.data[fieldName]
                        ? ''
                        : 'Password didnt match'
                    : this.state.data[fieldName] 
                        ? this.state.data[fieldName].length > 6 
                            ? '' : 'Weak password'
                        : 'Required field'

                break;

            case 'email': 
                errMsg = this.state.data[fieldName] 
                    ? this.state.data[fieldName].includes('@') &&  this.state.data[fieldName].includes('.com')
                        ? '' : 'Invalid email'
                    : 'Required field'
                break;
            
            case 'confirmPassword' : 
            errMsg = this.state.data['password']
                ? this.state.data[fieldName] === this.state.data['password']
                    ? ''
                    : 'Password didnnot match'
                :this.state.data[fieldName]
                    ? this.state.data[fieldName].length > 6
                        ?  ''
                        : 'Weak password'
                    : 'required field*'
                break;

           default:
            break;
       }
       this.setState((prevState) => {
           return {
               error : {
                   ...prevState.error,
                   [fieldName] : errMsg
               }
           }
       }, () => {
        //    disable btn if there is an error
        const errors = Object.values(this.state.error).filter(err => err);
        // console.log(errors)
        this.setState({
            isValidForm : errors.length === 0
        })

       })
   }

   handleSubmit(e){
       e.preventDefault() 
   }
   render(){
       const {error} = this.state;
       return (
            <div>
                <h2>Register</h2>
                <p>Please register to continue</p>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name</label>
                    <input type = 'text' placeholder = "Name" name = 'name' className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Email</label>
                    <input type = 'text' placeholder = "Email" name = 'email' className = 'form-control' onChange = {this.handleChange}></input>
                    <p className = 'form-err'>{error.email}</p>

                    <label>Phone Number</label>
                    <input type = 'numnber' name = 'phoneNumber' className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Username</label>
                    <input type = 'text' placeholder = "Username" name = 'username' className = 'form-control' onChange = {this.handleChange}></input>
                    <p className = 'form-err'>{error.username}</p>

                    <label>Password</label>
                    <input type = 'password' placeholder = "Password" name = 'password' className = 'form-control' onChange = {this.handleChange}></input>
                    <p className = 'form-err'>{error.password}</p>


                    <label>Conform Password</label>
                    <input type = 'password' placeholder = "Conform Password" name = 'confirmPassword' className = 'form-control' onChange = {this.handleChange}></input>
                    <p className = 'form-err'>{error.confirmPassword}</p>


                    <label>Gender</label>
                    <br />
                    <input type = 'radio' name = 'gender' value = "male" onChange = {this.handleChange}></input>Male
                    <input type = 'radio' name = 'gender' value = "female" onChange = {this.handleChange}></input>Female
                    <input type = 'radio' name = 'gender' value = "others" onChange = {this.handleChange}></input>Others

                    <br />

                    <label>Date of birth</label>
                    <input type = 'date' name = 'dob' className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Temporary Address</label>
                    <input type = 'text' placeholder = "Temporary Address" name = 'temporaryAddress' className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Permanent Address</label>
                    <input type = 'text' placeholder = "Permanent Address" name = 'permanentAddress' className = 'form-control' onChange = {this.handleChange}></input>

                    <SubmitButton isDisabled = {!this.state.isValidForm} isSubmitting = {this.state.isSubmitting}></SubmitButton>
                    <p>Already have an account? <Link to = "/">Login</Link></p>

                </form>
            </div>
       )
   }
}
export default RegisterComponent;