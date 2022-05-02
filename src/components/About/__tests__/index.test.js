import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //First test
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);

        //check if the snapshot matches the DOM node structure
        expect(asFragment()).toMatchSnapshot();
    })
})