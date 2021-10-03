import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { setThemeValue } from '/imports/ui/store/theme/actions'

import useStyles from './styles'

const BeforeOrAfter = ({ element }) => {
  switch(element.tag) {
    case 'div': 
      return <VBDiv style={element.style}>{element.children}</VBDiv>
    case 'h1': 
      return <VBH1 style={element.style}>{element.children}</VBH1>
    case 'h2': 
      return <VBH2 style={element.style}>{element.children}</VBH2>
    case 'h3': 
      return <VBH3 style={element.style}>{element.children}</VBH3>
    case 'h4': 
      return <VBH4 style={element.style}>{element.children}</VBH4>
    case 'h5': 
      return <VBH5 style={element.style}>{element.children}</VBH5>
    case 'h6': 
      return <VBH6 style={element.style}>{element.children}</VBH6>
    case 'link': 
      return <VBLink to={element.to ?? '#'} style={element.style}>{element.children}</VBLink>
    case 'span': 
      return <VBSpan style={element.style}>{element.children}</VBSpan>
    case 'p': 
      return <VBP style={element.style}>{element.children}</VBP>
    case 'form': 
      return <VBForm style={element.style}>{element.children}</VBForm>
    default:
      return <VBDiv style={element.style}>{element.children}</VBDiv>
  }
}

const VBElement = ({ children, style }) => {
  const visualBuilderVisible = useSelector<any>(state => state.visualBuilder.visible)

  const styles = useStyles({ visualBuilderVisible, extended: style?.vbData?.extended })

  return (
    <>
      {style?.vbData?.before?.map((element, index) => <BeforeOrAfter key={index} element={element} />)}
      
      <div className={styles.pageIndicator} />
      
      <span 
        className={styles.pageIndicatorTitle} 
        style={{ display: style?.vbData?.extended ? 'flex' : 'none' }}
        onClick={() => {

        }}
      >
        {style?.vbData?.title}
      </span>

      {children}

      {style?.vbData?.after?.map((element, index) => <BeforeOrAfter key={index} element={element} />)}
    </>
  )
}

export const VBDiv = (props) => {
  const { style, children, ...rest } = props
  
  // We remove vbData from the style because the browser adds a "preventExtensions" to the style object, when we want to be freely able to change anything inside vbData
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <div style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </div>
  )
}

export const VBH1 = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <h1 style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </h1>
  )
}

export const VBH2 = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <h2 style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </h2>
  )
}

export const VBH3 = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <h3 style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </h3>
  )
}

export const VBH4 = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <h4 style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </h4>
  )
}

export const VBH5 = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <h5 style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </h5>
  )
}

export const VBH6 = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <h6 style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </h6>
  )
}

export const VBLink = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <Link style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </Link>
  )
}

export const VBSpan = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <span style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </span>
  )
}

export const VBP = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <p style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </p>
  )
}

export const VBForm = (props) => {
  const { style, children, ...rest } = props
  
  const newStyle = { ...style }
  delete newStyle.vbData
  return (
    <form style={newStyle} {...rest} >
      <VBElement children={children} style={style} />
    </form>
  )
}