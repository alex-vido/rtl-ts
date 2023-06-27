import { screen } from '@testing-library/react';
import renderWithRouter from "../renderWithRouter";
import App from "../App";

test('Faça um teste que comtemple 100% dos requisitos do stryker', async() => {
  const { user } = renderWithRouter(<App />);
  const name = screen.getByTestId('pokemon-name');
  const type = screen.getByTestId('pokemon-type');
  const weight = screen.getByTestId('pokemon-weight');
  const link = screen.getByRole('link', { name: /more details/i });
  const img = screen.getByRole('img', { name: /pikachu sprite/i });

  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent(/pikachu/i);
  expect(type).toBeInTheDocument();
  expect(type).toHaveTextContent(/electric/i);
  expect(weight).toBeInTheDocument();
  expect(weight).toHaveTextContent(/average weight: 6.0 kg/i);
  expect(name).toBeInTheDocument();
  expect(link).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('alt', 'Pikachu sprite');
  expect(img)
    .toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(link).toHaveAttribute('href', '/pokemon/25');
  await user.click(link);
  const checkFavorite = screen.getByText(/pokémon favoritado\?/i);
  await user.click(checkFavorite);
  const stared = screen
    .getByRole('img', { name: /pikachu is marked as favorite/i });
  expect(stared).toBeInTheDocument();
  });
