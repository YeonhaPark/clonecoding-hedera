import Header from "../organisms/Header";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
