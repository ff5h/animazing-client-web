import { MutableRefObject, useEffect, useState } from 'react';

export const useHover = (ref: MutableRefObject<HTMLDivElement>) => {
  const [isHover, setHover] = useState(false);

  const on = () => setHover(true);
  const off = () => setHover(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    node.addEventListener('mouseenter', on);
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);

    return () => {
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    };
  }, []);

  return isHover;
};
