import "../styles/globals.css";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <div className="min-h-screen  bg-darknes ">
      <Nav />
      <Hero />
      <Section />
      <Footer />
    </div>
  );
};

export default Page;
