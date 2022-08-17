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
    position: relative;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0.07em;
    line-height: 40px;
    color: #fff;
    transition: all .5s;

    &::after {
        opacity: 0;
        content: 'P M';
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 0.15em;
        color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: .5s;
      }

    &:hover {
      color: transparent;
      &::after {
        opacity: 1;
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
