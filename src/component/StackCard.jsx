function StackCard({ stack, stackImg }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
      {stackImg}
      <p className="font-semibold text-gray-700">{stack}</p>
    </div>
  );
}

export default StackCard;
