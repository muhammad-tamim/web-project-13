# Project Name: Burger King

## Project Description: 

## Project Video:

## Live Site Link:

## What I Learned New while Building This Project:

### 1. Different Ways to add Google fonts:  

   - Way-1: Inside the HTML:
  
```html
<!DOCTYPE html>
<html lang="en">


<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>


   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonsts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
       rel="stylesheet">
   <link rel="stylesheet" href="styles/style.css">


</head>


<body style="font-family: 'Roboto Condensed';">
   <h1>Hello</h1>
</body>

</html>

```

OR 

```html 
<!DOCTYPE html>
<html lang="en">


<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>


   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonsts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
       rel="stylesheet">
   <link rel="stylesheet" href="styles/style.css">
</head>


<body>
   <h1>Hello</h1>
</body>


</html>
```
```css
body {
   font-family: "Roboto Condensed";
}

```  
   - Way-2: Inside the CSS  
  
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');


body {
   font-family: 'Roboto Condensed';
}
```
**NOTE:** @import is slower than <link> because it blocks rendering until CSS is loaded.

### 2. Full PageVisualization:

If we set the border to the universal selector, then we got something like this:

```css
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Roboto Condensed';
   background-color: var(--eye-ball);
   border: 1px solid red;
}
```

![FUll page visualization](./assets/images/full-page-visualization.png)

### 3. How to create a Hamburger Menu:

### 4. CSS Logical Properties:
-  Inline = horizontal (left to right)
-  Block = Vertical (top to bottom)

```css
padding-inline: 1.5rem;   /* shorthand for inline-start + inline-end */
padding-inline-start: 1.5rem;
padding-inline-end: 1.5rem;

padding-block: 1rem;      /* shorthand for block-start + block-end */
padding-block-start: 1rem;
padding-block-end: 1rem;
```
### 4. HTML Entity: 

```html 
 <a href="#" class="btn">Sign In &nbsp; <i class="fa-solid fa-arrow-right-from-bracket"></i></a>
```
here, 

- ```&nbsp;``` (non-breaking space) = It represents a space character

### 5.   
```css
.cart-icon .cart-value {
    position: absolute;
    top: 50%;
    right: -10px;
    font-size: .85rem;
    width: 20px;
    line-height: 20px;
    aspect-ratio: 1;
    border-radius: 100vw;
    background: var(--gold-finger);
    color: var(--lead);
    text-align: center;
}
```
here, 
- ```width: 20px; line-height: 20px;``` = This makes it vertically center
- ``` aspect-ratio: 1;``` = makes height = width, so the element stays a perfect square regardless of width.


### 6. How to integrate swiper on project.

![Alt text](./assets/images/swiper.gif)


## What Challenges I face While Building This Project:

## Contact With Me: 

[![Gmail](./assets/images/gmail.png "contact2tamim@gmail.com")](contact2tamim@gmail.com)
[![LinkedIn](./assets/images/linkedin.png "https://www.linkedin.com/in/tamim-muhammad/")](https://www.linkedin.com/in/tamim-muhammad/)

---

### Thank you so much for checking out my project! If you have any suggestions or feedback, feel free to share them.

