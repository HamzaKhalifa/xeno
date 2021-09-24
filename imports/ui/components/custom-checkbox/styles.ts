import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  customCheckboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    height: 50,
    justifyContent: 'center'
  },
  label: {
    marginBottom: 5
  },
  error: {
    position: 'absolute',
    right: 0,
    bottom: -5,
    color: 'red'
  }
})

export default useStyles