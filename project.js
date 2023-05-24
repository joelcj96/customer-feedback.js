

const username = document.querySelector('#username');
const feedback = document.querySelector('#feedback');
const form = document.querySelector('.form');
const p = document.querySelector('p');

const userPattern = /^[a-zA-Z]{3,10}$/;
const feedbackPattern = /^.{5,250}$/;


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let uservalue = userPattern.test(username.value);
    let feedbackValue = feedbackPattern.test(feedback.value.trim());
    
    if(uservalue && feedbackValue) {
        p.setAttribute('class', 'success')
        p.textContent = `FeedBack Received, Thank You.`;
    } else {
        p.setAttribute('class', 'error')
        p.textContent = `Please Check Your Username And Feedback Again.`;
    }

});


form.addEventListener('keyup', (event) => {
    let uservalue = userPattern.test(username.value);

    if (uservalue){
        form.username.setAttribute('class', 'accepted');
    } else {
        form.username.setAttribute('class', 'wrong');
    }
});


form.addEventListener('keyup', (event) => {
    let feedbackValue = feedbackPattern.test(feedback.value.trim());

    if (feedbackValue){
        form.feedback.setAttribute('class', 'accepted');
    } else {
        form.feedback.setAttribute('class', 'wrong');
    }
})


