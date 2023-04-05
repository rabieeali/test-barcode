const HeaderImage = () => {
  return (
    <div className='wrapper'>
      <p className="text-fs-20">50% تخفیف به مناسبت فرا رسیدن عید نوروز</p>
      <svg
        viewBox='0 0 1439 49'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='1439'
          height='49'
          fill='#24AEB1'
        />
      </svg>
      <style jsx>{`
        .wrapper {
          display: grid;
          place-items: center;
          isolation: isolate;
        }
        .wrapper > * {
          grid-column: 1 / -1;
          grid-row: 1 / -1;
        }
        .wrapper > p {
          color: #fff;
        }
        .wrapper > svg {
          z-index: -1;
          width: 100vw;
        }
      `}</style>
    </div>
  );
};

export default HeaderImage;
