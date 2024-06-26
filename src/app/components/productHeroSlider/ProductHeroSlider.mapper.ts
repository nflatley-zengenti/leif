import { ImagePropsMapping } from '~/components/image/Image.mapper';
import mapJson from '~/core/util/json-mapper';

export const ProductHeroSliderPropsMapping = {
  slides: {
    $path: 'photos',
    $formatting: (photo: any) => {
      return mapJson(photo, ImagePropsMapping);
    },
  },
};
