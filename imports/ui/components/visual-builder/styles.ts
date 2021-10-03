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
    zIndex: 999,
  },
  themeElements: {},
  themeElement: {
    position: 'relative',
    marginBottom: -10,
  },
  showButton: {
    position: 'absolute',
    right: 0,
    top: 2
  },
  themeElementTitle: {
    borderBottom: '1px solid black',
    fontSize: 24,
  },
  themeElementTitleContainer: {
    display: 'flex',
    marginBottom: 10,
    cursor: 'pointer'
  },
  themeElementTitleIcon: {
    marginRight: 10,
    cursor: 'pointer',
  },
  themeElementSectionTitleIcon: {
    marginRight: 5,
    cursor: 'pointer',
    marginBottom: 5
  },
  propertiesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    borderTop: '.5px solid black',
    borderBottom: '.5px solid black',
    paddingTop: 10,
    paddingBottom: 10,
  },
  sectionTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  themeElementSection: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'initial',
    marginLeft: 20
  },
  themeElementSectionTitle: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'initial',
  },
  themeElementMainSectionTitle: {
    extend: 'themeElementSectionTitle',
    fontSize: 20
  },
  sectionButtonsContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  deleteButton: {
    cursor: 'pointer',
    marginRight: 10,
    marginBottom: 5
  },
  sectionTitleInput: {
    marginBottom: 10
  },
  sectionContentInput: {
    marginBottom: 10
  },
  plusButton: {
    marginTop: 3
  },
  plusButtonText: {
    bottom: 2,
    marginLeft: 5,
    position: 'relative'
  },
  themeElementSections: {
    marginLeft: 20
  },
})

export default useStyles