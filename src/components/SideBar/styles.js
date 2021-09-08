import styled from 'styled-components';
import { shade } from 'polished';

const SideBarS = styled.aside`
  background-color: ${({ theme }) => shade(0.3, theme.colors.primary)};
  bottom: 0;
  left: 0;
  padding-top: 12px;
  position: fixed;
  transition: width 0.5s ease;
  top: 0;
  width: ${({ active }) => (active ? '160px' : '65px')};
  z-index: 1;

  button {
    align-items: center;
    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    justify-content: center;
    right: 0;
    padding-top: 4px;
    position: absolute;
    width: 50px;
  }

  .logo {
    margin-left: 16px;
  }

  .sidebar-icon {
    margin-right: 8px;
  }

  ul {
    width: 100%;
    margin-top: 50px;
    padding: 0;

    li {
      height: 50px;
      list-style-type: none;
      padding: 0 8px 0 16px;
      margin: 0;
      position: relative;
      width: 100%;

      a {
        align-items: center;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.text};
        display: flex;
        font-size: 16px;
        height: 100%;
        overflow-x: hidden;
        padding: 0 8px;
        text-decoration: none;
        width: 100%;

        :hover {
          background-color: ${({ theme, active }) => active && theme.colors.background};
          transition: all 0.3s ease-in-out;
        }

        .sidebar-icon {
          min-width: 16px;
        }

        .my-tooltip {
          background-color: ${({ theme }) => theme.colors.background};
          border-radius: 3px;
          box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
          height: 30px;
          left: 50px;
          line-height: 30px;
          opacity: 0;
          pointer-events: none;
          position: absolute;
          text-align: center;
          transform: translateY(-50%);
          transition: 0s;
          top: 0;
          width: 100px;
        }

        :hover .my-tooltip {
          opacity: ${({ active }) => !active && 1};
          transition: all 0.3s ease-in-out;
          top: 50%;
        }
      }
    }
  }
`;

export default SideBarS;
