import React from 'react';
import Link from '~/components/link/Link';
import ExploreMoreStyled from './ExploreMore.styled';

export interface Props {
  className?: string;
  title: string;
  image: { src: string; alt?: string };
  path: string;
}

const ExploreMore = ({ className, title, image, path }: Props) => {
  return (
    <ExploreMoreStyled className={className}>
      {image && (
        <img
          className="explore-more__image"
          height={256}
          width={256}
          loading="lazy"
          src={image?.src}
          alt={image?.alt}
          style={{
            objectFit: 'cover',
          }}
        />
      )}
      <Link className="explore-more__path" path={path}>
        <h4>{title}</h4>
      </Link>
    </ExploreMoreStyled>
  );
};

export default ExploreMore;
