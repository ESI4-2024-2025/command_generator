import { render, screen, fireEvent } from '@testing-library/react';
import GiveCommand from '../../components/GiveCommand/GiveCommand';
import { MemoryRouter } from 'react-router';

describe('GiveCommand component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <GiveCommand />
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
