import { render, screen } from '@testing-library/react';
import MainPage from './index';

test('renders text mainpage', () => {

  render(<MainPage />);
  
  const linkElement = screen.getByText("Moviefy");
  
  expect(linkElement).toBeInTheDocument();

});