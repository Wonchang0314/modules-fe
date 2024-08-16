import { ColorPalette } from "@storybook/blocks";
import ColorItemList from "./ColorItems";

export default {
  title: "Foundation/Color Ground",
  component: ColorItemList,
  tags: ["autodocs"],
};

export const Docs = () => (
  <>
    <ColorPalette>
      <ColorItemList />
    </ColorPalette>
  </>
);

Docs.parameters = {
  docs: {
    page: () => (
      <>
        <ColorPalette>
          <ColorItemList />
        </ColorPalette>
      </>
    ),
  },
};
