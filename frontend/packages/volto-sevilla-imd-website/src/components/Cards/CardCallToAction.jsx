/**
 * Card Call Action component.
 * @module components/Cards/CardCallToAction
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ArrowRightYellowIcon from 'volto-sevilla-imd-website/icons/arrow-right-yellow.png';

const CardCallToAction = ({
  title,
  description,
  buttonText,
  className,
  onClick,
}) => {
  return (
    <div className={classNames('card-call-action', className)}>
      <div className="card-content">
        <h3 className="card-title">
          {title || 'Escuelas Deportivas Municipales de Iniciación'}
        </h3>

        <p className="card-description">
          {description || 'Prebenjamín a Infantil, y escuelas para personas con discapacidad.'}
        </p>

        <button className="action-button" onClick={onClick}>
          <span className="button-text">
            {buttonText || 'INICIACIÓN'}
          </span>
          <span className="button-icon">
            <img src={ArrowRightYellowIcon} alt={buttonText || 'INICIACIÓN'} />
          </span>
        </button>
      </div>
    </div>
  );
};

CardCallToAction.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CardCallToAction;
