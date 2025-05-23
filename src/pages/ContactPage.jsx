import { useState } from "react";
import FadeInItem from "../component/FadeInItem";

function ContactPage() {
  // 이메일 복사 상태 관리
  const [copied, setCopied] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen max-w-4xl mx-auto mt-20 mb-10"
    >
      <div className="flex flex-col justify-center gap-6 md:text-left">
        <FadeInItem index={1}>
          <h2 className="text-3xl font-bold border-l-4 border-yellow-900 pl-3 text-yellow-900">
            Contact
          </h2>
        </FadeInItem>

        <FadeInItem index={2}>
          <div className="text-xl md:text-2xl text-white ml-4 md:flex-row md:gap-4 mb-2">
            <div className="flex flex-col md:flex-row md:gap-4 mb-6 cursor-pointer">
              Email
              <span
                onClick={() => handleCopy("dslqoehf@gmail.com")}
                className="text-2xl md:text-3xl  font-bold text-neutral-600 dark:text-neutral-50 hover:text-yellow-900 dark:hover:text-yellow-400"
              >
                dslqoehf@gmail.com
              </span>
              {copied === "dslqoehf@gmail.com" && (
                <span className="text-green-400 ml-2">
                  URL이 복사되었습니다!
                </span>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:gap-4 mb-6 cursor-pointer">
              <a
                href="https://github.com/kib09"
                target="_blank"
                className="text-2xl md:text-3xl  font-bold text-neutral-600 dark:text-neutral-50 hover:text-yellow-900 dark:hover:text-yellow-400"
              >
                GITHUB 이동하기
              </a>
            </div>

            <div className="text-2xl md:text-3xl flex flex-col md:flex-row md:gap-4 mb-6 cursor-pointer">
              <a
                href="https://blog.naver.com/inveloper"
                target="_blank"
                className="text-2xl md:text-3xl  font-bold text-neutral-600 dark:text-neutral-50 hover:text-yellow-900 dark:hover:text-yellow-400"
              >
                BLOG 이동하기
              </a>
            </div>
          </div>
        </FadeInItem>
      </div>
    </section>
  );
}

export default ContactPage;
