import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Pagination from '@material-ui/lab/Pagination'
import { useSelector } from 'react-redux'

import remote from '/imports/api/remote'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

interface ICustomSelectorWithSearch {
	label?: string
	elementsName: string
	searchMethod?: string,
	getOptionName: (obj: object) => string,
	onChange?: (obj: any) => void,
	value?: any,
	error?: string
	multiple?: boolean
	condition?: any
	disabled?: boolean
	style?: any
}

const CustomSelectorWithSearch = (props: ICustomSelectorWithSearch) => {
	const { multiple = false, condition = {} } = props

	//#region State
	const [searchResult, setSearchResult] = React.useState([])
	const [searchText, setSearchText] = React.useState('')
  const [typingTimeout, setTypingTimeout] = React.useState<any>(null)
	const [limit, setLimit] = React.useState(10)
	const [page, setPage] = React.useState(0)
	const [options, setOptions] = React.useState([])
	const [total, setTotal] = React.useState(0)
	const [loading, setLoading] = React.useState(false)

	const confirmButtonTextColor = useSelector(state => state.theme.confirmButtonTextColor)
	const confirmButtonBackgroundColor = useSelector(state => state.theme.confirmButtonBackgroundColor)
  const { input: inputStyles } = useSelector(state => state.theme)
	//#endregion State

	//#region Hooks
	const styles = useStyles({ confirmButtonTextColor, confirmButtonBackgroundColor })
	React.useEffect(() => {
		setLoading(true)
		remote.call(props.elementsName + '.get', limit, page, condition, (error, response) => {
			if (!error) {
				setOptions(response.options)
				setTotal(response.total)
			}
			setLoading(false)
		})
	}, [limit, page])
	//#endregion Hooks

	//#region Event listeners
	const onPageChange = React.useCallback((_, page) => setPage(page), [])
	const onSearchTextChange = (e) => {
		setSearchText(e.target.value)

		if (typingTimeout) clearTimeout(typingTimeout)

		setTypingTimeout(
			setTimeout(() => {
				setLoading(true)
				remote.call(props.searchMethod, e.target.value, (error, response) => {
					setLoading(false)
					setSearchResult(response ?? [])
				})
			}, 700)
		)
	}
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
	}, [props.value])
	//#endregion Event listeners
	
	//#region View
	const value = React.useMemo(() => props.value ?? { _id: -1 }, [props.value])
	return (
		<VBDiv className={styles.customSelectorWithSearchContainer} style={{ ...(props.style ?? {}) }}>
			<VBDiv className={styles.header}>
				<VBSpan className={styles.label}>{props.label}: </VBSpan>
				<Pagination width='100%' page={page} count={Math.floor(total / limit)} onChange={onPageChange} variant='outlined' shape='rounded' />
			</VBDiv>

			<Autocomplete
				loading={loading}
				onChange={onChange}
				value={value}
				options={searchText ? [{ _id: - 1 }, ...searchResult] : [{ _id: - 1 }, ...options]}
				getOptionLabel={value._id !== -1 ? props.getOptionName : () => '-----'}
				style={{ width: '100%', marginTop: 10, marginBottom: 10 }}
				renderInput={
					(params) => 
						<TextField onChange={onSearchTextChange} {...params} variant='outlined' />
				}
				renderOption={params => {
					const className = (multiple && props.value?.find(potential => potential._id === params._id)) ? styles.selectedOption : styles.option
					return (<VBSpan className={className}>{params._id !== -1 ? props.getOptionName(params) : '-----'}</VBSpan>)
				}}
				multiple={multiple}
				disabled={props.disabled}
			/>
      {props.error && <VBSpan style={{ ...inputStyles.error }}>x {props.error}</VBSpan>}
		</VBDiv>
		//#endregion View
	)
}

export default React.memo(CustomSelectorWithSearch)
