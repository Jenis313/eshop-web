import React from 'react';
function SubmitButton(props){
    const enabledLabel = props.enabledLabel || 'Submit';
    const  disabledLabel = props.disabledLabel || 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif';
    let btn = props.isSubmitting ? 
        <button className = "btn btn-dark" style = {{ width : '100px'}} >
            <img style = {
                {
                    width : '23px',
                    padding : '0px',
                    margin : '0px', 
                }
            } src={disabledLabel} />
        </button>  :
        <button disabled = {props.isDisabled} className = "btn btn-dark" style = {{ width : '100px'}} >{enabledLabel}</button>
    return btn
}
export default SubmitButton