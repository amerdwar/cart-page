import products from './products.json'

export function getAll() {
    return Promise.resolve(products);
}
export function getProductById(id) {
    const product = products.find(item => item.id === id);
    return Promise.resolve(product);
}

export function placeOrder() {
    return Promise.resolve({code:200,message:"The order has been successfully placed"});
  //  return Promise.resolve({code:503,message:"Failed"});
}
