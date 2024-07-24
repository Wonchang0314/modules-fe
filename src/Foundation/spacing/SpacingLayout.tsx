import React from "react";

export interface SpacingProps {
  margin?: keyof typeof spacingConfig.margin | "";
  padding?: keyof typeof spacingConfig.padding | "";
  gap?: keyof typeof spacingConfig.gap | "";
  spaceX?: keyof typeof spacingConfig.spaceX | "";
  spaceY?: keyof typeof spacingConfig.spaceY | "";
  children: React.ReactNode;
}

export const spacingConfig = {
  margin: {
    "spacing-01": "m-spacing-01",
    "spacing-02": "m-spacing-02",
    "spacing-03": "m-spacing-03",
    "spacing-04": "m-spacing-04",
    "spacing-05": "m-spacing-05",
    "spacing-06": "m-spacing-06",
    "spacing-07": "m-spacing-07",
    "spacing-08": "m-spacing-08",
    "spacing-09": "m-spacing-09",
    "spacing-10": "m-spacing-10",
    default: "",
  },
  padding: {
    "spacing-01": "p-spacing-01",
    "spacing-02": "p-spacing-02",
    "spacing-03": "p-spacing-03",
    "spacing-04": "p-spacing-04",
    "spacing-05": "p-spacing-05",
    "spacing-06": "p-spacing-06",
    "spacing-07": "p-spacing-07",
    "spacing-08": "p-spacing-08",
    "spacing-09": "p-spacing-09",
    "spacing-10": "p-spacing-10",
    default: "",
  },
  gap: {
    "spacing-01": "gap-spacing-01",
    "spacing-02": "gap-spacing-02",
    "spacing-03": "gap-spacing-03",
    "spacing-04": "gap-spacing-04",
    "spacing-05": "gap-spacing-05",
    "spacing-06": "gap-spacing-06",
    "spacing-07": "gap-spacing-07",
    "spacing-08": "gap-spacing-08",
    "spacing-09": "gap-spacing-09",
    "spacing-10": "gap-spacing-10",
    default: "",
  },
  spaceX: {
    "spacing-01": "space-x-spacing-01",
    "spacing-02": "space-x-spacing-02",
    "spacing-03": "space-x-spacing-03",
    "spacing-04": "space-x-spacing-04",
    "spacing-05": "space-x-spacing-05",
    "spacing-06": "space-x-spacing-06",
    "spacing-07": "space-x-spacing-07",
    "spacing-08": "space-x-spacing-08",
    "spacing-09": "space-x-spacing-09",
    "spacing-10": "space-x-spacing-10",
    default: "",
  },
  spaceY: {
    "spacing-01": "space-y-spacing-01",
    "spacing-02": "space-y-spacing-02",
    "spacing-03": "space-y-spacing-03",
    "spacing-04": "space-y-spacing-04",
    "spacing-05": "space-y-spacing-05",
    "spacing-06": "space-y-spacing-06",
    "spacing-07": "space-y-spacing-07",
    "spacing-08": "space-y-spacing-08",
    "spacing-09": "space-y-spacing-09",
    "spacing-10": "space-y-spacing-10",
    default: "",
  },
};

const SpacingLayout: React.FC<SpacingProps> = ({
  margin,
  padding,
  gap,
  spaceX,
  spaceY,
  children,
}) => {
  const classes = `flex flex-row
    ${margin ? spacingConfig.margin[margin] : ""}
    ${padding ? spacingConfig.padding[padding] : ""}
    ${gap ? spacingConfig.gap[gap] : ""}
    ${spaceX ? spacingConfig.spaceX[spaceX] : ""}
    ${spaceY ? spacingConfig.spaceY[spaceY] : ""}
  `;

  return <div className={classes.trim()}>{children}</div>;
};

export default SpacingLayout;
