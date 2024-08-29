import React from "react";

export default {
  title: "Foundation/Elevation",
  tags: ["autodocs"],
};

const ElevationBox: React.FC<{ className: string; label: string }> = ({
  className,
  label,
}) => (
  <div className="flex flex-row">
    <div className={`p-6 ${className} rounded-lg mb-4`}>
      <p>{label}</p>
    </div>
    <div className="ml-5">
      <p className="text-slate-950">className: {className}</p>
    </div>
  </div>
);

export const Docs = () => (
  <div>
    <ElevationBox
      className="shadow-elevation-light-1 bg-Gray-10"
      label="Elevation Light 1"
    />
    <ElevationBox
      className="shadow-elevation-light-1 bg-Gray-10"
      label="Elevation Light 2"
    />
    <ElevationBox
      className="shadow-elevation-dark-1 bg-Gray-90 text-white"
      label="Elevation Dark 1"
    />
    <ElevationBox
      className="shadow-elevation-dark-2 bg-Gray-90 text-white"
      label="Elevation Dark 2"
    />
  </div>
);
