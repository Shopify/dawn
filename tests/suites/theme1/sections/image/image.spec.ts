import { test } from '@playwright/test';
import { runAccessibilityTest } from '@/utils/accesibilityTests';
import { runSnapshotTest } from '@/utils/visualRegressionTests';
import { desktopViewport } from '@/utils/viewports';

test.describe('Image component', () => {
  runSnapshotTest('/?view=test-image', 'image', {
    viewports: [{ width: desktopViewport.width, height: 2000, description: 'long-desktop' }],
  });

  runAccessibilityTest('/?view=test-image', '.image-block');
});
