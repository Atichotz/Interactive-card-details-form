const inpMonth = document.getElementById('months'),
    inpYear = document.getElementById('years'),
    CardNumber = document.getElementById('Card-Number'),
    btnContinue = document.querySelector('.btn-continue');
    CardHolderName = document.getElementById('CardHolder-Name'),
    CVC = document.getElementById('CVC'),
    limited = document.querySelectorAll('.limited'),
    megCVC = document.querySelector('.mesg-CVC'),
    megCard = document.querySelector('.mesg-card'),
    mesgDate = document.querySelector('.mesg-Date'),
    btnConfirm = document.querySelector('.btn-confirm'),
    accountNumber = document.querySelector('.accountNumber'),
    Fullname = document.querySelector('.Fullname'),
    ExpDate = document.querySelector('.ExpDate'),
    cardCVC = document.querySelector('.card-CVC');
    const rightSilde = document.querySelectorAll('.right');

limited.forEach(inputs => { //loop array and add event to that's elements
    inputs.addEventListener('keyup', autoTap);
});
btnContinue.addEventListener('click', Continue)
btnConfirm.addEventListener('click', Confirmbtn);
var Cnumber;

function autoTap(events) {
    if (events.target.value.length >= events.target.maxLength) {
        if (events.target.id == 'Card-Number') {
            inpMonth.focus();
        }
        else if (events.target.id == 'months') {
            inpYear.focus();
        }
        else if (events.target.id == 'years') {
            CVC.focus();
        }
    }
}
function Continue(){
    rightSilde.item(1).style.display = 'none';
    rightSilde.item(0).style.display = 'flex';
    limited.forEach(inputs=>{
        inputs.value = '';
    });
    accountNumber.innerHTML = '0000 0000 0000 0000';
    Fullname.innerHTML = 'Jane Appleseed';
    ExpDate.innerHTML = '00/00';
    cardCVC.innerHTML = '000';
}
function Confirmbtn() {
    checkblank();
    success();
}
function checkType(inputs) {
    if (isNaN(inputs.value)) {
        if (inputs.id == 'CVC') {
            megCVC.classList.add('error');
            inputs.classList.add('inputError');
        }
        if (inputs.id == 'Card-Number') {
            megCard.classList.add('error');
            inputs.classList.add('inputError');
        }
        if (inputs.id == 'months') {
            mesgDate.classList.add('error');
            inputs.classList.add('inputError');
        }
        if (inputs.id == 'years') {
            mesgDate.classList.add('error');
            inputs.classList.add('inputError');
        }
    }
}
function checkblank() {
    limited.forEach(inputs => {
        if (inputs.value.length < inputs.maxLength) {
            inputs.classList.add('inputError');
            if (inputs.id == 'CVC') {
                megCVC.classList.add('error');
                inputs.classList.add('inputError');
            }
            if (inputs.id == 'Card-Number') {
                megCard.classList.add('error');
                inputs.classList.add('inputError');
            }
            if (inputs.id == 'months') {
                inputs.classList.add('inputError');
                mesgDate.classList.add('error');
            }
            if (inputs.id == 'years') {
                inputs.classList.add('inputError');
                mesgDate.classList.add('error');
            }
            checkType(inputs);
        }
        else {
            inputs.classList.remove('inputError');
            if (inputs.id == 'CVC') {
                megCVC.classList.remove('error');
            }
            if (inputs.id == 'Card-Number') {
                megCard.classList.remove('error');
            }
            if (inputs.id == 'months') {
                mesgDate.classList.remove('error');
            }
            if (inputs.id == 'years') {
                if (limited.item(1).classList.length == 1) {
                    mesgDate.classList.remove('error');
                }
            }
            checkType(inputs);
        }
    });
    if(CardHolderName.value == ''){
        CardHolderName.classList.add('inputError')
    }
}

function success() {
    let ok=0;

    limited.forEach(inputs =>{
        if(inputs.classList.length == 2){
            ok +=1;
        }
    });
    if(ok == 0){
        limited.forEach(inputs =>{
            if(CardHolderName.value == ''){
                Fullname.innerHTML = 'Jane Appleseed';
            }
            else{
                Fullname.innerHTML = CardHolderName.value;
            }
            if(inputs.id == 'CVC'){
                cardCVC.innerHTML=inputs.value;
            }
            if(inputs.id == 'Card-Number'){
                accountNumber.innerHTML=inputs.value;
            }
            if(inputs.id == 'months'){
                ExpDate.innerHTML=inputs.value;
            }
            if(inputs.id == 'years'){
                ExpDate.innerHTML+= '/' +inputs.value;
            }
        });
        rightSilde.item(1).style.display = 'flex';
        rightSilde.item(0).style.display = 'none';
    }
    else{
        alert('Something Wrong, Try Again');
    }
}