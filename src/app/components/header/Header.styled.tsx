import styled, { css } from 'styled-components';
interface Props {
  theme?: any;
  ref?: any;
  isSearchOpen: boolean;
}

const HeaderStyled = styled.div`
  ${({ theme, isSearchOpen }: Props) => {
    return css`
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 9;
      transition: margin-right 280ms ease;
      @media ${theme.mq.laptop} {
        margin-bottom: 40px;
      }
      .header__search-input {
        display: none;
        background-color: ${theme.colors.secondary};
        border: 1px solid ${theme.colors.secondary};
        color: ${theme.colors.neutral_white};
      }
      .header__logo {
        align-self: center;
        padding: 16px 0 0 16px;
        @media ${theme.mq.laptop} {
          padding: 24px 0 0 80px;
        }
      }
      .header__actions {
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        align-items: stretch;
        background: ${theme.colors.neutral_white};
        filter: drop-shadow(0px 16px 24px rgba(56, 33, 146, 0.07));
        height: 64px;
        @media ${theme.mq.laptop} {
          height: 80px;
        }
      }
      .focus-lock {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      ${isSearchOpen &&
        css`
          position: relative;
          top: 40px;
          margin-right: -122px;
          @media ${theme.mq.laptop} {
            margin-right: 0;
          }
          .header__search {
            justify-content: flex-end;
            margin-right: 0;
            @media ${theme.mq.laptop} {
              margin-right: 0;
            }
          }
        `}
    `;
  }};
`;

export default HeaderStyled;
