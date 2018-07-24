import React from 'react';

//children
const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', height: '495px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;