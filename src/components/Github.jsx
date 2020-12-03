import React from 'react';

export default function Github({ github }) {
  const style = {
    position: 'absolute',
    fontSize: '2rem !important',
    color: 'gray',
    right: '15px',
    top: '10px',
  };
  return (
    <div>
      <a
        href={github}
        title="Source on github"
        target="_blank"
        rel="noreferrer"
        style={style}
      >
        <i className="fa fa-github fa-2x"></i>
      </a>
    </div>
  );
}
