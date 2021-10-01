import React from 'react'

const PlusIcon = (props) => {
  const { fill = '#3CD2C8', ...rest } = props
  
  return (
    <svg width='10' height='10' viewBox='0 0 10 10' fill='none' {...rest}>
      <path d='M4.83008 9.5199V0.519897' stroke={fill} />
      <path d='M9.33008 5.0199L0.330078 5.0199' stroke={fill} />
    </svg>
  )
}

export default PlusIcon