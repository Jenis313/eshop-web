export const redirectToLogin = (history) => {

}
export const redirectToDashboad = (role, history) => {
    let dashboard = '';
    switch(role){
        case 1: 
            dashboard = 'admin'
            break;
        case 2:
            dashboard = 'dashboard'
            break;
        default: 
            break;
    }
    history.push(dashboard)
}
export const redirectToHome = (role, history) => {
    
}