const initialState = {
  button: {
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
  },
  deleteModal: {
    deleteTitle: {
      color: '#2E2226',
      fontSize:  22.78,
      marginBottom: 0,
      marginTop: 32
    },
    deleteButton: {
      backgroundColor: '#F34C4F',
      color: 'white',
      cursor: 'pointer',
      borderRadius: 7,
      paddingTop: 14,
      paddingBottom: 14,
    },
    cancelButton: {
      borderRadius: 7,
      paddingTop: 14,
      paddingBottom: 14,
    },
    deleteDescription: {
      fontSize: 18,
      color: '#ABA5A7',
      textAlign: 'center',
      fontWeight: 100,
      marginBottom: 32,
      marginTop: 16,
      maxWidth: 452
    }
  },
  input: {
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 15,
      flex: 1,
    },
    input: {
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
      fontSize: 16,
      marginBottom: 8,
      color: '#736D6F',
    },
    requiredFieldIcon: {
      marginBottom: 5,
      marginLeft: 5
    },
    error: {
      color: '#F34C4F',
      fontWeight: 500,
      fontSize: 16,
      marginTop: 10
    },
  },
  textarea: {
    textareaContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 15,
      flex: 1,
    },
    textarea: {
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
      fontSize: 16,
      marginBottom: 8,
      color: '#736D6F',
    }
  },
  layout: {
    layoutContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: 'rgb(244, 244, 244)',
      boxShadow: '20px -22px 89px rgba(171, 165, 167, 0.08)',
      borderRadius: 8,
      boxSizing: 'border-box',
    },
    pageContainer: {
      boxSizing: 'border-box',
      paddingTop: 30,
      paddingBottom: 74,
      paddingRight: 83,
      paddingLeft: 83,
    }
  },
  header: {
    headerContainer: {
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
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 78,
      marginRight: 73
    },
    link: {
      color: 'black'
    },
    contactUsButton: {
      backgroundColor: '#2E2226',
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 16,
      borderRadius: 4,
      width: 130
    },
    logoutButton: {
      cursor: 'pointer'
    },
    createAccountRequestButton: {
      textAlign: 'center',
      backgroundColor: '#3CD2C8',
      color: 'white',
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 16,
    },
    createaAccountButton: {
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
      backgroundColor: '#3CD2C8',
      color: 'white',
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 16,
      marginLeft: 10
    }
  },
  footer: {
    footerContainer: {
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
      display: 'flex',
      flexDirection: 'column',
      width: 400,
    },
    right: {
      display: 'flex',
    },
    rightSection: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 144
    },
    sectionTitle: {
      fontWeight: 'bold',
      marginBottom: 24
    },
    titleAndLink: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 20,
      width: 159
    },
    title: {
      fontWeight: 500,
      marginBottom: 5
    },
    linkText: {
      fontWeight: 100,
      color: '#808080'
    },
    paragraph: {
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
      display: 'flex',
      alignItems: 'center',
    },
    iconContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    createAccountRequestForm: {
      createAccountRequestFormContainer: {
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
        fontWeight: 500,
        fontSize: 20.83,
        color: '#2E2226',
        marginBottom: 5,
      },
      description: {
        display: 'flex',
        color: '#ABA5A7',
        fontSize: 16.25,
        width: 409,
        marginBottom: 25,
        fontWeight: 'normal',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
      },
      firstNameAndLastName: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start'
      }
    },
  },
  createAccountRequestConfirmation: {
    createAccountRequestConfirmationContainer: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 630,
      height: 500
    },
    title: {
      marginTop: 58,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    description: {
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
      marginTop: 47
    }
  },
  createAccount: {
    createAccountContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    iconContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    createAccountForm: {
      createAccountFormContainer: {
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
        fontWeight: 500,
        fontSize: 20.83,
        color: '#2E2226',
        marginBottom: 5,
      },
      description: {
        display: 'flex',
        color: '#ABA5A7',
        fontSize: 16.25,
        width: 409,
        marginBottom: 25,
        fontWeight: 'normal',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
      },
      firstNameAndLastName: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start'
      }
    },
  },
  confirmEmail: {
    confirmEmailContainer: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 630,
      height: 500
    },
    title: {
      marginTop: 58,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    description: {
      color: '#ABA5A7',
      fontSize: 20,
      fontWeight: 100,
      maxWidth: 500,
      textAlign: 'center',
      marginTop: 5,
      lineHeight: 1.5
    },
    form: {
      width: 515,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    email: {
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
      width: '100%',
      marginBottom: 46
    },
    validateButton: {
      width: 350
    },
    resendCodeLabel: {
      color: '#2E2226',
      textAlign: 'center',
      fontSize: 14,
      marginTop: 10,
      marginBottom: 10
    },
    resendButton: {
      width: 350,
      backgroundColor: 'white',
      borderColor: '#2E2226',
      borderWidth: 1,
      color: '#2E2226'
    },
  },
  createAccountConfirmation: {
    createAccountConfirmationContainer: {
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
      marginTop: 58,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },

    secondTitle: {
      marginTop: 10,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    description: {
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
      marginTop: 47,
      width: 340
    }
  },
  forgotPassword: {
    forgotPasswordContainer: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 630,
      height: 300,
      marginTop: 50,
      position: 'relative'
    },
    title: {
      marginTop: 58,
      marginBottom: 30,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    button: {
      padding: 10,
      width: 300,
      marginTop: 20
    },
    input: {
      flex: 'initial',
      width: 500,
    },
    didntReceivePassword: {
      color: '#71717F',
      fontSize: 12.64,
      fontWeight: 300,
      position: 'absolute',
      bottom: 95
    }
  },
  resetPassword: {
    resetPasswordContainer: {
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
      marginTop: 58,
      marginBottom: 30,
      fontSize: 29,
      color: '#2E2226',
      textAlign: 'center',
      fontWeight: 500,
      maxWidth: 515
    },
    button: {
      padding: 10,
      width: 300,
      marginTop: 20
    },
    input: {
      flex: 'initial',
      width: 500,
    },
    didntReceivePassword: {
      color: '#71717F',
      fontSize: 12.64,
      fontWeight: 300
    }
  },
  login: {
    loginContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    iconContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginForm: {
      loginFormContainer: {
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
        fontWeight: 500,
        fontSize: 20.83,
        color: '#2E2226',
        marginBottom: 5,
      },
      description: {
        display: 'flex',
        color: '#ABA5A7',
        fontSize: 16.25,
        width: 409,
        marginBottom: 25,
        fontWeight: 'normal',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
      },
      firstNameAndLastName: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start'
      },
      buttonsContainer: {
        marginTop: 46
      },
      facebookButton: {
        marginLeft: 10,
        cursor: 'pointer',
      },
      googleButton: {
        marginLeft: 10,
        cursor: 'pointer',
      },
      linkedinButton: {
        marginLeft: 10,
        cursor: 'pointer',
      },
      forgotPasswordText: {
        fontWeight: 100,
        color: '#8E8E98',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 22.4
      }
    },
  },
  home: {
    homeContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    title: {
      color: '#000000',
      fontSize: 32.44,
      textAlign: 'center',
      width: '100%',
      marginBottom: 46,
      marginTop: 45
    },
    sections: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    section: {
      display: 'flex',
      backgroundColor: 'white',
      padding: 32.44,
      width: '49%',
      flexDirection: 'column',
      boxSizing: 'border-box',
      marginBottom: 26,
      position: 'relative'
    },
    sectionTitle: {
      color: '#2E2226',
      fontSize: 22.78,
      fontWeight: 400,
    },
    sectionDescription: {
      color: '#ABA5A7',
      fontSize: 16,
      fontWeight: 100,
      marginTop: 3
    },
    subLinks: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
    },
    subLink: {
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
      color: '#3CD2C8',
      fontSize: 18,
      marginRight: 5
    },
    progressCheck: {
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
      display: 'flex'
    },
    sideMenuContainer: {
      backgroundColor: 'transparent',
      height: 610,
      marginRight: 46.18
    }
  },
  sideMenu: {
    sideMenuContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      width: 92,
      height: '100%'
    },
    top: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    dot: {
      backgroundColor: '#BD00C9',
      height: 36, 
      width: 36,
      borderRadius: '50%',
      marginTop: 24,
      marginBottom: 10
    },
    line: {
      borderColor: '#ABA5A7',
      backgroundColor: '#ABA5A7',
      height: 1,
      width: 48,
      marginBottom: 55
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    bottom: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 24
    },
    option: {
      marginBottom: 16
    },
    selectedOptionColor: '#3CD2C8',
    unselectedOptionColor: '#ABA5A7'
  },
  profileButton: {
    profileButtonContainer: {
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
      width: 20,
      height: 20,
      borderRadius: '50%',
      marginRight: 9
    },
    firstName: {
      fontSize: 14,
      fontWeight: 500,
      marginRight: 8,
      color: '#2E2226'
    }
  },
  contacts: {
    contactsContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    subTitle: {
      color: '#2E2226',
      fontSize: 20.25,
      marginBottom: 10
    },
    line: {
      backgroundColor: '#3CD2C8',
      width: 162,
      height: 2
    },
    tableContainer: {
      padding: 32,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 25.63,
      overflow: 'auto',
    },
    tableHeader: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    },
    headerLeft: {
      display: 'flex',
      flexDirection: 'column',
    },
    headerTitle: {
      fontSize: 23,
      color: '#2E2226'
    },
    headerDescription: {
      color: '#ABA5A7',
      fontSize: 16,
      marginTop: 7,
      fontWeight: 100
    },
    headerRight: {
      display: 'flex',
    },
    inviteButton1: {
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
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      overflow: 'auto'
    },
    tableRow: {
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
      paddingTop: 14.2,
      paddingBottom: 14.2,
      paddingLeft: 22.7,
      paddingRight: 22.7,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
    },
    columnName: {
      minWidth: 150,
      maxWidth: 150,
    },
    columnEmail: {
      minWidth: 250,
      maxWidth: 250,
    },
    columnPost: {
      minWidth: 100,
      maxWidth: 100,
    },
    columnProjectRoles: {
      minWidth: 200,
      maxWidth: 200,
    },
    columnStatus: {
      minWidth: 150,
      maxWidth: 150,
    },
    columnAction: {
      minWidth: 200,
      maxWidth: 200,
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'flex-end'
    },
    status: {
      fontSize: 14.12,
      color: 'rgba(119, 103, 108, 0.5)',
      display: 'flex',
      alignItems: 'center',
    },
    statusIcon: {
      marginLeft: 8.88,
    },
    inviteButton: {
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
      width: 150,
    },
    deleteIcon: {
      cursor: 'pointer',
      paddingRight: 15,
      paddingLeft: 15,
    }
  },
  contact: {
    contactContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'auto',
    },
    title: {
      color: '#2E2226',
      fontSize: 32.44,
      marginTop: 13,
      marginBottom: 13
    },
    subTitle: {
      color: '#2E2226',
      fontSize: 20.25,
      marginBottom: 10
    },
    line: {
      backgroundColor: '#3CD2C8',
      width: 162,
      height: 2
    },
    information: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    personalInformation: {
      display: 'flex',
      width: '49%',
      flexDirection: 'column',
      marginTop: 25.63,
      backgroundColor: 'white',
      padding: 32,
      boxSizing: 'border-box'
    },
    personalInformationTitle: {
      color: '#2E2226',
      fontSize: 22,
      fontWeight: 500
    },
    personalInformationSubTitle: {
      color: '#ABA5A7',
      fontSize: 16,
      marginBottom: 32,
      
      marginTop: 7,
      fontWeight: 100
    },
    firstNameAndLastName: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    firstName: {
      width: '48%',
      boxSizing: 'border-box',
      flex: 'initial',
    },
    lastName: {
      width: '48%',
      boxSizing: 'border-box',
      flex: 'initial',
    },
    contactInformation: {
      display: 'flex',
      width: '49%',
      flexDirection: 'column',
      marginTop: 25.63,
      backgroundColor: 'white',
      padding: 32,
      boxSizing: 'border-box'
    },
    contactInformationTitle: {
      color: '#2E2226',
      fontSize: 22,
      fontWeight: 500
    },
    contactInformationSubTitle: {
      color: '#ABA5A7',
      fontSize: 16,
      marginBottom: 32,

      marginTop: 7,
      fontWeight: 100
    },
    email: {
      marginBottom: 10,
      height: 'initial',
      flex: 'initial'
    },
    actionsContainer: {
      backgroundColor: 'white',
      padding: 32.4,
      marginTop: 25.63,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    saveModifcationsButton: {
      backgroundColor: '#3CD2C8',
      height: 44.44,
      display: 'flex',
      alignItems: 'center'
    }
  }
}

export default initialState