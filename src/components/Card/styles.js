import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 5px;

       .image-logo{
        background: #abbbcc;
        height: 160px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px 5px 0px 0px;
    }

    .container-items{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        padding: 20px;

        .wrapper-items{
            h3{
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 8px;
                height: 54px;
            }
        }

        .wrapper-award{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 14px 0px;

            p{
                font-size: 14px;
            }
        }

        .wrapper-budget{
            display: flex;
            justify-content: flex-start;
            gap: 40px;

            h4{
                font-weight: 600;
            }
        }
    }
    
 
`

export default Container