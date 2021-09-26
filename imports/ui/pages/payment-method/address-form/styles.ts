import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  addressForm: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  gap: {
    marginLeft: 10
  },
  title: {
  },
  underline: {
    width: '100%',
  },
  buttonsContainer: {
    display: 'flex', 
    marginTop: 40,
    justifyContent: 'space-around',
    width: '100%'
  },
  separator: {
  },
  areaContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export default useStyles