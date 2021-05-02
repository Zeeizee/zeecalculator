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

### Row 1
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

### Row 2
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
 









        
  








