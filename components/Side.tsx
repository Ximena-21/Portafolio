import React from 'react';

export default function Side({ children, orientation} : any ) {
  return (
    <div className={`side ${orientation === 'left' ? 'left' : ''}`}>
      {children}
    </div>
  );
};
