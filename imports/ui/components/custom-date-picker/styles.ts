import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  customDatePickerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    position: 'relative',
    flex: 1,
  },
  label: {
    marginBottom: 10
  },
  datePicker: {
    width: '99.5%',
    height: 53,
    borderTopWidth: .5,
    borderLeftWidth: .5,
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
    boxSizing: 'border-box',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 18,
    paddingRight: 18,
    boxShadow: '2px 4px 8px 4px rgba(1, 12, 22, 0.01)',
    borderRadius: 4,
    backgroundColor: '#FDFFFF',
    borderWidth: .5,
    borderStyle: 'solid'
  }
})

export default useStyles