const createProduct = async (req, res) => {
    try {
        const product = await req.body
        res.status(200).json(product)
    } catch (err) {
        res.status(404).json( {error: err.name} )
    }
};

module.exports = createProduct;
