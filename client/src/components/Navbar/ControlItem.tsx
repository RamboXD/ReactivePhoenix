import React from "react";

interface ControlItemProps {
  onClick: () => void;
  label: string;
}

const ControlItem: React.FC<ControlItemProps> = ({ label }) => {
  return <p className="text-base ">{label}</p>;
};

export default ControlItem;
