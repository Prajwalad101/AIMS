function VerifiedCard({ status }) {
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
      <h5 className="mb-2 text-xl font-ibm text-center tracking-tight text-gray-600">
        Status
      </h5>
      <p className="text-xl font-medium text-center text-gray-700 ">{status}</p>
    </div>
  );
}

export default VerifiedCard;
