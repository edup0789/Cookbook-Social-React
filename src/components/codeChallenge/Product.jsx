import React, { useState } from "react";
// import { Link } from "react-router-dom";
import toastr from "toastr";
import * as productService from "./services/productService"
// import toastr from "toastr";


function Product (){

    const [product, setProductFormData] = useState({
        name: "",
        manufacturer: "",
        description: "",
        cost: ""
    })

    console.log(product)

    const onAddProduct = (e) => {
        e.preventDefault();
        console.log("Create clicked")
        productService.addProduct(product).then(onCreateSuccess).catch(onCreateError)
    }

const onCreateSuccess = (response) => {
    console.log("product created successfully", response.config.data)
    toastr.success("product created successfully", response.data.item)
}

const onCreateError = (error) => {
    console.log("product created successfully", error)
    toastr.error("product created successfully", error)
}

const onFormFieldChange = (event) => {
    console.log("Form field changed", {syntheticEvent: event})

    const target = event.target;
    const value = target.value; 
    const fieldName = target.name

    console.log(target, fieldName)

    setProductFormData((prevState) => {
        console.log("updater on change")

        const newProduct = {
            ...prevState
        }

        newProduct[fieldName] = value;

        console.log(newProduct)
        return newProduct
    })
}

    return (

        <React.Fragment>
            <div>
            <form className="form-group shadow">
              <div className="row">
              <h3>Create Product</h3>
              </div>
                <div className="form-group">
                <div className="row">
                <div className="col-md-6">
                <label htmlFor="inputProductName" className="form-label">Name</label>
                <input type="name" 
                className="form-control bg-tranparent border-0 shadow-sm" 
                id="name" 
                placeholder="Ex. Blender" 
                name="name"
                value={product.name} 
                onChange={onFormFieldChange}/>
                </div>
                </div>
                <div className="form-group">
                <div className="col-md-6">
                <label htmlFor="Inputmanufacturer" className="form-label">Manufacturer</label>
                <input type="name" 
                className="form-control bg-tranparent border-0 shadow-sm" 
                id="manufacturer" 
                placeholder="Ex. Dyson"
                name="manufacturer"
                value={product.manufacturer} 
                onChange={onFormFieldChange}/>
                </div>
                </div>
                <div className="form-group">
                <div className="col-md-6">
                <label htmlFor="inputDescription" className="form-label">Description</label>
                <input type="description" 
                className="form-control bg-tranparent border-0 shadow-sm" 
                id="description" 
                placeholder="Product Description"
                name="description"
                value={product.description} 
                onChange={onFormFieldChange}/>
                </div>
                </div>
                </div>
            <div className="row form-group">
                <div className="col">
                <label htmlFor="inputCost" className="form-label">Cost</label>
                <div className="input-group-text">
                <span className="input-group-text">$</span>
                <input type="number" 
                className="form-control bg-tranparent border-0 shadow-sm" 
                id="cost" 
                placeholder="Enter Price"
                name="cost"
                value={product.cost} 
                onChange={onFormFieldChange}/>
                </div>
                </div>
            <div className="row">
                <div className="col-3 submitButton">
                <button  type="submit" onClick={onAddProduct} className="btn btn-primary shadow border-0">Submit</button>
                </div>
            </div>
            </div>
            </form>
            </div>
            <div>
      </div>
        </React.Fragment>
    )
}


export default Product
