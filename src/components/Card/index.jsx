import { useEffect } from "react"
import MovieIcon from '../../assets/movie-icon.svg'
import AwardIcon from '../../assets/award-icon.svg'
import Container from "./styles"

function Card({ movieData }) {
    return (
        <Container>
            <div className="image-logo">
                <img src={MovieIcon} alt="Movie Icon" />
            </div>

            <div className="container-items">

                <div className="wrapper-items">
                    <h3>{movieData.name}</h3>
                    <p>{movieData.runtimeInMinutes} min</p>
                </div>

                <div className="wrapper-award">
                    <img src={AwardIcon} alt="Award Icon" />
                    <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
                </div>

                <div className="wrapper-budget">
                    <div>
                        <h4>Budget</h4>
                        <p>${movieData.budgetInMillions}M</p>

                    </div>
                    <div>
                        <h4>Revenue</h4>
                        <p>${movieData.boxOfficeRevenueInMillions}M</p>

                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Card