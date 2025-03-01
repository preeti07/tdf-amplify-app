import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import viteLogo from '../../assets/vite.svg'
import { signOut } from "@aws-amplify/auth";


const Header = () => {
  const handleLogout = async () => {
    try {
      await signOut();
      window.location.reload(); // Reload to clear session or redirect user to login page
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Service Request App
        </Typography>
        <Button onClick={handleLogout} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export { Header };