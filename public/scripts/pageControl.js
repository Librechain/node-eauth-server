function backToLastPage() {
  window.history.back()
}

if (document.querySelector('.back')) {
  const lastPage = document.querySelector('.back')
  lastPage.addEventListener('click', backToLastPage)
}
