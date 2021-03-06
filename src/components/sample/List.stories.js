import React from 'react';

import List from './List';
import dog from './dog.jpg';
import cat from './cat.jpg';
import tiger from './tiger.jpg';

export default {
  title: 'sample/List',
  component: List,
};

const Template = (args) => <List {...args}/>;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      image: dog,
      title: 'サンプルブック１',
      author: '作者は犬',
    },
    {
      image: cat,
      title: 'サンプルブック２',
      author: '作者は猫',
    },
    {
      image: tiger,
      title: 'サンプルブック３',
      author: '作者はトラ',
    },
  ]
};
