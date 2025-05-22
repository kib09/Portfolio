function ProjectCard({ title, short, image, onClickDetail }) {
  return (
    <div
      className="relative bg-neutral-200 dark:bg-neutral-600 rounded-xl shadow-md overflow-hidden group hover:shadow-2xs transition cursor-pointer"
      onClick={onClickDetail}
    >
      <div className="overflow-hidden flex items-center justify-center">
        <img src={image} alt={title} className="w-60 h-40 object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{short}</p>
      </div>
      <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className=" px-4 py-2 rounded font-semibold text-yellow-500 bg-neutral-600 dark:bg-neutral-200">
          자세히 보기
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
