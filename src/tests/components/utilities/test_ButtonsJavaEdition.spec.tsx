import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonsJavaEdition from '../../../components/utilities/ButtonsJavaEdition';

describe('ButtonsJavaEdition component', () => {
    it('renders the component correctly with go back path', () => {
        render(
            <MemoryRouter>
                <ButtonsJavaEdition taille={'1'} title="Go Back" path="goback" />
            </MemoryRouter>
        );

        const component = screen.getByTestId('ButtonsJavaEdition');
        expect(component).toBeInTheDocument();

        const button = screen.getByText('Go Back');
        fireEvent.click(button);

        // Add your assertions for go back functionality here
    });

    it('renders the component correctly with a specific path', () => {
        render(
            <MemoryRouter>
                <ButtonsJavaEdition taille={'2'} title="Next Page" path="nextpage" />
            </MemoryRouter>
        );

        const component = screen.getByTestId('ButtonsJavaEdition');
        expect(component).toBeInTheDocument();

        const button = screen.getByText('Next Page');
        fireEvent.click(button);

        // Add your assertions for specific path functionality here
    });
});