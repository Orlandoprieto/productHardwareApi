const schemaProduct = require('../models/product')

const productForId = async (req, res) => {
    try {
        const idProduct = req.params.id
        const product = await schemaProduct.findOne( {id: idProduct} )

        if ( !product ) {
            res.status(400).end()
        } else {
            res.status(200).json(product);
        }

    } catch ( error ) {
        res.status(400)
    }
};

module.exports = productForId;