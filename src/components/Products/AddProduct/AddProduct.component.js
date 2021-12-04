import React, {Component} from "react";
class AddProduct extends Component{
    constructor (){
        super()
        this.state = {
            isSubmitting : false
        }
    }
    render(){
        return (
            <div>
                <p>Add Products</p>
            </div>
        )
    }

}
export default AddProduct;