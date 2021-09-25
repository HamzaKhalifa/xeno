import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  customCheckboxesContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    height: 50,
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 20
  },
  label: {
    marginBottom: 5,
    whiteSpace: 'nowrap'
  },
  error: {
    position: 'absolute',
    right: 0,
    bottom: -5,
    color: 'red'
  },
  checkBoxes: {
    display: 'flex',
    flexWrap: 'wrap',
  }
})

export default useStyles