const db = require('../Data/db');

exports.listProducts = (req, res) => {
  res.json(db.getAll('products'));
};

exports.getProduct = (req, res) => {
  const p = db.getById('products', req.params.id);
  if (!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
};
