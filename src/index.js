document.addEventListener("DOMContentLoaded", () => {})
  const typeForm = document.querySelector('#new-task-description')
  const form = document.getElementById('create-task-form')
  form.addEventListener("submit",(e)=>{
    e.preventDefault()
    alert('Thank you for the feedback!');
  const element = document.createElement('li')
  element.textContent = `${typeForm.value}`
  const div = document.getElementById('list')
  div.appendChild(element)
  const btn = document.createElement('button')
  btn.textContent = `X`;
  btn.addEventListener('click',function() {
    element.parentElement.removeChild(element)
  })
  element.appendChild(btn);
  });