import {Component} from "react";
import SubmitButton from "../../Common/SubmitBtn/SubmitBtn.component";
import {Link, useNavigate} from 'react-router-dom'
// We are trying to make stateful component so we are using class based component
import {notify} from './../../../utils/notify';
import {ErrorHander} from './../../../utils/error.handler'
import { redirectToDashboad } from "../../../services/redirection";
import { httpClient } from "../../../utils/httpClient";
// const BASE_URL = process.env.REACT_APP_BASE_URL;
// import axios from "axios";

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
        // console.log("Self invoked function")
        let remember_me = localStorage.getItem('remember_me')
        if(remember_me === 'true'){
            this.props.history.push('home')
        }

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
            // this validateForm will only run when there is error in the field(name) but as soon as you start typing it will not run because the field is no more empty
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
    // console.log(this.state.data)

    const isValid = this.validateForm();
    if(!isValid){
        return
    }


    this.setState({
        isSubmitting: true
    })
    
    httpClient.POST(`/auth/login`, this.state.data)
    .then((response) => {
        // console.log(response);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('remember_me', this.state.remember_me);
        redirectToDashboad(response.data.user.role, this.props.history)
        notify.showSuccess(`Welcome ${response.data.user.username}`);
    })
    .catch((err) => {
        console.log(err.response)
        ErrorHander(err)
        this.setState({
            isSubmitting:false
        })
    })
   
    // this.setState({
    //     isSubmitting : true
    // })

    // // console.log(this.state);
    // setTimeout(() => {
    //     // let navigate = useNavigate();
    //     // this.setState({
    //     //     isSubmitting: false
    //     // })
    //     notify.showSuccess('done')
    //     this.props.history.push({
    //         pathname : '/setting/Ram',
    //         name: this.state.data.username
    //     })
    //     // once http response received -> store token in local storage
    //     // navigate('/home');

    //     localStorage.setItem('remember_me', this.state.remember_me)
    // }, 2000)
}
    render(){
        // try to keep UI logic inside render before return 
        // let btn = '';
        // if(this.state.isSubmitting){
        //    btn =  <button disabled className = "btn btn-dark">Logging in</button>
        // }else{
        //     btn = <button className = "btn btn-dark">Login</button>
        // }
            return (
                <div className = "container">
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
                        <p>Don't have an account? <Link to = "/register">Register</Link></p>
                        <p>
                            <Link to = "/forget-password">forget Password?</Link>
                        </p>
                    </form>
                </div>
            )
        }
}
export default LoginComponent