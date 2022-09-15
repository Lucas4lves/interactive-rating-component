const ratingBtns = document.querySelectorAll('.main__card--rating-btn');
let rating;


for (let ratingBtn of ratingBtns) {
    ratingBtn.addEventListener('click', (e) => {
        rating = e.target.value;
        removeActiveClass(ratingBtns);
        e.target.classList.add('active');
        console.log(e.target.classList);
    })
} 

function removeActiveClass(arr) {
        arr.forEach(element => {
            if(element.classList.contains('active')) {
                element.classList.remove('active');
            } 
            return;
        });
    }

//Updating view to the second state 
const submitBtn = document.querySelector('.main__card--submit-btn');
const mainCard = document.querySelector('.main');
submitBtn.addEventListener('click', () => {
    if(!rating){
        return;
    }
    mainCard.innerHTML = `
                          <article class="main__thank-you-card">
                                <img class = "main__thank-you-card--img" src="./images/illustration-thank-you.svg">
                                <p class = "main__thank-you-card--rating">You selected ${rating} out of 5 </p>
                                <h1>Thank you!</h1>   
                                <p class="main__thank-you-card--call-to-action">We appreciate you taking the time to give a rating.
                                If you ever need more support, don't hesitate to get in touch</p>
                          </article>
                          `;
})


