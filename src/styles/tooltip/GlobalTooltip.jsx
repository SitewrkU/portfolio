import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import './react-tooltip.css'; 

export default function GlobalTooltip({ content }) {
  return (
    <>
      <Tooltip
        id="glb-tooltip"
        place="top-middle"
        delayShow={100}
        delayHide={0}
      >
        {content}
      </Tooltip>
    </>
  );
}