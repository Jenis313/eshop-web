// notify is a third party utility file it can be replaced in the future so we are making this nofify utility file so that we can use any package in the future but we don't have to change code in several places
import {toast} from 'react-toastify';

const showSuccess = (msg) => {
    toast.success(msg);
}
const showInfo = (msg) => {
    toast.info(msg)
}
const showWarning = (msg) => {
    toast.warning(msg);
}
const showError = (msg) => {
    toast.error(msg)
}

export const notify = {
    showSuccess,
    showInfo,
    showWarning,
    showError
}