import { notify } from "./notify";
export const ErrorHander = (error) => {
    // Handle all of your application's error in this method
    // Set an debugger;
    debugger; //Once debugger is found your appication will be paused
    let errMsg = 'Something went wrong';
    let err = error && error.response; //If only there is err the error.response will be executed

    errMsg = err && err.data && err.data.msg;
    notify.showError(errMsg);
    // Setps to follow
    // Check error
    // Parse error
    // Extract error message
    // Show them in Ui
}