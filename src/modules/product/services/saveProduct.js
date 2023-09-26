const productsModel = require('../model');

async function saveProduct(req, res) {
  console.log(req.body.subImg);
  try {
    const product = new productsModel({
      productid: req.body.productid,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      img: req.body.img,
      subImg: req.body.subImg,
    });
    const newProduct = await product.save();
    console.log(newProduct);

    return res.status(200).send({ code: 200, message: 'product added' });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: 'error adding the product' });
  }
}

module.exports = saveProduct;