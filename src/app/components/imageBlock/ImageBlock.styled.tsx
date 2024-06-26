import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      overflow: hidden;
      max-width: 840px;
      width: 100%;
      margin: 0 auto;
      padding: 32px 0 0 0;
      @media ${theme.mq.tablet} {
        padding: 32px 32px 0 0;
      }
      .image-block__wrapper {
        position: relative;
        margin: 0;
        width: 100%;
        height: 100%;
        &:before {
          content: '';
          position: absolute;
          top: -32px;
          right: -50%;
          width: 100%;
          height: 100%;
          z-index: 3;
          background-image: url('/static/img/svgs/shapes/image-block-shape.svg');
          background-repeat: no-repeat;
        }
        @media ${theme.mq.tablet} {
          &:before {
            right: -32px;
            background-position: top right;
          }
        }
      }
      .image-block__image {
        display: block;
        object-fit: cover;
        max-width: 100%;
        max-height: 480px;
        margin: 0 auto;
      }
      .image-block__text {
        margin: 16px 0 0 0;
        text-align: left;
        color: var(--semantic-type-secondary);
        ${theme.typeStyles.smallCopy};
      }
    `;
  }};
`;
