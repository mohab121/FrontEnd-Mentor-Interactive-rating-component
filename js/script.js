let choice = document.querySelectorAll(".btn-secondary");
let btn = document.querySelector(".btn-primary");
let result = document.querySelector(".text");
let rating = document.querySelector('.rating_state');
let thank = document.querySelector('.thank_state');
let val =0;

choice.forEach(button => {
    button.addEventListener('click',function ()  {
        choice.forEach(lab => lab.classList.remove('btn-secondary-change'));
        this.classList.add('btn-secondary-change');
        val = this.textContent;
    });
});

btn.addEventListener('click', () => {
    if(val === 0){
        alert("please rate us")
    }
    else{
        result.textContent = val;
        rating.style.display = "none";
        thank.style.display = "flex";
    }

});


