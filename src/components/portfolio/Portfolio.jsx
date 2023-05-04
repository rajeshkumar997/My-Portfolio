import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'IMDB Clone',
    github: 'https://github.com/rajeshkumar997/IMDB-Clone',
    demo: 'https://imdb-clone-kappa.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Modern Payment Website',
    github: 'https://github.com/rajeshkumar997/HooBank-React-Project',
    demo: 'https://hoo-bank-react-project.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'YouTube Clone',
    github: 'https://github.com/rajeshkumar997/Youtube_Clone',
    demo: 'https://youtube-clone-nine-delta.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Grocery Store',
    github: 'https://github.com/rajeshkumar997/My-Projects/tree/main/Grocery%20Store%20Website',
    demo: 'https://grocerystore24.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Flipkart Clone',
    github: 'https://github.com/rajeshkumar997/Flipkart-Clone',
    demo: 'https://flipcart-clone-sable.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Parallax Website',
    github: 'https://github.com/rajeshkumar997/My-Projects/tree/main/Parallax%20Website',
    demo: 'https://venerable-jelly-a34910.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              < article key={id} className='portfolio__item' >
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio