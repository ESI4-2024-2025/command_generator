import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../components/Commands';

describe('Home component', () => {
    it('renders the component correctly', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        const component = screen.getByTestId('Home');
        expect(component).toBeInTheDocument();

        const giveButton = screen.getByText('GIVE');
        fireEvent.click(giveButton);

        // Add your assertions for give button functionality here

        const enchantButton = screen.getByText('ENCHANT');
        fireEvent.click(enchantButton);

        // Add your assertions for enchant button functionality here
    });
});