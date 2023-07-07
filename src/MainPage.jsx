import React from 'react';
import { useCookies } from 'react-cookie';

function MainPage() {
    const [cookies] = useCookies(['myCookie']);
    const storedData = cookies.myCookie;
  return (
    <div>
      <h1>Welcome to dashboard {storedData}</h1>
    </div>
  );
}

export default MainPage;