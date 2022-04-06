import { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadAttractions } from '../store/actions/CitiesAttracAction'
import React from 'react'

const mapStateToProps = ({ attractionState }) => {
  return { attractionState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAttractions: () => dispatch(LoadAttractions())
  }
}

const Attractions = (props) => {
  useEffect(() => {
    props.fetchAttractions()
  }, [])

  //console.log('Attract State', props.attractionState)

  return (
    <div>
      <h3>Attractions</h3>
      <div>
        {props.attractionState.attractions.attractions.map((attraction) => (
          <ul key={attraction._id}>
            <h4>{attraction.name}</h4>
            <h5>{attraction.location}</h5>
            <img src={attraction.image} alt="Attraction" />
          </ul>
        ))}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Attractions)
