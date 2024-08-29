import { Meta, IconGallery, IconItem } from "@storybook/blocks";
import Icon, { iconKey, IconCategory } from "../Icon";

export default {
  title: "Icon/Icon List",
  component: Icon,
  tags: ["autodocs"],
};

export const Docs = () => <></>;

Docs.parameters = {
  docs: {
    page: () => (
      <>
        <Meta title="Components/Icon/Icon List" />
        {Object.entries(IconCategory).map(([category, icon]) => (
          <div key={category}>
            <div className="pb-7 text-black font-bold">{category}</div>
            <IconGallery>
              {Object.keys(icon).map(icon => (
                <IconItem key={icon} name={icon as iconKey}>
                  <Icon icon={icon as iconKey} />
                </IconItem>
              ))}
            </IconGallery>
          </div>
        ))}
      </>
    ),
  },
};
