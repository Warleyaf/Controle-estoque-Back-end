const ProductsModel = require('../models/products');

async function get(req, res) {
  const { id } = req.params

  const obj = id ? { _id: id } : null

  const products = await ProductsModel.find(obj)


  res.send(products)
}

async function post(req, res) {
  const {
    name,
    price,
    qtd,
  } = req.body

  console.log(req.body)

  const product = new ProductsModel({
    name,
    price,
    qtd,
  })

  product.save()

  res.send({
    message: 'Sucess'
  })

  
}

async function put(req, res) {
  const { id } = req.params

  const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, { new: true })


  res.send({
    message: 'Produto alterado com sucesso!',
    product
  })

}

async function remove(req, res) {
  const { id } = req.params

  const remove = await ProductsModel.deleteOne({_id: id})
  
  res.send({
    message: "Sucess"
  })
}


module.exports = {
  get,
  post,
  put,
  remove
}