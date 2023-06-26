import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);
  const home = screen.getByRole('link', { name: /home/i });
  const about = screen.getByRole('link', { name: /about/i });
  const favorite = screen.getByRole('link', { name: /favorite pokémon/i });
  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(favorite).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página inicial, na URL /, ao clicar no link Home da barra de navegação', async () => {
  const { user } = renderWithRouter(<App />);
  const btnHhome = screen.getByRole('link', { name: /home/i });
  const btnAbout = screen.getByRole('link', { name: /about/i });
  const btnFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
  const titleHome = screen.getByRole('heading', { name: /encountered pokémon/i });
  expect(btnHhome).toBeInTheDocument();
  expect(btnAbout).toBeInTheDocument();
  expect(btnFavorite).toBeInTheDocument();
  await user.click(btnHhome);
  expect(titleHome).toBeInTheDocument();
  await user.click(btnAbout);
  const titleAbout = screen.getByRole('heading', { name: /about pokédex/i });
  expect(titleAbout).toBeInTheDocument();
  await user.click(btnFavorite);
  const titleFavorite = screen.getByRole('heading', { name: /favorite pokémon/i });
  expect(titleFavorite).toBeInTheDocument();

  renderWithRouter(<App />, { route: '/something-else' });

  expect(screen.getByText(/Page requested not found/i)).toBeInTheDocument();
});
