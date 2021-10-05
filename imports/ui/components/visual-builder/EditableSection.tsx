import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import VisualBuilderInput from '../visual-builder/visual-builder-input'
import VisualBuilderButton from '../visual-builder/visual-builder-button'
import VisualBuilderSelector from '../visual-builder/visual-builder-selector'
import VisualBuilderImageUpload from '../visual-builder/visual-builder-image-upload'

import AccordionIcon from '/imports/ui/icons/AccordionIcon'
import PlusIcon from '/imports/ui/icons/PlusIcon'
import DeleteIcon from '/imports/ui/icons/DeleteIcon'

import { setThemeValue } from '/imports/ui/store/theme/actions'
import makeId from '/imports/ui/utils/makeId'

import useStyles from './styles'

const EditableSection = ({ sectionTitle, pathToValue, isBefore = false, isAfter = false }) => {
  
  //#region State
  const theme = useSelector<any>(state => state.theme)
  const highlightColor = useSelector<any>(state => state.theme.general.generalStyles.highlightColor)
  //#endregion State

  //#region Hooks
  const dispatch = useDispatch()
  const styles = useStyles()
  //#endregion Hooks

  //#region Computing dependencies
  let sectionValue = theme // Represents the style object itself.
  let sectionData = theme // Represents the "before" or "after" object itself if it's a "before" or "after" section
  pathToValue.forEach((step, index) => {
    if (index < pathToValue.length - 1) sectionData = sectionData?.[step]
    sectionValue = sectionValue?.[step]
  })
  //#endregion Computing dependencies
  
  //#region Event listeners
  const toggleSectionExtended = () => {
    dispatch(setThemeValue([...pathToValue, 'vbData', 'extended'], !Boolean(sectionValue?.vbData?.extended)))
  }

  const addBeforeOrAfter = (beforeOrAfter = 'before') => {
    const newList = sectionValue?.vbData?.[beforeOrAfter] ?? []
    newList.push({
      tag: 'div',
      children: [],
      text: 'New Section content',
      contentType: 'Text',
      style: {
        position: 'relative',
        marginTop: 10
        vbData: { 
          id: makeId(10),
          title: 'New Section',
        }
      }
    })

    dispatch(setThemeValue([...pathToValue, 'vbData', beforeOrAfter], newList))
  }

  const addContentComponent = (e) => {
    const newList = sectionData?.children ?? []
    newList.push({
      tag: 'div',
      children: [],
      text: 'New Section content',
      contentType: 'Text',
      style: {
        position: 'relative',
        marginTop: 10
        vbData: { 
          id: makeId(10),
          title: 'New Section',
        }
      }
    })

    const newPathToValue = [...pathToValue]
    newPathToValue.pop()

    dispatch(setThemeValue([...pathToValue, 'children'], newList))
  }

  const deleteSection = () => {
    const beforeOrAfter = isAfter ? 'after' : 'before'

    const index = pathToValue[pathToValue.length - 1]
    const newList = [...(theme[pathToValue[0]][pathToValue[1]].vbData[beforeOrAfter] ?? [])]

    newList.splice(index, 1)

    dispatch(setThemeValue([pathToValue[0], pathToValue[1], 'vbData', beforeOrAfter], newList)) 
  }

  const onTitleChange = (e) => {
    dispatch(setThemeValue([...pathToValue, 'vbData', 'title'], e.target.value))
  }

  const onContentTypeChange = (contentType => {
    const newPathToValue = [...pathToValue]
    newPathToValue.pop()
    dispatch(setThemeValue([...newPathToValue, 'contentType'], contentType.id))
  })

  const onContentChange = (e) => {
    const newPathToValue = [...pathToValue]
    newPathToValue.pop()
    dispatch(setThemeValue([...newPathToValue, 'text'], e.target.value))
  }
  //#endregion Event listeners

  return (
    <div className={styles.section}>

      {/* Add before Button  */}
      {(!isBefore && !isAfter) && 
        <VisualBuilderButton 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            width: 140,
            height: 30,
            justifyContent: 'center',
            padding: 0,
            marginBottom: 6
          }} 
          onClick={addBeforeOrAfter}
        >
          <PlusIcon className={styles.plusButton} fill='white' width={15} height={15} />
          <span className={styles.plusButtonText}>Add before</span>
        </VisualBuilderButton>
      }

      {/* Accordion, title and toggle */}
      <div className={styles.sectionButtonsContainer}>
        {(isBefore || isAfter) && <DeleteIcon width={15} height={15} onClick={deleteSection} className={styles.deleteButton} />}

        <div
          className={styles.sectionTitleContainer}
          onClick={toggleSectionExtended} 
        >
          <AccordionIcon 
            reversed={Boolean(sectionValue?.vbData?.extended)} 
            width={15} height={15} 
            fill={highlightColor} 
            className={styles.themeElementSectionTitleIcon} 
          />

          <h3 className={(isAfter || isBefore) ? styles.themeElementSectionTitle : styles.themeElementMainSectionTitle}>
            {sectionValue?.vbData?.title ?? sectionTitle}
          </h3>

        </div>
      </div>

      {/* CSS properties */}
      {Boolean(sectionValue?.vbData?.extended) && 
        <>
          {(isBefore || isAfter) && <VisualBuilderInput value={sectionValue?.vbData?.title} placeholder='Title' label='Section Title' type='text' className={styles.sectionTitleInput} onChange={onTitleChange} />}

          {(isBefore || isAfter) && 
            <VisualBuilderSelector 
              getOptionName={option => option.label} 
              label='Content Type'
              options={[{ id: 'Text', label: 'Text' }, { id: 'Components', label: 'Components' }]} 
              value={{ Text: { id: 'Text', label: 'Text' }, Components: { id: 'Components', label: 'Components' }}[sectionData.contentType]}
              onChange={onContentTypeChange}
            />
          }

          {/* Content Text */}
          {(isBefore || isAfter) && sectionData.contentType === 'Text' && 
            <VisualBuilderInput 
              value={sectionData.text} 
              placeholder='Content' 
              label='Section Content' 
              type='text' 
              className={styles.sectionContentInput} 
              onChange={onContentChange} 
            />
          }

          {/* Content components */}
          {(isBefore || isAfter) && sectionData.contentType === 'Components' && 
            <div className={styles.contentComponents}>
              {sectionData.children.map((child, index) => {
                let newPathToValue = [...pathToValue]
                newPathToValue.pop()
                newPathToValue = [...newPathToValue, 'children', index, 'style']
                return (
                  <EditableSection 
                    key={index} 
                    sectionTitle={child.style?.vbData?.title} 
                    pathToValue={newPathToValue} 
                    isBefore={isBefore}
                    isAfter={isAfter}
                  />
                )
              })}
            </div>
          }

          {/* Add more content components */}
          {(isBefore || isAfter) && sectionData.contentType === 'Components' && 
            <VisualBuilderButton style={{ marginTop: 10, padding: 5 }} onClick={addContentComponent}>Add Child</VisualBuilderButton>
          }

          {(isBefore || isAfter) && 
            <VisualBuilderSelector
              label='Element Type'
              options={['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'link', 'span', 'p', 'img']}
              getOptionName={tag => tag}
              style={{ marginTop: 5, width: '100%' }}
              labelStyle={{ fontSize: 11 }}
              value={sectionData.tag ?? 'div'}
              onChange={tag => {
                const newPathToValue = [...pathToValue]
                newPathToValue.pop()
                dispatch(setThemeValue([...newPathToValue, 'tag'], tag))
              }}
            />
          }
          
          {/* If it's a link, then we set the "to" property of the link */}
          {(isBefore || isAfter) && sectionData.tag === 'link' && 
            <VisualBuilderInput 
              labelStyle={{ fontSize: 11 }}
              label='To'
              type='text'
              value={sectionData.to ?? '#'} 
              onChange={e => {
                const newPathToValue = [...pathToValue]
                newPathToValue.pop()
                dispatch(setThemeValue([...newPathToValue, 'to'], e.target.value))
              }}
            />
          }

          {/* If it's an image, then we show the image input field */}
          {(isBefore || isAfter) && sectionData.tag === 'img' && 
            <VisualBuilderImageUpload />
          }

          <div className={styles.propertiesContainer}>

            <VisualBuilderSelector
              label='Position'
              options={['relative', 'absolute', 'fixed']}
              getOptionName={position => position}
              style={{ marginTop: 5, width: '100%' }}
              labelStyle={{ fontSize: 11 }}
              value={sectionValue.position ?? 'relative'}
              onChange={position => dispatch(setThemeValue([...pathToValue, 'position'], position))}
            />
            {[
              'display', 'flexDirection', 'height', 'width', 
              'alignItems', 'justifyContent', 'alignSelf', 'alignContent',
              'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
              'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
              'maxWidth', 'maxHeight', 'minHeight', 'minWidth',
              'top', 'bottom', 'left', 'right', 
              'fontSize', 'fontWeight', 'fontStyle', 'fontFamily',
              'letterSpacing', 'lineHeight', 'whiteSpace', 'visibility',
              'borderWidth', 'borderStyle', 'borderColor', 'borderRadius',
              'borderTop', 'borderTopWidth', 'borderTopStyle', 'borderTopColor',
              'borderBottom', 'borderBottomWidth', 'borderBottomStyle', 'borderBottomColor',
              'borderLeft', 'borderLeftWidth', 'borderLeftStyle', 'borderLeftColor',
              'borderRight', 'borderRightWidth', 'borderRightStyle', 'borderRightColor',
              'backgroundColor', 'color', 'textAlign', 'verticalAlign',
              'cursor', 'opacity', 'overlow', 'zIndex'
            ].map(((property, index) => (
              <VisualBuilderInput 
                key={index}
                style={{ marginTop: 5, width: '25%' }}
                labelStyle={{ fontSize: 11 }}
                label={property}
                type='text'
                value={sectionValue[property] ?? ''} 
                onChange={(e) => {
                  dispatch(setThemeValue([...pathToValue, property], e.target.value ?? ''))}
                } 
              />
            )))}
          </div>
        </>
      }

      {/* Add after button */}
      {(!isBefore && !isAfter) && 
        <VisualBuilderButton 
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 140,
            height: 30,
            justifyContent: 'center',
            padding: 0,
          }} 
          onClick={() => addBeforeOrAfter('after')}
        >
          <PlusIcon className={styles.plusButton} fill='white' width={15} height={15} />
          <span className={styles.plusButtonText}>Add after</span>
        </VisualBuilderButton>
      }

    </div>
  )
}

export default EditableSection