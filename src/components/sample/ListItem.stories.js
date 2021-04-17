import React from 'react';

import ListItem from './ListItem';
import dog from './dog.jpg';

export default {
  title: 'sample/ListItem',
  component: ListItem,
};

const Template = (args) => <ListItem {...args}/>;

export const Default = Template.bind({});
Default.args = {
  image: dog,
  title: 'サンプルブック１',
  author: '作者は犬',
};
