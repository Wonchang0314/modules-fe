import { useState } from "react";
import ButtonMobile from "src/Navigation/ButtonMobile";
import SnackBar from "../SnackBar";

export default {
  title: "Feedback/Snackbar",
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["!autodocs"],
};

export const ShowSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center h-full w-full">
        <ButtonMobile
          onClick={handleOpen}
          size={"L"}
          mode={"primary"}
          type={"text"}
          state={"enabled"}
          text1={"Show Snackbar"}
        />
      </div>
      <div className="fixed left-0 bottom-0 w-screen h-fit z-40 p-4">
        <SnackBar
          open={open}
          message={"hello"}
          onClose={handleClose}
          dismissible={true}
        />
      </div>
    </div>
  );
};
