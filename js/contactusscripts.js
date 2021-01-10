const scriptURL = 'https://script.google.com/macros/s/AKfycbyVcrTwGzJ4sne8-3F7Wyo7VGOg9ImStQGkonRuXA3TQhrpwLA6J7lkIg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})