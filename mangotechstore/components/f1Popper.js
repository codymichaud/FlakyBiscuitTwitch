import React, { useState } from 'react';
import { usePopper } from 'react-popper';

export default function F1Popper() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <div>
      <button type='button' ref={setReferenceElement}>
        Reference element
      </button>

      <div
        className='text-white'
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        where is this
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </div>
  );
}
