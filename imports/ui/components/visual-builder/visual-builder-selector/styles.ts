import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  visualBuilderSelectorContainer: {
		width: '100%',
    minHeight: 90,
    marginBottom: 10,
    marginTop: 10
	},
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    
  },
  option: {
    position: 'relative',
    padding: 10,
    borderRadius: 5
  },
  selectedOption: {
  }
})

export default useStyles