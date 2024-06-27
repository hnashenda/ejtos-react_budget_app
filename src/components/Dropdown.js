import React, { useState, useRef, useEffect } from 'react';
const currencyOptions = {
    'USD': { symbol: '$', name: 'Dollar' },
    'GBP': { symbol: '£', name: 'Pound' },
    'EUR': { symbol: '€', name: 'Euro' },
    'INR': { symbol: '₹', name: 'Ruppee' }
};

const Dropdown = ({ selectedCurrency, onCurrencyChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (currency) => {
        onCurrencyChange(currency);
        setIsOpen(false);
    };
    return (
        <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
        <div
            onClick={handleDropdownClick}
            style={{
                cursor: 'pointer',
                display: 'inline-block',
                padding: '10px',
                color: 'white',
                border: '1px solid #ccc',
                backgroundColor:'#36e836',
                borderRadius: '4px'
            }}
        >
           Currency: ({currencyOptions[selectedCurrency]?.symbol} {currencyOptions[selectedCurrency]?.name}) ▼
        </div>
        {isOpen && (
            <ul
                style={{
                    listStyleType: 'none',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: 'green',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%',
                }}
            >
                {Object.keys(currencyOptions).map(currency => (
                    <li
                        key={currency}
                        onClick={() => handleOptionClick(currency)}
                        style={{
                            padding: '10px',
                            cursor: 'pointer',
                            borderBottom: '1px solid #ccc',
                            backgroundColor: selectedCurrency === currency ? '#f0f0f0' : '#36e836',
                        }}
                    >
                        {currencyOptions[currency].symbol} {currencyOptions[currency].name}
                    </li>
                ))}
            </ul>
        )}
    </div>
);
};

export { Dropdown }
