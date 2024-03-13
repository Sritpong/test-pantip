import { AppBar, Button, Container, Typography } from "@mui/material";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { useEffect, useState } from "react";
  
const TabCategoriesComponent = (props) => {
    const [allCategories, setAllCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    
    useEffect(() => {
        setAllCategories(props.allCategories);
        setSelectedCategoryId(props.selectedCategoryId);
    }, [props.allCategories, props.selectedCategoryId]);

    const handleClickButton = (category_id) => {
        props.setSelectedCategoryId(category_id);
    }

    return (
        <AppBar
            color="inherit"
            position="static"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "auto",
                whiteSpace: "nowrap",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
                pt: 1,
                pb: 0.5,
                backgroundColor: "#5b5795",
                border: 'solid 1px black',
                mb: 1,
                '::-webkit-scrollbar': {
                    height: 5,
                },
                '::-webkit-scrollbar-track': {
                    background: '#5b5795',
                },
                '::-webkit-scrollbar-thumb': {
                    background: '#7e6ebf',
                    height: 3,
                    borderRadius: 3
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: '#9784e5'
                }
            }}
        >
            <Container>
                <Button key={0} onClick={() => {
                    handleClickButton(0)
                }} sx={
                    {
                        backgroundColor: selectedCategoryId === 0 ? "#353156" : "transparent",
                        color: selectedCategoryId === 0 ? "#ffffff" : "#ffffff",
                        borderRadius: 0,
                        "&:hover": {
                            backgroundColor: "#443f6e",
                            color: "#ffffff"
                        }
                    }
                }>
                    <DensitySmallIcon />&nbsp;
                    <Typography fontSize={13} fontWeight={600}>
                        ดูทั้งหมด
                    </Typography>
                </Button>
                {
                    allCategories.length > 0 ? allCategories.map((category, index) => {
                        return (
                            <Button key={index} onClick={() => {
                                handleClickButton(category.id)
                            }} sx={
                                {
                                    backgroundColor: selectedCategoryId === category.id ? "#353156" : "transparent",
                                    color: selectedCategoryId === category.id ? "#ffffff" : "#ffffff",
                                    borderRadius: 0,
                                    "&:hover": {
                                        backgroundColor: "#443f6e",
                                        color: "#ffffff"
                                    }
                                }
                            }>
                                {
                                    category.icon !== undefined && <>
                                        {
                                            category.icon
                                        }&nbsp;
                                    </>
                                }
                                <Typography fontSize={13} fontWeight={600}>
                                    {
                                        category.name
                                    }
                                </Typography>
                            </Button>
                        )
                    }) : <></>
                }
            </Container>
        </AppBar>
    );
}

export default TabCategoriesComponent;