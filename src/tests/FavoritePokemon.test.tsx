import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste para contemplar 100% dos casos de uso criados pelo Stryker', async () => {
  const { user } = renderWithRouter(<App />, { route: '/favorites' });
  const btnHhome = screen.getByRole('link', { name: /home/i });
  const btnAbout = screen.getByRole('link', { name: /about/i });
  const btnFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
  const title = screen.getByRole('heading', { name: /favorite pokémon/i });
  const noPokemon = screen.getByText(/no favorite pokémon found/i);

  expect(btnHhome).toBeInTheDocument();
  expect(btnAbout).toBeInTheDocument();
  expect(btnFavorite).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(noPokemon).toBeInTheDocument();
  await user.click(btnHhome);
  const btnDetails = screen.getByRole('link', { name: /more details/i });
  expect(btnDetails).toBeInTheDocument();
  await user.click(btnDetails);
  const favorite = screen.getByText(/pokémon favoritado\?/i);
  expect(favorite).toBeInTheDocument();
  await user.click(favorite);
  await user.click(btnFavorite);
  const pikachu = screen.getByText(/pikachu/i);
  expect(pikachu).toBeInTheDocument();
});
