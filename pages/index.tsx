import type { NextPage } from "next";
import Section from "../components/section";
import Section1 from "../components/section1";
import Williams from "../components/williams";
import GalleryContainer from "../components/gallery-container";
import Contact from "../components/contact";
import Footer1 from "../components/footer1";
import Header1 from "../components/header1";

const WillaimsSeptic: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header1 />
      <div className="self-stretch flex flex-col items-center justify-center pt-0 px-5 box-border max-w-full">
        <div className="self-stretch w-full flex flex-col items-center justify-start bg-no-repeat bg-cover bg-[top]">
          <div className="w-full relative">
            <img
              className="h-auto max-w-full max-h-full object-cover"
              alt=""
              src="/image-1@2x.png"
              style={{
                width: "100%",
                // height: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <Section />
      <Section1 />
      <Williams />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-2.5 text-left text-45xl text-black font-body-3">
        <h1 className="m-0 h-[83px] relative text-inherit font-bold font-[inherit] inline-block mq450:text-19xl mq1050:text-32xl"
        data-scroll-to='gallery'
        >
          Project Gallery
        </h1>
      </section>
      <GalleryContainer />
      <Contact />
      <Footer1 />
    </div>
  );
};

export default WillaimsSeptic;
