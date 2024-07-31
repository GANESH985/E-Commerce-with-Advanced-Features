const processPayment = async (req, res) => {
    const { orderId, paymentDetails } = req.body
    const paymentStatus = 'success'
    res.status(200).json({ message: 'Payment processed', status: paymentStatus })
  };

module.exports = { processPayment };