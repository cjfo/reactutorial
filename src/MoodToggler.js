import React, { useState } from 'react';

function MoodToggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const colorForIcon = isHappy ? 'hotpink' : 'green';
  const styles = { color: isHappy ? 'darkblue' : '#ccc' };

  return (
    <h3 style={{ color: colorForIcon }} onClick={toggleIsHappy}>
      <span style={styles}>Icon</span> {isHappy ? ':)' : ':('}
    </h3>
  );
}

export default MoodToggler;
