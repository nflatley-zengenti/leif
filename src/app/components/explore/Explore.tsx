import React from 'react';

import Card from '../card/Card';
import ExploreStyled from './Explore.styled';

export interface Props {
  className?: string;
  title?: string;
  results: any;
}

const Explore = ({ className, title, results }: Props) => {
  if (!results || results.length < 1) return null;
  return (
    <ExploreStyled className={className}>
      {title && <h3 className="explore__title">{title}</h3>}
      <div className="explore__results">
        {results.map((res: any, idx: number) => {
          return (
            <Card key={idx} type="explore" className="explore__card" {...res} />
          );
        })}
      </div>
    </ExploreStyled>
  );
};

export default Explore;
