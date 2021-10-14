import React from 'react'
import Rowpost from '../loggedHome/row/row'
import { actionMovies, animation, fantasy, horror, originals } from '../constants/constants'
import Banner from '../loggedHome/Banner/Banner'



export default function Browse() {
    return (
        <div>
        
        <Banner/>
        <Rowpost url={originals} title="Netflix Originals" />
        <Rowpost url={actionMovies} title="Action Movies"  isSmall />  
        <Rowpost url={horror} title="Horror Movies"  isSmall /> 
        <Rowpost url={animation} title="Animation Movies"  isSmall /> 
        <Rowpost url={fantasy} title="Fantasy Movies"  isSmall />
        </div>
    )
}

