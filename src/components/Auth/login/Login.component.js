import {Component} from "react";
import SubmitButton from "../../Common/SubmitBtn/SubmitBtn.component";
// We are trying to make stateful component so we are using class based component

const defaultForm = {
    username: '',
    password: ''
}
class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            // initial data
            data : {
                ...defaultForm
            },
            error: {
                ...defaultForm
            },
            isValidForm : false,
            isSubmitting : false,
            remember_me : false
            // remember_me : false,
            // username_err : '',
            // password_err : '',
            // isSubmitting : false,
            // isValidForm : false
        }
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        console.log('at first');
    } 
    componentDidMount(){
        console.log("Self invoked function")

    }
handleChange(event){
    const {name, value, type, checked} = event.target;
    console.log('name --> ', name );
    console.log('value --> ', value );
    console.log('checked --> ', checked );
    console.log('type --> ', type );
    // to modify state 
    // use setState
    if(type === 'checkbox'){
        return this.setState({
            [name] : checked
        })
    }
    this.setState((prevState) => {
        return {
            data : {
                ...prevState.data,
                [name] : value
            }
        }
    }, () => {
        // form validation
        if(this.state.error[name]){
            this.validateForm();
        }
    })
}
validateForm(){
    let usernameErr = this.state.data.username ? '' : 'required field' ;
    let passwrdErr = this.state.data.password ? '' : 'required field' ;
    this.setState((prevState) => {
        return {
            error: {
                ...prevState.error,
                username: usernameErr,
                password: passwrdErr 
            }
        }
    })
    return true && !usernameErr && !passwrdErr
}
submit(event){
    event.preventDefault();
    const isValid = this.validateForm();
    if(!isValid){
        return
    }
    this.setState({
        isSubmitting : true
    })

    console.log(this.state);
    setTimeout(() => {
        this.setState({
            isSubmitting: false
        })
    }, 4000)
}
    render(){
        // try to keep UI logic inside render before return 
        // let btn = '';
        // if(this.state.isSubmitting){
        //    btn =  <button disabled className = "btn btn-dark">Logging in</button>
        // }else{
        //     btn = <button className = "btn btn-dark">Login</button>
        // }
        console.log("render at second")
            return (
                <div>
                    <h2>login</h2>
                    <p>Please login to use hamro application</p>
                    <form className = "form-group" onSubmit = {this.submit}>
                        <label htmlFor = "username">Username</label>
                        <input className = "form-control" type = "text" name = "username" id = "username" placeholder = "Username" onChange = {this.handleChange}></input>
                        <p className = "form-err">{this.state.error.username}</p>
                        <label htmlFor = "password">Password</label>
                        <input className = "form-control" type = "text" name = "password" id = "password" placeholder = "Password" onChange = {this.handleChange}></input>
                        <p className = "form-err">{this.state.error.password}</p>
                        <input type = "checkbox" name = "remember_me" onChange = {this.handleChange}></input>
                        <label> &nbsp; Remember me</label>
                        <hr/>
                        <SubmitButton isSubmitting = {this.state.isSubmitting} enabledLabel = "Login"/>
                        <p>Don't have an account? <a href = "#">Register</a></p>
                    </form>
                </div>
            )
        }
}
export default LoginComponent