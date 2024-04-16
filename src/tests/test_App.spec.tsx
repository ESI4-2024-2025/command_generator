import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import GiveCommand from '../components/GiveCommand';

describe('App component', () => {
    it('renders the Home component when the path is "/"', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        );

        const homeComponent = screen.getByTestId('Home');
        expect(homeComponent).toBeInTheDocument();
    });

    it('renders the GiveCommand component when the path is "/give"', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GiveCommand />} />
                </Routes>
            </BrowserRouter>
        );

        const giveCommandComponent = screen.getByTestId('GiveCommand');
        expect(giveCommandComponent).toBeInTheDocument();
    });
});