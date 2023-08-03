window.addEventListener('load', function(){
	const proceed = document.querySelector("#proceed");
const payment = document.querySelector("#payment-form");
const submit = document.querySelector("#submit");
const success = document.querySelector("#success");


proceed.addEventListener("click", function() {
    payment.classList.toggle("hidden");
});
submit.addEventListener("click", function() {
    payment.classList.toggle("hidden");
    success.textContent = "Payment has been successful, We have sent the email on further details.";
    proceed.textContent = "Try Another Payment";
});

})
