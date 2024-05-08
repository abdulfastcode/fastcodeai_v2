"use client"
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

const Contact = () => {
    const { setIsActive } = useGlobalContext();

    useEffect(() => {
        setIsActive(false)
    }, [])
    return (
        <div className='relative'>
            <h1 className='relative z-20'>Contact</h1>
        </div>
    )
}

export default Contact
