import React from 'react'
import Slideshow from '../components/Slideshow'
import Boxes from './Boxes'
import SearchBar from './SearchBar'
import BodyTypes from './BodyTypes'

const Home = () => {
    return (
        <div className="main-page">
            <Slideshow />
            <Boxes />
            <SearchBar />
            <BodyTypes />
        </div>
    )
}

export default Home