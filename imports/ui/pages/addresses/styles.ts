import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  addressesContainer: {
    
  },
  tableColumns: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },
  tableRow: {
    marginTop: 10,
    backgroundColor: '#F9F8F9',
    borderRadius: 12
  },
  column: {
    minWidth: 130,
    maxWidth: 130,
    padding: 10,
    overflow: 'auto',
    justifyContent: 'flex-start',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    display: 'block',
  },
  deleteModalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    top: '10%',
    position: 'fixed',
    width: '60%',
    maxHeight: '80%',
    left: '20%',
    padding: 20,
    borderRadius: 5,
    minHeight: 200,
  },
  elementsToDelete: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
    flex: 1,
    width: '100%'
  },
  deleteTitle: {
    textAlign: 'center',
    marginBottom: 20
  },
  elementToDelete: {
    marginBottom: 10
  },
  deleteActionButtons: {
    display: 'flex',
    width: 400,
    justifyContent: 'space-between',
    position: 'relative'
  },
  space: {
    marginRight: 10,
    marginLeft: 10
  },
  styles: {
    
  }
})

export default useStyles