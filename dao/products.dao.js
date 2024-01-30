import productsModel from "../models/products.model.js";

const productDao = {};

productDao.getAll = async () => {
    const products = await productsModel.find();
    return products;
}

productDao.getOne = async (barcode) => {
    const product = await productsModel.findOne({barcode: barcode});
    return product;
    
}

productDao.insertOne = async (product) => {
    const productSaved = new productsModel(product);
    await productSaved.save();
    return "productSaved";
}

productDao.updateOne = async (barcode, product) => {
    await productsModel.updateOne({barcode: barcode}, product);
    return "Changes saved succesfully";
}

productDao.deleteOne = async (barcode) => {
    await productsModel.deleteOne({barcode: barcode});
    return "Product deleted";
    
}

export { productDao }

