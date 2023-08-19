import { useEffect, useRef, useState } from 'react';

const useClickOutside = (setPanel, value) => {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setPanel(value);
    };

    setIsComponentMounted(true);

    if (isComponentMounted) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isComponentMounted, setPanel, value]);

  return ref;
};

export default useClickOutside;
