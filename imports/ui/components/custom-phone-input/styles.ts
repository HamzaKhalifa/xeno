import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  customPhoneInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    marginBottom: 20,
    marginTop: 20
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