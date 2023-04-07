'use strict'

const form = document.querySelector('#form')
const inputName = document.querySelector('#username')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const users = []

const sectionSignup = document.querySelector('.signup')
const sectionDashboard = document.querySelector('.dashboard')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  if(inputName.value === '' || inputEmail.value === '' || inputPassword.value === '') {
    alert('Please, fill input fields')
  } else {
    const name = inputName.value
    const email = inputEmail.value
    const password = inputPassword.value
    const user = {name, email, password}
    users.push(user)
    console.log('users array: ', users);
    // inputName.value = inputEmail.value = inputPassword.value = ''
    sectionSignup.classList.add('hidden')
    sectionDashboard.classList.remove('hidden')
    // console.log('sectionSignup', sectionSignup);
    const words = name.split(' ')
    const firstName = words[0]
    // console.log(firstName);

    // fullname => first + last

    const html = `
      <div id="profile">
        <div class="profile-banner">
          <img id="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="">
          <div class="text-content">
            <h1>Hi, I'm ${firstName}</h1>
            <p class="description">
              I'm a UX designer, prototyper, and a part-time 3D artist. I'm currently a Working at Fraxos, working remotely from Boston. If you're a creative in Boston, say hi!

              Most recently, I was a Senior UX Designer at Delphia. Before that, I 
              worked at startups in Seoul such as Dable, Pinch, Creatrip, and Dotface. Before that, I was a design intern at Adobe in San Francisco.
              
              I love words that start with P: people, process, problem solving, paper sketches, prototyping, programming, polished design, pixel-perfect products, design system, UI animation, and Simulated Reality
            </p>
            <div class="profile-buttons">
              <button id="resume">Resume</button>
              <a class="social-buttons">LinkedIn</a>
              <a class="social-buttons">Instagram</a>
              <a class="social-buttons">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    `
    sectionDashboard.insertAdjacentHTML('afterbegin', html)
  }
})