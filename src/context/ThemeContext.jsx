import { createContext, useContext, useState } from 'react';

export const MODES = {
  SOFTWARE: 'software',
  DATASCIENCE: 'datascience',
  DEVOPS: 'devops',
};

export const THEME_CONFIG = {
  [MODES.SOFTWARE]: {
    label: 'Software',
    primary: 'rgb(111, 184, 159)',
    primaryDark: 'rgb(28, 59, 48)',
    primaryRgb: '111, 184, 159',
    icon: 'https://api.iconify.design/pajamas:monitor-o.svg?color=white',
    title: 'Full Stack Developer & Designer',
    description:
      'Software Engineer from Barcelona with experience in web and mobile development. I love building things from scratch and turning ideas into real products.',
  },
  [MODES.DATASCIENCE]: {
    label: 'Data Science',
    primary: 'rgb(99, 102, 241)',
    primaryDark: 'rgb(55, 48, 163)',
    primaryRgb: '99, 102, 241',
    icon: 'https://api.iconify.design/carbon:machine-learning-model.svg?color=white',
    title: 'Data Scientist & ML Engineer',
    description:
      'Data Scientist with hands-on experience at GreenPowerMonitor (DNV). I work with data pipelines, machine learning models and analytical insights to drive decisions.',
  },
  [MODES.DEVOPS]: {
    label: 'DevOps',
    primary: 'rgb(245, 158, 11)',
    primaryDark: 'rgb(146, 64, 14)',
    primaryRgb: '245, 158, 11',
    icon: 'https://api.iconify.design/mdi:server-outline.svg?color=white',
    title: 'DevOps & Infrastructure Engineer',
    description:
      'Experienced with Linux environments, containerisation with Docker, server management and CI/CD pipelines. I keep systems running smoothly and efficiently.',
  },
};

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(MODES.SOFTWARE);

  const config = THEME_CONFIG[mode];

  return (
    <ThemeContext.Provider value={{ mode, setMode, config, MODES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
