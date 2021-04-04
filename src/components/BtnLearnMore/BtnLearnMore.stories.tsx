import { Meta, Story } from '@storybook/react/types-6-0';
import BtnLearnMore from './index'
export default {
    title: 'Example/Button',
    component: BtnLearnMore,
    argTypes: {
        background: { control: 'color' },
    },
} as Meta;

const Template: Story<any> = (args) => <BtnLearnMore{...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isShadowed: false,
    children: 'Primary button',
    backgroundColor: '#F063B8'
};

export const Shadowed = Template.bind({});
Shadowed.args = {
    isShadowed: true,
    children: 'Secondary button',
};