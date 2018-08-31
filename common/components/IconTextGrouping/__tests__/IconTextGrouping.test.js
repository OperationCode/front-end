import React from "react";
import createShallowSnapshotTest from "test-utils/createShallowSnapshotTest";

import IconTextGrouping from "../IconTextGrouping";

describe('IconTextGrouping', () => {
    test('it should render properly with all required props', () => {
        createShallowSnapshotTest(
        <IconTextGrouping
            fontAwesomeIcon='test-icon'
            title='test title'
        >
            Test
        </IconTextGrouping>
        )
    });

    test('it should render properly with some props assigned', () => {
        createShallowSnapshotTest(
            <IconTextGrouping
                className='iconClass'
                fontAwesomeIcon='test'
                isIconAboveHeading={false}
                iconSize='5x'
                subText='some test text'
                theme='slate'
                title='textTitle'
                url='www.testwebsite.com'
            >
                Test
            </IconTextGrouping>
        )
    });
});
