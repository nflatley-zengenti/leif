import React from 'react';
import ContentHeroStyled from './ContentHero.styled';
import GenericHero, {
  Props as GenericHeroProps,
} from '~/components/genericHero/GenericHero';
import BackButton from '~/components/backButton/BackButton';

export interface Props {
  className?: string;
  hasIllustration?: boolean;
  illustrationProps: GenericHeroProps;
  type: 'hero-image' | 'no-image';
  title: string;
  image: { src: string; alt: string };
}

const ContentHero = ({
  className,
  illustrationProps,
  hasIllustration,
  title,
  image,
  type = 'no-image',
}: Props) => {
  if (hasIllustration) return <GenericHero {...illustrationProps} />;
  return (
    <ContentHeroStyled className={className} data-hero={type}>
      {image?.src && (
        <>
          <div className="content-hero__overlay" />
          <img
            className="content-hero__image"
            src={image.src}
            alt={image?.alt}
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
          <BackButton className="content-hero__nav--back" color="#fff" />
        </>
      )}
      <div className="content-hero__content--outer">
        <div className="content-hero__content--inner">
          <BackButton className="content-hero__nav--back" color="#6E729B" />
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            width="220"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M307.695 41.102c-4.361 0-8.368-1.946-10.725-5.299l-14.025-19.788c-1.061-1.406-2.593-1.622-3.182-1.622s-2.239.108-3.182 1.622l-14.025 19.788c-2.357 3.353-6.365 5.299-10.725 5.299-4.361 0-8.368-1.946-10.725-5.299l-14.025-19.788c-1.061-1.406-2.593-1.622-3.183-1.622-.589 0-2.239.108-3.182 1.622l-14.025 19.788c-2.357 3.353-6.364 5.299-10.725 5.299s-8.368-1.946-10.725-5.299l-14.025-19.788c-1.061-1.406-2.593-1.622-3.182-1.622s-2.239.108-3.182 1.622l-14.025 19.788c-2.357 3.353-6.365 5.299-10.725 5.299-4.361 0-8.368-1.946-10.725-5.299l-14.025-19.788c-1.061-1.406-2.593-1.622-3.183-1.622-.589 0-2.239.108-3.182 1.622L94.962 35.803c-2.357 3.353-6.364 5.299-10.725 5.299-4.36 0-8.368-1.946-10.725-5.299L59.487 16.015c-1.06-1.406-2.593-1.622-3.182-1.622-.59 0-2.24.108-3.182 1.622L39.098 35.803c-2.358 3.353-6.365 5.299-10.725 5.299-4.361 0-8.368-1.946-10.725-5.299L3.623 16.015C2.562 14.609 1.03 14.393.44 14.393c-.589 0-2.239.108-3.182 1.622l-14.025 19.788c-2.357 3.353-6.364 5.299-10.725 5.299-4.36 0-8.368-1.946-10.725-5.299l-20.979-29.52c-1.296-1.947-.707-4.434 1.297-5.623 2.121-1.19 4.832-.65 6.129 1.19l20.978 29.52c1.06 1.406 2.593 1.622 3.182 1.622.59 0 2.24-.108 3.183-1.622l14.024-19.789C-8.044 8.23-4.037 6.283.324 6.283c4.36 0 8.367 1.946 10.725 5.298L25.073 31.37c1.06 1.406 2.593 1.622 3.182 1.622.59 0 2.24-.108 3.182-1.622l14.025-19.79c2.357-3.352 6.364-5.298 10.725-5.298 4.36 0 8.368 1.946 10.725 5.298l14.025 19.79c1.06 1.406 2.593 1.622 3.182 1.622.59 0 2.24-.108 3.183-1.622l14.025-19.789c2.357-3.352 6.364-5.298 10.725-5.298 4.36 0 8.367 1.946 10.725 5.298l14.025 19.789c1.06 1.406 2.592 1.622 3.182 1.622.589 0 2.239-.108 3.182-1.622l14.025-19.789c2.357-3.352 6.364-5.298 10.725-5.298s8.368 1.946 10.725 5.298l14.025 19.789c1.061 1.406 2.593 1.622 3.182 1.622.59 0 2.24-.108 3.183-1.622l14.024-19.789c2.358-3.352 6.365-5.298 10.726-5.298 4.36 0 8.367 1.946 10.725 5.298l14.025 19.789c1.06 1.406 2.593 1.622 3.182 1.622s2.239-.108 3.182-1.622l14.025-19.79c2.357-3.352 6.364-5.298 10.725-5.298s8.368 1.946 10.725 5.298l14.025 19.789c1.061 1.406 2.593 1.622 3.182 1.622.59 0 2.24-.108 3.182-1.622l21.097-29.52c1.296-1.947 4.125-2.38 6.129-1.19 2.121 1.19 2.593 3.784 1.296 5.623l-20.979 29.52c-2.357 3.353-6.364 5.299-10.607 5.299z"
              fill="#77E8C6"
            />
            <path
              d="M307.698 77.002c-4.361 0-8.368-1.946-10.725-5.298l-14.026-19.789c-1.06-1.405-2.592-1.622-3.182-1.622-.589 0-2.239.108-3.182 1.622l-14.025 19.789c-2.357 3.352-6.364 5.299-10.725 5.299s-8.368-1.947-10.725-5.299l-14.025-19.789c-1.061-1.405-2.593-1.622-3.182-1.622s-2.24.108-3.182 1.622l-14.025 19.789c-2.357 3.352-6.365 5.299-10.726 5.299-4.36 0-8.367-1.947-10.725-5.299l-14.025-19.789c-1.06-1.405-2.592-1.622-3.182-1.622-.589 0-2.239.108-3.182 1.622l-14.025 19.789c-2.357 3.352-6.364 5.299-10.725 5.299s-8.368-1.947-10.725-5.299l-14.025-19.789c-1.061-1.405-2.593-1.622-3.182-1.622-.59 0-2.239.108-3.182 1.622L94.965 71.704c-2.358 3.352-6.365 5.299-10.725 5.299-4.361 0-8.368-1.947-10.725-5.299L59.489 51.915c-1.06-1.405-2.592-1.622-3.182-1.622-.589 0-2.239.108-3.182 1.622L39.1 71.704c-2.357 3.352-6.364 5.299-10.725 5.299-4.36 0-8.368-1.947-10.725-5.299L3.625 51.915c-1.06-1.405-2.593-1.622-3.182-1.622-.59 0-2.24.108-3.182 1.622l-14.026 19.789c-2.357 3.352-6.364 5.299-10.725 5.299-4.36 0-8.367-1.947-10.725-5.299l-20.978-29.52c-1.297-1.947-.707-4.434 1.296-5.624 2.122-1.19 4.832-.649 6.129 1.19l20.978 29.52c1.061 1.406 2.593 1.623 3.183 1.623.589 0 2.239-.109 3.182-1.623L-10.4 47.482c2.357-3.352 6.364-5.299 10.725-5.299 4.36 0 8.368 1.947 10.725 5.299L25.075 67.27c1.06 1.406 2.593 1.623 3.182 1.623.59 0 2.24-.109 3.182-1.623l14.025-19.788c2.358-3.352 6.365-5.299 10.725-5.299 4.361 0 8.368 1.947 10.726 5.299L80.939 67.27c1.061 1.406 2.593 1.623 3.183 1.623.589 0 2.239-.109 3.182-1.623l14.025-19.788c2.357-3.352 6.364-5.299 10.725-5.299s8.368 1.947 10.725 5.299l14.025 19.788c1.061 1.406 2.593 1.623 3.182 1.623s2.239-.109 3.182-1.623l14.025-19.788c2.358-3.352 6.365-5.299 10.725-5.299 4.361 0 8.368 1.947 10.725 5.299l14.026 19.788c1.06 1.406 2.592 1.623 3.182 1.623.589 0 2.239-.109 3.182-1.623l14.025-19.788c2.357-3.352 6.364-5.299 10.725-5.299s8.368 1.947 10.725 5.299l14.025 19.788c1.061 1.406 2.593 1.623 3.182 1.623.59 0 2.239-.109 3.182-1.623l14.025-19.788c2.358-3.352 6.365-5.299 10.725-5.299 4.361 0 8.368 1.947 10.726 5.299l14.025 19.788c1.06 1.406 2.592 1.623 3.182 1.623.589 0 2.239-.109 3.182-1.623l20.979-29.52c1.296-1.947 4.125-2.38 6.128-1.19 2.122 1.19 2.593 3.785 1.297 5.623l-20.979 29.521c-2.239 3.352-6.247 5.299-10.489 5.299z"
              fill="#77E8C6"
            />
          </svg>
          <h1 className="content-hero__title">{title}</h1>
        </div>
      </div>
    </ContentHeroStyled>
  );
};

export default ContentHero;
