import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#252c4a',
    secondary: '#1E90FF',
    background: '#1DA1F2',
    accent: '#3498db',
    success2: '#389F54',
    success: '#00C851',
    error: '#ff4444',
    black: '#000000',
    white: '#FFFFFF',
    NokiaBlue: '#005aff',
};

export const SIZES = {
    base: 10,
    width,
    height,
};
