import React from "react";
import createShallowSnapshotTest from "test-utils/createShallowSnapshotTest";

import ClipPathImage from "../ClipPathImage";

describe('ClipPathImage', () => {
    test('it should render properly with required props', () => {
        createShallowSnapshotTest(
            <ClipPathImage
                imageSource='image.png'
                title='Test title' >
                Test
            </ClipPathImage>
        );
    });

    test('it should render properly with some props assigned', () => {
        createShallowSnapshotTest(
            <ClipPathImage
                altText='Test picture'
                className='clipPathImage'
                imageSource='test.png'
                href='www.test.com'
                theme='primary'
                title='Test title' >
                Test
            </ClipPathImage>
        );
    });
});
