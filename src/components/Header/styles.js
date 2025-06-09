import styled from "styled-components";

export const TopHeader = styled.div `
    background: #4C16C9;
    height: 56px;
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 0 18px;
    justify-content: space-between;

    p{
        color: #ffffff;
    }


`

export const Container = styled.div`
    width: 100%;
    max-width: 1008px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 40px 0;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 32px;

    .ave-values{
        display: flex;
        justify-content: space-between;

        input{
            height: 40px;
            width: 200px;
            border-radius: 5px;
            border: 2px solid #f0f0f0;
            padding-left: 5px;
        }
    }

    @media (max-width: 480px) {
        padding: 0px 18px;
        padding-bottom: 20px;
            h1{
                font-size: 24px;
            }
            .ave-values{
                flex-direction: column;
                p{
                    font-size: 14px;
                }
                input{
                    margin-top: 10px;
                    width: 100%;
                }
            }
    }

`