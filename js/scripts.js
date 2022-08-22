/*!
 * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {
	// Navbar shrink function
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav')
		if (!navbarCollapsible) {
			return
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink')
		} else {
			navbarCollapsible.classList.add('navbar-shrink')
		}
	}

	// Shrink the navbar
	navbarShrink()

	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink)

	// Activate Bootstrap scrollspy on the main nav element
	const mainNav = document.body.querySelector('#mainNav')
	if (mainNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#mainNav',
			offset: 74,
		})
	}

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler')
	const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'))
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click()
			}
		})
	})
})
//Portfolio Item

import { Project1, Project2, Project3, Project4, Project5, Project6 } from './data.js'

const projectAll = [Project1, Project2, Project3, Project4, Project5, Project6]

//// Portfolio function

let num = 0
let id = 0
const rowProject = document.querySelector('.rowProject')
const projectTemp = document.querySelector('.projectTemp')
const portfolio = document.querySelector('.portfolio')
const portfolioItem = document.getElementsByClassName('portfolio-item')

const createProjectAll = () => {
	for (const pro of projectAll) {
		createProject(pro.name, pro.jpg)
	}
}

const createProject = (name, jpg) => {
	const newProject = document.createElement('div')
	newProject.classList.add('col-lg-4')

	newProject.innerHTML = `
           <div class="portfolio-item">
              <a class="portfolio-link" data-bs-toggle="modal" href="#port${id}">
                  <div class="portfolio-hover">
                      <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img class="img-fluid o1" src="assets/img/portfolio/${jpg}" alt="..." />
              </a>
              <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">${name}</div>
              </div>
           </div>
    `
	rowProject.appendChild(newProject)
	id++
}

const createFullProjectAll = () => {
	for (const pro of projectAll) {
		createFullProject(pro.name, pro.jpg, pro.text, pro.investor)
	}
}

const createFullProject = (name, jpg, text, investor) => {
	const project = projectTemp.content.cloneNode(true)
	project.querySelector('.fade').setAttribute('id', `port${num}`)
	project.querySelector('.name').textContent = name
	project.querySelector('.jpg').src = `assets/img/portfolio/${jpg}`
	project.querySelector('.text').textContent = text
	project.querySelector('.client').textContent = investor
	portfolio.appendChild(project)
	num++
}

document.addEventListener('DOMContentLoaded', createProjectAll)
portfolioItem.addEventListener('click', createFullProjectAll())
