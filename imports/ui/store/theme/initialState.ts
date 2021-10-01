export interface ISection {
  // ...CSS styles here for each section
  tag?: string
  childre?: any
  vbData?: {
    visible: boolean
    title: string
  }
}

const initialState = {
  home: {
    to: '/home',
    homeContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      vbData: {
        title: 'Home Container',
        // before: [
        //   {
        //     tag: 'div',
        //     children: 'TEEEEEESSSSTTTT',
        //     style: {
        //       position: 'relative',
        //       backgroundColor: 'red',
        //       marginTop: 10
        //       vbData: { 
        //         title: 'Test before' 
        //       }
        //     }
        //   }
        // ],
        // after: [
        //   {
        //     sectionName: 'Test after',
        //     tag: 'span',
        //     children: 'Im a span',
        //     style: {
        //       position: 'relative',
        //       fontSize: 40,
        //       backgroundColor: 'green',
        //       vbData: {
        //         title: 'Test after'
        //       }
        //     }
        //   }
        // ]
      }
    },
    title: {
      position: 'relative',
      color: '#000000',
      fontSize: 32.44,
      textAlign: 'center',
      width: '100%',
      marginBottom: 46,
      marginTop: 45
    },
    sections: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    section: {
      position: 'relative',
      display: 'flex',
      backgroundColor: 'white',
      padding: 32.44,
      width: '49%',
      flexDirection: 'column',
      boxSizing: 'border-box',
      marginBottom: 26,
    },
    sectionTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 22.78,
      fontWeight: 400,
    },
    sectionDescription: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      fontWeight: 100,
      marginTop: 3
    },
    subLinks: {
      position: 'relative',
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
    },
    subLink: {
      position: 'relative',
      color: '#5F5659',
      fontWeight: 400,
      fontSize: 16,
      marginBottom: 10
    },
    progressCheckContainer: {
      position: 'absolute',
      top: 30,
      right: 20,
      display: 'flex',
      alignItems: 'center'
    },
    progressPercentage: {
      position: 'relative',
      color: '#3CD2C8',
      fontSize: 18,
      marginRight: 5
    },
    progressCheck: {
    }
  },
  contacts: {
    to: '/contacts',
    contactsContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    subTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 20.25,
      marginBottom: 10
    },
    line: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      width: 125,
      height: 2
    },
    tableContainer: {
      position: 'relative',
      padding: 32,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 25.63,
      overflow: 'auto',
    },
    tableHeader: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    },
    headerLeft: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    headerTitle: {
      position: 'relative',
      fontSize: 23,
      color: '#2E2226'
    },
    headerDescription: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      marginTop: 7,
      fontWeight: 100
    },
    headerRight: {
      position: 'relative',
      display: 'flex',
    },
    inviteButton1: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 40,
      borderWidth: 1,
      borderColor: '#6EB0DD',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: 'white',
      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    inviteButton2: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 184,
      borderWidth: 1,
      borderColor: '#6EB0DD',
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      backgroundColor: 'white',
      color: '#6EB0DD',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    tableColumns: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'auto'
    },
    tableRow: {
      position: 'relative',
      marginTop: 10,
      backgroundColor: '#F9F8F9',
      borderRadius: 12,
      boxSizing: 'border-box',
      height: 45.5,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'auto'
    },
    column: {
      position: 'relative',
      paddingTop: 14.2,
      paddingBottom: 14.2,
      paddingLeft: 22.7,
      paddingRight: 22.7,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
    },
    columnName: {
      position: 'relative',
      minWidth: 200,
      maxWidth: 200,
    },
    columnPhone: {
      position: 'relative',
      minWidth: 170,
      maxWidth: 170,
    },
    columnEmail: {
      position: 'relative',
      minWidth: 250,
      maxWidth: 250,
    },
    columnPost: {
      position: 'relative',
      minWidth: 100,
      maxWidth: 100,
    },
    columnProjectRoles: {
      position: 'relative',
      minWidth: 200,
      maxWidth: 200,
    },
    columnStatus: {
      position: 'relative',
      minWidth: 150,
      maxWidth: 150,
    },
    columnAction: {
      position: 'relative',
      minWidth: 200,
      maxWidth: 200,
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'flex-end'
    },
    status: {
      position: 'relative',
      fontSize: 14.12,
      color: 'rgba(119, 103, 108, 0.5)',
      display: 'flex',
      alignItems: 'center',
    },
    statusIcon: {
      position: 'relative',
      marginLeft: 8.88,
    },
    inviteButton: {
      position: 'relative',
      width: 150,
      color: 'white',
      backgroundColor: '#6EB0DD',
      boxSizing: 'border-box',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inviteButtonLoadingStyles: {
      position: 'relative',
      width: 150,
    },
    deleteIcon: {
      position: 'relative',
      cursor: 'pointer',
      paddingRight: 15,
      paddingLeft: 15,
    },
    you: {
      position: 'relative',
      padding: 10
    }
  },
  invoices: {
    to: '/invoices',
    invoicesContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    subTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 20.25,
      marginBottom: 10
    },
    line: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      width: 125,
      height: 2
    },
    tableContainer: {
      position: 'relative',
      padding: 32,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 25.63,
      overflow: 'auto',
    },
    tableHeader: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    },
    headerLeft: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    headerTitle: {
      position: 'relative',
      fontSize: 23,
      color: '#2E2226'
    },
    headerDescription: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      marginTop: 7,
      fontWeight: 100
    },
    headerRight: {
      position: 'relative',
      display: 'flex',
    },
    inviteButton1: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 40,
      borderWidth: 1,
      borderColor: '#6EB0DD',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: 'white',
      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    inviteButton2: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 184,
      borderWidth: 1,
      borderColor: '#6EB0DD',
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      backgroundColor: 'white',
      color: '#6EB0DD',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    tableColumns: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'auto'
    },
    tableRow: {
      position: 'relative',
      marginTop: 10,
      backgroundColor: '#F9F8F9',
      borderRadius: 12,
      boxSizing: 'border-box',
      height: 45.5,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'auto'
    },
    column: {
      position: 'relative',
      paddingTop: 14.2,
      paddingBottom: 14.2,
      paddingLeft: 22.7,
      paddingRight: 22.7,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
    },
    columnName: {
      position: 'relative',
      minWidth: 200,
      maxWidth: 200,
    },
    columnPhone: {
      position: 'relative',
      minWidth: 170,
      maxWidth: 170,
    },
    columnEmail: {
      position: 'relative',
      minWidth: 250,
      maxWidth: 250,
    },
    columnPost: {
      position: 'relative',
      minWidth: 100,
      maxWidth: 100,
    },
    columnProjectRoles: {
      position: 'relative',
      minWidth: 200,
      maxWidth: 200,
    },
    columnStatus: {
      position: 'relative',
      minWidth: 150,
      maxWidth: 150,
    },
    columnAction: {
      position: 'relative',
      minWidth: 200,
      maxWidth: 200,
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'flex-end'
    },
    status: {
      position: 'relative',
      fontSize: 14.12,
      color: 'rgba(119, 103, 108, 0.5)',
      display: 'flex',
      alignItems: 'center',
    },
    statusIcon: {
      position: 'relative',
      marginLeft: 8.88,
    },
    inviteButton: {
      position: 'relative',
      width: 150,
      color: 'white',
      backgroundColor: '#6EB0DD',
      boxSizing: 'border-box',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inviteButtonLoadingStyles: {
      position: 'relative',
      width: 150,
    },
    deleteIcon: {
      position: 'relative',
      cursor: 'pointer',
      paddingRight: 15,
      paddingLeft: 15,
    },
    you: {
      position: 'relative',
      padding: 10
    }
  },
  paymentMethods: {
    to: '/paymentMethods',
    paymentMethodsContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    subTitle: {
      position: 'relative',
      color: '#2E2226',
      marginTop: 13,
      fontSize: 20.25,
      marginBottom: 10
    },
    line: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      width: 205,
      height: 2
    },
    tableContainer: {
      position: 'relative',
      padding: 32,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 25.63,
      overflow: 'auto',
    },
    tableHeader: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    },
    headerLeft: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    headerTitle: {
      position: 'relative',
      fontSize: 23,
      color: '#2E2226'
    },
    headerDescription: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      marginTop: 7,
      fontWeight: 100
    },
    headerRight: {
      position: 'relative',
      display: 'flex',
    },
    inviteButton1: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 40,
      borderWidth: 1,
      borderColor: '#6EB0DD',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: 'white',
      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    inviteButton2: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 250,
      borderWidth: 1,
      borderColor: '#6EB0DD',
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      backgroundColor: 'white',
      color: '#6EB0DD',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    tableColumns: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'auto'
    },
    tableRow: {
      position: 'relative',
      marginTop: 10,
      backgroundColor: '#F9F8F9',
      borderRadius: 12,
      boxSizing: 'border-box',
      height: 45.5,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'auto'
    },
    column: {
      position: 'relative',
      paddingTop: 14.2,
      paddingBottom: 14.2,
      paddingLeft: 22.7,
      paddingRight: 22.7,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
    },
    columnName: {
      position: 'relative',
      minWidth: 250,
      maxWidth: 250,
    },
    columnPaymentMode: {
      position: 'relative',
      minWidth: 250,
      maxWidth: 250,
    },
    columnLast4: {
      position: 'relative',
      minWidth: 270,
      maxWidth: 270,
    },
    columnAction: {
      position: 'relative',
      minWidth: 250,
      maxWidth: 250,
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'flex-end'
    },
    editButton: {

    },
    deleteIcon: {
      position: 'relative',
      cursor: 'pointer',
      paddingRight: 15,
      paddingLeft: 15,
    },
  },
  general: {
    generalStyles: {
      position: 'relative',
      highlightColor: '#38c172',
    }
  },
  button: {
    buttonContainer: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      color: 'white',
      border: 'none',
      boxSizing: 'border-box',
      borderStyle: 'solid',
      borderBlock: 'solid',
      cursor: 'pointer',
      fontSize: 16,
      width: 200,
      paddingTop: 18,
      paddingRight: 24,
      paddingBottom: 18,
      paddingLeft: 24,
      borderRadius: 4
    }
  },
  locationSearchInput: {
    locationSearchInputContainer: {
      position: 'relative',
      hoverBackgroundColor: '#38c172'
    }
  },
  input: {
    inputContainer: {
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
      borderStyle: 'solid'
    },
    label: {
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
    },
  },
  textarea: {
    textareaContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 15,
      flex: 1,
    },
    textarea: {
      position: 'relative',
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 18,
      paddingRight: 18,
      boxShadow: '2px 4px 8px 4px rgba(1, 12, 22, 0.01)',
      borderRadius: 4,
      backgroundColor: '#FDFFFF',
      borderWidth: .5,
      borderStyle: 'solid'
    },
    label: {
      position: 'relative',
      fontSize: 16,
      marginBottom: 8,
      color: '#736D6F',
    }
  },
  accountCompletitionIndicator: {
    accountCompletitionIndicatorContainer: {
      position: 'relative',
      borderWidth: 3, 
      borderStyle: 'solid',
      borderColor: '#3CD2C8',
      display: 'flex',
      alignItems: 'center',
      padding: 12,
      borderRadius: 40,
      backgroundColor: 'white', 
      justifyContent: 'space-between',
      cursor: 'pointer',
    },
    text: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 14,
      whiteSpace: 'nowrap',
      marginRight: 10,
      marginLeft: 10
    },
    percentage: {
      position: 'relative',
      color: '#3CD2C8',
      fontSize: 14,
      whiteSpace: 'nowrap',
    }
  },
  deleteModal: {
    deleteTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize:  22.78,
      marginBottom: 0,
      marginTop: 32
    },
    deleteButton: {
      position: 'relative',
      backgroundColor: '#F34C4F',
      color: 'white',
      cursor: 'pointer',
      borderRadius: 7,
      paddingTop: 14,
      paddingBottom: 14,
    },
    cancelButton: {
      position: 'relative',
      borderRadius: 7,
      paddingTop: 14,
      paddingBottom: 14,
    },
    deleteDescription: {
      position: 'relative',
      fontSize: 18,
      color: '#ABA5A7',
      textAlign: 'center',
      fontWeight: 100,
      marginBottom: 32,
      marginTop: 16,
      maxWidth: 452
    }
  },
  selector: {
    input: {
      position: 'relative',
      boxShadow: '2px 4px 8px 4px rgba(1, 12, 22, 0.01)',
      borderRadius: 4,
      backgroundColor: '#FDFFFF',
      borderStyle: 'solid',
    },
    option: {
      position: 'relative',
      padding: 10,
      borderRadius: 5
    },
    selectedOption: {
      position: 'relative',
      color: 'white',
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5
    }
  },
  layout: {
    layoutContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      maxWidth: '100%',
      flex: 1,
      backgroundColor: 'rgb(244, 244, 244)',
      boxShadow: '20px -22px 89px rgba(171, 165, 167, 0.08)',
      borderRadius: 8,
      boxSizing: 'border-box',
    },
    pageContainer: {
      position: 'relative',
      boxSizing: 'border-box',
      paddingTop: 30,
      paddingBottom: 74,
      paddingRight: 83,
      paddingLeft: 83,
    }
  },
  header: {
    headerContainer: {
      position: 'relative',
      backgroundColor: 'white',
      width: '100%',
      height: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 80,
      paddingRight: 80,
      boxSizing: 'border-box'
    },
    loggedInHeaderContainer: {
      position: 'relative',
      backgroundColor: 'transparent',
      width: '100%',
      height: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 80,
      paddingRight: 80,
      boxSizing: 'border-box'
    },
    left: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    right: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    links: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      marginLeft: 78,
      marginRight: 73
    },
    link: {
      position: 'relative',
      color: 'black'
    },
    contactUsButton: {
      position: 'relative',
      backgroundColor: '#2E2226',
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 16,
      borderRadius: 4,
      width: 130,
      borderWidth: 0
    },
    logoutButton: {
      position: 'relative',
      cursor: 'pointer',
      marginLeft: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 14,
      backgroundColor: 'white'
    },
    createAccountRequestButton: {
      position: 'relative',
      textAlign: 'center',
      backgroundColor: '#3CD2C8',
      color: 'white',
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 16,
    },
    createaAccountButton: {
      position: 'relative',
      textAlign: 'center',
      backgroundColor: '#3CD2C8',
      color: 'white',
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 16,
      marginLeft: 10
    },
    loginButton: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      color: 'white',
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 16,
      marginLeft: 10
    },
    logoutIcon: {
      position: 'relative',
    }
  },
  footer: {
    footerContainer: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      paddingLeft: 83,
      paddingRight: 83,
      paddingTop: 60,
      paddingBottom: 85,
      backgroundColor: 'white',
      overflow: 'auto'
    },
    left: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: 400,
    },
    right: {
      position: 'relative',
      display: 'flex',
    },
    rightSection: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 144
    },
    sectionTitle: {
      position: 'relative',
      fontWeight: 'bold',
      marginBottom: 24
    },
    titleAndLink: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 20,
      width: 159
    },
    title: {
      position: 'relative',
      fontWeight: 500,
      marginBottom: 5
    },
    linkText: {
      position: 'relative',
      fontWeight: 100,
      color: '#808080'
    },
    paragraph: {
      position: 'relative',
      marginTop: 24,
      color: '#20234D',
      fontSize: 16,
      fontWeight: 30,
      lineHeight: 1.3,
      width: 388
    }
  },
  createAccountRequest: {
    createAccountRequestContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    iconContainer: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  createAccountRequestForm: {
    createAccountRequestFormContainer: {
      position: 'relative',
      backgroundColor: 'white',
      boxSizing: 'border-box',
      width: 620,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 58.5,
      paddingBottom: 58.5,
      paddingRight: 58.5,
      paddingLeft: 58.5,
    },
    title: {
      position: 'relative',
      fontWeight: 500,
      fontSize: 20.83,
      color: '#2E2226',
      marginBottom: 5,
    },
    description: {
      position: 'relative',
      display: 'flex',
      color: '#ABA5A7',
      fontSize: 16.25,
      width: 409,
      marginBottom: 25,
      fontWeight: 'normal',
    },
    form: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    firstNameAndLastName: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start'
    }
  },
  createAccountRequestConfirmation: {
    createAccountRequestConfirmationContainer: {
      position: 'relative',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 630,
      height: 500
    },
    title: {
      position: 'relative',
      marginTop: 58,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    description: {
      position: 'relative',
      marginBottom: 56,
      color: '#ABA5A7',
      fontSize: 20,
      fontWeight: 100,
      maxWidth: 450,
      textAlign: 'center',
      marginTop: 5,
      lineHeight: 1.5
    },
    button: {
      position: 'relative',
      marginTop: 47
    }
  },
  createAccount: {
    createAccountContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    iconContainer: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  createAccountForm: {
    createAccountFormContainer: {
      position: 'relative',
      backgroundColor: 'white',
      boxSizing: 'border-box',
      width: 620,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 58.5,
      paddingBottom: 58.5,
      paddingRight: 58.5,
      paddingLeft: 58.5,
    },
    title: {
      position: 'relative',
      fontWeight: 500,
      fontSize: 20.83,
      color: '#2E2226',
      marginBottom: 5,
    },
    description: {
      position: 'relative',
      display: 'flex',
      color: '#ABA5A7',
      fontSize: 16.25,
      width: 409,
      marginBottom: 25,
      fontWeight: 'normal',
    },
    form: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    firstNameAndLastName: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start'
    }
  },
  confirmEmail: {
    confirmEmailContainer: {
      position: 'relative',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 630,
      height: 500
    },
    title: {
      position: 'relative',
      marginTop: 58,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    description: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 20,
      fontWeight: 100,
      maxWidth: 500,
      textAlign: 'center',
      marginTop: 5,
      lineHeight: 1.5
    },
    form: {
      position: 'relative',
      width: 515,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    email: {
      position: 'relative',
      marginBottom: 20,
      color: '#ABA5A7',
      fontSize: 18,
      fontWeight: 100,
      maxWidth: 450,
      textAlign: 'center',
      marginTop: 5,
      lineHeight: 1.5
    },
    codeInput: {
      position: 'relative',
      width: '100%',
      marginBottom: 46
    },
    validateButton: {
      position: 'relative',
      width: 350
    },
    resendCodeLabel: {
      position: 'relative',
      color: '#2E2226',
      textAlign: 'center',
      fontSize: 14,
      marginTop: 10,
      marginBottom: 10
    },
    resendButton: {
      position: 'relative',
      width: 350,
      backgroundColor: 'white',
      borderColor: '#2E2226',
      borderWidth: 1,
      color: '#2E2226'
    },
  },
  createAccountConfirmation: {
    createAccountConfirmationContainer: {
      position: 'relative',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 630,
      height: 537,
      marginTop: 50
    },
    title: {
      position: 'relative',
      marginTop: 58,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },

    secondTitle: {
      position: 'relative',
      marginTop: 10,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    description: {
      position: 'relative',
      marginBottom: 36,
      color: '#ABA5A7',
      fontSize: 20,
      fontWeight: 100,
      maxWidth: 450,
      textAlign: 'center',
      marginTop: 5,
      lineHeight: 1.5
    },
    button: {
      position: 'relative',
      marginTop: 47,
      width: 340
    }
  },
  forgotPassword: {
    forgotPasswordContainer: {
      position: 'relative',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 630,
      height: 300,
      marginTop: 50,
    },
    title: {
      position: 'relative',
      marginTop: 58,
      marginBottom: 30,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    button: {
      position: 'relative',
      padding: 10,
      width: 300,
      marginTop: 20
    },
    input: {
      position: 'relative',
      flex: 'initial',
      width: 500,
    },
    didntReceivePassword: {
      position: 'absolute',
      color: '#71717F',
      fontSize: 12.64,
      fontWeight: 300,
      bottom: 95
    }
  },
  resetPassword: {
    resetPasswordContainer: {
      position: 'relative',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 630,
      height: 300,
      marginTop: 50,
      paddingBottom: 20
    },
    title: {
      position: 'relative',
      marginTop: 58,
      marginBottom: 30,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    button: {
      position: 'relative',
      padding: 10,
      width: 300,
      marginTop: 20
    },
    input: {
      position: 'relative',
      flex: 'initial',
      width: 500,
    },
    didntReceivePassword: {
      position: 'relative',
      color: '#71717F',
      fontSize: 12.64,
      fontWeight: 300
    }
  },
  login: {
    loginContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    iconContainer: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  loginForm: {
    loginFormContainer: {
      position: 'relative',
      backgroundColor: 'white',
      boxSizing: 'border-box',
      width: 620,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 58.5,
      paddingBottom: 58.5,
      paddingRight: 58.5,
      paddingLeft: 58.5,
    },
    title: {
      position: 'relative',
      fontWeight: 500,
      fontSize: 20.83,
      color: '#2E2226',
      marginBottom: 5,
    },
    description: {
      position: 'relative',
      display: 'flex',
      color: '#ABA5A7',
      fontSize: 16.25,
      width: 409,
      marginBottom: 25,
      fontWeight: 'normal',
    },
    form: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    firstNameAndLastName: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start'
    },
    buttonsContainer: {
      position: 'relative',
      marginTop: 46
    },
    facebookButton: {
      position: 'relative',
      marginLeft: 10,
      cursor: 'pointer',
    },
    googleButton: {
      position: 'relative',
      marginLeft: 10,
      cursor: 'pointer',
    },
    linkedinButton: {
      position: 'relative',
      marginLeft: 10,
      cursor: 'pointer',
    },
    forgotPasswordText: {
      position: 'relative',
      fontWeight: 100,
      color: '#8E8E98',
      fontSize: 14,
      textAlign: 'center',
      marginTop: 22.4
    }
  },
  enrollmentPage: {
    height: '100vh', 
    width: '100vh', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  withSideMenu: {
    pageWithSideMenu: {
      position: 'relative',
      display: 'flex'
    },
    sideMenuContainer: {
      position: 'relative',
      backgroundColor: 'transparent',
      height: 610,
      marginRight: 46.18
    },
  },
  sideMenu: {
    sideMenuContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      width: 92,
      height: '100%'
    },
    top: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    paramsButton: {
      position: 'relative',
      width: '100%',
      backgroundColor: 'transparent'
    },
    dot: {
      position: 'relative',
      backgroundColor: '#BD00C9',
      height: 36, 
      width: 36,
      borderRadius: '50%',
      marginTop: 24,
      marginBottom: 10
    },
    line: {
      position: 'relative',
      borderColor: '#ABA5A7',
      backgroundColor: '#ABA5A7',
      height: 1,
      width: 48,
      marginBottom: 55
    },
    options: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    bottom: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 24
    },
    option: {
      position: 'relative',
      marginBottom: 16
    },
    selectedOptionColor: '#3CD2C8',
    unselectedOptionColor: '#ABA5A7'
  },
  profileButton: {
    profileButtonContainer: {
      position: 'relative',
      backgroundColor: 'white',
      height: 25,
      display: 'flex',
      alignItems: 'center',
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 16,
      justifyContent: 'space-between',
      marginLeft: 20
    },
    avatar: {
      position: 'relative',
      width: 20,
      height: 20,
      borderRadius: '50%',
      marginRight: 9
    },
    firstName: {
      position: 'relative',
      fontSize: 14,
      fontWeight: 500,
      marginRight: 8,
      color: '#2E2226'
    }
  },
  contact: {
    contactContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    subTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 20.25,
      marginBottom: 10,
      fontWeight: '100'
    },
    line: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      width: 180,
      height: 2
    },
    information: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between'
    },
    personalInformation: {
      position: 'relative',
      display: 'flex',
      width: '49%',
      flexDirection: 'column',
      marginTop: 25.63,
      backgroundColor: 'white',
      padding: 32,
      boxSizing: 'border-box'
    },
    personalInformationTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 22,
      fontWeight: 500
    },
    personalInformationSubTitle: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      marginBottom: 32,
      fontWeight: 100,
      
      marginTop: 7,
    },
    firstNameAndLastName: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    firstName: {
      position: 'relative',
      width: '48%',
      boxSizing: 'border-box',
      flex: 'initial',
    },
    lastName: {
      position: 'relative',
      width: '48%',
      boxSizing: 'border-box',
      flex: 'initial',
    },
    contactInformation: {
      position: 'relative',
      display: 'flex',
      width: '49%',
      flexDirection: 'column',
      marginTop: 25.63,
      backgroundColor: 'white',
      padding: 32,
      boxSizing: 'border-box'
    },
    contactInformationTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 22,
      fontWeight: 500
    },
    contactInformationSubTitle: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      marginBottom: 32,

      marginTop: 7,
      fontWeight: 100
    },
    email: {
      position: 'relative',
      marginBottom: 10,
      height: 'initial',
      flex: 'initial'
    },
    actionsContainer: {
      position: 'relative',
      backgroundColor: 'white',
      padding: 32.4,
      marginTop: 25.63,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    saveModifcationsButton: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      height: 44.44,
      display: 'flex',
      alignItems: 'center'
    },
    loading: {
      position: 'relative',
      height: 44.44,
      display: 'flex',
      alignItems: 'center'
    } 
  },
  paymentMethod: {
    paymentMethodContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    goBack: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 20.25,
      marginBottom: 10
    },
    line: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      width: 270,
      height: 2
    },
    information: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      marginTop: 25.63,
      backgroundColor: 'white',
      padding: 32,
      boxSizing: 'border-box'
    },
    informationTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 22,
      fontWeight: 500
    },
    informationSubTitle: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      marginBottom: 32,
      
      marginTop: 7,
      fontWeight: 100
    },
    name: {
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      flex: 'initial',
    },
    cardContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    last4: {
      position: 'relative',
      width: '60%',
      flex: 'initial'
    },
    expirationMonth: {
      position: 'relative',
      width: '20%',
      marginRight: 10,
      marginLeft: 10
    },
    expirationYear: {
      position: 'relative',
      width: '20%'
    },
    preAuthorizedPaymentContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    },
    institutionAndTransit: {
      position: 'relative',
      display: 'flex',
    },
    institution: {
      position: 'relative',
      marginRight: 25.63
    },
    transit: {

    },
    accountNumber: {

    },
    billingAddressContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 32,
      marginTop: 26
    },
    billingAddressTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 22.28,
      fontWeight: 500
    },
    billingAddressDescription: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      marginBottom: 32,
      fontWeight: 100,
      marginTop: 5
    },
    saveModifcationsButton: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      height: 44.44,
      display: 'flex',
      alignItems: 'center'
    },
    cancelButton: {
      position: 'relative',
      backgroundColor: 'transparent',
      height: 44.44,
      display: 'flex',
      alignItems: 'center',
      borderColor: 'black',
      borderRadius: '4px',
      borderWidth: '1px',
      color: 'black',
      justifyContent: 'center'
    },
    loading: {
      position: 'relative',
      height: 44.44,
      display: 'flex',
      alignItems: 'center'
    },
    actionsContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      padding: 32,
      backgroundColor: 'white',
      marginTop: 25.63
    },
    addressCheckboxes: {
      position: 'relative',
      marginTop: 0,
      marginBottom: 10
    }
  },
  addressForm: {
    addressFormContainer: {

    }
  },
  business: {
    businessContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    tabs: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    selectedSubTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 20.25,
      marginBottom: 10,
      fontWeight: '100',
      marginRight: 10
    },
    subTitle: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 20.25,
      marginBottom: 10,
      fontWeight: '100',
      marginRight: 10
    },
    line: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      width: 195,
      height: 2
    },
    information: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      marginTop: 25.63,
      backgroundColor: 'white',
      padding: 32,
      boxSizing: 'border-box'
    },
    informationTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 22,
      fontWeight: 500
    },
    informationSubTitle: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      marginBottom: 32,
      fontWeight: 100,
      
      marginTop: 7,
    },
    name: {
      position: 'relative',
      marginBottom: 10,
      height: 'initial',
      flex: 'initial'
    },
    actionsContainer: {
      position: 'relative',
      backgroundColor: 'white',
      padding: 32.4,
      marginTop: 25.63,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    saveModifcationsButton: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      height: 44.44,
      display: 'flex',
      alignItems: 'center'
    },
    loading: {
      position: 'relative',
      height: 44.44,
      display: 'flex',
      alignItems: 'center'
    } 
  },
  addresses: {
    addressesContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    tabs: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    selectedSubTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 20.25,
      marginBottom: 10,
      fontWeight: '100',
      marginRight: 10
    },
    subTitle: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 20.25,
      marginBottom: 10,
      fontWeight: '100',
      marginRight: 10
    },
    line: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      width: 100,
      height: 2,
      marginLeft: 205
    },
    tableContainer: {
      position: 'relative',
      padding: 32,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 25.63,
      overflow: 'auto',
    },
    tableHeader: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    },
    headerLeft: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    headerTitle: {
      position: 'relative',
      fontSize: 23,
      color: '#2E2226'
    },
    headerDescription: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 16,
      marginTop: 7,
      fontWeight: 100
    },
    headerRight: {
      position: 'relative',
      display: 'flex',
    },
    addAddress1: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 40,
      borderWidth: 1,
      borderColor: '#6EB0DD',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: 'white',
      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    addAddress2: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 250,
      borderWidth: 1,
      borderColor: '#6EB0DD',
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      backgroundColor: 'white',
      color: '#6EB0DD',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    tableColumns: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'auto'
    },
    tableRow: {
      position: 'relative',
      marginTop: 10,
      backgroundColor: '#F9F8F9',
      borderRadius: 12,
      boxSizing: 'border-box',
      height: 45.5,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'auto'
    },
    column: {
      position: 'relative',
      paddingTop: 14.2,
      paddingBottom: 14.2,
      paddingLeft: 22.7,
      paddingRight: 22.7,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
    },
    columnNickName: {
      position: 'relative',
      minWidth: 130,
      maxWidth: 130,
    },
    columnCity: {
      position: 'relative',
      minWidth: 130,
      maxWidth: 130,
    },
    columnCivicNumber: {
      position: 'relative',
      minWidth: 130,
      maxWidth: 130,
    },
    columnCountry: {
      position: 'relative',
      minWidth: 130,
      maxWidth: 130,
    },
    columnPostalCode: {
      position: 'relative',
      minWidth: 110,
      maxWidth: 110,
    },
    columnProvince: {
      position: 'relative',
      minWidth: 130,
      maxWidth: 130,
    },
    columnStreetName: {
      position: 'relative',
      minWidth: 130,
      maxWidth: 130,
    },
    columnLatitude: {
      position: 'relative',
      minWidth: 130,
      maxWidth: 130,
    },
    columnLongitude: {
      position: 'relative',
      minWidth: 130,
      maxWidth: 130,
    },
    columnStreetType: {
      position: 'relative',
      minWidth: 130,
      maxWidth: 130,
    },
    columnAction: {
      position: 'relative',
      minWidth: 200,
      maxWidth: 200,
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'flex-end'
    },
    deleteIcon: {
      position: 'relative',
      cursor: 'pointer',
      paddingRight: 15,
      paddingLeft: 15,
    },
  },
  address: {
    addressContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    tabs: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    selectedSubTitle: {
      position: 'relative',
      color: '#2E2226',
      fontSize: 20.25,
      marginBottom: 10,
      fontWeight: '100',
      marginRight: 10
    },
    subTitle: {
      position: 'relative',
      color: '#ABA5A7',
      fontSize: 20.25,
      marginBottom: 10,
      fontWeight: '100',
      marginRight: 10
    },
    line: {
      position: 'relative',
      backgroundColor: '#3CD2C8',
      width: 80,
      height: 2,
      marginLeft: 310
    },
    information: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      marginTop: 25.63,
      backgroundColor: 'white',
      padding: 32,
      boxSizing: 'border-box'
    },
  },
}

export default initialState