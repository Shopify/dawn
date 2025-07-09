export const viewports = [
  { width: 1800, height: 1000, description: 'desktop' },
  { width: 480, height: 700, description: 'mobile' },
  { width: 375, height: 500, description: 'mobile-short' },
  { width: 768, height: 1000, description: 'tablet' },
];

export const desktopViewport = viewports.find((viewport) => viewport.description === 'desktop');
export const mobileViewport = viewports.find((viewport) => viewport.description === 'mobile');
export const mobileShortViewport = viewports.find((viewport) => viewport.description === 'mobile-short');
