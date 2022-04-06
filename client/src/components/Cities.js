import React from 'react'
import { LoadCities } from '../store/actions/CitiesAttracAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const mapStateToProps = ({ cityState }) => {
  return { cityState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => dispatch(LoadCities())
  }
}

function Cities(props) {
  //console.log(props)
  useEffect(() => {
    props.fetchCities()
  }, [])

  //console.log(props.cityState)

  return (
    <div className="city-container">
      {props.cityState.cities.map((city) => (
        <div key={city._id} className="city-itmes">
          {/* <Link to='/attractions'> */}
          <img className="city-image" src={city.image} alt="city"></img>
          <h2>{city.cityName}</h2>
          <p>{city.description}</p>
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
