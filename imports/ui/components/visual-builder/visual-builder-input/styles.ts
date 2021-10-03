import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  visualBuilderInputContainer: {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
    flex: 1,
  },
  input: {
    position: 'relative',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 18,
    paddingRight: 18,
    boxShadow: '2px 4px 8px 4px rgba(1, 12, 22, 0.01)',
    borderRadius: 4,
    backgroundColor: '#FDFFFF',
    borderWidth: .5,
    borderStyle: 'solid',
    '&:focus': {
      outline: 'none'
    }
  },
  label: {
    whiteSpace: 'nowrap',
    position: 'relative',
    fontSize: 16,
    marginBottom: 8,
    color: '#736D6F',
  },
  requiredFieldIcon: {
    position: 'relative',
    marginBottom: 5,
    marginLeft: 5
  },
  error: {  
    position: 'relative',
    color: '#F34C4F',
    fontWeight: 500,
    fontSize: 16,
    marginTop: 10,
    whiteSpace: 'nowrap'
  }
})


export default useStyles