function Card({ items, status, type }) {
  const totalPrice = 0;

  items?.forEach((el) => {
    totalPrice += el.item.marketPrice * el.numItems;
  });
  return (
    <div className="block w-[150px] px-3 py-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
      <h5 className="mb-2 font-ibm text-xl text-center tracking-tight text-gray-600">
        {type === "product" && "Products"}
        {type === "price" && "Total Price"}
        {type === "status" && "Status"}
      </h5>
      <p className="text-xl font-semibold text-center text-gray-700 ">
        {type === "product" && items.length}
        {type === "price" && `Rs ${totalPrice}`}
        {type === "status" && status}
      </p>
    </div>
  );
}

export default Card;
