import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  pageIndicator: {
    backgroundColor: '#006bf3',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 99,
    left: '0px',
    top: '0px',
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',

    display: props => props.visualBuilderVisible ? 'flex' : 'none',
    opacity: props => props.extended ? '.1' : 0, 
    '&:hover': {
      backgroundColor: '#006bf3',
      opacity: '.1'
    }
  },
  pageIndicatorTitle: {
    zIndex: '100',
    color: 'rgb(29, 29, 223)',
    position: 'absolute',
    top: -20,
    fontSize: 17,
  }
})

export default useStyles