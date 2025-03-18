import { BrowserRouter, Link } from 'react-router-dom';

import { ThemeProvider } from '@app/contexts/ThemeContext';
import { Router } from '@app/router';
import { routes } from '@app/router/routes';
import { ThemeSwitcher } from '@views/components/ThemeSwitcher';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <header className="w-[37.5rem] mx-auto flex justify-between items-center py-8 px-4">
          <nav className="space-x-6">
            <Link to="/">Dashboard</Link>
            <Link to={routes.profile}>Profile</Link>
          </nav>
          <ThemeSwitcher />
        </header>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
