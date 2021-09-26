import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useSelector } from 'react-redux'

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
		<div className={styles.customSelectorContainer}>
			<div className={styles.header}>
				<span className={styles.label}>{props.label}: </span>
			</div>
			
			<Autocomplete
				onChange={onChange}
				value={props.value}
				options={props.options}
				getOptionLabel={props.getOptionName}
				style={{ width: '100%', marginTop: 10 }}
				renderInput={(params) => <TextField {...params} variant='outlined' style={{ ...selectorStyles.input }} />}
				renderOption={params => {
					const className = (multiple && props.value?.find(potential => potential._id === params._id)) ? selectorStyles.selectedOption : selectorStyles.option
					return (<span className={className}>{props.getOptionName(params)}</span>)
				}}
				multiple={multiple}
				disabled={props.disabled}
			/>
		</div>
	)
}

export default React.memo(CustomSelector)
