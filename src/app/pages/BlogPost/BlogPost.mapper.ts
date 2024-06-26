import { mapComposer } from '~/core/util/json-mapper';

import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';
import { composerPropsMapping } from '~/components/composer/Composer.mapper';
import { ExternalPromotionPropsMapping } from '~/components/metadata/Metadata.mapper';
import { BannerPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';

import dateWithSuffix from '~/utils/dateWithSuffix';
import { doCalculateReadtime } from '~/utils/calculateReadTime';
import { BlogHeroMapping } from '~/components/genericHero/GenericHero.mapper';

export const BlogPostPropsMapping = {
  meta: ExternalPromotionPropsMapping,
  hero: BlogHeroMapping,
  information: {
    author: {
      photo: {
        $path: 'author.photo',
        $formatting: (img: any) =>
          img && img.asset && img.asset.sys && img.asset.sys.uri,
        $default: () => '/image-library/default-images/leif-fallback.png',
      },
      name: 'author.name',
      date: ({ sys }: any) =>
        dateWithSuffix(sys && sys.version && sys.version.published),
      readTime: ({ postBody }: any) => {
        const composer = mapComposer(postBody, composerPropsMapping);
        return doCalculateReadtime(composer);
      },
    },
  },
  banner: BannerPropsMapping,
  content: {
    title: () => 'Read now',
    results: ({ relatedBlogs }: any) => mapEntriesToResults(relatedBlogs),
    linkUri: () => '/blog',
    linkLabel: () => 'View all blogs',
  },
  canvas: { data: 'canvas' },
};
