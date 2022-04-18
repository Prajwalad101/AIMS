export const checkIfValid = (products, productName) => {
  let isValid = true;
  products.forEach((product) => {
    if (product.name.toLowerCase() === productName.toLowerCase()) {
      isValid = false;
      return;
    }
  });
  console.log(isValid);
  return isValid;
};

export const checkifItemsValid = (items, product) => {
  let isValid = true;

  items.forEach((item) => {
    if (item.item.name.toLowerCase() === product.name.toLowerCase()) {
      isValid = false;
      return;
    }
  });

  return isValid;
};
