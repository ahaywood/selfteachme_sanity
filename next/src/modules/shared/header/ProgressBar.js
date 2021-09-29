/**
 * REFERENCE: https://css-tricks.com/reading-position-indicator/#:~:text=A%20small%20progressbar%20appears%20at,came%20back%20to%20the%20article.
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBar = () => {
  const [amount, setAmount] = useState(0);
  const [maxValue, setMaxValue] = useState();

  // ATTACH A SCROLL EVENT
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMaxValue(getMaxValue);
  }, []);

  // DETERMINE MAX VALUE
  const getMaxValue = () => {
    const windowHeight = window.innerHeight;

    const { body } = document;
    const html = document.documentElement;

    // REFERENCE: https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    return documentHeight - windowHeight;
  };

  // WHEN THE USER SCROLLS
  const handleScroll = () => {
    const scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    setAmount(scrollBarPosition);
  };

  return <progress className="progress-bar" max={maxValue} value={amount} />;
};

export { ProgressBar };
