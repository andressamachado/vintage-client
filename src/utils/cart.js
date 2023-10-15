export function addToCart(productList = [], product) {
  if (!product) {
    return false;
  }

  const cartProduct = findProduct(productList, product.id);
  if (cartProduct) {
    cartProduct.quantity = cartProduct.quantity + 1;
    return true;
  }

  productList.push({ product, quantity: 1 });
  return true;
}

export function removeFromCart(productList = [], productId) {
  if (productList.length === 0 || !productId) {
    return false;
  }

  const removeIndex = productList.findIndex(
    ({ product }) => product.id === productId
  );
  if (removeIndex >= 0) {
    productList.splice(removeIndex, 1);
  }
  return true;
}

export function clearCart(productList = []) {
  if (productList.length === 0) {
    return;
  }
  productList = [];
}

function findProduct(productList, id) {
  return productList.find(({ product }) => product.id === id);
}
