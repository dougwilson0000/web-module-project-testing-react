import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


const testEpisode = {
    id: 1,
    name: '',
    image: 'localhost',
    season: 1,
    number: 1, 
    summary: 'text',
    runtime: 1
};

const testEpisodeNoImage = {
    id: 1,
    name: '',
    image: null,
    season: 1,
    number: 1, 
    summary: 'text',
    runtime: 1
};

test("renders without error", () => {
    render(<Episode episode={testEpisode} />)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode} />)
    const summary = screen.queryByText(/text/i);
    
    expect(summary).toBeTruthy();
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent('text');
    
});

test("renders default image when image is not defined", ()=>{

    render(<Episode episode={testEpisodeNoImage} />)
    const imageTest = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')
    expect(imageTest).toBeInTheDocument();
});
