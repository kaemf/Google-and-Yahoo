let date : Date = new Date(),
closeButton : HTMLElement = document.querySelector('.exit-m') as HTMLElement,
warningMessage : HTMLElement = document.querySelector('.bodyMessage') as HTMLElement;

document.querySelector('.year')?.setAttribute('year', date.getFullYear().toString());

closeButton.addEventListener('click', (event : Event) => {
    warningMessage.style.opacity = '0';
    warningMessage.style.visibility = 'hidden';
});