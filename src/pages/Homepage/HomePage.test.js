import { render, screen } from '@testing-library/react';
import HomePage from './index';

test('renders texts HomePage', () => {

    render(<HomePage />);
  
    const FooterText = screen.getByText(/Desafio Provi /i);
    const FooterTextSpan = screen.getByText(/ feito por Felipe Machado/i);
    const FooterTextDados = screen.getByText(/Dados da API pegos do site Themoviedb.org/i);

    expect(FooterText).toBeInTheDocument();
    expect(FooterTextSpan).toBeInTheDocument();
    expect(FooterTextDados).toBeInTheDocument();
});

test('render function HomePage', () => {

    render(<HomePage />);

    expect(HomePage).toBeInstanceOf(Function)
});