import React, {Component} from "react";
import { ProductForm } from "../ProductForm/ProductForm.component";
import { httpClient } from "../../../utils/httpClient";
import { ErrorHander } from "../../../utils/error.handler";
import { notify } from "../../../utils/notify";
class AddProduct extends Component{
    constructor (){
        super()
        this.state = {
            isSubmitting : false
        }
        this.add = this.add.bind(this)
    }

    add(data, files){
        console.log('data in product component', data)
        // http call
        this.setState({
            isSubmitting : true
        })
        httpClient.UPLOAD('POST','/product', data,files)
        // httpClient.POST('/product', data, true)
            .then((response) => {
                notify.showSuccess('Product added successfully!')
                this.props.history.push('view_product')
            })
            .catch((err) => {
                // console.log('error is-->', err.response);
                this.setState({
                    isSubmitting : false
                })
                ErrorHander(err);
            })
        
    }
    render(){
        return (
            <ProductForm
                title = "Add Product"
                description = "Add details"
                isSubmitting = {this.state.isSubmitting}
                submitCallback = {this.add}
            ></ProductForm>
        )
    }

}
export default AddProduct;