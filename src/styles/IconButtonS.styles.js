import styled from 'styled-components';

const IconButtonS = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ large, medium }) => {
    if (large) return '24px';
    if (medium) return '20px';
    return '15px';
  }};
  padding: 2px;
  margin: 24px 0 24px 24px;

  :hover {
    color: ${({ add, clear, theme }) => {
    if (add) return '#63BE25';
    if (clear) return 'red';
    return theme.colors.primary;
  }};
  }

  @media(max-width: 560px) {
    font-size: ${({ medium }) => (medium) && '16px'};
  }
`;

export default IconButtonS;
