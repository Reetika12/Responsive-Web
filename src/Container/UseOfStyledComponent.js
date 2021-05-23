import React, { Component } from 'react'
import styled from "styled-components"

 class UseOfStyledComponent extends Component {
    render() {
        return (
            <Container>
                <YourInvestmentGrid borderRadius="10px">
                    Click me
                </YourInvestmentGrid>
                <br/>
                <YourInvestmentGrid borderRadius="10px">
                    demo
                </YourInvestmentGrid>
                <Paragraph>
                    The very first man on earth existed. and  bring out the things which we can see today and existed today.
                </Paragraph>
            </Container>
        )
    }
}

export default UseOfStyledComponent

const YourInvestmentGrid = styled.div`
    padding: 5px 20px;
    width:200px;
    height:25px;
    border-radius:${props => props.borderRadius};
    background:#4682b4;
    color:#ffffff;
`
const Container = styled.div`
    color:#ffffff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (max-width: 768px) {
        flex-direction: row;
    }
`
const Paragraph = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:400px;
    height:100px;
    color: #000000;
`