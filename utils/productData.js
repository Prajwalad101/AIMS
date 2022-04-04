export const productData = [
  {
    name: "rice",
    province: 1,
    type: "vegetable",
  },
  {
    name: "paddy",
    province: 5,
    type: "vegetable",
  },
  {
    name: "milk",
    province: 2,
    type: "ingredient",
  },
];

export const checkIfValid = (productName) => {
  let isValid = true;
  productData.forEach((product) => {
    if (product.name.toLowerCase() === productName.toLowerCase()) {
      isValid = false;
      return;
    }
  });
  return isValid;
};
