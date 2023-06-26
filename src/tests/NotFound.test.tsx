import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste caso entre em um link inválido, entra na página not found', async () => {
  renderWithRouter(<App />, { route: '/test' });
  const btnHhome = screen.getByRole('link', { name: /home/i });
  const btnAbout = screen.getByRole('link', { name: /about/i });
  const btnFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
  const title = screen.getByRole('heading', { name: /page requested not found/i });
  const img = screen
    .getByRole('img', { name: /pikachu crying because the page requested was not found/i });

  expect(btnHhome).toBeInTheDocument();
  expect(btnAbout).toBeInTheDocument();
  expect(btnFavorite).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
