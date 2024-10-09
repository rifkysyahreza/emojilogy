"use client";

import { FC } from "react";
import useEmoji from "@/hooks/useEmoji";

const Index: FC = () => {
  const { emoji, changeEmoji } = useEmoji();

  return (
    <div className="relative bg-[#F8DD84] h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-20">
      {/* What's your emoji today? */}
      <div className="flex flex-col items-center text-[#4C9BB9] font-normal text-5xl">
        <div>What’s your</div>

        <div>
          <span className="text-[#1C5469] text-stroke-secondary-stroke text-stroke-[1px]">
            emoji
          </span>{" "}
          today?
        </div>
      </div>

      {/* Click it and Emoji */}
      <div className="flex flex-col items-center gap-4">
        <div className="italic">Click it!</div>
        <div
          dangerouslySetInnerHTML={{ __html: emoji?.htmlCode || "" }}
          className="text-9xl"
          onClick={changeEmoji}
        />
      </div>

      <div className="text-center w-[calc(100vw-50%)]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </div>
    </div>
  );
};

export default Index;
