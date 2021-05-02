# How to develop A simple js calculator using HTML CSS and Javascript


![cal](https://user-images.githubusercontent.com/69719511/116789828-4b65a380-aaca-11eb-8831-09b66819923a.PNG)

This calculator will help you to perform basic arithmetic Operations  addition, subtraction, multiplication and division.
[Live demo](https://zeecalculator.netlify.app/)

## prerequisite:
Basic understanding of HTML, CSS and javascript make easy to understand the logic of this calculator.

## Technologies used:
* HTML(Structure Building)
* CSS(Designing/Presentation)
* JavaScript(Logic Implemetation)

You must have an editor to write code.I will highly recommend you to use [Visual Studio Code](https://code.visualstudio.com/) for coding.VS Code is my most used and favorite editor.



## Let's Get Started:
* index.html
* Style.css
* Script.js
## Let's Break Down Structure



Here is a graphical representation of the structure. This calculator basically designned by using the concept of `flex` and `Grid` layouts.
By using these layouts it becomes very easy to responsive your web app very easily.
![html](https://user-images.githubusercontent.com/69719511/116796233-58978800-aaf4-11eb-9b6e-82d0db26a09b.jpg)

## Step 1: Lets Design Calulator Using HTML and CSS
* HTML(hypertext Markup Language) is the standard markup language used to create basic structure of the website.
* CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen. It can control the layout of multiple web pages all at once.

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"  type="text/css">
    <title>Calculator</title>
</head>

```
* External CSS with name `style.css` linked with html by using `<link>` tag to design calculator app.
* Content in `<title>` tag will be shown in the browser's title bar or in the page's tab

```html 
 <div class="container">
<!-- Heading  -->
<!-- Display Screen-->
<!-- Buttons-->
</div>
```
### .Container
        Outer container conatins All elements of calculator.
```css
.container{        
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    max-width: 250px;    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #4f9b9440;
    box-shadow: rgba(214, 238, 236, 0.25) 0px 30px 60px -12px inset, rgba(15, 161, 130, 0.3) 0px 18px 36px -18px inset;
  }

```

```css
Display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
```
properties are used to set the direction of elements from inner side of container and align them in center of the container.

```css
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
```
postion properties are used to set the container in center of the media screen.

### #Display
Display screen is the representation of input numbers, Operators nad their results
```html
<input type="text" name="number" id="display" readonly>
```
```css
#display{
position: relative;
width: 98%;
border: none;
outline: none;
text-align: right;
font-size: 1.5rem;
font-weight: bold;
background-color:white;
}
```
`readonly` proprty restrict the use of text input. It will display values instead of taking direct input from the user. `text-align:right` property used to align numbers to the right side of the display screen.

### .grid-container
This container consist of all input buttons having numbers and operators
```html
<div class="grid-container">       
<!-- grid Items -->
</div>
```
```css
.grid-container {    
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto auto;
  justify-content: center;  
  padding: 3px;
}
.grid-item {
  padding: 5px 10px;  
  width:59px ;
  outline: none;
  margin: 0.5px;
  font-size: 1.5rem;
  text-align: center;
  border: none;
  box-shadow: rgba(182, 182, 211, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
```
Grid container is used to fix button in rows and columns.To use grid layout  `display: grid` property is used. `grid-template-columns:auto auto auto auto` will decide there will be four columns in one row. Each button in grid container is designed and maintained by using `grid-item` class.

### Row 1:
```html
  <!-- row 1 -->
            <button class="grid-item plus">+</button>
            <button class="grid-item minus">-</button>
            <button class="grid-item multiply">*</button>
            <button class="grid-item divide">/</button>
```

* In row 1 there are four buttons having values +, -, *, / respectively.
*  These are basic arithmetic operators used in calculation. 

```css
.plus{
  background-color:#F79F1F;
}
.minus{
  background-color: #A3CB38;
}
.multiply{
background-color: #D980FA;
}
.divide{
  background-color: #FFC312;

}
```
`.plus`,`.minus`,`.multiply` and `.divide` classes applying different colors to buttons. Different color scheme make this calculator more eye catchy.

### Row 2:
```html
<!-- row 2 -->
            <button class="grid-item">7</button>
            <button class="grid-item">8</button>
            <button class="grid-item">9</button>
            <button class="grid-item equal">=</button>
```
 In row 2 there are four buttons having values 7, 8, 9 and = operator. `.equal` class used to design exqal button.
 ```css
 .equal{
  background-color: #29696b;
  color: white;
  grid-row: span 4; 
}

 ```
 `grid-row:span 4` property expand the equal button to the 4 rows.
 ### Row 3:
 
 ```html
 <!-- row 3 -->
            <button class="grid-item">4</button>
            <button class="grid-item">5</button>
            <button class="grid-item">6</button>

 ```
  ### Row 4:
 
 ```html
<!-- row 4 -->
            <button class="grid-item">1</button>
            <button class="grid-item">2</button>
            <button class="grid-item">3</button>
           
 ```
  ### Row 5:
 ```html
<!-- row 5 -->
            <button class="grid-item">0</button>
            <button class="grid-item">.</button>
            <button class="grid-item">C</button>
 ```
 Row 3, 4 and 5 consist of value `4,5,6` , `1,2,3` , `0,.,C` respectively.
 
 ### active selector:
```css
.grid-item:active{
  background-color: #757474;
} 
```
:active selector is used to select and style the active element. An element becomes active when you click on it. when grid items clicked their background color turns into grey.


 # Step 2: Let's Implement javascript logic:
 
 ## Methodology:
 #### When you click on a button 
 
 * If is a number (0-9) or operatoer (+,-,*,/) it will be concatenate into the display screen.
 * If it is equal(=) button than expression in the display screen be evaluted and show result in display screen.
 * If it is (C) it will clear the display screen.
 * If it is (.) it will concatenate to the display screen one time in one operand.
 


 First of all you have to take control of HTML element.You will use selectors to call these inputs and store them in a variable.
 querySelector() returns the Element within the document that matches the specified selector.
 ```
 const screenValue = document.querySelector("#display")
 ```
 By using id selector display screen will b accessed and assign to the screenValue variable.
  ```javascript
 const buttonValue = document.querySelectorAll("button")
 ```
 To access all button `document.querySelectorAll("button")` is used and assigned this to the buttonValue variable.
 As we do `console.log(buttonValue)` it shows NodeList of all Buttons
 
 ![allnodes](https://user-images.githubusercontent.com/69719511/116821317-d8742f80-ab92-11eb-998d-d51bae5f3f49.PNG)

 ```js
 buttonValue.forEach(element => {
    element.addEventListener('click', e => {


        let buttonText = e.target.innerText;
        });
     });
 ```
 * forEach() callback method is used to access all node items and add click event listener.
 * `let buttonText = e.target.innerText;` access value  of clicked button and store it in buttonText variable.
 
 
 ```js
 function refreshCalculator() {
    isOperator = true;
    isdot = false;
    isNumber = true;
    screenValue.value = "0"
}
 
 if (buttonText === "C") {
            refreshCalculator();
        }
 ```
if user click on ` C ` button it will refresh calculator setting and reset screen value to 0.
`isOperator=true` and `isNumber=true` means it user can enter a number or an operator.`isDot=false` means there is no precision in operand.

```js
 else if (buttonText === '.' && !isdot) {
            screenValue.value += buttonText;
            isdot = true;
        }
```
if user click on ` . ` button `isdot` wil be checked. if there is no percision in value ` . ` will be concatenate and make `isdot=true`.it ensure the duplication of percision in operand because only one ` . ` is allowed in one value






 





 
 
 
 
 
 
 
 
 









        
  








