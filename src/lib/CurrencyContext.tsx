"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Country, COUNTRIES } from './countries';

interface CurrencyContextType {
    selectedCountry: Country | null;
    currencyPref: 'native' | 'USD';
    formatPrice: (priceInUSD: number) => string;
    setCurrencyPref: (pref: 'native' | 'USD') => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [currencyPref, setCurrencyPref] = useState<'native' | 'USD'>('native');

    useEffect(() => {
        const country = localStorage.getItem('user_country');
        const pref = localStorage.getItem('user_currency_pref') as 'native' | 'USD';

        if (country) setSelectedCountry(JSON.parse(country));
        if (pref) setCurrencyPref(pref);
        else setSelectedCountry(COUNTRIES[0]); // Default to Pakistan
    }, []);

    const formatPrice = (priceInUSD: number) => {
        if (currencyPref === 'USD' || !selectedCountry) {
            return `$${priceInUSD.toFixed(2)}`;
        }
        const converted = priceInUSD * selectedCountry.rate;
        return `${selectedCountry.symbol} ${converted.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    };

    const updatePref = (pref: 'native' | 'USD') => {
        setCurrencyPref(pref);
        localStorage.setItem('user_currency_pref', pref);
    }

    return (
        <CurrencyContext.Provider value={{ selectedCountry, currencyPref, formatPrice, setCurrencyPref: updatePref }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) throw new Error('useCurrency must be used within a CurrencyProvider');
    return context;
};
