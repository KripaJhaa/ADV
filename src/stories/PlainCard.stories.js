import { PlainCard } from "../Component/PlainCard/PlainCard";


export default {
    title: 'New/PlainCard',
    component: PlainCard,
    argTypes: {
        variant: {
          options: ['primary', 'secondary'],
          control: { type: 'select' }
        }
      }
  };
export const NormalCard = ()=> <PlainCard />;

const Primary = NormalCard.bind({});
Primary.args = {
   variant: 'primary',
};