var _a;
var date = new Date(), closeButton = document.querySelector('.exit-m'), warningMessage = document.querySelector('.bodyMessage');
(_a = document.querySelector('.year')) === null || _a === void 0 ? void 0 : _a.setAttribute('year', date.getFullYear().toString());
closeButton.addEventListener('click', function (event) {
    warningMessage.style.opacity = '0';
    warningMessage.style.visibility = 'hidden';
});
