import { transparentize } from 'polished';
import styled from 'styled-components';

const SideBarS = styled.div`
  .null-container {
    background-color: ${({ theme }) => transparentize(0.3, theme.modal.windowBackground)};
    border: 0;
    height: calc(100vh - 48px);
    left: 0;
    position: absolute;
    top: 48px;
    z-index: 1;
    width: 100%;

    :hover {
      cursor: default;
    }
  }

  aside {
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 48px);
    left: ${({ active }) => (active ? 0 : '-200px')};
    padding-top: 8px;
    position: absolute;
    transition: left 0.3s ease;
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
          transition: all 0.5s ease;
          cursor: pointer;
        }
  
        a, .aside-btn, .color-handle {
          align-items: center;
          background-color: transparent;
          border: 0;
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

        @media(max-width: 768px) {
          .color-handle:active .colors-container {
            display: flex;
          }
        }
      }
    }
  }
`;

export default SideBarS;
