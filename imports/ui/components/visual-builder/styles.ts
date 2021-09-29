import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  visualBuilderContainer: {
    width: 500,
    top: '10%',
    backgroundColor: 'white',
    padding: 30,
    overflow: 'auto',
    height: '100vh',
    boxSizing: 'border-box',
    zIndex: 999
  },
  pages: {},
  page: {
    position: 'relative',
    marginBottom: -10,
  },
  showButton: {
    position: 'absolute',
    right: 0,
    top: 2
  },
  pageTitle: {
    borderBottom: '1px solid black',
    fontSize: 15,
    height: 16
  },
  pageTitleContainer: {
    display: 'flex',
    marginBottom: 10,
    cursor: 'pointer'
  },
  pageTitleIcon: {
    marginRight: 10,
    cursor: 'pointer',
  },
  pageSectionTitleIcon: {
    marginRight: 5,
    cursor: 'pointer',
    marginBottom: 5
  },
  propertiesContainer: {

  },
  sectionTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  pageSection: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'initial',
    marginLeft: 20
  },
  pageSectionTitle: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'initial',
  },
})

export default useStyles