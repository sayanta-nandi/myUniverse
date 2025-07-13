import Magnetic from "@/components/Magnetic";
import Image from "next/image";
import React from "react";

const SkillBox = ({
  skill,
  icon,
  invert = false,
}: {
  skill: string;
  icon: string;
  invert?: boolean;
}) => {
  return (
    <div className="flex select-none items-center justify-center flex-col size-24">
      <Magnetic>
        <div className="flex items-center justify-center flex-col text-white">
          <div
            className="flex items-center justify-center"
            style={{
              width: 64,
              height: 64,
              backgroundColor: "transparent",
              overflow: "hidden",
            }}
          >
            <Image
              src={icon}
              alt={skill}
              width={36}
              height={36}
              style={{
                width: 36,
                height: 36,
                filter: invert ? "invert(1)" : "invert(0)",
                display: "block",
              }}
            />
          </div>
          <p>{skill}</p>
        </div>
      </Magnetic>
    </div>
  );
};

export default SkillBox;
