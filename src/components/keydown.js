import React, { useEffect, useRef } from "react";

function Keydown({ onKeyDown }) {
  const ref = useRef();

  useEffect(() => {
    function handleKeyDown(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      onKeyDown(e);
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={ref} tabIndex="0">
    </div>
  );
}

export default Keydown;
