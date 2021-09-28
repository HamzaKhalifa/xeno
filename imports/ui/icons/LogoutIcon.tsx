import React from 'react'

const logoutIcon = (props) => {
  const { fill = '#3CD2C8', ...rest } = props
  
  return (
    <svg width='17' height='17' viewBox='0 0 17 17' fill='none' {...rest}>
      <g clipPath='url(#clip0)'>
        <path d='M12.5744 4.69444L11.33 5.93889L12.7522 7.36111H5.46332V9.13889H12.7522L11.33 10.5611L12.5744 11.8056L16.13 8.25L12.5744 4.69444ZM1.90777 2.02778H8.12999V0.25H1.90777C0.92999 0.25 0.12999 1.05 0.12999 2.02778V14.4722C0.12999 15.45 0.92999 16.25 1.90777 16.25H8.12999V14.4722H1.90777V2.02778Z' fill={fill} />
      </g>
      <defs>
      <clipPath id='clip0'>
        <rect width='16' height='16' fill='white' transform='translate(0.12999 0.25)'/>
      </clipPath>
      </defs>
    </svg>

  )
}

export default logoutIcon