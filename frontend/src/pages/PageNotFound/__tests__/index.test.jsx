import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from '..';

describe('PageNotFound Page Snapshot', () => {
    it('should render forming a snapshot', () => {
        const { asFragment } = render(<BrowserRouter><PageNotFound/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot(); 
    });
});

describe('PageNotFound Page', () => {
    it('should render page without crashing', () => {
      
        render(<BrowserRouter><PageNotFound/></BrowserRouter>);
        const errorPageElement = screen.getByTestId('notfound');
        expect(errorPageElement).toBeInTheDocument();
    });

    it('should display text after rendering', () => {
        render(<BrowserRouter><PageNotFound/></BrowserRouter>);
        const errorPageElement = screen.getByText('Look like you are lost , return to home');
        expect(errorPageElement).toBeInTheDocument();
    });
});