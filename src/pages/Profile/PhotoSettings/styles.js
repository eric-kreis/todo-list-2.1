import styled from 'styled-components';

const PhotoSettingS = styled.div`
  align-items: center;
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto 20px;
  padding: 0 16px;
  width: 100%;

  .photo-container {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
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
    flex-wrap: wrap;
    justify-content: space-between;
    height: 70px;
    width: 70px;
  }

  label, .icon-btn {
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.input};
    display: flex;
    justify-content: center;

    * {
      font-size: 26px;
    }

    :hover {
      cursor: pointer;
      color: #F7B400;
    }

    :hover.gallery {
      color: #3DA4ED;
    }

    :hover.delete-img-button {
      color: #BD282C;
    }

    :hover.update-credentials {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  #img-input {
    opacity: 0;
    position: absolute;
    left: -99999px;
  }
`;

export default PhotoSettingS;
