import React from 'react';

const LIGHT = require('./images/85399EEBE5D266844CF01E3629C15ED0-1.png');
const DARK = require('./images/85399EEBE5D266844CF01E3629C15ED0.png');


export default function Logo(props) {
  const { isDark } = props;
  const logo = isDark ? DARK : LIGHT;
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
        <img src={logo} width="129" height="35" alt="logo" />
      </a>
    </div>
  );
}
