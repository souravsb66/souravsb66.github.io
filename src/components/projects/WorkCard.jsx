import React from 'react'

const WorkCard = ({image, title, category}) => {
  return (
    <div className="work__card project-card">
        <img src={image} className='work__img' />
        <h3 className='work__title'>{title}</h3>
        <a href="#" className='work__button'>
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorkCard