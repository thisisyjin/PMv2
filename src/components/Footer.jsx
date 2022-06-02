import styled from 'styled-components';
import colors from '../lib/styles/colors';

const FooterBlock = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${colors.gray[0]};
  color: ${colors.gray[2]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  .links {
    display: flex;

    li {
      margin-right: 60px;
    }
  }
`;

const Ancher = styled.a`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.green[1]};
  &:hover {
    color: ${colors.green[0]};
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <h3>© thisisyjin</h3>
      <ul className="links">
        <li>
          <Ancher href="https://velog.io/@thisisyjin">blog</Ancher>
        </li>
        <li>
          <Ancher href="https://github.com/thisisyjin">github</Ancher>
        </li>
        <li>
          <Ancher href="mailto:thisisyjin@naver.com">contact</Ancher>
        </li>
      </ul>
    </FooterBlock>
  );
};

export default Footer;
