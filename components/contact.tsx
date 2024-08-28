import type { NextPage } from "next";
import IconBox from "./icon-box";
import FormField from "./form-field";
import { handleFormSubmit } from "./handleContactForm";
import { useEffect } from "react";

export type ContactType = {
  className?: string;
};

const Contact: NextPage<ContactType> = ({ className = "" }) => {
  useEffect(() => {
    // Load the script
    const script = document.createElement("script");
    script.src =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "c6ab68fa-74c2-4d46-9066-ff2210b88264");
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/embedded_work_request_form"
    );
    document.body.appendChild(script);

    script.onload = () => {
      // Apply Tailwind CSS classes to the embedded form elements once the script is loaded
      const form = document.getElementById(
        "c6ab68fa-74c2-4d46-9066-ff2210b88264"
      );

      if (form) {
        form.classList.add(
          "bg-white",
          "p-6",
          "rounded-lg",
          "shadow-md",
          "max-w-lg",
          "mx-auto",
          "my-8"
        );

        const inputs = form.querySelectorAll("input, textarea, select");
        inputs.forEach((input) => {
          input.classList.add(
            "w-full",
            "px-4",
            "py-2",
            "mb-4",
            "border",
            "border-gray-300",
            "rounded",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500"
          );
        });

        const labels = form.querySelectorAll("label");
        labels.forEach((label) => {
          label.classList.add(
            "block",
            "text-sm",
            "font-medium",
            "text-gray-700",
            "mb-2"
          );
        });

        const buttons = form.querySelectorAll("button");
        buttons.forEach((button) => {
          button.classList.add(
            "bg-blue-500",
            "text-white",
            "px-4",
            "py-2",
            "rounded",
            "hover:bg-blue-600",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500"
          );
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className={`self-stretch bg-main-background flex flex-col items-start justify-start max-w-full text-left text-37xl text-variant-background font-body-3 ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-[83px] px-5 box-border max-w-full">
        <div
          className="w-[1140px] flex flex-row flex-wrap items-center justify-start py-0 pl-0 pr-[390px] box-border gap-x-10 gap-y-9 max-w-full lg:pr-[195px] lg:box-border gap-[18px] mq750:pr-[97px] mq750:box-border mq450:pr-5 mq450:box-border"
          data-scroll-to="contactUsContainer"
        >
          <div className="h-px flex-1 relative border-lavender border-t-[1px] border-solid box-border max-w-full" />
          <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit] whitespace-nowrap">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-start justify-center py-[120px] px-[150px] box-border gap-5 max-w-full text-mid text-secondary lg:pl-[75px] lg:pr-[75px] lg:box-border mq750:pl-[37px] mq750:pr-[37px] mq750:box-border mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border">
        <div className="w-[480px] flex flex-col items-start justify-start gap-8 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium whitespace-nowrap">
              Get Started
            </div>
            <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-[inherit] text-primary mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
              <p className="m-0">{`Get Connected with
              Williams Septic
              Today`}</p>
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-5xl text-primary">
            <h3 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[23px]">
              Contact Info
            </h3>
            <div className="self-stretch h-px relative border-border-1 border-t-[1px] border-solid box-border" />
            <div className="w-[336px] flex flex-col items-start justify-start gap-5 max-w-full text-xl">
              <IconBox
                phone="/phone.svg"
                phoneNumber="Phone Number"
                infoContent="(705) 492-8910"
              />
              <IconBox
                phone="/phone1.svg"
                phoneNumber="Email Address"
                infoContent="info@williamsseptic.ca"
              />
            </div>
          </div>
        </div>
        <div id="c6ab68fa-74c2-4d46-9066-ff2210b88264"></div>
      </div>
    </section>
  );
};

export default Contact;
