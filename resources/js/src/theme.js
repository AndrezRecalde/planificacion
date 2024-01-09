import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core';

export const themeOrverride = createTheme({
  /* Put your mantine theme override here */
  //fontFamilyMonospace: 'Monaco, Courier, monospace',
  //fontFamily: 'Greycliff CF, sans-serif',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
  primaryColor: 'indigo',
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOrverride);
