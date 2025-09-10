import type { ConfigType } from '@plone/registry';

// Teaser Featured
import TeaserFeaturedView from 'volto-sevilla-imd-website/components/Blocks/TeaserFeatured/View';
import TeaserFeaturedEdit from 'volto-sevilla-imd-website/components/Blocks/TeaserFeatured/Edit';
import TeaserFeaturedSchema from 'volto-sevilla-imd-website/components/Blocks/TeaserFeatured/schema';

import presentationSVG from '@plone/volto/icons/presentation.svg';

export default function install(config: ConfigType) {

  // Teaser Featured Block Config
  (config.blocks.blocksConfig as any).teaserFeatured = {
    id: 'teaserFeatured',
    title: 'Teaser Featured',
    group: 'media',
    icon: presentationSVG,
    view: TeaserFeaturedView,
    edit: TeaserFeaturedEdit,
    blockSchema: TeaserFeaturedSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
}
