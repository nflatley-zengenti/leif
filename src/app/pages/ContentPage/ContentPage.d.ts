import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as RelatedLinksProps } from '~/components/relatedLinks/relatedLinks';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as PromotedContentProps } from '~/components/promotedContent/PromotedContent';

export interface MappedProps {
  contentHeroProps: GenericHeroProps;
  leadParagraphProps: LeadParagraphProps;
  relatedLinksProps: RelatedLinksProps;
  contentComposerProps: any;
  ctaBannerProps: CTABannerProps,
  promotedContentProps: PromotedContentProps;
}

export interface Props {
  mappedEntry: MappedProps;
}