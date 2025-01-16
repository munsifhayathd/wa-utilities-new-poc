export const theme = {
  colors: {
    primary: {
      main: '#298f98',
      light: '#33b3bd',
      dark: '#1f6b72',
      // ... other colors from our palette
    },
    // ... rest of our color palette
  },
  animations: {
    transition: {
      fast: '150ms ease',
      normal: '250ms ease',
      slow: '350ms ease',
    },
    scale: {
      hover: 'scale(1.02)',
      active: 'scale(0.98)',
    }
  },
  spacing: {
    sidebar: {
      expanded: '250px',
      collapsed: '64px'
    },
    header: '64px',
    container: '1200px'
  }
} 