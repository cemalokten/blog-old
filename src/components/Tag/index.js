import React from 'react';

const Tag = ({tags}) => {
  const arr = tags.split(',')
  return arr.map(label => {
    return <li>{label}</li>;
  });
};

export default Tag;
