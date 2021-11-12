import React from 'react'; 
import './global_styles.css';
import AppRouting from './app.routing';
function App(args){
console.log(args)
    return (
        <div className="main">
            <AppRouting></AppRouting>
        </div>
    )
}
export default App;