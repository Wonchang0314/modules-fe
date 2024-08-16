import { useState } from "react";
import Button from "src/Navigation/button/ButtonMobile";
import Scrim from "src/Layout/scrim/Scrim";
import Dialog from "./Dialog";

export default {
  title: "Feedback/Dialog",
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["!autodocs"],
};

export const ShowDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-center h-full w-full">
        <Button
          onClick={handleOpen}
          size={"L"}
          style={"primary"}
          type={"text"}
          state={"enabled"}
          text1={"Show Dialog"}
        />
      </div>
      {open && (
        <Scrim
          className="fixed inset-0 z-40 flex items-center justify-center"
          onClick={handleClose}
        >
          <Dialog
            open={open}
            onClose={handleClose}
            title="Title"
            description="Description"
            leftText="Button"
            rightText="Button"
            dismissible={true}
            label="Label"
            leftOnClick={handleClose}
          />
        </Scrim>
      )}
    </>
  );
};
