'use client';

import { AriaAttributes } from 'react';
import {
  LesMerButton,
  ExternalLinkButton,
  LinkButtonInternal,
} from '../buttons';

interface ButtonCTAProps {
  isButton: boolean;
  btnVariant?: 'internalLink' | 'externalLink';
  Path: string;
  Text: string;
  Aria?: AriaAttributes['aria-label'];
}

const ButtonCTA = ({
  isButton,
  btnVariant,
  Path,
  Text,
  Aria,
}: ButtonCTAProps) => {
  if (!isButton) {
    return null;
  }

  let ButtonComponent;
  let ButtonComponentProps = { Path, Text, Aria };

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

  return <ButtonComponent {...ButtonComponentProps} />;
};

export default ButtonCTA;
