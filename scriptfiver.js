// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Current year for footer
    document.getElementById("currentYear").textContent = new Date().getFullYear()
  
    // Header scroll effect
    const header = document.getElementById("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    const navToggle = document.getElementById("navToggle")
    const nav = document.getElementById("nav")
  
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active")
      nav.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active")
        nav.classList.remove("active")
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll("section")
  
    function setActiveLink() {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active")
        }
      })
    }
  
    window.addEventListener("scroll", setActiveLink)
    setActiveLink() // Set active link on page load
  
    // Back to top button
    const backToTopButton = document.getElementById("backToTop")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopButton.classList.add("active")
      } else {
        backToTopButton.classList.remove("active")
      }
    })
  
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll(".skill-progress-bar")
  
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        const barPosition = bar.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.2
  
        if (barPosition < screenPosition) {
          const width = bar.style.width
          if (!width || width === "0px") {
            const percent = bar.parentElement.previousElementSibling.querySelector(".skill-percent").textContent
            bar.style.width = percent
          }
        }
      })
    }
  
    window.addEventListener("scroll", animateSkillBars)
    setTimeout(animateSkillBars, 500) // Initial animation
  
    // Custom cursor
    const cursorDot = document.querySelector(".cursor-dot")
    const cursorOutline = document.querySelector(".cursor-dot-outline")
  
    if (cursorDot && cursorOutline) {
      window.addEventListener("mousemove", (e) => {
        const posX = e.clientX
        const posY = e.clientY
  
        cursorDot.style.opacity = "1"
        cursorOutline.style.opacity = "1"
  
        cursorDot.style.transform = `translate(${posX}px, ${posY}px)`
        cursorOutline.style.transform = `translate(${posX}px, ${posY}px)`
      })
  
      // Hide cursor when leaving window
      document.addEventListener("mouseleave", () => {
        cursorDot.style.opacity = "0"
        cursorOutline.style.opacity = "0"
      })
  
      // Show cursor when entering window
      document.addEventListener("mouseenter", () => {
        cursorDot.style.opacity = "1"
        cursorOutline.style.opacity = "1"
      })
    }
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // For demo purposes, just log the values
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message (in a real application, you would send this data to a server)
        alert("Thank you for your message! I'll get back to you as soon as possible.")
  
        // Reset form
        contactForm.reset()
      })
    }
  })
  