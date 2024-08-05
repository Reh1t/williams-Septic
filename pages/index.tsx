import type { NextPage } from "next";
import Section from "../components/section";
import Section1 from "../components/section1";
import Williams from "../components/williams";
import GalleryContainer from "../components/gallery-container";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header1 from "../components/header";

const WillaimsSeptic: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header1 />
      <header className="self-stretch h-[405px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="self-stretch w-[1196px] flex flex-col items-center justify-start bg-[url('/image-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </header>
      <Section />
      <Section1 />
      <Williams />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-2.5 text-left text-45xl text-black font-body-3">
        <h1 className="m-0 h-[83px] relative text-inherit font-bold font-[inherit] inline-block mq450:text-19xl mq1050:text-32xl">
          Project Gallery
        </h1>
      </section>
      <GalleryContainer />
      <Contact />
      <Footer />
    </div>
  );
};

export default WillaimsSeptic;
