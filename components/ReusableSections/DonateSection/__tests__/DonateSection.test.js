import React from "react";
import createSnapshotTest from "test-utils/createSnapshotTest";
import DonateSection from "../DonateSection";

describe('DonateSection', () => {
  test("should render properly with no props", () => {
    createSnapshotTest(
    <DonateSection>
        Test
    </DonateSection>
    );
  });

  test("should render properly with some props", () => {
    createSnapshotTest(
        <DonateSection title="Test Donate" theme="slate" hasHeadingLines={false}>
            Test
        </DonateSection>
    );
  });
});
