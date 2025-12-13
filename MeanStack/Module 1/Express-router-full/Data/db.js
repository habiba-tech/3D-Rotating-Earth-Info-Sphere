const store = {
  users: [
    { id: 'u1', name: 'Habiba', email: 'habiba16@gmail.com' },
    { id: 'u2', name: 'Mahek', email: 'mahek@gmail.com' },
    { id: 'u3', name: 'Zaberiya', email: 'zabii@gmail.com' }
  ],
  products: [
    { id: 'p1', name: 'Laptop', price: 1000 },
    { id: 'p2', name: 'Phone', price: 5000 },
    { id: 'p3', name: 'Tablet', price: 300 }
  ]
};

function getAll(collection) {
  return store[collection] || [];
}

function getById(collection, id) {
  return (store[collection] || []).find(o => o.id === id);
}

function generateId(prefix = '') {
  return prefix + Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
}

function insert(collection, obj) {
  const id = generateId(collection.slice(0, 1));
  const item = { id, ...obj };
  if (!store[collection]) store[collection] = [];
  store[collection].push(item);
  return item;
}

function update(collection, id, att) {
  const idx = (store[collection] || []).findIndex(o => o.id === id);
  if (idx === -1) return null;
  store[collection][idx] = { ...store[collection][idx], ...att };
  return store[collection][idx];
}

function remove(collection, id) {
  const idx = (store[collection] || []).findIndex(o => o.id === id);
  if (idx === -1) return false;
  store[collection].splice(idx, 1);
  return true;
}

module.exports = { getAll, getById, insert, update, remove };
