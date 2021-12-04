// This will be responsiable for both creating and editing product
import React, {Component} from "react";

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
            isValidFform : false
        }
    }
    render(){
        return (
            <>
                <h2>Title</h2>
                <p>description</p>
                <form className = "form-group" noValidate></form>
            </>
        )
    }
}