import React from 'react'
import Confetti from 'react-confetti'
import { useRef } from 'react';

export default () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <Confetti
      width={windowSize.current[0]}
      height={windowSize.current[1]}
    />
  )
}
