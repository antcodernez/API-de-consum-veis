import { productDao } from "../dao/products.dao.js";

const productController = {};

productController.getAll = (req, res) => {
    productDao.getAll()
    .then(products=>{
        res.json(products);
    })
    .catch(err=>{
        res.json({
            status:"request failed"
        })
    });
}

productController.getOne = (req, res) => {
    productDao.getOne(req.params.barcode)
        .then(product=>{
            if(product!=null)
                res.json(product);
            else
                res.json({
                    status:"product not found"
                })
        })
        .catch(err=>{
            res.json({
                status:"request failed",
                message:err
            })
            })
}

productController.insertOne = (req, res) => {
    productDao.insertOne(req.body)
    .then(result=>{
        res.json({
            status:result
        })
    })
    .catch(err=>{
        res.json({
            status:"request failed",
            message:err
        })
    });
}


productController.updateOne=async(req,res)=>{
    productDao.updateOne(req.params.barcode, req.body)
    .then(result=>{
        res.json({
            status:result
        })
    })
    .catch(err=>{
        res.json({
            status:"request failed",
            message:err
        })
    });
}

productController.deleteOne=async(req,res)=>{
    productDao.deleteOne(req.params.barcode)
    .then(result=>{
        res.json({
            status:result
        })
    })
    .catch(err=>{
        res.json({
            status:"request failed",
            message:err
        })
    });
}
export { productController }