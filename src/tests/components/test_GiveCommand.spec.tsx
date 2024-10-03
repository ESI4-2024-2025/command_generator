import { render, screen, fireEvent } from '@testing-library/react';
import GiveEnchantedItems from '../../components/GiveCommand/GiveEnchantedItems';
import { MemoryRouter } from 'react-router';

describe('GiveEnchantedItems component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <GiveEnchantedItems />
            </MemoryRouter>
        );
    });

    it('renders the component correctly', () => {
        const component = screen.getByTestId('GiveCommand');
        expect(component).toBeInTheDocument();
    });

    it('renders the component correctly', () => {
        const optionElements = screen.getAllByRole('option');
        expect(optionElements).toHaveLength(3);
    });

    it('renders the component correctly', () => {
        const backButton = screen.getByText('Retour');
        expect(backButton).toBeInTheDocument();
    });
});
