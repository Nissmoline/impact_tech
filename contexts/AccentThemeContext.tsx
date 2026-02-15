import React, { createContext, useContext, useMemo, useState } from 'react';

export type AccentTheme = 'cyan' | 'purple' | 'emerald';

type AccentThemeContextType = {
  accentTheme: AccentTheme;
  setAccentTheme: (theme: AccentTheme) => void;
};

const AccentThemeContext = createContext<AccentThemeContextType>({
  accentTheme: 'cyan',
  setAccentTheme: () => {},
});

export const AccentThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [accentTheme, setAccentTheme] = useState<AccentTheme>('cyan');
  const value = useMemo(() => ({ accentTheme, setAccentTheme }), [accentTheme]);

  return <AccentThemeContext.Provider value={value}>{children}</AccentThemeContext.Provider>;
};

export const useAccentTheme = () => useContext(AccentThemeContext);
