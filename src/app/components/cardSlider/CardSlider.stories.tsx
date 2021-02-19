import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CardSlider, { Props } from './CardSlider';

export default {
  title: 'Landing/Components/CardSlider',
  component: CardSlider,
} as Meta;

const Template: Story<Props> = args => {
  return (
    <div
      style={{
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <CardSlider {...args} />
    </div>
  );
};

const SlidesArray = [];

const ImageDictionary = [
  'W1yjvf5idqA',
  'a7Woj8W6J0s',
  'X_IvVDuHvDQ',
  '8ioenvmof-I',
  'm2J105CzEAU',
  'UcfKYTan-LU',
  'GQD3Av_9A88',
  '5sF6NrB1MEg',
  'hDyO6rr3kqk',
];

const MakeSlide = (i: number) => {
  return {
    title: 'Product listing can span multiple lines',
    price: 35,
    rating: '4',
    type: 'plant',
    image: {
      asset: {
        altText: 'Plant',
        sys: {
          uri: `https://source.unsplash.com/${ImageDictionary[i]}`,
        },
      },
    },
  };
};

for (let i = 0; SlidesArray.length < 8; i++) {
  SlidesArray.push(MakeSlide(i));
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Bringing life to your home',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lacus, elit a diam eget enim venenatis. Nibh quis facilisis et hendrerit eu nisl.',
  cta: {
    label: 'Shop now',
    href: '#',
  },
  image: {
    asset: {
      altText: 'Plant',
      sys: {
        uri: 'https://source.unsplash.com/7d7OR-RvufU',
      },
    },
  },
  slides: SlidesArray,
};
