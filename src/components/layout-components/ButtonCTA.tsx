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

const isExternalPath = (path: string) =>
  /^https?:\/\//i.test(path) ||
  path.startsWith('mailto:') ||
  path.startsWith('tel:');

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

  const resolvedVariant =
    btnVariant ?? (isExternalPath(Path) ? 'externalLink' : 'internalLink');

  let ButtonComponent;
  const ButtonComponentProps = { Path, Text, Aria };

  switch (resolvedVariant) {
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
