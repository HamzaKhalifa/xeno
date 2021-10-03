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

2- Never create normal html/jsx tags. Always go through the visual builder elements

## Plans: 
-Hover over elements in edit mode with a sign + click and have the element selected and scrolled to in the visual builder
-Add the ability to add sub-elements
-Add the ability to add images
-Add the ability to order elements