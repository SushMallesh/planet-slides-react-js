import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const renderPlanetSlides = () => (
    <Slider>
      {planetsList.map(eachItem => (
        <PlanetItem planetDetails={eachItem} key={eachItem.id} />
      ))}
    </Slider>
  )

  return (
    <div className="slider-container">
      <h1 className="heading">PLANETS</h1>
      {renderPlanetSlides()}
    </div>
  )
}

export default PlanetsSlider
