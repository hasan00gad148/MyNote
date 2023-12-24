const inputs = document.querySelectorAll('input[type="text"]');
const textareas = document.querySelectorAll('textarea');
const form = document.getElementById('form');
const submit_btn = document.querySelector('input[type="submit"]');




form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('submit form clicked');
    valid = true;
    inputs.forEach((input)=>{
        if(input.value.trim() == '') {
            valid = false;
        }
    });
    textareas.forEach((input)=>{
        if(input.value.trim() == '') {
            valid = false;
        }
    });
    if(valid) {
        const formdata = new FormData(form);
        console.log(form.action);
        fetch(form.action, {
            method: "POST",
            body: formdata,
            // headers: {
            //   "Content-Type": "multipart/form-data"
            // }
          })
          .then(response => response.json())
          .then(data => {
            // Handle the response data
            if(data.success)
                alert("note updated successfully")
            else
                alert("An error occurred");
            console.log(data.success);
          })
          .catch(error => {
            // Handle the error
            alert("An error occurred");
            console.error(error);
          });
          
    }
    if(!valid) {
        
        alert("error: enter a valid values ")
    }


});