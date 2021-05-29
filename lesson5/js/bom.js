/*------bom-------- */
const favchap = document.querySelector('#favchap');
const button = document.querySelector('button');
const output = document.querySelector('.list');

button.addEventListener('click',() => {
    if(favchap.value != '') {
        //create the element in the list
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        //change some properties........textcontent
        li.textContent = favchap.value;
        deletebutton.textContent = '❌';
        //add the
        li.append(deletebutton);
        output.append(li);
        deletebutton.addEventListener('click' , function(){
            output.removeChild(li);
            favchap.focus;

        });
        favchap.value ='';
        favchap.focus;
    }
})