import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useSelector } from 'react-redux'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

interface ICustomSelector {
	label?: string
	options: any[]
	getOptionName: (obj: object) => string,
	onChange?: (obj: any) => void,
	value?: any,
	error?: string
	multiple?: boolean
	disabled?: boolean
}

const CustomSelector = (props: ICustomSelector) => {
	const { multiple = false } = props

	//#region State
	const { selector: selectorStyles } = useSelector(state => state.theme)
	//#endregion State

	//#region Hooks
	const styles = useStyles()
	//#endregion Hooks

	//#region Event listeners
	const onChange = React.useCallback((_, value) => {
		if (multiple) {
			// The autocomplete is allowing the selection of redundant values. So we need to manually remove the redundancies. 
			const noRedundancyArray = []
			value.forEach(value => {
				if (!noRedundancyArray.find(potential => potential._id === value._id)) noRedundancyArray.push(value)
			})
			props.onChange?.(noRedundancyArray)
		} else 
			props.onChange?.(value)
	}, [])
	//#endregion Event listeners

	return (
		<VBDiv className={styles.customSelectorContainer}>
			<VBDiv className={styles.header}>
				<VBSpan className={styles.label}>{props.label}: </VBSpan>
			</VBDiv>
			
			<Autocomplete
				onChange={onChange}
				value={props.value}
				options={props.options}
				getOptionLabel={props.getOptionName}
				style={{ width: '100%', marginTop: 10 }}
				renderInput={(params) => <TextField {...params} variant='outlined' style={{ ...selectorStyles.input }} />}
				renderOption={params => {
					const className = (multiple && props.value?.find(potential => potential._id === params._id)) ? selectorStyles.selectedOption : selectorStyles.option
					return (<VBSpan className={className}>{props.getOptionName(params)}</VBSpan>)
				}}
				multiple={multiple}
				disabled={props.disabled}
			/>
		</VBDiv>
	)
}

export default React.memo(CustomSelector)
