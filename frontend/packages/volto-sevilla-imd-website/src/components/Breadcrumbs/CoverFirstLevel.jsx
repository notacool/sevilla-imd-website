import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import ArrowRightBreadcrumbsIcon from './arrow-right-breadcrumbs.svg';
// import 'volto-sevilla-imd-website/theme/components/_cover_first_level.scss';

const CoverFirstLevel = ({ title, breadcrumbs }) => {
  // Default breadcrumbs if none provided
  const defaultBreadcrumbs = [
    {
      title: 'Inicio',
      url: '/',
    },
    {
      title: 'Sobre nosotros',
      url: '#',
      active: true,
    },
  ];

  const activeBreadcrumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <div className="section-cover-first-level">
      {/* Background Image */}
      <div className="cover-background" />

      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="breadcrumb">
        {activeBreadcrumbs.map((crumb, index) => (
          <div key={index} className="breadcrumb-item">
            {crumb.active ? (
              <span>{crumb.title}</span>
            ) : (
              <>
                <UniversalLink href={crumb.url}>
                  {crumb.title}
                </UniversalLink>
                {index < activeBreadcrumbs.length - 1 && (
                  <div className="icon">
                    <Icon name={ArrowRightBreadcrumbsIcon} size="24px" />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>

      {/* Page Title */}
      <div className="page-title">
        <h1>{title || 'Sobre nosotros'}</h1>
      </div>
    </div>
  );
};

export default CoverFirstLevel;
