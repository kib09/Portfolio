import { createPortal } from "react-dom";

function Modal({ project, onClose }) {
  if (!project) return null;

  return createPortal(
    <div className="modal-active fixed inset-0 z-50">
      {/* 흐린 배경 레이어 */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* 모달 본문 */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white p-8 rounded-lg w-full max-w-lg relative shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{project.period}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-700 mb-2">{project.description}</p>
          <p className="text-sm">
            <strong className="text-black">담당 역할:</strong> {project.role}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
