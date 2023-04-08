import styled, { keyframes } from 'styled-components';
import { theme } from '../constants/theme';

const Square = styled.div`
width: 50%;
height: 50%;
position: absolute;
animation: 20s ease infinite;
`;

const colorAnimation = keyframes`
0% { background-color: ${theme.colors.Glaucous.standard} }
25% { background-color: ${theme.colors.RosyBrown.standard}; }
50% { background-color: ${theme.colors.CambridgeBlue.standard} }
75% { background-color: ${theme.colors.NavajoWhite.standard} }
100% { background-color: ${theme.colors.Lilac.standard}; }
`;

const TopLeftSquare = styled(Square)`
background-color: ${theme.colors.Glaucous.standard};
top: 0;
left: 0;
animation-name: ${colorAnimation};
`;

const TopRightSquare = styled(Square)`
background-color: ${theme.colors.RosyBrown.standard};
top: 0;
right: 0;
animation-name: ${colorAnimation};
        animation-delay: 4s;
`;

const BottomLeftSquare = styled(Square)`
background-color: ${theme.colors.CambridgeBlue.standard};
bottom: 0;
left: 0;
animation-name: ${colorAnimation};
        animation-delay: 8s;
`;

const BottomRightSquare = styled(Square)`
background-color: ${theme.colors.NavajoWhite.standard};
bottom: 0;
right: 0;
animation-name: ${colorAnimation};
        animation-delay: 12s;
`;

const CenteredText = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 2rem;
color: ${theme.text};
`;

const Container = styled.div`
width: 100vh;
`;


const Button = styled.button`
        margin-top: 1rem;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        background-color: #0099cc;
        color: white;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        &:hover {
          background-color: #0077b3;
        }
        &:active {
          transform: scale(0.95);
        }
      `;
const LandingPage = () => {
  return (
    <Container>
      <TopLeftSquare />
      <TopRightSquare />
      <BottomLeftSquare />
      <BottomRightSquare />
      <CenteredText>
        <h1>PixelSprint</h1>
        <p>A powerful game development management software.</p>
        <Button>Get Started</Button>
      </CenteredText>
    </Container>
  );
};

export default LandingPage;
