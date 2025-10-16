'use client';

import {
  LesMerButton,
  ExternalLinkButton,
  LinkButtonInternal,
} from '../buttons';

const ButtonCTA = ({ isButton, btnVariant, ...props }) => {
  if (!isButton) {
    return null;
  }

  let ButtonComponent;

  switch (btnVariant) {
    case 'externalLink':
      ButtonComponent = ExternalLinkButton;
      break;
    case 'internalLink':
      ButtonComponent = LinkButtonInternal;
      break;
    default:
      ButtonComponent = LesMerButton;
  }

  return <ButtonComponent {...props} />;
};

export default ButtonCTA;
