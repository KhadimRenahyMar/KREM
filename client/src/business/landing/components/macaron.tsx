export function Macaron() {
  return (
    <div className="flex items-start sm:w-[50%]">
      <div className="flex justify-center items-center w-full">
        <strong data-x="50%" data-y="50%" className="absolute mr-4 text-3xl sm:text-4xl text-gray-600">
          LA
          <span className="text-white"> LOGIQUE </span>
          <br />
          AU SERVICE DE <br />
          LA<span className="text-tertiary-main"> CRÉATIVITÉ </span>
        </strong>
        <svg
          className="z-1 flex h-[60vh] w-[40vh] sm:w-[60vh] my-4"
          xmlns="http://www.w3.org/2000/svg"
          data-xlink="http://www.w3.org/1999/xlink"
          width="281.33"
          height="310.113"
          viewBox="0 0 281.33 310.113"
        >
          <defs>
            <filter id="Tracé_420" x="10.267" y="1.205" width="271.063" height="308.908" filterUnits="userSpaceOnUse">
              <feOffset data-input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feFlood />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="Tracé_419" x="0" y="0" width="262.063" height="299.908" filterUnits="userSpaceOnUse">
              <feOffset data-input="SourceAlpha" />
              <feGaussianBlur stdDeviation="2" result="blur-2" />
              <feFlood />
              <feComposite operator="in" in2="blur-2" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <path
            id="Tracé_420-2"
            data-name="Tracé 420"
            d="M245.86,71.519l.2,141.069L123.734,283.3,1.208,212.939,1,71.87,123.326,1.16Z"
            transform="translate(22.27 13.43)"
            fill="#04192e"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="5"
          />
          <path
            id="Tracé_419-2"
            data-name="Tracé 419"
            d="M245.86,71.519l.2,141.069L123.734,283.3,1.208,212.939,1,71.87,123.326,1.16Z"
            transform="translate(7.5 7.73)"
            fill="#04192e"
            stroke="#fa0"
            strokeMiterlimit="10"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
}
