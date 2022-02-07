import React from 'react';
import Link from 'next/link';
import {Button} from '../index.js'

const Header = () => {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Button>INFO</Button>
      <Link href={'/blog/'}>BLOG</Link>
    </div>
  );
};

export default Header;
