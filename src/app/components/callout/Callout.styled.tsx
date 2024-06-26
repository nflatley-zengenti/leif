import styled, { css } from 'styled-components';

const CalloutStyled = styled.div`
  ${({ theme }) => {
    return css`
      background-color: rgba(195, 198, 222, 0.1);
      padding: 16px;

      &[data-type='success'] {
        box-shadow: inset 6px 0px 0px var(--semantic-brand-primary);
      }

      &[data-type='warning'] {
        box-shadow: inset 6px 0px 0px var(--semantic-error-primary);
      }

      &[data-type='note'] {
        box-shadow: inset 6px 0px 0px var(--semantic-link-primary);
      }

      .callout__title {
        ${theme.typeStyles.h5};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: var(--semantic-type-primary);
        display: block;
        margin-bottom: 8px;
      }
      .callout__text {
        display: block;
        margin: 0;
        > * {
          margin: 0 0 8px 0;
          &:last-child {
            margin: 0;
          }
        }
      }
    `;
  }};
`;

export default CalloutStyled;
