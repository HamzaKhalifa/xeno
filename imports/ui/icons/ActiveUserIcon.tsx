import React from 'react'

const ActiveUserIcon = (props) => {
  const { fill = '#3CD2C8', ...rest } = props
  
  return (
    <svg width='17' height='17' viewBox='0 0 17 17' fill='none' {...rest}>
      <g clipPath='url(#clip0)'>
      <path d='M8.70343 16.18C13.1163 16.18 16.7034 12.5929 16.7034 8.17999C16.7034 3.76709 13.1163 0.179993 8.70343 0.179993C4.29053 0.179993 0.70343 3.76709 0.70343 8.17999C0.70343 12.5929 4.29053 16.18 8.70343 16.18ZM4.83246 13.3413C5.96795 11.1993 8.62601 10.3993 10.7679 11.5348C11.5421 11.9477 12.1615 12.5671 12.5744 13.3413C10.2776 15.0703 7.12924 15.0703 4.83246 13.3413ZM6.89698 7.66386C6.89698 6.65741 7.69698 5.85741 8.70343 5.85741C9.70988 5.85741 10.5099 6.65741 10.5099 7.66386C10.5099 8.67031 9.70988 9.47031 8.70343 9.47031C7.69698 9.47031 6.89698 8.67031 6.89698 7.66386ZM8.70343 1.72838C12.2647 1.72838 15.155 4.6187 15.155 8.17999C15.155 9.65096 14.6389 11.0703 13.7357 12.2316C13.1163 11.251 12.2131 10.451 11.1292 9.98644C12.4196 8.64451 12.3679 6.52838 11.0518 5.23806C9.73569 3.94773 7.56795 3.99935 6.27762 5.34128C5.01311 6.63161 5.01311 8.69612 6.27762 9.98644C5.21956 10.451 4.31633 11.251 3.67117 12.2316C1.42601 9.47031 1.86472 5.3929 4.65182 3.14773C5.81311 2.24451 7.23246 1.72838 8.70343 1.72838Z' fill={fill} />
      </g>
      <defs>
      <clipPath id='clip0'>
      <rect width='16' height='16' fill='white' transform='translate(0.70343 0.179993)'/>
      </clipPath>
      </defs>
    </svg>

  )
}

export default ActiveUserIcon