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
  const dispatch = useDispatch()
  const styles = useStyles()
  const location = useLocation()
  //#endregion State

  //#region Event listeners
  const togglePageCollapsed = (index) => {
    const newPages = [...pages]
    newPages[index].collapsed = !newPages[index].collapsed
    dispatch(setPages(newPages))
  }
  const togglePageSectionCollapsed = (index, property) => {
    const newPages = [...pages]
    newPages[index][property + 'Collapsed'] = !Boolean(newPages[index][property + 'Collapsed'])
    dispatch(setPages(newPages))
  }
  //#endregion Event listeners

  //#region View
  return (
    <div className={styles.visualBuilderContainer}>
      {pages.map((page, pageIndex) => (
        <div className={styles.page} key={pageIndex}>

          <Link to={page.key}>
            <div className={styles.showButton}>{location.pathname === ('/' + page.key) ? <CheckIcon style={{ color: highlightColor }} /> : 'Go'}</div>
          </Link>

          <div style={{ marginTop: pageIndex === 0 ? 0 : 40 }} className={styles.pageTitleContainer} onClick={() => togglePageCollapsed(pageIndex)} >
            <AccordionIcon reversed={!page.collapsed} width={15} height={15} fill={highlightColor} className={styles.pageTitleIcon} />
            <h2 className={styles.pageTitle}>{page.title}</h2>
            
          </div>

          {!page.collapsed && Object.keys(theme[page.key]).map((pageSection, index) => (
            <div className={styles.pageSection} key={index}>
              
              <div 
                className={styles.sectionTitleContainer} 
                onClick={() => togglePageSectionCollapsed(pageIndex, pageSection)} 
              >
                <AccordionIcon 
                  reversed={Boolean(page[pageSection + 'Collapsed'])} 
                  width={15} height={15} 
                  fill={highlightColor} 
                  className={styles.pageSectionTitleIcon} 
                />
                <h3 className={styles.pageSectionTitle}>{pageSection}</h3>
              </div>

              {page[pageSection + 'Collapsed'] && 
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
                      value={theme[page.key][pageSection][property] ?? ''} 
                      onChange={(e) => dispatch(setThemeValue([page.key, pageSection, property], e.target.value ?? ''))} 
                    />
                  )))}
                </div>
              }
            </div>
          ))}

        </div>
      ))}
    </div>
  )
  //#endregion View
}

export default VisualBuilder
