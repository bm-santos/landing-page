import { render, screen } from '@testing-library/react';
import Hero from '../Hero/index';

test('renders componente botao', () => {
    render(<Hero />);
    const heroElement = screen.getByTestId("herotitle");

    expect(heroElement).toHaveTextContent("Save your data storage here.")
})