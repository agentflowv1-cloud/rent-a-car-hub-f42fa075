import React from 'react';

interface MiddleComponentProps {
  content: string;
}

const MiddleComponent: React.FC<MiddleComponentProps> = ({ content }) => {
  return (
    <main>
      <p>{content}</p>
    </main>
  );
};

export default MiddleComponent;