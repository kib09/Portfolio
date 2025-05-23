import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";

function Modal({ project, onClose }) {
  // 모달 오픈시 스크롤 방지
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [project]);
  if (!project) return null;

  // 모달 포탈 방식
  return createPortal(
    <div className="modal-active fixed inset-0 z-50 ">
      <div className="absolute inset-0 bg-black/50 z-0" onClick={onClose}></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg w-[90vw] max-w-3xl relative shadow-lg h-[90vh] overflow-y-auto">
          <button
            aria-label="메뉴 열기"
            className="absolute top-3 right-3 text-2xl z-50 text-gray-500 cursor-pointer hover:text-black"
            onClick={onClose}
          >
            ✕
          </button>

          {/* Swiper 이미지 슬라이드 */}
          {project.images && project.images.length > 0 && (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              touchRatio={1.5}
              grabCursor={true}
              className="mt-6 mb-4 rounded overflow-hidden"
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full aspect-[16/9] bg-gray-100">
                    <img
                      src={img}
                      alt={`slide-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* 프로젝트 정보 */}
          <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
          <p className="text-sm text-gray-500 mb-3">{project.period}</p>

          <div className="flex flex-wrap gap-2 mb-3">
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
          <p className="text-sm mb-4">
            <strong>담당 역할:</strong> {project.role}
          </p>

          {/* 버튼 링크 */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-3 rounded bg-gray-500 text-white hover:bg-gray-700"
            >
              GitHub
            </a>
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-3 rounded bg-yellow-500 text-white hover:bg-yellow-600"
            >
              배포 보기
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
