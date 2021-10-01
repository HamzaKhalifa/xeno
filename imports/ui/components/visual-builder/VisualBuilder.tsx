import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CheckIcon from '@material-ui/icons/Check'
import { useLocation } from 'react-router-dom'

import EditableSection from './EditableSection'

import AccordionIcon from '/imports/ui/icons/AccordionIcon'

import { setThemeValue } from '/imports/ui/store/theme/actions'

import useStyles from './styles'

const VisualBuilder = () => {

  //#region State
  const theme = useSelector<any>(state => state.theme)
  const themeElements: any = useSelector<any>(state => state.visualBuilder.themeElements)
  const highlightColor = useSelector<any>(state => state.theme.general.generalStyles.highlightColor)
  //#endregion State
  
  //#region State
  const styles = useStyles()
  const dispatch = useDispatch()
  const location = useLocation()
  //#endregion State

  //#region Event listeners
  const toggleThemeElementExtended = (themeElement) => {
    dispatch(setThemeValue([themeElement, 'extended'], !Boolean(theme[themeElement].extended)))
  }
  //#endregion Event listeners

  //#region View
  return (
    <div className={styles.visualBuilderContainer}>
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
              <div className={styles.themeElementSections} key={index}>
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
