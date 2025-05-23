import { useState } from "react";

function ContactPage() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(""), 2000); // 2초 후 메시지 사라짐
    });
  };

  return (
    <section className="max-w-4xl mx-auto mt-20 mb-10">
      <div className="flex flex-col justify-center gap-6 md:text-left">
        <h2 className="text-3xl font-bold border-l-4 border-yellow-900 pl-3 text-yellow-900">
          Contact
        </h2>
        <div className="text-xl md:text-2xl text-white ml-4 md:flex-row md:gap-4 mb-2">
          <div className="flex flex-col md:flex-row md:gap-4 mb-2 cursor-pointer">
            Email
            <span
              onClick={() => handleCopy("dslqoehf@gmail.com")}
              className="text-2xl md:text-3xl  font-bold text-neutral-600 dark:text-neutral-50"
            >
              dslqoehf@gmail.com
            </span>
            {copied === "dslqoehf@gmail.com" && (
              <span className="text-green-400 ml-2">URL이 복사되었습니다!</span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:gap-4 mb-2 cursor-pointer">
            GitHub
            <a
              href="https://github.com/kib09"
              target="_blank"
              className="text-2xl md:text-3xl  font-bold text-neutral-600 dark:text-neutral-50"
            >
              https://github.com/kib09
            </a>
          </div>

          <div className="text-2xl md:text-3xl flex flex-col md:flex-row md:gap-4 mb-2 cursor-pointer">
            Blog
            <a
              href="https://blog.naver.com/inveloper"
              target="_blank"
              className="text-2xl md:text-3xl  font-bold text-neutral-600 dark:text-neutral-50"
            >
              https://blog.naver.com/inveloper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
