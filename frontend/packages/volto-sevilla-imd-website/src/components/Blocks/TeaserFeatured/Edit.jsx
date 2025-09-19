/**
 * TeaserFeatured Block Edit mode.
 * @module components/Blocks/TeaserFeatured/Edit
 */

import React from 'react';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { useIntl } from 'react-intl';
// import S1 from 'volto-sevilla-imd-website/components/Sections/s1';

const TeaserFeaturedEdit = (props) => {
  const {
    block,
    data,
    style,
    className,
    blocksConfig,
    selected,
    onChangeBlock,
    navRoot,
    contentType,
    blocksErrors,
  } = props;
  const intl = useIntl();

  const schema = blocksConfig['teaserFeatured'].blockSchema({
    props,
    intl,
  });

  return (
    <>
      {/* <S1 /> */}
      <section style={style} className="hero-section">
        <div className="hero-background">
          <div className="bg-overlay"></div>
          <div className="bg-image"></div>
        </div>

        <div className="hero-content">
          <div className="content-wrapper">
            <h2 className="subtitle">{data.subtitle || 'imd'}</h2>
            <h1 className="title">
              {data.title || 'Instituto Municipal de Deportes'}
            </h1>
            <p className="description">
              {data.description || 'El IMD de Sevilla es el organismo responsable del deporte municipal de la ciudad.'}
            </p>
            <button className="cta-button">
              <span><a href="/sobre-nosotros" title={data.button}>{data.button || 'Sobre nosotros'}</a></span>
            </button>
          </div>
        </div>
      </section>
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          onChangeBlock={onChangeBlock}
          formData={data}
          block={block}
          blocksConfig={blocksConfig}
          navRoot={navRoot}
          contentType={contentType}
          errors={blocksErrors}
        />
      </SidebarPortal>
    </>
  );
};

export default TeaserFeaturedEdit;
