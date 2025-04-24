function ProjectCard({ title, period, stack, description, role }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{period}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {stack.map((item, idx) => (
          <span
            key={idx}
            className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-800 mb-2">{description}</p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold text-black">담당 역할:</span> {role}
      </p>
    </div>
  );
}

export default ProjectCard;
