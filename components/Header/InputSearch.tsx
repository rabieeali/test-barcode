
const InputSearch = () => {
  return (
    <div>
      {/* <input style={{border:'1px solid #f1f4f6'}} className="border-2 border-pale" type="search" />
        <button className="bg-master-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        </button> */}
      <div className="hero bg-gredient-dark h-400px flex flex-col px-2">
        <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
          <form className="flex flex-row">
            <input
              className="h-10 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest  border border-gray-100 w-full px-2 outline-none text-lg text-gray-600"
              type="text"
              placeholder="جستجو ..."
            />
            <span className="flex items-center bg-gray-100 rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
              <button className="bg-master-primary text-lg text-white font-bold  px-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputSearch;
