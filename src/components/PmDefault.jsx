import styled from 'styled-components';

const PmDefaultBlock = styled.div`
  width: 400px;
  border-radius: 15px;
  border: 2.5px solid #000;
  text-align: center;
  flex: 1;

  .default-title {
    width: 100%;
    padding: 8px 0;
    font-size: 20px;
    border-bottom: 2.5px solid #000;
    margin-bottom: 14px;
  }

  .default-desc {
    position: relative;
    top: 40%;
  }
`;

const PmDefault = () => {
  return (
    <PmDefaultBlock>
      <h3 className="default-title">Info</h3>
      <p className="default-desc">지역구를 선택하세요.</p>
    </PmDefaultBlock>
  );
};

export default PmDefault;
