import styled from 'styled-components';
import colors from '../lib/styles/colors';
import { ReactComponent as MaskICO } from '../assets/mask.svg';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  width: 100%;
  height: 80px;
  background: ${colors.green[2]};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  svg {
    width: 40px;
    fill: #fff;
  }

  .header-logo {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0.07em;
    line-height: 40px;
    color: #fff;

    &:hover {
      /* color: ${colors.trans[1]};
      .header-point {
        color: #fff;
      } */
      visibility: hidden;
      &::after {
        visibility: visible;
        content: 'PM';
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 0.15em;
        color: #fff;
        position: relative;
        left: -130px;
      }
    }

    .header-point {
      font-weight: 700;
      font-size: 48px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <MaskICO />
      <Link to="/">
        <h1 className="header-logo">
          <span className="header-point">P</span>ut on a{' '}
          <span className="header-point">M</span>ask!
        </h1>
      </Link>
    </HeaderBlock>
  );
};

export default Header;
