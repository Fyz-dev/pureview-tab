import { useEffect, useRef } from 'react';

const useClickOutside = (setPanel, value) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setPanel(value);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setPanel, value, ref]);

  return ref;
};

export default useClickOutside;
