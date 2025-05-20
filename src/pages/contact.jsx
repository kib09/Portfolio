function contact() {
  return (
    <>
      <section className=" max-w-4xl mx-auto mt-20 mb-10">
        {/*  카드  */}

        <div className="flex flex-col justify-center gap-4 md:text-left">
          <h2 className="text-3xl font-bold border-l-4 border-yellow-500 pl-3 text-yellow-500">
            Contact
          </h2>
          <div className="text-xl md:text-2xl text-white ml-4 md:flex-row md:gap-4 mb-2">
            <div className="flex flex-col md:flex-row md:gap-4 mb-2">
              Email
              <a className="underline font-bold  cursor-pointer text-neutral-600 dark:text-neutral-50">
                dslqoehf@gmail.com
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 mb-2  ">
              GitHub
              <a className="underline font-bold  cursor-pointer text-neutral-600 dark:text-neutral-50">
                https://github.com/kib09
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 mb-2">
              Blog
              <a className="underline font-bold cursor-pointer text-neutral-600 dark:text-neutral-50">
                https://github.com/kib09
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default contact;
