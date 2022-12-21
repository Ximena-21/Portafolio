import React from 'react';
// import '../styles/components/side.scss'

export default function Side({ children, orientation} : any ) {
  return (
    <div className={`side ${orientation === 'left' ? 'left' : ''}`}>
      {children}
    </div>
  );
};
