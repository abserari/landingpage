import React from 'react';
import LOGO from './images/85399EEBE5D266844CF01E3629C15ED0.png';


export default function Logo() {
  return (
    <div
      className="logo"
      style={{
        height: 32,
        color: '#f40',
        textAlign: 'left',
      }}
    >
      <a href="/" style={{ display: 'block', position: 'relative' }}>
        <img src={LOGO} width="129" height="35" alt="logo" />
      </a>
    </div>
  );
}
