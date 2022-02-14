/**
 * REFERENCE: https://css-tricks.com/reading-position-indicator/#:~:text=A%20small%20progressbar%20appears%20at,came%20back%20to%20the%20article.
 */
import { useEffect, useState } from 'react';

const ProgressBar = (): JSX.Element => {
  const [amount, setAmount] = useState(0);
  const [maxValue, setMaxValue] = useState<number>();

  // WHEN THE USER SCROLLS
  const handleScroll = () => {
    const scrollBarPosition = window.pageYOffset || document.body.scrollTop;
    setAmount(scrollBarPosition);
  };

  // ATTACH A SCROLL EVENT
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  // DETERMINE MAX VALUE
  const getMaxValue = (): number => {
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

  useEffect(() => {
    setMaxValue(getMaxValue);
  }, []);

  return <progress className="progress-bar" max={maxValue} value={amount} />;
};

export { ProgressBar };
