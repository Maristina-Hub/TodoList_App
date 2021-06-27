import React from 'react'
import './headerStyled.js'
import Title  from './headerStyled.js'

const Header = ({data: { brandImg, brandName } }) => {
    return(
        <>
        <Title>{brandName}</Title>
        <Title>{brandImg}</Title>
        </>
    )
}

export default Header