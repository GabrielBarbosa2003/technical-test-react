import { useEffect, useRef, useState } from 'react'
import ConvIcon from '../../assets/conv-icon.svg'
import { Container, TopHeader } from './styles'

function Header({ movies, setFilteredMovies }) {
    const inputValue = useRef()
    const [aveValues, setAveValues] = useState({
        runtime: 0,
        budget: 0
    })

  


    function aveMovies(movies) {

        const runtime = movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) / movies.length
        const budget = movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0) / movies.length

        setAveValues({
            runtime,
            budget
        })

    }

      useEffect(() => {
        if(movies && movies.length > 0){
            aveMovies(movies)
        }
        
    },[movies])

    function inputChange() {
        const newMovies = movies.filter(movie => movie.name.toLowerCase().includes(inputValue.current.value.toLowerCase()))

        aveMovies(newMovies)
        setFilteredMovies(newMovies)
    }


    return (
        <>
            <TopHeader>
                <img src={ConvIcon} alt='conv icon' />
                <p>Senior Front End Test</p>
            </TopHeader>
            <Container>
                <h1>Lord of the Rings Movies</h1>
                <div className='ave-values'>
                    <div>
                        <p>Ave. movie runtime: {aveValues.runtime} min</p>
                        <p>Ave. movie budget: ${aveValues.budget}M</p>
                    </div>
                    <input placeholder='Filter movies by name' ref={inputValue} onChange={inputChange} />
                </div>
            </Container>
        </>


    )
}

export default Header