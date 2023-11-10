import { useState } from "react";
import Image from "next/image";
import Modal from "antd/lib/modal/Modal";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const faqItems = [
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing model is based on the scope of the project. We offer both fixed and hourly rates depending on the project requirements.",
  },
  {
    question: "What is your turnaround time?",
    answer:
      "Our turnaround time varies depending on the scope of the project. We work with our clients to establish a timeline that works for both parties.",
  },
  {
    question: "Do you offer maintenance and support?",
    answer:
      "Yes, we offer maintenance and support services for all of our projects. We work with our clients to establish a support plan that meets their needs.",
  },
  {
    question: "What is your design process?",
    answer:
      "Our design process involves several stages, including research, wireframing, prototyping, and testing. We work closely with our clients throughout the process to ensure that their needs are met.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our development process involves several stages, including planning, coding, testing, and deployment. We work closely with our clients throughout the process to ensure that their needs are met.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy varies depending on the scope of the project. We work with our clients to establish a cancellation policy that meets their needs.",
  },
];

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState("");

  const handleAccordionClick = (question: string) => {
    setActiveAccordion(activeAccordion === question ? "" : question);
  };

  return (
    <div className="mt-8 w-1/2">
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex border-b border-[#222] hover:border-[#f9f9f9] pb-2 justify-between items-center cursor-pointer"
            onClick={() => handleAccordionClick(item.question)}
            style={{
              borderColor:
                activeAccordion === item.question ? "#f9f9f9" : "#222",
            }}
          >
            <h3 className="text-[0.85rem]  font-semibold mb-2">
              {item.question}
            </h3>
            {activeAccordion === item.question ? (
              <MinusOutlined />
            ) : (
              <PlusOutlined />
            )}
          </div>
          <div
            className={`${
              activeAccordion === item.question ? "block" : "hidden"
            } mt-4 mb-6`}
          >
            <p className="txt">{item.answer}</p>
          </div>
        </div>
      ))}
      <button className="mt-7 clip text-[0.68rem] w-40 p-2 px-4 bg-[#f9f9f9] text-[#111]">
        Get in touch
      </button>
    </div>
  );
};

export default Faq;
