// This will be responsiable for both creating and editing product
import React, {Component} from "react";
import { FaTrashAlt } from "react-icons/fa";
import { formatDate } from "../../../utils/dateUtils";
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
expiryDate : '',
manuDate : '',
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
            isValidForm : false,
            filesToUpload : [],
            filesToPreview : []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.removeImage = this.removeImage.bind(this)
    }

    componentDidMount(){
        const {productData} = this.props //state of editProduct which means this is coming from server
        // console.log('proddd', productData)
        if(productData){
            console.log('Product data---> ', productData)
            // edit case
            this.setState({
                data: {
                    ...ProductForm, //if nothing coming from server
                    ...productData, //it will replace previous data
                    discountedItem : productData.discount && productData.discount.discountedItem
                    ? productData.discount.discountedItem
                    : false,
                    discountType : productData.discount && productData.discount.discountType
                    ? productData.discount.discountType
                    : '',
                    discountValue : productData.discount && productData.discount.discountValue
                    ? productData.discount.discountValue
                    : '',
                    manuDate: productData.manuDate ? formatDate(productData.manuDate, "YYYY-MM-DD") : '', //This format is little different than in the view of this form but this is a thing we should be aware of.
                    salesDate: productData.salesDate ? formatDate(productData.salesDate, "YYYY-MM-DD") : '',
                    purchasedDate: productData.purchasedDate ? formatDate(productData.purchasedDate, "YYYY-MM-DD") : '',
                    expiryDate: productData.expiryDate ? formatDate(productData.expiryDate, "YYYY-MM-DD") : ''

                    // https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro


                }
            })
        }

    }

    
    handleChange(e){
        let {name, value, type, checked, files} = e.target;
        if(type === 'file'){
            console.log('files--> ', files)
            const {filesToUpload, filesToPreview} = this.state;
            filesToUpload.push(files[0])
            filesToPreview.push(URL.createObjectURL(files[0]))
            this.setState({
                filesToUpload,
                filesToPreview
            })
            console.log("filestouppre-->", filesToUpload, filesToPreview)
        }
        if(type === 'checkbox'){
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
        this.props.submitCallback(this.state.data, this.state.filesToUpload);
       
    }
    removeImage = (index) => {
        // Todo for update
        const {filesToPreview, filesToUpload} = this.state;
        filesToPreview.splice(index, 1);
        filesToUpload.splice(index, 1);
        this.setState({
            filesToPreview,
            filesToUpload
        })
    }
    render(){
        const {isEdit, isSubmitting} = this.props;
        const {data} = this.state;
        const title = `${isEdit ? 'Update' : 'Add' } Product`
        let discountContent = this.state.data.discountedItem
         ? <>
                <label>Discount type</label>
                <select name = "discountType" value = {data.discountType} className = "form-control" onChange = {this.handleChange}>
                    <option value = "">Select option type</option>
                    <option value = "percentage">Percentage</option>
                    <option value = "quantity">Quantity</option>
                    <option value = "value">Value</option>
                </select>
                <label>Discount Value</label>
                <input type="text" value = {data.discountValue} name="discountValue" placeholder="Discount Value" className="form-control" onChange={this.handleChange}></input>
                <br />
           </> 
         : ""
        return (
            <>
                <h2>{title}</h2>
                <p>{`Please ${isEdit ? 'Update' : 'Add'} necessary details`}</p>
                <form className = "form-group" onSubmit = {this.handleSubmit} noValidate>
                    <label>Name</label>
                    <input type = 'text' name = 'name' placeholder = "Name" className = 'form-control' value = {data.name} onChange = {this.handleChange}></input>

                    <label>Description</label>
                    <textarea rows = {8} name = 'description' placeholder = "Description" className = 'form-control' value = {data.description} onChange = {this.handleChange}></textarea>

                    <label>Category</label>
                    <input type = 'text' value = {data.category} name = 'category' placeholder = "Category" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Brand</label>
                    <input type = 'text' value = {data.brand} name = 'brand' placeholder = "Brand" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Color</label>
                    <input type = 'text' value = {data.color} name = 'color' placeholder = "Color" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Price</label>
                    <input type = 'text' value = {data.price} name = 'price' placeholder = "Price" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Cost Price</label>
                    <input type = 'text' value = {data.costPrice} name = 'costPrice' placeholder = "Cost Price" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Quantity</label>
                    <input type = 'text' value = {data.quantity} name = 'quantity' placeholder = "Quantity" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>Model No</label>
                    <input type = 'text' value = {data.modelNo} name = 'modelNo' placeholder = "Model No" className = 'form-control' onChange = {this.handleChange}></input>

                    <label>SkU Number</label>
                    <input type = 'text' value = {data.sku} name = 'sku' placeholder = "SkU Number" className = 'form-control' onChange = {this.handleChange}></input>
                    <label>Manu Date</label>
                    <input type = 'date' value = {data.manuDate} name = 'manuDate' placeholder = "Manu Date" className = 'form-control' onChange = {this.handleChange}></input>
                    <label>Expiry Date</label>
                    <input type = 'date' value = {data.expiryDate} name = 'expiryDate' placeholder = "Expiry Date" className = 'form-control' onChange = {this.handleChange}></input>
                    <label>Sales Date</label>
                    <input type = 'date' value = {data.salesDate} name = 'salesDate' placeholder = "Sales Date" className = 'form-control' onChange = {this.handleChange}></input>
                    <label>Purchased Date</label>
                    <input type = 'date' value = {data.purchasedDate} name = 'purchasedDate' placeholder = "Purchased Date" className = 'form-control' onChange = {this.handleChange}></input>

                    <input type="checkbox" checked = {data.discountedItem} name="discountedItem" onChange={this.handleChange}></input>
                    <label>&nbsp;Discounted Item</label>
                    <br />
                    {discountContent}
                    <label>Offers</label>
                    <input type="text" value = {data.offers} name="offers" placeholder="Offers" className="form-control" onChange={this.handleChange}></input>
                    <label>Tags</label>
                    <input type="text" value = {data.tags} name="tags" placeholder="Tags" className="form-control" onChange={this.handleChange}></input>
                    <label>Origin</label>
                    <input type="text" value = {data.origin} name="origin" placeholder="Origin" className="form-control" onChange={this.handleChange}></input>
                    <input type="checkbox" checked={data.warrentyStatus} name="warrentyStatus" onChange={this.handleChange}></input>
                    <label> &nbsp;Warrenty Status</label>
                    <br />
                    {
                        data.warrentyStatus && (
                            <>
                                <label>Warrenty Period</label>
                                <input type="text" value = {data.warrentyPeriod} name="warrentyPeriod" placeholder="Warrenty Period" className="form-control" onChange={this.handleChange}></input>  
                            </>
                        )
                        
                    }
                    
                    <input type="checkbox" checked={data.isReturnEligible} name="isReturnEligible" onChange={this.handleChange}></input>
                    <label> &nbsp;Return Eligible</label>
                    <label>Choose images</label>
                    <input type = "file" className = "form-control" onChange = {this.handleChange} ></input>
                    {
                        this.state.filesToPreview.map((file, index) => (
                            <React.Fragment key = {index}>
                                <img width = '100px'  alt = 'preview' src = {file}></img>
                                <span onClick = {() => {this.removeImage(index) }} title = "Remove image"  style = {{marginLeft: "10px", marginRight : "20px"}}>
                                    <FaTrashAlt></FaTrashAlt>
                                </span>
                            </React.Fragment>
                        ))
                    }
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