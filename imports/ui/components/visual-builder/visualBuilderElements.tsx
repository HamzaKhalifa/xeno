import React from 'react'
import { Link } from 'react-router-dom'

export const VBDiv = (props) => {
  const { vbTitle, style } = props
  
  return (
    <div {...props}>
      <div className='page_indicator' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vbTitle}
      </span>

      {props.children}
    </div>
  )
}

export const VBH2 = (props) => {
  const { vsTitle, style } = props
  
  return (
    <h2 {...props}>
      <div className='page_indicator' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vsTitle}
      </span>

      {props.children}
    </h2>
  )
}

export const VBH3 = (props) => {
  const { vsTitle, style } = props
  
  return (
    <h2 {...props}>
      <div className='page_indicator' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vsTitle}
      </span>

      {props.children}
    </h2>
  )
}

export const VBLink = (props) => {
  const { vsTitle, style } = props
  
  return (
    <Link {...props}>
      <div className='page_indicator' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vsTitle}
      </span>

      {props.children}
    </Link>
  )
}

export const VBSpan = (props) => {
  const { vsTitle, style } = props
  
  return (
    <span {...props}>
      <div className='page_indicator' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vsTitle}
      </span>

      {props.children}
    </span>
  )
}

export const VBP = (props) => {
  const { vsTitle, style } = props
  
  return (
    <h2 {...props}>
      <div className='page_indicator' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vsTitle}
      </span>

      {props.children}
    </h2>
  )
}

export const VBForm = (props) => {
  const { vsTitle, style } = props
  
  return (
    <h2 {...props}>
      <div className='page_indicator' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }} 
      />
      <span 
        className='page_indicator_title' 
        style={{ display: style.pageIndicator?.visible ? 'flex' : 'none' }}
      >
        {vsTitle}
      </span>

      {props.children}
    </h2>
  )
}