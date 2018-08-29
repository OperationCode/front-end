/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import renderer from "react-test-renderer";

import ErrorDisplay from "../ErrorDisplay";

describe('ErrorDisplay', () => {
    test("should render with just required props", () => {
        createSnapshotTest(
            <ErrorDisplay statusCode="Test Code">
                Test
            </ErrorDisplay>,
        );
    });

    test("should render properly with all props assigned", () => {
        createSnapshotTest(
            <ErrorDisplay
                statusCode="Test Code">
                Test
            </ErrorDisplay>
        );
    });
})
