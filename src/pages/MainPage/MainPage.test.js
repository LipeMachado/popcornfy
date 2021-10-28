import { render, screen } from '@testing-library/react';
import MainPage from './index';

test('renders text mainpage', () => {

    render(<MainPage />);
    
    const linkElement = screen.getByText(/PopCornFy/i);
    expect(linkElement).toBeInTheDocument();
});

test('render function MainPage', () => {

    render(<MainPage />);

    expect(MainPage).toBeInstanceOf(Function)
});