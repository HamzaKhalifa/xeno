import React from 'react'

const AccordionIcon = ({ fill = 'white', reversed = false, ...rest }) => (
  <svg width='6' height='5' viewBox='0 0 6 5' fill={fill} style={{ transform: 'rotate(' + (reversed ? 180 : 0) + 'deg)', ...( rest.style ?? {} ) }} {...rest}>
    <path d='M0.472965 0.763346C0.266585 0.430256 0.50615 0 0.897994 0L4.67836 0C5.0702 0 5.30977 0.430256 5.10339 0.763345L3.21321 3.81402C3.0177 4.12956 2.55866 4.12956 2.36315 3.81402L0.472965 0.763346Z' fill={fill} />
  </svg>
)

export default AccordionIcon