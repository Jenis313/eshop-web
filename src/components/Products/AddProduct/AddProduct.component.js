import React, {Component} from "react";
import { ProductForm } from "../ProductForm/ProductForm.component";
class AddProduct extends Component{
    constructor (){
        super()
        this.state = {
            isSubmitting : false
        }
    }
    add(data){
        console.log('data in product component', data)
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