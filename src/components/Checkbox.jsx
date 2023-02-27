import React, { useEffect, useState } from "react";

function Checkbox({ val, active ,className,t}) {
  const [interruptor, setInterruptor] = useState(null);
  useEffect(() => {
    active(interruptor);
  }, [interruptor]);

  const verdad = (e) => {
    if (e.target.checked === true) {
      setInterruptor(e.target.checked);
    }
    if (e.target.checked === false) {
      setInterruptor(e.target.checked);
    }
  };

  return (
    <div className="titlecheck">
      {" "}
      <h6>{val}</h6>
      <label className="switch">
        <br />
        <br />

        <input className={className} type="checkbox" onChange={verdad} />
        <div className= {t+" round"}></div>
      </label>
    </div>
  );
}

export default Checkbox;
