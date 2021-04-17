import React from 'react';

import ListItem from "./ListItem";

const List = ({items}) => (
  <ul className="divide-y divide-gray-600">
    {items.map(item => (
      <ListItem {...item}/>
    ))}
  </ul>
);

export default List;
