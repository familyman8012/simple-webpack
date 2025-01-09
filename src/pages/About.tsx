import styled from "@emotion/styled";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`;

function About() {
  return (
    <Container>
      <Title>About Us</Title>
      <Description>
        This is a simple about page to demonstrate routing in our React application.
      </Description>
    </Container>
  );
}

export default About;
