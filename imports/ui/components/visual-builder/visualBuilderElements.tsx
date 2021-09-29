import React from 'react'
import { Link } from 'react-router-dom'

const BeforeOrAfter = ({ element }) => {
  switch(element.tag) {
    case 'div': 
      return <VBDiv vbData={element.vbData} style={element.style}>{element.children}</VBDiv>
    case 'h2': 
      return <VBH2 vbData={element.vbData} style={element.style}>{element.children}</VBH2>
    case 'h3': 
      return <VBH3 vbData={element.vbData} style={element.style}>{element.children}</VBH3>
    case 'link': 
      return <VBLink vbData={element.vbData} style={element.style}>{element.children}</VBLink>
    case 'span': 
      return <VBSpan vbData={element.vbData} style={element.style}>{element.children}</VBSpan>
    case 'p': 
      return <VBP vbData={element.vbData} style={element.style}>{element.children}</VBP>
    case 'form': 
      return <VBForm vbData={element.vbData} style={element.style}>{element.children}</VBForm>
    default:
      return <VBDiv vbData={element.vbData} style={element.style}>{element.children}</VBDiv>
  }
}

const VBElement = ({ children, vbData }) => {
  return (
    <>
      {vbData?.before?.map((element, index) => <BeforeOrAfter key={index} element={element} />)}
      <div 
        className='page_indicator'
        style={{ display: vbData?.extended ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: vbData?.extended ? 'flex' : 'none' }}
      >
        {vbData?.title}
      </span>

      {children}

      {vbData?.after?.map((element, index) => <BeforeOrAfter key={index} element={element} />)}
    </>
  )
}

export const VBDiv = (props) => {
  const { style, children, vbData, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <div style={newStyle} {...rest} >
      <VBElement children={children} vbData={vbData ?? style?.vbData} />
    </div>
  )
}

export const VBH2 = (props) => {
  const { style, children, vbData, ...rest } = props
  
  return (
    <h2 style={style} {...rest} >
      <VBElement children={children} vbData={vbData ?? style?.vbData} />
    </h2>
  )
}

export const VBH3 = (props) => {
  const { style, children, vbData, ...rest } = props
  
  return (
    <h3 style={style} {...rest} >
      <VBElement children={children} vbData={vbData ?? style?.vbData} />
    </h3>
  )
}

export const VBLink = (props) => {
  const { style, children, vbData, ...rest } = props
  
  return (
    <Link style={style} {...rest} >
      <VBElement children={children} vbData={vbData ?? style?.vbData} />
    </Link>
  )
}

export const VBSpan = (props) => {
  const { style, children, vbData, ...rest } = props
  
  return (
    <span style={style} {...rest} >
      <VBElement children={children} vbData={vbData ?? style?.vbData} />
    </span>
  )
}

export const VBP = (props) => {
  const { style, children, vbData, ...rest } = props
  
  return (
    <p style={style} {...rest} >
      <VBElement children={children} vbData={vbData ?? style?.vbData} />
    </p>
  )
}

export const VBForm = (props) => {
  const { style, children, vbData, ...rest } = props
  
  return (
    <form style={style} {...rest} >
      <VBElement children={children} vbData={vbData ?? style?.vbData} />
    </form>
  )
}