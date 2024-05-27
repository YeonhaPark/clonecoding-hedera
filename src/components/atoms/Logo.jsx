export default function Logo() {
  return (
    <a className="flex items-center leading-[76px] text-[17px]">
      <div className="w-[6.25vw]">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="w-[30px] h-[30px] ml-auto mr-[13px]"
        >
          <path
            d="M20 0a20 20 0 1 0 20 20A20 20 0 0 0 20 0"
            className="fill-white"
          ></path>
          <path
            d="M28.13 28.65h-2.54v-5.4H14.41v5.4h-2.54V11.14h2.54v5.27h11.18v-5.27h2.54zm-13.6-7.42h11.18v-2.79H14.53z"
            className="h"
          ></path>
        </svg>
      </div>
      <span className="text-white">Hedera</span>
    </a>
  );
}
