import { render, screen } from '@testing-library/react';
import LoginPage from './index';

test('renders texts LoginPage', () => {

    render(<LoginPage />);
  
    const loginText = screen.getByText("Login");
    const forgotText = screen.getByText("Forgot password?");

    expect(loginText).toBeInTheDocument();
    expect( forgotText).toBeInTheDocument();
});

test('render function LoginPage', () => {

    render(<LoginPage />);

    expect(LoginPage).toBeInstanceOf(Function)
});