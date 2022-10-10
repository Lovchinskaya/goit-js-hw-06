//1.
const categoryArray = document.querySelectorAll('.item');
const numberCatagory = categoryArray.length;
console.log(`Number of categories: ${numberCatagory}`);
//2.
categoryArray.forEach(category => {
    const group = [...category.children];
    group.forEach(element => {
        if (element.tagName === 'H2') {
            console.log(`Category: ${element.textContent}`);
        } else if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
        }
    });
    console.log(' ');
});


//const categ = document.querySelector('.item');
//let counter = 0;
//categoryArray.forEach(category => {
 //   const group = [...category.children];
 //   group.forEach(element => {
 //       if (element.tagName === 'H2') {
 //           console.log(`Category: ${element.textContent}`);
 //       } else if (categ.lastElementChild) {
 //           counter += 1;
 //           console.log(`Elements: ${counter}`);
 //       }   
 //   });
//    console.log(' ');
//});
//console.log(categ.lastElementChild.length);