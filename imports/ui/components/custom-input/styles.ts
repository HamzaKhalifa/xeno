import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  inputContainer: {
    boxSizing: 'border-box'
  },
  input: {
    '&:focus': {
      outline: 'none'
    }
  },
  label: {
    whiteSpace: 'nowrap'
  },
})

export default useStyles