function Card({ numCrops }) {
  return (
    <div className="block px-5 py-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
      <h5 className="mb-2 font-ibm text-xl text-center tracking-tight text-gray-600">
        Crops Added
      </h5>
      <p className="text-2xl font-bold text-center text-gray-700 ">
        {numCrops}
      </p>
    </div>
  );
}

export default Card;
