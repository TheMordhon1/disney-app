import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <LogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>get all there</SignUp>
          <Description>
            Disney+ Hotstar is the dedicated streaming home for the biggest
            global and Indonesian hits, all in one place. It brings together
            your favourite shows, Hollywood movies and award-winning content
            from Disney, Marvel, Star Wars, Pixar, National Geographic, and many
            more, as well as exclusive Indonesian premieres, and your favourite
            Indonesian movies from leading Indonesian studios.
          </Description>
          <LogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const LogoOne = styled.img`
  max-width: 400px;
  min-height: 1px;
  display: block;
  width: 100%;
  margin: 0 auto 12px auto;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: white;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;

const LogoTwo = styled.img`
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  margin: 0 auto 12px auto;
`;

export default Login;
