import React, { Component } from 'react'
import { ErrorHander } from '../../../utils/error.handler';
import { httpClient } from '../../../utils/httpClient';
import { notify } from '../../../utils/notify';
import { Loader } from '../../Common/Loader/Loader.component';
import { ProductForm } from '../ProductForm/ProductForm.component';

export class EditProduct extends Component {
    constructor() {
        super()
    
        this.state = {
             isLoading: false,
             product : {

             },
             isSubmitting: false
        }
        this.edit = this.edit.bind(this)
    }
    
    async componentDidMount() {
        this.productId = this.props.match.params['id']; //it can be accessed here because of reactRouter
        // console.log('pid-> ', this.productId)
        this.setState({
            isLoading: true
        })
        let response;
        try{
            response = await httpClient.GET(`/product/${this.productId}`, true);
             console.log('response is ---> ', response.data)
            this.setState({
                product: response.data
            })
        }catch(err){
            // console.log('errrrr is', err)
            ErrorHander(err);
        }finally{
            this.setState({
                isLoading: false
            })
        }
       
    }
    edit(data, filesToUpload = [], filesToRemove = []){
        // console.log('dataaaaaa',data);
        this.setState({
            isSubmitting: true
        })
        const requestData = {
            ...data,
            filesToRemove,
            vendor : data.vendor._id
        }
        httpClient.UPLOAD('PUT',`/product/${this.productId}`, requestData, filesToUpload, true)
        .then((response) => {
            notify.showInfo('Product Updated successfully!');
            this.props.history.push('/view_product')
        })
        .catch((err) => {
            console.log('errrrr',err);
            ErrorHander(err);
            this.setState({
                isSubmitting: false
            })
        })
    }
    render() {
        let content = this.state.isLoading 
        ? <Loader></Loader>
        : <ProductForm isEdit = {true} submitCallback = {this.edit} isSubmitting = {this.state.isSubmitting} productData = {this.state.product}></ProductForm>
        return content
    }
}

