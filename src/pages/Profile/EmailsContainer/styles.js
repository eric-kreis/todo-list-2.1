import styled from 'styled-components';

const EmailsContainerS = styled.div`
  p {
    text-align: center;
    font-size: large;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  li {
    text-align: center;
    list-style-type: none;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-bottom: 4px;
    padding: 0;
    padding-left: 32px;
    text-align: left;
  }
`;

export default EmailsContainerS;
