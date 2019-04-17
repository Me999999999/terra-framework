import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ModalOverlay from './_ModalOverlay';
import styles from './AbstractModal.module.scss';

const cx = classNames.bind(styles);

const zIndexes = ['6000', '7000', '8000', '9000'];

const propTypes = {
  /**
   * String that labels the modal for screen readers.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Content inside the modal dialog.
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS classnames that are appended to the modal.
   */
  classNameModal: PropTypes.string,
  /**
   * CSS classnames that are appended to the overlay.
   */
  classNameOverlay: PropTypes.string,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Element to fallback focus on if the FocusTrap can not find any focusable elements. Valid values are a valid
   * dom selector string that is passed into document.querySelector or a function
   * that returns a dom element. If using a dom selector, ensure that the query works for all browsers with
   * the document.querySelector method.
   */
  fallbackFocus: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: PropTypes.bool,
  /**
   * If set to true, the modal dialog with have overflow-y set to scroll.
   */
  isScrollable: PropTypes.bool,
  /**
   * Ref callback for abstract modal.
   */
  refCallback: PropTypes.func,
  /**
   * Role attribute on the modal dialog.
   */
  role: PropTypes.string,
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: PropTypes.oneOf(zIndexes),
};

const defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  fallbackFocus: undefined,
  isFullscreen: false,
  isScrollable: false,
  role: 'dialog',
  zIndex: '6000',
};

/* eslint-disable react/prefer-stateless-function */
class ModalContent extends React.Component {
  componentDidMount() {
    if (typeof this.props.fallbackFocus) {
      if (typeof this.props.fallbackFocus === 'function') {
        this.props.fallbackFocus().focus();
      }

      if (typeof this.props.fallbackFocus === 'string') {
        document.querySelector(this.props.fallbackFocus).focus();
      }
    } else {
      this.modalContentRef.focus();
    }
  }

  render() {
    const {
      ariaLabel,
      children,
      classNameModal,
      classNameOverlay,
      closeOnOutsideClick,
      onRequestClose,
      fallbackFocus,
      role,
      refCallback,
      isFullscreen,
      isScrollable,
      zIndex,
      ...customProps
    } = this.props;

    let zIndexLayer = '6000';
    if (zIndexes.indexOf(zIndex) >= 0) {
      zIndexLayer = zIndex;
    }

    const modalClassName = cx([
      'abstract-modal',
      { 'is-fullscreen': isFullscreen },
      `layer-${zIndexLayer}`,
      classNameModal,
    ]);

    // Delete the closePortal prop that comes from react-portal.
    delete customProps.closePortal;
    const platformIsiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    this.modalContentRef = React.createRef();

    if (fallbackFocus) {
      this.fallbackFocus = fallbackFocus;
    } else {
      this.fallbackFocus = () => (this.modalContentRef.current);
    }

    return (
      <React.Fragment>
        <ModalOverlay
          onClick={closeOnOutsideClick ? onRequestClose : null}
          className={classNameOverlay}
          zIndex={zIndex}
        />
        { /*
            When an aria-label is set and tabIndex is set to 0, VoiceOver will read
            the aria-label value when the modal is opened
           */
          /* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
        <div
          tabIndex={platformIsiOS ? '-1' : '0'}
          aria-label={ariaLabel}
          className={modalClassName}
          role={role}
          ref={(node) => { this.modalContentRef = node; this.props.refCallback(node); }}
          {...customProps}
        >
          {children}
        </div>
        {/* eslint-enable jsx-a11y/no-noninteractive-tabindex */}
      </React.Fragment>
    );
  }
}

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
