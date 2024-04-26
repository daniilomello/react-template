import { BrowserRouter, Link } from 'react-router-dom';

import { ThemeProvider } from '@app/contexts/ThemeContext';
import { Router } from '@app/router';
import { routes } from '@app/router/routes';
import { ThemeSwitcher } from '@views/components/ThemeSwitcher';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <header className="flex justify-between items-center border-b p-4">
          <nav className="space-x-6">
            <Link to="/">Home</Link>
            <Link to={routes.createUser}>Criar usuário</Link>
          </nav>
          <ThemeSwitcher />
        </header>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
