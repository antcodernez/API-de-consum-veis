import Product from '../models/products.model.js';
const productDAO={};
productDAO.getAll=async()=>{
    const products=await Product.find();
    return products;
}
productDAO.getOne=async(barcode_Url)=>{
    const products=await Product.findOne({barcode:barcode_Url});
    return products;
}
productDAO.insertOne=async(product)=>{
    const products=await Product.create(product);
    return products;
}
productDAO.updateOne=async(barcode_Url,product)=>{
    return await Product.findOneAndUpdate({barcode:barcode_Url},product)
}
productDAO.deleteOne=async(barcode_Url,product)=>{
    return await Product.findOneAndDelete({barcode:barcode_Url})
}
export default productDAO;