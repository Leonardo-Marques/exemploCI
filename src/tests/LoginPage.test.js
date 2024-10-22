import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../components/LoginPage';
import { MemoryRouter } from 'react-router-dom';

test('permite apenas números no campo de login', () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

  const loginInput = screen.getByPlaceholderText(/login/i);

  // Testa entrada de números
  fireEvent.change(loginInput, { target: { value: '12345' } });
  expect(loginInput.value).toBe('12345');

  // Testa entrada de letras (valor não deve ser alterado)
  fireEvent.change(loginInput, { target: { value: 'abc' } });
  expect(loginInput.value).toBe('12345'); // O valor deve permanecer '12345'

  // Testa entrada de números e letras (somente os números devem ser permitidos)
  fireEvent.change(loginInput, { target: { value: '12345abc' } });
  expect(loginInput.value).toBe('12345'); // O valor deve ser apenas '123'
});
