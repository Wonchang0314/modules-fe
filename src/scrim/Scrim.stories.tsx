import { Meta, StoryFn } from '@storybook/react/*';
import Scrim, { ScrimProps } from './Scrim';

export default {
    title: 'Layout/Scrim',
    component: Scrim,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'light' },
    },
} as Meta<typeof Scrim>;

const Template: StoryFn<ScrimProps> = (args) => <Scrim {...args} className="fixed top-0 left-0" />;

export const CustomScrim = Template.bind({});
CustomScrim.args = {};
