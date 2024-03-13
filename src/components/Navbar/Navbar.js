import { Link } from "react-router-dom";

// MUI
import { Box, Button, IconButton, InputBase } from "@mui/material";

// MUI ICONS
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <Box sx={
            {
                backgroundColor: `#3c3963`,
                p: .5,
                position: 'fixed',
                width: '100%',
                left: 0,
                right: 'auto',
                top: 0,
                zIndex: 100,
                borderBottom: 'solid 1px black',
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
                display: 'flex',
                justifyContent: 'space-between',
            }
        }>
            
                <Box pl={3} pt={1}>
                    <Link to={`/`}>
                        <img src={`https://ptcdn.info/mobile/logo-mobile-pantip-white.png`} alt={`navbar_logo`} width={48} />
                    </Link>
                </Box>
                <Box py={.5} px={1} sx={
                    {
                        maxWidth: 500,
                        width: '100%',
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'block',
                            lg: 'block'
                        }
                    }
                }>
                    <Box sx={
                        {
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: 1,
                            border: 'solid 0.1rem black',
                            px: .5,
                            py: 0,
                            maxHeight: 38,
                            height: '100%',
                            pl: 1.5,
                            backgroundColor: '#44416f'
                        }
                    }>
                        <InputBase placeholder="ค้นหาบน Pantip" sx={
                            {
                                color: 'white',
                                flex: 1,
                                fontSize: 14
                            }
                        } />
                        <IconButton type="button" sx={
                            {
                                color: 'white'
                            }
                        }>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box py={.5} pr={3} height={`100%`}>
                    <Button sx={
                        {
                            px: 1.5,
                            backgroundColor: '#353156',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#151323'
                            }
                        }
                    } startIcon={<AccountCircleRoundedIcon />}>
                        เข้าสู่ระบบ / สมัครสมาชิก
                    </Button>
                </Box>
        </Box>
    )
}

export default Navbar;