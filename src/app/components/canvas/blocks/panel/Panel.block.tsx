import React from 'react';

import {
  RenderBlockProps,
  PanelBlock as PanelBlockProps,
} from '@contensis/canvas-react';
import PanelStyled from '~/components/canvas/blocks/panel/Panel.styled';

const PanelBlock = (props: RenderBlockProps<PanelBlockProps>) => {
  return (
    <PanelStyled className={props?.block?.properties?.panelType} {...props} />
  );
};

export default PanelBlock;
