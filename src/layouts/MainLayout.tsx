import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen d-flex flex-column bg-dark text-white">
      <Navbar />
      <main className="flex-grow-1 container py-5">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
