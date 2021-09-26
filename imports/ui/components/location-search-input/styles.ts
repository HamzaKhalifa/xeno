import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  autoCompleteRoot: {
    position: 'relative',
    width: '100%',
    marginTop: props => props.inputStyles.marginTop
  },
  autoCompleteDropdownContainer: {
    position: 'absolute',
    zIndex: 4,
    width: 200,
    backgroundColor: 'white',
    cursor: 'pointer',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  suggestion: {
    flex: 1,
    transition: 'all 0.1s ease-in-out',
    paddingBottom: 5,
    padding: 10,

    '&:hover': {
      backgroundColor: props => props.locationSearchInputStyles.hoverBackgroundColor,
      color: 'white'
    }
  },
})

export default useStyles
