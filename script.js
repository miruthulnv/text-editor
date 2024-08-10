const main = document.querySelector('.main');

const boldButton = document.getElementById('boldButton');
const italicButton = document.getElementById('italicButton');
const underlineButton = document.getElementById('underlineButton');
const strikeOutButton = document.getElementById('strikeOutButton');
const highlightButton = document.getElementById('highlightButton');
const fontSize = document.getElementById('fontSize');

main.innerHTML = 'Lorem ipsum <i>dolor</i> sit amet, <strike>consectetur</strike> adipisicing elit. Accusantium commodi illo nisi porro sit? Ad assumenda eius est excepturi, exercitationem illum inventore itaque laborum magnam nisi non, quas &nbsp;quidem vel veniam? Accusamus alias amet architecto asperiores assume<em><u>quibusdam</u></em>nda <em>aut</em> cum dolores doloribus error est exercitationem facilis fuga id <b>impedit</b> in, iste iusto magni natus nemo nisi nulla quae, quasi quis,h'


function initializeButton(){
    boldButton.addEventListener('click', () => {
        // const boldElement = document.createElement('b');
        // const userSelection = window.getSelection();
        // console.log(userSelection);
        // if (userSelection.toString().length === 0) {
        //     // Handling the case when no text is selected
        // }
        // else {
        //     const selectedTextRange = userSelection.getRangeAt(0);
        //     console.log(selectedTextRange.startContainer);
        //     console.log(selectedTextRange.endContainer);
        //     console.log(selectedTextRange.startContainer.parentNode);
        //     let parentNode = selectedTextRange.startContainer.parentNode
        //     console.log(parentNode.nodeName)
        //     if (parentNode.nodeName === 'B') {
        //         console.log('The text is bold')
        //         //Remove the bold effect
        //         parentNode.outerHTML = parentNode.innerHTML;
        //     } else
        //     selectedTextRange.surroundContents(boldElement);
        // }
        document.execCommand('bold');
    });

    italicButton.addEventListener('click',()=>{
        // const italicElement = document.createElement('em');
        // const userSelection = window.getSelection();
        // console.log(userSelection);
        // const selectedTextRange = userSelection.getRangeAt(0);
        // console.log(selectedTextRange);
        // selectedTextRange.surroundContents(italicElement);
        document.execCommand('italic');
    });

    underlineButton.addEventListener('click',()=>{
        // const underlineElement = document.createElement('u');
        // const userSelection = window.getSelection();
        // console.log(userSelection);
        // const selectedTextRange = userSelection.getRangeAt(0);
        // console.log(selectedTextRange);
        // selectedTextRange.surroundContents(underlineElement);
        document.execCommand('underline');
    });

    strikeOutButton.addEventListener('click',()=>{
        // const strikeOutElement = document.createElement('strike');
        // const userSelection = window.getSelection();
        // console.log(userSelection);
        // const selectedTextRange = userSelection.getRangeAt(0);
        // console.log(selectedTextRange);
        // selectedTextRange.surroundContents(strikeOutElement);
        document.execCommand('strikeThrough');
    });

    highlightButton.addEventListener('click',()=>{
        const highlightElement = document.createElement('mark');
        const userSelection = window.getSelection();
        // console.log(userSelection);
        const selectedTextRange = userSelection.getRangeAt(0);
        const startContainer = selectedTextRange.startContainer;
        const parentNode = startContainer.parentNode;
        // console.log(selectedTextRange);
        // selectedTextRange.surroundContents(highlightElement);
        console.log(parentNode.nodeName)
         if (parentNode.nodeName === 'SPAN') {
             parentNode.outerHTML = parentNode.innerHTML;
         } else{
             document.execCommand('hiliteColor', false, 'yellow');
         }
    });

    fontSize.addEventListener('change',()=>{
        const selectedValue = fontSize.value;
        console.log(selectedValue);
        document.execCommand('fontSize', false, selectedValue);
    });

}

initializeButton();