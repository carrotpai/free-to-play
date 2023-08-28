import { Grid, Link } from '@mui/material';

interface LinkItem {
  name: string;
  href?: string;
}

interface NavLinksProps {
  links: Array<LinkItem>;
}

function NavLinks({ links }: NavLinksProps) {
  return (
    <Grid container direction="row" gap="48px" width={'fit-content'} wrap="nowrap">
      {links.map((link, i) => (
        <Link
          key={`link-${i}`}
          variant="mainLink"
          underline="none"
          color="whiteDim"
          href={link.href}
          sx={{
            ':hover': { color: (theme) => theme.palette.whiteBase.main },
            '&.active': {
              textDecoration: 'underline',
              color: (theme) => theme.palette.whiteBase.main,
            },
          }}
        >
          {link.name}
        </Link>
      ))}
    </Grid>
  );
}

export default NavLinks;
