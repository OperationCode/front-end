import React from "react";
import createShallowSnapshotTest from "test-utils/createShallowSnapshotTest";

import AdBanner from "../AdBanner";

describe('AdBanner', () => {
  test("it should render properly with required props", () => {
    createShallowSnapshotTest(
        <AdBanner 
            altText="Some text" 
            href="www.test.com"
            imageSource="www.imagetest.com">
            Test
        </AdBanner>
    );
  });
});
