export const checkIfValid = (products, productName) => {
  let isValid = true;
  products.forEach((product) => {
    if (product.name.toLowerCase() === productName.toLowerCase()) {
      isValid = false;
      return;
    }
  });
  return isValid;
};
