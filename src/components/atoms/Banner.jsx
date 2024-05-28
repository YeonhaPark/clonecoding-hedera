import c from "classnames";
export default function Banner({ children, classNames = [] }) {
  return (
    <div className="relative mt-[-75px] py-[12.5%] px-[20px] xl:pt-0 xl:px-[6.25%] xl:pb-[6.25%]">
      <div
        className={c(
          "flex rounded-tr-[160px] rounded-bl-[160px] py-[100px] px-[5vw]",
          [...classNames]
        )}
      >
        {children}
      </div>
    </div>
  );
}
