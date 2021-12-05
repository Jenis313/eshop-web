// This will be responsiable for both creating and editing product
import React, {Component} from "react";
import SubmitButton from "../../Common/SubmitBtn/SubmitBtn.component";

const defaultForm = {
name : '',
description : '',
quantity : '',
modelNo : '',
attribute : '',
category : '',
color : '',
brand : '',
price : '',
costPrice : '',
size : '',
//vendor : '',
sku : '',
rating : '',
stock_quantity : '',
status : '',
reviews : '',
menuDate : '',
expiryDate : '',
menuDate : '',
purchasedDate : '',
salesDate : '',
discountedItem : '',
discountType : '',
discountValue : '',
isReturnEligible : '',
warrentyStatus : '',
warrentyPeriod : '',
origin : '',
tags : '',
offers : '',
//orderNumber:
}

export class ProductForm extends Component{
    constructor(){
        super()
        this.state = {
            data : {
                ...defaultForm
            },
            error : {
                ...defaultForm
            },
            isValidForm : false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        let {name, value, type, checked} = e.target;
        if(type === 'checked'){
            value = checked
        }
        this.setState((prevState) => (
            {
                data: {
                    ...prevState.data,
                    [name]: value
                }
            }
        ), () => {
            this.validateForm(name)
        })
    }

    validateForm(fieldName){
        // TODO
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitCallback(this.state.data)
    }
    render(){
        const {title, description, isSubmitting} = this.props;
        return (
            <>
                <h2>{title}</h2>
                <p>{description}</p>
                <form className = "form-group" onSubmit = {this.handleSubmit} noValidate>
                    <label>Name</label>
                    <input type = 'text' name = 'name' placeholder = "Name" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Description</label>
                    <input type = 'text' name = 'description' placeholder = "Description" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Category</label>
                    <input type = 'text' name = 'category' placeholder = "Category" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Brand</label>
                    <input type = 'text' name = 'brand' placeholder = "Brand" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Color</label>
                    <input type = 'text' name = 'color' placeholder = "Color" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Price</label>
                    <input type = 'text' name = 'price' placeholder = "Price" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Cost Price</label>
                    <input type = 'text' name = 'costPrice' placeholder = "Cost Price" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Quantity</label>
                    <input type = 'text' name = 'Quantity' placeholder = "Quantity" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Model No</label>
                    <input type = 'text' name = 'modelNo' placeholder = "Model No" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>SkU Number</label>
                    <input type = 'text' name = 'sku' placeholder = "SkU Number" className = 'form-control' onChange = {this.handleChange}></input>
                    <label>Manu Date</label>
                    <input type = 'text' name = 'manuDate' placeholder = "Manu Date" className = 'form-control' onChange = {this.handleChange}></input>
                    <label>Expiry Date</label>
                    <input type = 'text' name = 'expiryDate' placeholder = "Expiry Date" className = 'form-control' onChange = {this.handleChange}></input>
                    <label>Sales Date</label>
                    <input type = 'text' name = 'salesDate' placeholder = "Sales Date" className = 'form-control' onChange = {this.handleChange}></input>
                    <label>Purchased Date</label>
                    <input type = 'text' name = 'purchasedDate' placeholder = "Purchased Date" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>&nbsp;Discounted Item</label>
                    <br />
                    <label>Offers</label>
                    <input type="text" name="offers" placeholder="Offers" className="form-control" onChange={this.handleChange}></input>
                    <label>Tags</label>
                    <input type="text" name="tags" placeholder="Tags" className="form-control" onChange={this.handleChange}></input>
                    <label>Origin</label>
                    <input type="text" name="origin" placeholder="Origin" className="form-control" onChange={this.handleChange}></input>
                    <input type="checkbox" checked={false} name="warrentyStatus" onChange={this.handleChange}></input>
                    <label> &nbsp;Warrenty Status</label>
                    <br />

                    <label>Warrenty Period</label>
                    <input type="text" name="warrentyPeriod" placeholder="Warrenty Period" className="form-control" onChange={this.handleChange}></input>
                    <input type="checkbox" checked={false} name="isReturnEligible" onChange={this.handleChange}></input>
                    <label> &nbsp;Return Eligible</label>
                    <br></br>

                


                    <label>Category</label>
                    <input type = 'text' name = 'category' placeholder = "Category" className = 'form-control' onChange = {this.handleChange}></input>
                    <label>Category</label>
                    <input type = 'text' name = 'category' placeholder = "Category" className = 'form-control' onChange = {this.handleChange}></input>
                    <hr />

                    <SubmitButton 
                        isSubmitting = {isSubmitting}
                        isDisabled = {this.state.isValidForm}
                    ></SubmitButton>
                </form>
            </>
        )
    }
}