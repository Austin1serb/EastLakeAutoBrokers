import React from 'react';
import '../Styles/BodyTypes.css';

const BodyTypes = () => {
    return (
        <div className="body-types-container">
            <div className="body-types-header">
                <hr className='line' />
                <h2 className="body-types-title">Body Styles</h2>
                <hr className='line' />
            </div>
            <div className="body-types-grid">
                <div className="body-type-box">
                    <a href="/sedans" >
                        <img src={require('../assets/sedan1.jpeg')} alt="Sedans" className='image-default' />
                        <img src={require('../assets/sedan.jpeg')} alt="Sedans" className="image-hover" />
                    </a>
                    <p >Sedans</p>

                </div>
                <div className="body-type-box">
                    <a href="/coupes">
                        <img src={require('../assets/coupe1.jpeg')} alt="Sedans" className='image-default' />
                        <img src={require('../assets/coupe.jpeg')} alt="Sedans" className="image-hover" />
                    </a>
                    <p>Coupes</p>
                </div>
                <div className="body-type-box">
                    <a href="/wagons">
                        <img src={require('../assets/wagon1.jpeg')} alt="Sedans" className='image-default' />
                        <img src={require('../assets/wagon.jpeg')} alt="Sedans" className="image-hover" />
                    </a>
                    <p>Wagons</p>
                </div>
                <div className="body-type-box">
                    <a href="/convertibles">
                        <img src={require('../assets/convertible1.jpeg')} alt="Sedans" className='image-default' />
                        <img src={require('../assets/convertible.jpeg')} alt="Sedans" className="image-hover" />
                    </a>
                    <p>Convertibles</p>
                </div>
                <div className="body-type-box">
                    <a href="/trucks">
                        <img src={require('../assets/truck1.jpeg')} alt="Sedans" className='image-default' />
                        <img src={require('../assets/truck.jpeg')} alt="Sedans" className="image-hover" />
                    </a>
                    <p>Trucks</p>
                </div>
                <div className="body-type-box">
                    <a href="/suvs">

                        <img src={require('../assets/suv1.jpeg')} alt="Sedans" className='image-default' />
                        <img src={require('../assets/suv.jpeg')} alt="Sedans" className="image-hover" />

                    </a>
                    <p>SUVs</p>
                </div>
                <div className="body-type-box">
                    <a href="/minivans">

                        <img src={require('../assets/minivan1.jpeg')} alt="Sedans" className='image-default' />
                        <img src={require('../assets/minivan.jpeg')} alt="Sedans" className="image-hover" />

                    </a>
                    <p>Minivans</p>
                </div>
                <div className="body-type-box">
                    <a href="/compact-suvs">

                        <img src={require('../assets/crossover1.jpeg')} alt="Sedans" className='image-default' />
                        <img src={require('../assets/crossover.jpeg')} alt="Sedans" className="image-hover" />

                    </a>
                    <p>Compact SUVs</p>
                </div>
            </div>
        </div>
    );
};

export default BodyTypes;
