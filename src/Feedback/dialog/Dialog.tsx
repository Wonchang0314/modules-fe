import { useState } from "react";
import Button from "src/Navigation/button/ButtonMobile";
import Icon from "src/icon/Icon";

//애니메이션 정의

export interface DialogProps {
  title: string;
  description: string;
  lefttext: string;
  righttext: string;
  dismissible: boolean;
  label?: boolean;
  labeltext?: string;
  leftOnClick?: () => void;
  rightOnClick?: () => void;
  onClose?: () => void;
}

export default function Dialog({
  title,
  description,
  lefttext,
  righttext,
  dismissible = true,
  leftOnClick,
  rightOnClick,
  label = false,
  labeltext,
  onClose,
}: DialogProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    isVisible && (
      <div className="w-[272px] flex flex-col py-spacing-07 px-spacing-05 bg-white rounded-xl">
        <div className="flex flex-row pb-spacing-04 justify-between items-start">
          <div
            className="flex flex-col gap-spacing-01 body-05-bold
          text-text-primary"
          >
            {label && (
              <div className="label-01-regular text-text-secondary">
                {labeltext}
              </div>
            )}
            {title}
          </div>
          {dismissible && (
            <button onClick={handleClose}>
              <Icon icon={"close"} size={24} />
            </button>
          )}
        </div>
        <div className="pb-spacing-06 body-02-regular text-text-primary">
          {description}
        </div>
        <div className="flex flex-row gap-spacing-02 w-full">
          <Button
            size={"M"}
            style={"secondary"}
            type={"text"}
            state={"enabled"}
            text1={lefttext}
            onClick={leftOnClick}
          />
          <Button
            size={"M"}
            style={"primary"}
            type={"text"}
            state={"enabled"}
            text1={righttext}
            onClick={rightOnClick}
          />
        </div>
      </div>
    )
  );
}
