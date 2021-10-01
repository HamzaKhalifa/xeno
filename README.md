## How elements should be created

1- Never created static css files. Always store the css in the redux store.
The css in the redux stored should be defined as such: <br>
{
  page/element: {
    sectionName: {
      ...style
    }
  },
  page/element: {
    sectionName: {
      ...style 
    }
  }
}

<br>

It means that there shouldn't be a nesting of sections inside sections. It's always the name of the page or the element beneath which we find the section.

<br>

2- Never created normal html/jsx tags. Always go throug the visual builder elements



## Sprint Review:
From en environment from scratch
1- Change the admin email in apiefront
2- Login into Tooly services with Facebook
3- Demonstrate everything related to the the visual builder. 
4- Complete profile information to reach 100% 
5- Logout
6- Request account creation
7- Approve in apiefront
8- Log back
9- Logout.
10- Create account 
11- Login after confirmation
12- Forgot password