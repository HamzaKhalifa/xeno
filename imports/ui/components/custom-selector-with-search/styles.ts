import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  customSelectorWithSearchContainer: {
		width: '100%',
    minHeight: 90,
    marginBottom: 20,
	},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    
  },
  option: {
    padding: 10,
    borderRadius: 5
  },
  selectedOption: {
    extend: 'option',
    color: props => props.confirmButtonTextColor,
    backgroundColor: props => props.confirmButtonBackgroundColor,
  }
})

export default useStyles