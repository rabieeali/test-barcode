interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <div className={className}>
      <svg
        width='142'
        height='40'
        viewBox='0 0 142 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <rect
          width='141.228'
          height='40'
          fill='url(#pattern0)'
        />
        <defs>
          <pattern
            id='pattern0'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              xlinkHref='#image0_1249_287'
              transform='scale(0.00510204 0.0178571)'
            />
          </pattern>
          <image
            id='image0_1249_287'
            width='196'
            height='56'
            xlinkHref='data:image/png;base64,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'
          />
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
