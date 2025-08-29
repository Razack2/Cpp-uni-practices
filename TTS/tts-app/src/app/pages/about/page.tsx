import About from "@/app/components/About";
import Footer from "@/app/components/Footer";
import TopNavbar from "@/app/components/TopNavbar";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
        <TopNavbar />       
        <About />
        <Footer />
    </div>
  );
}
