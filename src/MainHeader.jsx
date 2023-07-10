import React from 'react';
import { useCookies } from 'react-cookie';

function MainHeader() {
  const [cookies] = useCookies(['myCookie']);
  return (
    <div>
      <h1>Welcome to dashboard {cookies.myCookie}</h1>
    </div>
  );
}

export default MainHeader;