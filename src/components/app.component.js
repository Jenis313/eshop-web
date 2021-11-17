import React from 'react'; 
import './global_styles.css';
import AppRouting from './app.routing';
import {ToastContainer} from 'react-toastify';

// Css for tostify(see docs)
import 'react-toastify/dist/ReactToastify.css';

function App(args){
// console.log(args)
    return (
        <div className="main">
            <AppRouting></AppRouting>
            <ToastContainer></ToastContainer>
        </div>
    )
}
export default App;