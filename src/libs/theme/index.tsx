import { createTheme } from '@mui/material';
import React from 'react';
import { NavLinkProps as RouterLinkProps, NavLink } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';

const defaultTheme = createTheme({
  palette: {
    blackBase: {
      main: '#202225',
    },
    whiteDim: {
      main: '#E5E5E5',
    },
    whiteBase: { main: '#ffffff' },
    darkBlue: { main: '#192C3E' },
    blackDarker: { main: '#0E1924' },
    blueBase: { main: '#5F8FC0' },
    blueAccent: { main: '#51D3FF' },
    textGray: { main: '#c7d5e0' },
  },
});

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <NavLink ref={ref} to={href} {...other} />;
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    mainLink: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    mainLink?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    mainLink: true;
  }
}

declare module '@mui/material/Divider' {
  interface DividerPropsVariantOverrides {
    gradient: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filter: true;
    main: true;
    swiper: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    blackBase: Palette['primary'];
    whiteDim: Palette['primary'];
    whiteBase: Palette['primary'];
    darkBlue: Palette['primary'];
    blackDarker: Palette['primary'];
    blueBase: Palette['primary'];
    blueAccent: Palette['primary'];
    textGray: Palette['primary'];
  }

  interface PaletteOptions {
    blackBase?: PaletteOptions['primary'];
    whiteDim?: PaletteOptions['primary'];
    whiteBase?: PaletteOptions['primary'];
    darkBlue?: PaletteOptions['primary'];
    blackDarker?: PaletteOptions['primary'];
    blueBase?: PaletteOptions['primary'];
    blueAccent?: PaletteOptions['primary'];
    textGray?: PaletteOptions['primary'];
  }
}

export const muiTheme = createTheme({
  palette: {
    blackBase: {
      main: '#202225',
    },
    whiteDim: {
      main: '#E5E5E5',
    },
    whiteBase: { main: '#ffffff' },
    darkBlue: { main: '#192C3E' },
    blackDarker: { main: '#0E1924' },
    blueBase: { main: '#5F8FC0' },
    blueAccent: { main: '#51D3FF' },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h5: {
      fontSize: '32px',
      lineHeight: 'normal',
    },
    body1: {
      fontSize: '20px',
      lineHeight: 'normal',
    },
    button: {
      fontSize: '24px',
      textTransform: 'none',
      lineHeight: 'normal',
      fontWeight: 400,
    },
    mainLink: {
      textTransform: 'uppercase',
      fontSize: '24px',
      fontWeight: 700,
      color: `${defaultTheme.palette.whiteDim.main}`,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'swiper' },
          style: {},
        },
        {
          props: { variant: 'filter' },
          style: {
            background: 'rgba( 255, 255, 255, 0.1)',
            padding: '4px 4px 4px 6px',
            color: defaultTheme.palette.textGray.main,
            justifyContent: 'start',
            textTransform: 'none',
            textAlign: 'left',
            fontSize: '12px',
            fontWeight: 'normal',
            borderRadius: 0,
            ':hover': {
              background: 'rgba( 255, 255, 255, 0.1)',
            },
          },
        },
        {
          props: { variant: 'main' },
          style: {},
        },
      ],
    },
    MuiDivider: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            border: 0,
            height: '1px',
            backgroundImage: 'linear-gradient(90deg, transparent, #636363 50%, transparent)',
          },
        },
      ],
    },
  },
});
