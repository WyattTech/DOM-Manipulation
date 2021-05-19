//Change the header text line 3

let headerText = document.querySelector('#main-heading');
headerText.innerHTML = " New DOM Layout";

//change the background color by adding classList "bg-success" end of line 3

headerText.classList.add('bg-success');

//Access each paragraph tags and add the specified text content

let paraOne = document.querySelector('#para1');
paraOne.innerHTML = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure';

let paraTwo = document.querySelector('#para2');
paraTwo.innerHTML = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the documents as nodes and objects. That way, programming languages can connect to the page';

//Add a click event function that will create a new paragraph in the box lay out when on clicks
let addButton = document.querySelector('#btn');
addButton.addEventListener("click", () => {
    let paraFour = document.querySelector('#para4');
    paraFour.innerHTML = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';

})

//Change each card(box) to the proper color mentioned in them. Add the new classList for each card

//Card One

let divRed = document.querySelector('#red');
divRed.classList.remove('bg-white');
divRed.classList.add('bg-danger');


//Card Two

let divBlue = document.querySelector('#blue');
divBlue.classList.remove('bg-white');
divBlue.classList.add('bg-primary');

//Card Three

let divYellow = document.querySelector('#yellow');
divYellow.classList.remove('bg-white');
divYellow.classList.add('bg-warning');

//Card Four

let divGreen = document.querySelector('#green');
divGreen.classList.remove('bg-white');
divGreen.classList.add('bg-success');


//Card Five 
let divBlack = document.querySelector('#black');
divBlack.classList.remove('bg-white');
divBlack.classList.add('bg-dark');
divBlack.style.color = 'white';