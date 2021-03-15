import React from 'react';

import SearchCardStyled from './SearchCard.styled';
import Image from '../image/Image';
import BlogDetail from '../blogDetail/BlogDetail';

export interface Props {
  className?: string;
  type: string;
  title: string;
  text?: string;
  imageUri: string;
  imageAlt: string;
  date?: string;
  readTime?: string;
  price?: number;
  uri: string;
}

const SearchCard = ({
  className,
  type,
  title,
  text,
  imageUri,
  imageAlt,
  readTime,
  date,
  price,
  uri,
}: Props) => {
  const SearchCard = (type: string) => {
    switch (type) {
      case 'blog':
        return (
          <>
            <Image
              path={imageUri}
              alt={imageAlt}
              className="search-card__image"
            />
            <div className="search-card__content">
              <h2>{title}</h2>
              <p className="search-card__text">{text}</p>
              <BlogDetail
                className="search-card__detail"
                date={date}
                readTime={readTime}
              />
            </div>
          </>
        );
      case 'product':
        return (
          <>
            <Image
              path={imageUri}
              alt={imageAlt}
              className="search-card__image"
            />
            <div className="search-card__content">
              <h2>{title}</h2>
              <span className="search-card__detail">£{price}</span>
              <p className="search-card__text">{text}</p>
            </div>
          </>
        );
      default:
        return (
          <div className="search-card__content">
            <h2>{title}</h2>
            <p className="search-card__text">{text}</p>
          </div>
        );
    }
  };
  return (
    <SearchCardStyled
      className={className}
      type={type}
      title={title}
      href={uri}
    >
      {SearchCard(type)}
    </SearchCardStyled>
  );
};

export default SearchCard;
