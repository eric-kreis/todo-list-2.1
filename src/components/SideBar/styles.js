import { transparentize } from 'polished';
import styled from 'styled-components';

const SideBarS = styled.div`
  .null-container {
    background-color: ${({ theme }) => transparentize(0.3, theme.modal.windowBackground)};
    border: 0;
    left: 0;
    bottom: 44px;
    position: absolute;
    top: 48px;
    z-index: 1;
    width: 100%;

    :hover {
      cursor: default;
    }

    @media(max-width: 460px) {
      bottom: 38px;
    }

    @media(max-width: 380px) {
      bottom: 35px;
    }

    @media(max-width: 375px) {
      top: 54px;
    }
  }

  aside {
    background-color: ${({ theme }) => theme.colors.primary};
    bottom: 44px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: ${({ active }) => (active ? 0 : '-200px')};
    position: absolute;
    transition: left 0.5s ease;
    top: 48px;
    width: 200px;
    z-index: 2;
  
    .logo {
      margin-left: 16px;
    }
  
    .sidebar-icon {
      margin-right: 16px;
    }
  
    ul {
      width: 100%;
      padding: 0;
  
      li {
        height: 50px;
        color: ${({ theme }) => theme.colors.text};
        list-style-type: none;
        margin: 0;
        position: relative;
        width: 100%;

        :hover {
          background-color: ${({ theme }) => theme.colors.background};
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
  
        a, .aside-btn, .color-handle {
          align-items: center;
          color: ${({ theme }) => theme.colors.text};
          display: flex;
          font-size: 16px;
          height: 100%;
          padding: 0 16px;
          text-decoration: none;
          width: 100%;
        }

        .color-handle:hover .colors-container {
          display: flex;
        }
      }
    }

    @media(max-width: 460px) {
      bottom: 38px;
    }

    @media(max-width: 380px) {
      bottom: 35px;
    }

    @media(max-width: 375px) {
      top: 54px;
    }
  }
`;

export default SideBarS;
