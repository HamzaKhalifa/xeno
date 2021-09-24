import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  customCheckboxesContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    height: 50,
    justifyContent: 'center',
    marginBottom: 40
  },
  label: {
    marginBottom: 5
  },
  error: {
    position: 'absolute',
    right: 0,
    bottom: -5,
    color: 'red'
  },
  checkBoxes: {
    display: 'flex',
  }
})

export default useStyles