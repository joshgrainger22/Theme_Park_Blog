import React from 'react'
import { LoadCities } from '../store/actions/CitiesAttracAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


const mapStateToProps = ({ cityState }) => {
  return  { cityState }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchCities: () => dispatch(LoadCities())
  }
}

function Cities(props) {

  useEffect(()=> {
    props.fetchCities()
}, [])

  return (
    <div>Cities</div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)