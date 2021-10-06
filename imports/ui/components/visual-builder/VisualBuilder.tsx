import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CheckIcon from '@material-ui/icons/Check'
import { useLocation } from 'react-router-dom'

import EditableSection from './EditableSection'
import VisualBuilderButton from './visual-builder-button'

import AccordionIcon from '/imports/ui/icons/AccordionIcon'

import { setThemeValue } from '/imports/ui/store/theme/actions'
import { setVisualBuilderVisible } from '/imports/ui/store/visual-builder/actions'
import makeId from '/imports/ui/utils/makeId'

import useStyles from './styles'

const VisualBuilder = () => {

  //#region State
  const theme = useSelector<any>(state => state.theme)
  const highlightColor = useSelector<any>(state => state.theme.general.generalStyles.highlightColor)
  //#endregion State
  
  //#region Hooks
  const styles = useStyles()
  const dispatch = useDispatch()
  const location = useLocation()

  // Initialize builder by giving IDs to every style object
  React.useEffect(() => {
    const addIdsToBeforeOrAfter = (beforeOrAfter) => {
      if (!beforeOrAfter.style.vbData.id)
        beforeOrAfter.style.vbData = { ...(beforeOrAfter.style?.vbData ?? {}), id: makeId(10) }
      if (Array.isArray(beforeOrAfter.children)) {
        beforeOrAfter.children.forEach(child => addIdsToBeforeOrAfter(child))
      }
    }

    const newTheme = { ...theme }
    Object.keys(newTheme).forEach(key => {
      Object.keys(newTheme[key]).forEach(sectionKey => {

        if (!newTheme[key][sectionKey].vbData) {
          newTheme[key][sectionKey].vbData = { ...(newTheme[key][sectionKey].vbData ?? {}), id: makeId(10) }
        }

        if (newTheme[key][sectionKey].vbData?.before?.length > 0) {
          newTheme[key][sectionKey].vbData?.before?.forEach(before => addIdsToBeforeOrAfter(before))
          newTheme[key][sectionKey].vbData?.after?.forEach(after => addIdsToBeforeOrAfter(after))
        }
      })
    })

    dispatch(setThemeValue([], newTheme))
  }, [])
  //#endregion Hooks

  //#region Event listeners
  const toggleThemeElementExtended = (themeElement) => {
    dispatch(setThemeValue([themeElement, 'extended'], !Boolean(theme[themeElement].extended)))
  }
  const collapseAll = () => {
    const newTheme = { ...theme }

    const unextendBeforeOrAfter = (beforeOrAfter) => {
      beforeOrAfter.style.vbData = { ...(beforeOrAfter.style?.vbData ?? {}), extended: false }
      if (Array.isArray(beforeOrAfter.children)) {
        beforeOrAfter.children.forEach(child => unextendBeforeOrAfter(child))
      }
    }

    Object.keys(newTheme).forEach(key => {
      Object.keys(newTheme[key]).forEach(sectionKey => {
        newTheme[key].extended = false

        newTheme[key][sectionKey].vbData = { ...(newTheme[key][sectionKey].vbData ?? {}), extended: false }
        if (newTheme[key][sectionKey].vbData?.before?.length > 0) {
          newTheme[key][sectionKey].vbData?.before?.forEach(before => unextendBeforeOrAfter(before))
        }
        if (newTheme[key][sectionKey].vbData?.after?.length > 0) {
          newTheme[key][sectionKey].vbData?.after?.forEach(after => unextendBeforeOrAfter(after))
        }
      })
    })

    dispatch(setThemeValue([], newTheme))
  }
  const closeVisualBuilder = () => {
    dispatch(setVisualBuilderVisible(false))
  }
  //#endregion Event listeners

  //#region View
  return (
    <div className={styles.visualBuilderContainer} id='visual_builder_scroll'>
      <div className={styles.header}>
        <VisualBuilderButton style={{ padding: 1, width: '50%' }} onClick={closeVisualBuilder}>Close</VisualBuilderButton>
        <VisualBuilderButton style={{ padding: 1, width: '50%' }} onClick={collapseAll}>Collapse All</VisualBuilderButton>
      </div>

      {Object.keys(theme).map((themeElement, themeElementIndex) => (
        <div className={styles.themeElement} key={themeElementIndex}>
          <div 
            style={{ marginTop: themeElementIndex === 0 ? 0 : 40 }} 
            className={styles.themeElementTitleContainer} 
            onClick={() => toggleThemeElementExtended(themeElement)} 
          >
            <AccordionIcon 
              reversed={Boolean(theme[themeElement].extended)} 
              width={15}
              height={15}
              fill={highlightColor}
              className={styles.themeElementTitleIcon}
            />
            
            <h2 className={styles.themeElementTitle}>{themeElement}</h2>
            
          </div>

          {theme[themeElement].extended && Object.keys(theme[themeElement]).map((sectionTitle, index) => {
            if (sectionTitle === 'to' || sectionTitle === 'extended') return null

            return (
              <div 
                className={styles.themeElementSections} 
                // id={theme[themeElement][sectionTitle].vbData?.id} // Id used by react-scroll to scroll into this instance when the element is clicked
                key={index}
              >
                {theme[themeElement][sectionTitle].vbData?.before?.map((beforeSection, index) => (
                  <EditableSection 
                    key={index} 
                    sectionTitle={beforeSection.style?.vbData?.title} 
                    pathToValue={[themeElement, sectionTitle, 'vbData', 'before', index, 'style']} 
                    isBefore
                  />
                ))}

                <EditableSection sectionTitle={sectionTitle} pathToValue={[themeElement, sectionTitle]} />

                {theme[themeElement][sectionTitle].vbData?.after?.map((afterSection, index) => (
                  <EditableSection 
                    key={index} 
                    sectionTitle={afterSection.style?.vbData?.title} 
                    pathToValue={[themeElement, sectionTitle, 'vbData', 'after', index, 'style']} 
                    isAfter
                  />
                ))}
              </div>
            )
          })}

          {/* Go to page button */}
          {theme[themeElement].to && 
            <Link to={theme[themeElement].to}>
              <div className={styles.showButton}>
                {location.pathname === theme[themeElement].to ? 
                  <CheckIcon style={{ color: highlightColor }} /> 
                  : 'Go'
                }
              </div>
            </Link>
          }

        </div>
      ))}
    </div>
  )
  //#endregion View
}


export default VisualBuilder
