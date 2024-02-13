import productDAO from "../dao/products.dao.js";

const getAll = (req,res) =>{
    productDAO.getAll()
    .then(products=> res.render("../src/views/index", { products }))
    .catch(err=> console.error("Something went wrong!!"))
}
const getOne = (req,res) =>{
    const barcode= req.params.barcode
    productDAO.getOne(barcode)
    .then(product=>{
        !product ? res.json({
            mesagge: "Product not Found :/"
        }) : res.render("../src/views/edit",{product});
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}
const insertOne = (req,res) =>{
    const product= req.body
    productDAO.insertOne(product)
    .then(result=>res.redirect("/api/products/"))
    .catch(err=>console.log("ño"))
}
const updateOne = (req,res) =>{
    productDAO.updateOne(req.params.barcode,req.body)
    .then(result=>res.redirect("/api/products/"))
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}
const deleteOne = (req,res) =>{
    productDAO.deleteOne(req.params.barcode)
    .then(result=>{
        res.redirect("/api/products")
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
    
}

export {getAll,getOne,insertOne, updateOne, deleteOne}