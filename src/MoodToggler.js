import React, { useState } from 'react';

function MoodToggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);

  return <h3 onClick={toggleIsHappy}>Icon {isHappy ? ':)' : ':('}</h3>;
}

export default MoodToggler;
