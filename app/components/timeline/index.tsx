import React, { useState } from "react";
import { Timeline } from "antd";

type TimelineItem = {
  title: string;
  description: string;
};

const timelineItems: TimelineItem[] = [
  {
    title: "01 - Discover",
    description:
      "We'll work with you to understand your project and plan its development.",
  },
  {
    title: "02 / Design",
    description:
      "We'll design and develop your project to meet your specific needs.",
  },
  {
    title: "03 / Develop and Test",
    description: "We'll test your project and launch it to the world.",
  },
  {
    title: "04 / Launch",
    description:
      "We'll provide ongoing maintenance and support for your project.",
  },
  {
    title: "05 / Iterate",
    description:
      "We'll help you grow and scale your project as your business grows.",
  },
];

const CustomTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(
    timelineItems[0]
  );

  const handleItemClick = (item: TimelineItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-full mt-10 pl-20">
      <Timeline mode="left">
        {timelineItems.map((item, index) => (
          <Timeline.Item
            key={index}
            color={index ? "white" : "blue"}
          >
            <h5 className="text-[17px] hover:underline font-semibold leading-6 text-white">
              {item.title}
            </h5>
          </Timeline.Item>
        ))}
      </Timeline>
      {selectedItem && (
        <div className="p-5 border border-[#222] rounded-[2px]">
          <h5 className="text-[15px] font-semibold leading-6 text-white">
            {selectedItem.title}
          </h5>
          <p className="mt-4 text-[11px] text-[#999] ">{selectedItem.description}</p>
          <button className="mt-4 text-[0.7rem] underline">learn more</button>
        </div>
      )}
    </div>
  );
};

export default CustomTimeline;
