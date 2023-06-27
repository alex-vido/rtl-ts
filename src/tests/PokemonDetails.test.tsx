import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Faça um teste que comtemple 100% dos requisitos do stryker', async () => {
  const { user } = renderWithRouter(<App />);

  const link = screen.getByRole('link', { name: /more details/i });

  expect(link).toBeInTheDocument();
  await user.click(link);

  const title = screen.getByRole('heading', { name: /pikachu details/i });
  const summary = screen.getByRole('heading', { name: /summary/i });
  const descryption = screen
    .getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);
  const location = screen
    .getByRole('heading', { name: /game locations of pikachu/i });
  const imgLocations = screen.getAllByAltText(/pikachu location/i);
  const nameLocation1 = screen.getByText(/kanto viridian forest/i);
  const nameLocation2 = screen.getByText(/kanto power plant/i);
  const checkbox = screen.getByText(/pokémon favoritado\?/i);
  
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(/pikachu details/i);
  expect(link).not.toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(summary).toHaveTextContent(/summary/i);
  expect(descryption).toBeInTheDocument();
  expect(descryption)
    .toHaveTextContent(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);
  expect(location).toBeInTheDocument();
  expect(location).toHaveTextContent(/game locations of pikachu/i);
  expect(imgLocations).toHaveLength(2);
  expect(imgLocations[0])
    .toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
  expect(imgLocations[1])
    .toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  expect(nameLocation1).toBeInTheDocument();
  expect(nameLocation2).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  await user.click(checkbox);
  const favorite = screen
    .getByRole('img', { name: /pikachu is marked as favorite/i });
  expect(favorite).toBeInTheDocument();
  await user.click(checkbox);
  expect(favorite).not.toBeInTheDocument();
});
