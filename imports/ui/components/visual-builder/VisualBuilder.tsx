import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CheckIcon from '@material-ui/icons/Check'
import { useLocation } from 'react-router-dom'

import CustomInput from '/imports/ui/components/custom-input'

import AccordionIcon from '/imports/ui/icons/AccordionIcon'

import { setThemeValue } from '/imports/ui/store/theme/actions'
import { setPages } from '/imports/ui/store/visual-builder/actions'

import useStyles from './styles'

const VisualBuilder = () => {

  //#region State
  const theme = useSelector<any>(state => state.theme)
  const pages: any = useSelector<any>(state => state.visualBuilder.pages)
  const highlightColor = useSelector<any>(state => state.theme.general.highlightColor)
  //#endregion State
  
  //#region State
  const styles = useStyles()
  const dispatch = useDispatch()
  const location = useLocation()
  //#endregion State

  //#region Event listeners
  const togglePageCollapsed = (index) => {
    const newPages = [...pages]
    newPages[index].collapsed = !newPages[index].collapsed
    dispatch(setPages(newPages))
  }
  //#endregion Event listeners

  //#region View
  return (
    <div className={styles.visualBuilderContainer}>
      {pages.map((page, pageIndex) => (
        <div className={styles.page} key={pageIndex}>
          <div 
            style={{ marginTop: pageIndex === 0 ? 0 : 40 }} 
            className={styles.pageTitleContainer} 
            onClick={() => togglePageCollapsed(pageIndex)} 
          >
            <AccordionIcon 
              reversed={!page.collapsed} 
              width={15}
              height={15}
              fill={highlightColor}
              className={styles.pageTitleIcon}
            />
            
            <h2 className={styles.pageTitle}>{page.title}</h2>
            
          </div>

          {!page.collapsed && Object.keys(theme[page.key]).map((sectionName, index) => {
            return (
              <div key={index}>
                {theme[page.key][sectionName].vbData?.before?.map((beforeSection, index) => (
                  <EditableSection 
                    isBeforeOrAfter={true}
                    key={index} 
                    sectionName={beforeSection.sectionName} 
                    pathToValue={[page.key, sectionName, 'vbData', 'before', index]} 
                  />
                ))}
                <EditableSection isBeforeOrAfter={false} sectionName={sectionName} pathToValue={[page.key, sectionName]} />
              </div>
            )
          })}

          <Link to={page.to}>
            <div className={styles.showButton}>{location.pathname === page.to ? 
              <CheckIcon style={{ color: highlightColor }} /> : 'Go'}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
  //#endregion View
}

const EditableSection = ({ sectionName, pathToValue, isBeforeOrAfter = true }) => {
  
  
  //#region State
  const theme = useSelector<any>(state => state.theme)
  const highlightColor = useSelector<any>(state => state.theme.general.highlightColor)
  //#endregion State

  let sectionValue = theme
  pathToValue.forEach((step, index) => {
    sectionValue = sectionValue?.[step]
  })
  let vbData = sectionValue.vbData
  if (isBeforeOrAfter) sectionValue = sectionValue.style

  //#region Hooks
  const dispatch = useDispatch()
  const styles = useStyles()
  //#endregion Hooks

  //#region Event listeners
  const toggleSectionCollapsed = () => {
    dispatch(setThemeValue([...pathToValue, 'vbData', 'extended'], !Boolean(vbData?.extended)))
  }
  //#endregion Event listeners

  
  return (
    <>
      {/* Accordion, highlight and toggle */}
      <div
        className={styles.sectionTitleContainer} 
        onClick={toggleSectionCollapsed} 
      >
        <AccordionIcon 
          reversed={Boolean(vbData?.extended)} 
          width={15} height={15} 
          fill={highlightColor} 
          className={styles.pageSectionTitleIcon} 
        />
        <h3 className={styles.pageSectionTitle}>{sectionName}</h3>
      </div>

      {/* CSS properties */}
      {Boolean(vbData?.extended) && 
        <div className={styles.propertiesContainer}>
          {[
            'marginTop', 'marginBottom', 'marginLeft', 'marginRight', 'position', 'display', 'flexDirection',
            'background-color', 'border', 'top', 'bottom', 'left', 'right', 'color', 'cursor', 'font-weight', 'height', 'width', 'maxWidth',
            'maxHeight',
          ].map(((property, index) => (
            <CustomInput 
              key={index}
              style={{ marginTop: 5 }}
              label={property}
              placeholder={property} 
              type='text'
              value={(isBeforeOrAfter ? sectionValue.style?.[property] : sectionValue[property]) ?? ''} 
              onChange={(e) => dispatch(setThemeValue(isBeforeOrAfter ? [...pathToValue, 'style', property] : [...pathToValue, property], e.target.value ?? ''))} 
            />
          )))}
        </div>
      }
    </>
  )
}

export default VisualBuilder
