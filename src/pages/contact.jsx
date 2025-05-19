function contact() {
  return (
    <>
      <section className=" max-w-4xl mx-auto">
        {/*  카드  */}

        <div className="flex flex-col justify-center  md:text-left">
          <h2 className="text-3xl font-bold border-l-4 border-yellow-500 pl-3 text-yellow-500">
            contact
          </h2>
          <div className="text-2xl text-white ml-4">
            <div className="flex gap-4">
              Email
              <button className="underline cursor-pointer text-neutral-300">
                dslqoehf@gmail.com
              </button>
            </div>
            <div className="flex gap-4">
              GitHub
              <button className="underline cursor-pointer text-neutral-300">
                https://github.com/kib09
              </button>
            </div>
            <div className="flex gap-4">
              Blog
              <button className="underline cursor-pointer text-neutral-300">
                https://github.com/kib09
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default contact;
