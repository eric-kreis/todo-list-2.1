import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { ThemeContext } from 'styled-components';
import { transparentize } from 'polished';

import LoadingContainerS from './styles';

export default function TasksLoading() {
  const { colors } = useContext(ThemeContext);

  return (
    <LoadingContainerS>
      <ContentLoader
        speed={1}
        height={250}
        backgroundColor={transparentize(0.8, colors.primary)}
        foregroundColor={transparentize(0.9, colors.primary)}
      >
        <rect y="205" rx="5" ry="5" height="45" />
        <rect y="140" rx="5" ry="5" height="45" />
        <rect y="75" rx="5" ry="5" height="45" />
        <rect y="10" rx="5" ry="5" height="45" />
      </ContentLoader>
    </LoadingContainerS>
  );
}
