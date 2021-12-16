import React, { Component } from 'react';
import { httpClient } from '../../../utils/httpClient'; //to make requests
import { notify } from '../../../utils/notify'; //to notify something
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa' //icons
import { ErrorHander } from '../../../utils/error.handler'; //to render error page
import { Link } from 'react-router-dom';
import { Loader } from '../../Common/Loader/Loader.component';
import { formatDate } from '../../../utils/dateUtils';
export class ViewProducts extends Component {
    constructor() {
        super()
    
        this.state = {
             isLoading : false,
             products : [],
        }
        this.editProduct = this.editProduct.bind(this)
    }
    componentDidMount(){
        this.setState({
            isLoading : true
        })
        httpClient.GET('/product', true)
        .then((response) => {
            if(!response.data.length){
                notify.showInfo('No any products found!');
                return
            }
            this.setState({
                products : response.data
            })
        })
        .catch((err) => {

        })
        .finally(() => {
            this.setState({
                isLoading : false
            })
        })
    }
    editProduct(id){
        this.props.history.push(`/edit_product/${id}`);
    }
    removeProduct = async (id, index) => {
        let confirmation = window.confirm('Delete?')
        if(confirmation){
            let response;
            try{
                response = await httpClient.DELETE(`/product/${id}`, true)
            }catch(err){
                return ErrorHander(err)
            }
            notify.showInfo('Product removed!');
            const {products} = this.state;
            products.splice(index, 1);
            this.setState({
                products
            })
            
        }
        // httpcall
    }
    
    render() {
        let content = this.state.isLoading
        ? <Loader circular = {true} ></Loader>
        : <table className = "table">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {(this.state.products || []).map((item, index) => {
                    return (
                        <tr key = {index}>
                            <td>{index + 1}</td>
                            <td><Link to = {`/product_details/${item._id}`}>{item.name}</Link></td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>{formatDate(item.createdAt)}</td>
                            <td>
                                <span onClick = {() => this.editProduct(item._id)} title = "Edit product" style = {{color: 'blue'}}>
                                    <FaPencilAlt />
                                </span>
                                <span  onClick = {() => this.removeProduct(item._id, index) } title = "Remove product" style = {{color: 'red', marginLeft : '10px'}}>
                                    <FaTrashAlt />
                                </span>
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        return (
            <>
                    <h2>View Products</h2>
                    {content}
            </>
        )
    }
}
