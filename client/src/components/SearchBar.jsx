import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/SearchBar.css';
import { SiAudi, SiBmw, SiChevrolet, SiMercedes, SiToyota } from 'react-icons/si';
import Select from 'react-select';
const SearchBar = () => {
    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        price: '',
        keyword: '',
    });

    const [yearOptions, setYearOptions] = useState([]);
    const makeOptions = [
        { value: 'BMW', label: <><SiBmw /> BMW</> },
        { value: 'Mercedes', label: <><SiMercedes /> Mercedes</> },
        { value: 'Audi', label: <><SiAudi /> Audi</> },
        { value: 'Toyota', label: <><SiToyota /> Toyota</> },
        { value: 'Chevy', label: <><SiChevrolet /> Chevy</> },
    ];
    const [modelOptions, setModelOptions] = useState([]);
    const [priceOptions, setPriceOptions] = useState([]);

    //useEffect(() => {
    //    // Fetch Year options
    //    axios.get('http://localhost:8000/api/cars/years')
    //        .then(response => setYearOptions(response.data))
    //        .catch(error => console.error('Error fetching Year options:', error));

    //    // Fetch Make options
    //    axios.get('http://localhost:8000/api/cars/makes')
    //        .then(response => setMakeOptions(response.data))
    //        .catch(error => console.error('Error fetching Make options:', error));

    //    // Fetch Model options
    //    axios.get('http://localhost:8000/api/cars/models')
    //        .then(response => setModelOptions(response.data))
    //        .catch(error => console.error('Error fetching Model options:', error));

    //    // Fetch Price options
    //    axios.get('http://localhost:8000/api/cars/prices')
    //        .then(response => setPriceOptions(response.data))
    //        .catch(error => console.error('Error fetching Price options:', error));
    //}, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/cars/', formData);
            console.log('Form submitted successfully:', response.data);
            // You can add further actions after successful submission
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error
        }
    };

    return (
        <div className="search-bar">
            <h2 className='search-header'>Find Your Next Car</h2>
            <form className="search-options" onSubmit={handleSubmit}>
                <select name="year" value={formData.year} onChange={handleChange}>
                    <option value="">Year</option>
                    {yearOptions.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <div className="">
                    <Select
                    className='make'
                        name="make"
                        value={makeOptions.find((option) => option.value === formData.make)}
                        onChange={(selectedOption) => handleChange('make', selectedOption.value)}
                        options={makeOptions}
                    />
                </div>

                <select name="model" value={formData.model} onChange={handleChange}>
                    <option value="">Model</option>
                    {modelOptions.map(model => (
                        <option key={model} value={model}>{model}</option>
                    ))}
                </select>

                <select name="price" value={formData.price} onChange={handleChange}>
                    <option value="">Price</option>
                    {priceOptions.map(price => (
                        <option key={price} value={price}>{price}</option>
                    ))}
                </select>

                <input
                    className='text-field'
                    type="text"
                    placeholder="VIN or Keyword"
                    name="keyword"
                    value={formData.keyword}
                    onChange={handleChange}
                />

                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
