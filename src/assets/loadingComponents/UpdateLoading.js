import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { ThemeContext } from 'styled-components';
import { transparentize } from 'polished';

import LoadingContainerS from './styles';

export default function UpdateLoading() {
  const { colors } = useContext(ThemeContext);

  return (
    <LoadingContainerS>
      <ContentLoader
        speed={1}
        height={270}
        backgroundColor={transparentize(0.8, colors.primary)}
        foregroundColor={transparentize(0.9, colors.primary)}
      >
        <rect y="190" rx="5" ry="5" height="40" />
        <rect y="120" rx="5" ry="5" height="40" />
        <rect y="70" rx="5" ry="5" height="40" />
        <rect y="20" rx="5" ry="5" height="40" />
      </ContentLoader>
    </LoadingContainerS>
  );
}
