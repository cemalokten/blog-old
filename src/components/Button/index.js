import React from 'react';
import Link from 'next/link';

const style = (color) => {
  return {
    border: 'none',
    backgroundColor: color, 
    borderRadius: '10px',
    fontFamily: 'bold',
    fontSize: '1.5rem',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
    transform: 'rotate(6deg)'
  };
};
const Button = ({children}) => {
  return (
    <button style={style('red')}>
      <Link href={'/'}>{children}</Link>
    </button>
  );
};

export default Button;
