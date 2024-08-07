import { Meta } from "@storybook/react/*";
import Dialog, { DialogProps } from "./Dialog";
import { useState } from "react";
import Button from "src/Navigation/button/ButtonMobile";
import Scrim from "src/scrim/Scrim";

export default {
  title: "Feedback/Dialog/Show Dialog",
  component: Dialog,
  tags: ["autodocs"],
} as Meta<typeof Dialog>;

export const Docs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-center h-full w-full">
        <Button
          onClick={handleClick}
          size={"L"}
          style={"primary"}
          type={"text"}
          state={"enabled"}
          text1={"Show Dialog"}
        />
      </div>
      {isOpen && (
        <>
          <Scrim className="fixed inset-0 z-40" />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <Dialog
              onClose={handleClose}
              title="Title"
              description="Description"
              lefttext="Button"
              righttext="Button"
              dismissible={true}
              label="Label"
            />
          </div>
        </>
      )}
    </>
  );
};

Docs.parameters = {
  docs: {
    page: () => <Docs />,
  },
};
