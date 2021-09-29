import React from 'react'
import { Link } from 'react-router-dom'

export const VBDiv = (props) => {
  const { vbTitle, style, ...rest } = props
  
  return (
    <div style={style} {...rest} >
      <div className='page_indicator' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vbTitle}
      </span>

      {props.children}
    </div>
  )
}

export const VBH2 = (props) => {
  const { vbTitle, style, ...rest } = props
  
  return (
    <h2 style={style} {...rest} >
      <div className='page_indicator' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vbTitle}
      </span>

      {props.children}
    </h2>
  )
}

export const VBH3 = (props) => {
  const { vbTitle, style, ...rest } = props
  
  return (
    <h3 style={style} {...rest} >
      <div className='page_indicator' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vbTitle}
      </span>

      {props.children}
    </h3>
  )
}

export const VBLink = (props) => {
  const { vbTitle, style, ...rest } = props
  
  return (
    <Link style={style} {...rest} >
      <div className='page_indicator' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vbTitle}
      </span>

      {props.children}
    </Link>
  )
}

export const VBSpan = (props) => {
  const { vbTitle, style, ...rest } = props
  
  return (
    <span style={style} {...rest} >
      <div className='page_indicator' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vbTitle}
      </span>

      {props.children}
    </span>
  )
}

export const VBP = (props) => {
  const { vbTitle, style, ...rest } = props
  
  return (
    <p style={style} {...rest} >
      <div className='page_indicator' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vbTitle}
      </span>

      {props.children}
    </p>
  )
}

export const VBForm = (props) => {
  const { vbTitle, style, ...rest } = props
  
  return (
    <form style={style} {...rest} >
      <div className='page_indicator' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style?.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vbTitle}
      </span>

      {props.children}
    </form>
  )
}