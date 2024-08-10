// const main = document.querySelector('.main');
//
// const cursor = `<span id="cursor">|</span>`;
//
// let mainContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi illo nisi porro sit? Ad assumenda eius est excepturi, exercitationem illum inventore itaque laborum magnam nisi non, quas quibusdam quidem vel veniam? Accusamus alias amet architecto asperiores assumenda aut cum dolores doloribus error est exercitationem facilis fuga id impedit in, iste iusto magni natus nemo nisi nulla quae, quasi quis,h${cursor}`
//
//
//
//
// function type(){
//     window.addEventListener('keydown', (e) => {
//         const allowedCharacter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!;\'@#$%^&*()_+{}|:"<>?`~-=\\[];,./ ';
//         const cursorIndex = mainContent.indexOf(cursor);
//         console.log(`cursorIndex: ${cursorIndex}`);
//         if(!allowedCharacter.includes(e.key) && e.key !== 'Backspace') {
//             console.log(e.key);
//         }
//         if(allowedCharacter.includes(e.key)) {
//             mainContent = mainContent.replace(cursor, e.key + cursor);
//             main.innerHTML = mainContent;
//             clearInterval(blinkingCursor)
//             blinkingCursor = blinkCursor();
//         }
//         if(e.key === 'Backspace') {
//             mainContent = mainContent.replace(cursor, '');
//             mainContent = mainContent.slice(0, mainContent.length-1);
//             mainContent += cursor;
//             main.innerHTML = mainContent;
//             clearInterval(blinkingCursor)
//             blinkingCursor = blinkCursor();
//         }
//     });
// }
//
// type();
//
//
//
//
//
//
//
//
//
//
//
//
// function blinkCursor() {
//     const cursor = document.getElementById('cursor');
//     return setInterval(() => {
//         cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
//     }, 500);
// }
//
//
//
// let blinkingCursor = blinkCursor();