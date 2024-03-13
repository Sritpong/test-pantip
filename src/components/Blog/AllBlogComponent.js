import { useEffect, useState } from "react";

// MUI
import { Grid, Box, Typography, Button } from "@mui/material";

// MUI ICONS
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import AddCommentIcon from '@mui/icons-material/AddComment';

// IMAGES
import LOGO_APP_PANTIP from "./../../assets/images/logo-app_pantip.png";
import { Link } from "react-router-dom";

const AllBlogComponent = (props) => {
    const [allBlog, setAllBlog] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);

    useEffect(() => {
        setAllBlog(props.allBlog);
        setSelectedCategoryId(props.selectedCategoryId);
    }, [props.allBlog, props.selectedCategoryId]);

    return (
        <Grid container>
            {
                allBlog.length > 0 ? allBlog.filter((element) => {
                    if(selectedCategoryId === 0)
                    {
                        return element.category_id !== 0;
                    }
                    
                    return element.category_id === selectedCategoryId;
                }).sort((a, b) => a.id - b.id).map((blog, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={index} px={1} py={1}>
                            <Box sx={
                                {
                                    backgroundColor: "#4b457a",
                                    color: "white",
                                    borderRadius: 3,
                                    transition: 'all 0.2s',
                                    transform: 'scale(1.0)',
                                    '&:hover': {
                                        backgroundColor: "#2d2a49",
                                        transform: 'scale(1.05)',
                                        boxShadow: 'rgba(255, 255, 255, 0.35) 0px 10px 10px'
                                    }
                                }
                            }>
                                <Box maxWidth={`100%`} maxHeight={200}>
                                    <Box position={`absolute`} zIndex={9} display={`flex`} justifyContent={`flex-end`} width={`100%`} maxWidth={`100%`}>
                                        <Box px={1} mt={1}>
                                            <Button sx={
                                                {
                                                    color: blog.favorite !== undefined && blog.favorite === true ? "red" : "#ffffff",
                                                    p: .5,
                                                    minWidth: 'auto',
                                                    backgroundColor: "rgba(255, 255, 255, .3)",
                                                    borderRadius: 1,
                                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
                                                    "&:hover": {
                                                        backgroundColor: "rgba(255, 255, 255, .5)",
                                                        color: "red",
                                                        boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.2)",
                                                    }
                                                }
                                            } onClick={() => {
                                                props.setFavoriteBlog(blog.id);
                                            }}>
                                                {
                                                    blog.favorite !== undefined && blog.favorite === true ? <FavoriteIcon /> : <FavoriteBorderIcon />
                                                }
                                            </Button>
                                        </Box>
                                    </Box>
                                    <Link to={`/`}>
                                        <Box width={`100%`} height={200} maxHeight={200} sx={
                                            {
                                                borderRadius: `12px 12px 0px 0px`,
                                                backgroundImage: `url(${blog.image === undefined || blog.image === null ? LOGO_APP_PANTIP : blog.image})`,
                                                backgroundPosition: '50% 20%',
                                                backgroundSize: '100%',
                                                transition: 'all .2s',
                                                '&:hover': {
                                                    backgroundSize: '110%'
                                                }
                                            }
                                        }>
                                        </Box>
                                    </Link>
                                </Box>
                                <Box p={1} pt={.5}>
                                    <Link to={`/`}>
                                        <Typography whiteSpace={`nowrap`} textOverflow={`ellipsis`} overflow={`hidden`}>
                                            {
                                                blog.title
                                            }
                                        </Typography>
                                        <Box sx={
                                            {
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }
                                        }>
                                            <Typography whiteSpace={`nowrap`} textOverflow={`ellipsis`} overflow={`hidden`} fontSize={12} color={`#cccccc`} display={`flex`} justifyContent={`flex-start`}>
                                                สมาชิกหมายเลข {blog.member_number}
                                            </Typography>
                                            <Typography></Typography>
                                            <Typography whiteSpace={`nowrap`} textOverflow={`ellipsis`} overflow={`hidden`} fontSize={12} color={`#cccccc`} display={`flex`} justifyContent={`flex-end`}>
                                                <ChatIcon fontSize="small" />&nbsp;
                                                {
                                                    blog.readcount !== undefined ? blog.readcount : 0
                                                }
                                                &nbsp;<AddCommentIcon fontSize="small" />&nbsp;
                                                {
                                                    blog.commentcount !== undefined ? blog.commentcount : 0
                                                }
                                            </Typography>
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    )
                }) : "Loading blog..."
            }
            <Grid xs={12} sm={12} md={12} lg={12} mt={2} display={`flex`} justifyContent={`center`}>
                {
                    allBlog.filter((element) => {
                        if(selectedCategoryId === 0)
                        {
                            return element.category_id !== 0;
                        }
                        
                        return element.category_id === selectedCategoryId;
                    }).length >= 16 && <Button sx={
                        {
                            px: 1.5,
                            backgroundColor: '#353156',
                            color: 'white',
                            border: 'solid 0.05rem white',
                            '&:hover': {
                                backgroundColor: '#151323',
                                border: 'solid 0.05rem black'
                            }
                        }
                    }>
                        โหลดกระทู้เพิ่มเติม...
                    </Button>
                }
            </Grid>
        </Grid>
    )
}

export default AllBlogComponent;