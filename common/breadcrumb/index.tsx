 
export const Breadcrumb = () => {
  return (
    <div className='bg-white p-2 flex items-center flex-wrap my-3 container justify-between mx-auto'>
      <ul className='flex items-center'>
        <li className='inline-flex items-center'>
          <a
            href='#'
            className='text-gray-600 hover:text-blue-500'
          >
            صفحه اصلی
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-5 h-5  mx-2 text-gray-400'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </li>
        <li className='inline-flex items-center'>
          <a
            href='#'
            className='text-gray-600 hover:text-blue-500'
          >
            مقایسه محصولات
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-5 h-5  mx-2 text-gray-400'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

