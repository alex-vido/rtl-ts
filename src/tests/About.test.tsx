import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />, { route: '/about' });
  const btnHome = screen.getByRole('link', { name: /home/i });
  const btnAbout = screen.getByRole('link', { name: /about/i });
  const btnFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
  const title = screen.getByRole('heading', { name: /About Pokédex/i });
  const subTitle = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
  const paragraphy = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
  const img = screen.getByRole('img', { name: /pokédex/i });
  expect(btnHome).toBeInTheDocument();
  expect(btnAbout).toBeInTheDocument();
  expect(btnFavorite).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
  expect(paragraphy).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
