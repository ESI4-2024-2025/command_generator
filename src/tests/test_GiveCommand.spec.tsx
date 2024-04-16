import { render, screen } from '@testing-library/react';
import GiveCommand from '../components/GiveCommand';
import {MemoryRouter} from "react-router-dom";

describe('Home component', () => {

    it('renders the GiveCommand component correctly', () => {
        render(
            <MemoryRouter>
                <GiveCommand />
            </MemoryRouter>
        );
        const component = screen.getByTestId('GiveCommand');
        expect(component).toBeInTheDocument();
    });

});