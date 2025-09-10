/**
 * TeaserFeatured Block Schema.
 */
import messages from './messages';

export const TeaserFeaturedSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.teaserFeaturedBlock),
    description: 'Display the Teaser Featured block on your website.',
    block: 'teaserFeatured',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
            'subtitle',
            'title',
            'description',
            'button',
            'teaser_featured_link'
        ],
      },
    ],

    properties: {
      title: {
        title: intl.formatMessage(messages.title),
        description: 'Enter the title for the teaser featured block.',
        widget: 'text',
      },
      subtitle: {
        title: intl.formatMessage(messages.subtitle),
        description: 'Enter the subtitle for the teaser featured block.',
        widget: 'text',
      },
      description: {
        title: intl.formatMessage(messages.description),
        description: 'Enter the description for the teaser featured block.',
        widget: 'text',
      },
      button: {
        title: intl.formatMessage(messages.button),
        description: 'Enter the button label for the teaser featured block.',
      },
      teaser_featured_link: {
        title: intl.formatMessage(messages.target),
        description: 'Enter the button link target for the teaser featured block.',
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: [
          'Title',
          'head_title',
          'Description',
          'hasPreviewImage',
          'image_field',
          'image_scales',
          '@type',
        ],
        allowExternals: true,
      },
    },
    required: [
      // 'subtitle',
      // 'title',
      // 'description',
      // 'button',
      // 'teaser_featured_link'
    ],

  };
};

export default TeaserFeaturedSchema;
