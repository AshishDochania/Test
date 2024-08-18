const searchInput = document.getElementById('search');
const itemList = document.getElementById('itemsList');
const items = itemList.getElementsByTagName('li');
// console.log(itemList);
// console.log(items);

searchInput.addEventListener('input', function() {
    const filterText = searchInput.value.toLowerCase();
    let filterTextWithoutSpace=filterText.split(" ").join("");
    // need to eliminate the space from both the input string and the elements
    let nothing=items.length;

    // declaring a variable to keep the count of items getting displayed.
    //so when there will be no item getting displayed we can change the color to red

    for (let i = 0; i < items.length; i++) {
        const item = items[i].textContent;// getting the names of the items stored in the li tags.
        const filteritem=item.toLowerCase();// converting the items into lowercase to match the input.

        let strWithoutSpace=filteritem.split(" ").join("");

        if (strWithoutSpace.includes(filterTextWithoutSpace)) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
            nothing=nothing-1;// changing the value for each item which is not displayed.
        }
    }
    if(nothing===0){
        searchInput.classList.add("no-match");
    }
    else{
        searchInput.classList.remove("no-match");
    }
});