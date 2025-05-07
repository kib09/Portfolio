function ProjectCard({ title, short, image, onClickDetail }) {
  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{short}</p>
      </div>

      <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button
          onClick={onClickDetail}
          className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500"
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
