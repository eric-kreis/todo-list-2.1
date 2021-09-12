import { shade } from 'polished';
import styled from 'styled-components';

const PhotoSettingS = styled.div`
  align-items: center;
  border-radius: 3px;
  display: flex;
  margin: 0 auto 20px;
  padding: 0 16px;

  .photo-container {
    align-items: center;
    background-color: ${({ theme }) => shade(0.4, theme.colors.primary)};
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 100px;
    margin: 0 16px 0 16px;
    overflow: hidden;
    width: 100px;

    img {
      height: 100%;
      width: 100%;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .file-settings {
    display: flex;
    justify-content: space-evenly;
    margin-left: 16px;
    width: 120px;
  }

  label, .delete-img-button {
    align-items: center;
    border: none;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.input};
    display: flex;
    justify-content: center;

    * {
      font-size: 30px;
    }
  }

  label:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }

  .delete-img-button {
    background-color: transparent;

    :hover {
      color: red;
    }
  }

  #img-input {
    opacity: 0;
    position: absolute;
    left: -99999px;
  }
`;

export default PhotoSettingS;
