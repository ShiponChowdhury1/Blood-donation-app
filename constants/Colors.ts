export const Colors = {
  primary: {
    50: '#FFF5F5',
    100: '#FFE3E3',
    200: '#FFC9C9',
    300: '#FFA8A8',
    400: '#FF8787',
    500: '#E03131',
    600: '#C92A2A',
    700: '#A51111',
    800: '#8B0000',
    900: '#6B0000',
  },
  accent: {
    pink: '#FF6B8A',
    coral: '#FF8A65',
    gold: '#FFD700',
  },
  neutral: {
    50: '#FAFAF9',
    100: '#F5F5F4',
    200: '#E7E5E4',
    300: '#D6D3D1',
    400: '#A8A29E',
    500: '#78716C',
    600: '#57534E',
    700: '#44403C',
    800: '#292524',
    900: '#1C1917',
  },
  success: '#22C55E',
  warning: '#F59E0B',
  info: '#3B82F6',
  white: '#FFFFFF',
  black: '#000000',
  background: '#FAFAF9',
  card: '#FFFFFF',
  border: '#E7E5E4',
  text: {
    primary: '#1C1917',
    secondary: '#78716C',
    muted: '#A8A29E',
  },
};

export const BloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] as const;
export type BloodGroup = typeof BloodGroups[number];
