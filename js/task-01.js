//1.
const categoryArray = document.querySelectorAll('.item');
const numberCatagory = categoryArray.length;
console.log(`Number of categories: ${numberCatagory}`);
//2.
categoryArray.forEach(category => {
    const group = [...category.children];
    group.forEach(element => {
        if (element.tagName === 'H2') {
            console.log(`Elements: ${element.textContent}`);
        }
    });
    group.forEach(element => {
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
        }
    });
    console.log(' ');
});

