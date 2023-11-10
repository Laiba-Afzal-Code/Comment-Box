// console.log("hello world")
const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder');
const btn = document.querySelector('.btn1');
const clear = document.getElementById("clear");
const submit = document.querySelector("#submit");
const comment = document.getElementById('comment-box');

//  array to store the comment
const comment_arr = []

// to genrate html list based on comment array
const display_comments = ()=>{
let list = '<ul>';
comment_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
});
list += '</ul>';
comment.innerHTML = list;
}
clear.onclick = function (event){
    event.preventDefault();
    // reset the array
    comment_arr.length = 0;
    // re-genrate html list
    display_comments();
}

submit.onclick = function (event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){

        comment_arr.push(content);// if there is content
        // re-genrate the comment html list
        display_comments();
        // to sent textArea content
        field.value = "";
    }


}