/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import ErrorDisplay from "../ErrorDisplay";

describe('ErrorDisplay', () => {
    test("should render with just required props", () => {
        createSnapshotTest(
            <ErrorDisplay statusCode={404}>
                Err! 
            </ErrorDisplay>
        );
    });
});
