import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                If you decide to buy a Disney Plus Premier Access title, you need to pay a one-off fee to gain access to the new movie. The fee is currently $30 for the additional movie. That is a set fee. No matter which movie is on Premier Access, the price has never changed.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.png");
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background: #0483ee;
    }
`
const Description = styled.p`
    font_size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`
const CTALogoTwo = styled.img`
    width: 90%;

`