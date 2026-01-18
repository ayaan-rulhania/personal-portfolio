import React, { useEffect, useRef } from 'react'
import './App.css'
import profileImage from '../icn.png'

function App() {
  const nameTitleRef = useRef(null)
  const sectionTitleRef = useRef(null)

  // Kinetic typography effect for name title
  useEffect(() => {
    const titleEl = nameTitleRef.current
    if (!titleEl) return

    const text = titleEl.textContent
    titleEl.innerHTML = '' // clear before injecting spans

    ;[...text].forEach((ch, i) => {
      const span = document.createElement('span')
      span.className = 'char'
      span.style.display = 'inline-block'
      // Typing effect: characters appear quickly one by one
      span.style.animationDelay = `${i * 50}ms`
      span.textContent = ch === ' ' ? '\u00A0' : ch // preserve spaces with non-breaking space
      titleEl.appendChild(span)
    })

    // Hover kinetic pop animation
    titleEl.addEventListener('mouseenter', () => {
      ;[...titleEl.querySelectorAll('.char')].forEach((el, idx) => {
        el.animate(
          [
            { transform: 'translateZ(0) scale(1)' },
            { transform: 'translateZ(24px) scale(1.08)' },
            { transform: 'translateZ(0) scale(1)' },
          ],
          {
            duration: 480,
            delay: idx * 18,
            easing: 'cubic-bezier(.2,.9,.2,1)',
          }
        )
      })
    })
  }, [])

  // Kinetic typography effect for section title
  useEffect(() => {
    const titleEl = sectionTitleRef.current
    if (!titleEl) return

    const text = titleEl.textContent
    titleEl.innerHTML = '' // clear before injecting spans

    // Calculate delay to finish at same time as name title
    // "Ayaan Rulhania" = 14 chars * 50ms = 700ms
    // "My Works" = 8 chars, so we need: 700ms / 8 = ~88ms per char
    const charsPerMs = 88

    ;[...text].forEach((ch, i) => {
      const span = document.createElement('span')
      span.className = 'char'
      span.style.display = 'inline-block'
      // Typing effect: slower per character to finish at same time as name title
      span.style.animationDelay = `${i * charsPerMs}ms`
      span.textContent = ch === ' ' ? '\u00A0' : ch // preserve spaces with non-breaking space
      titleEl.appendChild(span)
    })

    // Hover kinetic pop animation
    titleEl.addEventListener('mouseenter', () => {
      ;[...titleEl.querySelectorAll('.char')].forEach((el, idx) => {
        el.animate(
          [
            { transform: 'translateZ(0) scale(1)' },
            { transform: 'translateZ(24px) scale(1.08)' },
            { transform: 'translateZ(0) scale(1)' },
          ],
          {
            duration: 480,
            delay: idx * 18,
            easing: 'cubic-bezier(.2,.9,.2,1)',
          }
        )
      })
    })
  }, [])
  const projects = [
    {
      title: 'Atlas AI',
      description: 'An AI developed for making it more personalized and learning how the mind of an AI actually works. Simplicity mixed with Professionalism and Creativity, powered by our latest model, Thor 1.1.',
      link: 'https://atlas-ai-zeta.vercel.app/',
      gradient: 'gradient-1'
    },
    {
      title: 'Quantum Web Solutions',
      description: 'A full suite of professional services with slick, elegant UI! Comprehensive web solutions for modern businesses.',
      link: 'https://quantumwebsolutions.netlify.app/',
      gradient: 'gradient-2'
    },
    {
      title: 'Arcade Hub',
      description: 'An interactive gaming platform featuring a collection of engaging arcade games and entertainment experiences.',
      link: 'https://arcade-indol-six.vercel.app/',
      gradient: 'gradient-3'
    },
    {
      title: 'GitHub',
      description: 'Explore my code repositories, contributions, and open-source projects. Researching AI and Quantum computing.',
      link: 'https://github.com/ayaan-rulhania',
      gradient: 'gradient-4'
    },
    {
      title: 'AllPoetry',
      description: 'A collection of my poetry and creative writing. Exploring emotions, thoughts, and stories through verse and prose.',
      link: 'https://allpoetry.com/Ayaan_Rulhania',
      gradient: 'gradient-1'
    },
    {
      title: 'Cricket Profile',
      description: 'My cricket career and statistics at Blazers Cricket Academy. Passionate about the sport and dedicated to continuous improvement.',
      link: 'https://cricclubs.com/BlazersCricketAcademy/viewPlayer.do?playerId=5175263&clubId=1004797',
      gradient: 'gradient-2'
    }
  ]

  return (
    <div className="app">
      <div className="animated-background"></div>
      
      <div className="container">
        <header className="header">
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img src={profileImage} alt="Ayaan Rulhania" className="profile-image" />
              <div className="profile-glow"></div>
            </div>
            <h1 className="name-title menu-title">
              <span className="name-text" ref={nameTitleRef}>Ayaan Rulhania</span>
            </h1>
            <p className="tagline">🔥 Adding to my Infinite Aura.</p>
            <p className="bio">
              A creative developer, poet, and athlete passionate about building innovative solutions, 
              expressing through words, and excelling on the cricket field. Exploring the intersection 
              of technology, art, and sports in everything I do.
            </p>
            <div className="email-section">
              <a href="mailto:rulhaniachotu@gmail.com" className="email-link">
                <span className="email-icon">✉️</span>
                rulhaniachotu@gmail.com
              </a>
            </div>
          </div>
        </header>

        <main className="main-content">
          <h2 className="section-title menu-title">
            <span className="title-text" ref={sectionTitleRef}>My Works</span>
          </h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-card game-card ${project.gradient}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="card-title game-name">{project.title}</h3>
                <p className="card-description game-description">{project.description}</p>
              </a>
            ))}
          </div>
        </main>

        <footer className="footer">
          <p>© 2026 Ayaan Rulhania. Built with React & Modern CSS</p>
        </footer>
      </div>
    </div>
  )
}

export default App
