// BrandIcon.js
import React from 'react';
import { SiAudi, SiBmw, SiMercedes, SiToyota, SiFord } from 'react-icons/si';

const BrandIcon = ({ make }) => {
    switch (make) {
        case 'Audi':
            return <SiAudi />;
        case 'BMW':
            return <SiBmw />;
        case 'Mercedes':
            return <SiMercedes />;
        case 'Toyota':
            return <SiToyota />;
        case 'Ford':
            return <SiFord />;
        default:
            return null;
    }
};

export default BrandIcon;
