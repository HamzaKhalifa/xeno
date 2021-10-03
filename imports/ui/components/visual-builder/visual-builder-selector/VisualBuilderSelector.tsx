import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import useStyles from './styles'

interface IVisualBuilderSelector {
	label?: string
	options: any[]
	getOptionName: (obj: object) => string,
	onChange?: (obj: any) => void,
	value?: any,
	error?: string
	multiple?: boolean
	disabled?: boolean
	style?: any
	labelStyle?: any
}

const CustomSelector = (props: IVisualBuilderSelector) => {
	const { multiple = false } = props

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
		<div className={styles.visualBuilderSelectorContainer} style={{ ...(props.style ?? {}) }}>
			<div className={styles.header}>
				<span className={styles.label} style={{ ...(props.labelStyle ?? {}) }}>{props.label}: </span>
			</div>
			
			<Autocomplete
				onChange={onChange}
				value={props.value}
				options={props.options}
				getOptionLabel={props.getOptionName}
				style={{ width: '100%', marginTop: 10 }}
				renderInput={(params) => <TextField {...params} variant='outlined' 
					style={{ 
						position: 'relative',
						boxShadow: '2px 4px 8px 4px rgba(1, 12, 22, 0.01)',
						borderRadius: 4,
						backgroundColor: '#FDFFFF',
						borderStyle: 'solid'
					}} />}
				renderOption={params => {
					const optionStyle = (multiple && props.value?.find(potential => potential._id === params._id)) ? 
					{
						position: 'relative',
						color: 'white',
						backgroundColor: 'green',
						padding: 10,
						borderRadius: 5
					} : 
					{
						position: 'relative',
						padding: 10,
						borderRadius: 5
					}
					return (<span style={optionStyle}>{props.getOptionName(params)}</span>)
				}}
				multiple={multiple}
				disabled={props.disabled}
			/>
		</div>
	)
}

export default React.memo(CustomSelector)
