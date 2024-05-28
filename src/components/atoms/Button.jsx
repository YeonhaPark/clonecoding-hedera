import c from "classnames";
export default function Button({
  children,
  hierarchy = "primary",
  classnames = [],
}) {
  const renderHierarchy = () => {
    switch (hierarchy) {
      case "primary":
        return "btn-primary";
      case "primary-reverse":
        return "btn-primary-reverse";
      case "secondary":
        return "btn-secondary";
      case "white":
        return "btn-white";
      default:
        return "btn-primary";
    }
  };
  return (
    <button
      className={c(renderHierarchy(hierarchy), "common-btn", ...classnames)}
    >
      {children}
    </button>
  );
}
