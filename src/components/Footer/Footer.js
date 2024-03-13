import { useState, useEffect } from "react";

// MUI
import { Box, Container, Divider, Typography, Grid } from "@mui/material";

// MUI ICONS
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = (props) => {
    const [allBlog, setAllBlog] = useState([]);

    useEffect(() => {
        setAllBlog(props.allBlog);
    }, [props.allBlog]);

    return (
        <Box sx={
            {
                position: 'static',
                width: '100%',
                left: 'auto',
                right: 0,
                zIndex: 100,
                mt: 3
            }
        }>
            <Box sx={
                {
                    backgroundColor: `#3c3963`,
                    color: 'white',
                    borderTop: 'solid 1px black',
                    py: 1
                }
            }>
                <Container>
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6} lg={6} display={`flex`} justifyContent={`flex-start`}>
                            <Link to={`/`}>
                                <img src={`https://ptcdn.info/mobile/logo-mobile-pantip-white.png`} alt={`navbar_logo`} width={62} />
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} display={`flex`} justifyContent={`flex-end`}>
                            <Typography fontSize={20}>
                                PANTIP.COM
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Divider color="#8b8b8b" />
                <Container>
                    <Grid container pt={1} spacing={3}>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography fontSize={18} fontWeight={`bold`} lineHeight={2}>
                                ช่วยเหลือ
                            </Typography>
                            <Divider color="#8b8b8b" sx={
                                {
                                    mb: 1
                                }
                            } />
                            <Link to={`/`}>
                                <Typography fontSize={14} lineHeight={2} className="underline">
                                    กฎ กติกาและมารยาท
                                </Typography>
                            </Link>
                            <Link to={`/`}>
                                <Typography fontSize={14} lineHeight={2} className="underline">
                                    คำแนะนำการโพสต์
                                </Typography>
                            </Link>
                            <Link to={`/`}>
                                <Typography fontSize={14} lineHeight={2} className="underline">
                                    นโยบายเกี่ยวกับข้อมูลส่วนบุคคล
                                </Typography>
                            </Link>
                            <Link to={`/`}>
                                <Typography fontSize={14} lineHeight={2} className="underline">
                                    สิทธิ์การใช้งานของสมาชิก
                                </Typography>
                            </Link>
                            <Link to={`/`}>
                                <Typography fontSize={14} lineHeight={2} className="underline">
                                    ติดต่อทีมงาน Pantip
                                </Typography>
                            </Link>
                            <Link to={`/`}>
                                <Typography fontSize={14} lineHeight={2} className="underline">
                                    ร่วมงานกับ Pantip
                                </Typography>
                            </Link>
                            <Link to={`/`}>
                                <Typography fontSize={14} lineHeight={2} className="underline">
                                    สิทธิ์การใช้งานของสมาชิก
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography fontSize={18} fontWeight={`bold`} lineHeight={2}>
                                ติดตามเรา
                            </Typography>
                            <Divider color="#8b8b8b" sx={
                                {
                                    mb: 1
                                }
                            } />
                            <Box>
                                <Link to={`https://www.facebook.com/pantipdotcom/`}>
                                    <Typography fontSize={14} lineHeight={2} display={`inline-flex`} alignItems={`center`} className="underline">
                                        <FaFacebook />&nbsp;Facebook
                                    </Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link to={`https://twitter.com/Pantip1996`}>
                                    <Typography fontSize={14} lineHeight={2} display={`inline-flex`} alignItems={`center`} className="underline">
                                        <AiFillTwitterCircle />&nbsp;Twitter
                                    </Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link to={`https://www.youtube.com/@pantipchannel`}>
                                    <Typography fontSize={14} lineHeight={2} display={`inline-flex`} alignItems={`center`} className="underline">
                                        <FaYoutube />&nbsp;Youtube
                                    </Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link to={`https://www.instagram.com/pantipdotcom`}>
                                    <Typography fontSize={14} lineHeight={2} display={`inline-flex`} alignItems={`center`} className="underline">
                                        <AiFillInstagram />&nbsp;Instagram
                                    </Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link to={`https://www.tiktok.com/@pantip1996`}>
                                    <Typography fontSize={14} lineHeight={2} display={`inline-flex`} alignItems={`center`} className="underline">
                                        <SiTiktok />&nbsp;Tiktok
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography fontSize={18} fontWeight={`bold`} lineHeight={2}>
                                กระทู้ยอดฮิต 5 อันดับ
                            </Typography>
                            <Divider color="#8b8b8b" sx={
                                {
                                    mb: 1
                                }
                            } />
                            {
                                allBlog.length > 0 ? allBlog.sort((a, b) => {
                                    const temp_a_readcount = a.readcount === undefined ? 0 : a.readcount;
                                    const temp_b_readcount = b.readcount === undefined ? 0 : b.readcount;

                                    return temp_b_readcount - temp_a_readcount;
                                }).slice(0, 5).map((topblog, index) => {
                                    return (
                                        <Link to={`/`}>
                                            <Typography fontSize={14} lineHeight={2} whiteSpace={`nowrap`} textOverflow={`ellipsis`} overflow={`hidden`} key={index} className="underline">
                                                {index + 1}.{topblog.title}
                                            </Typography>
                                        </Link>
                                    )
                                }) : "Loading"
                            }
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Typography fontSize={18} fontWeight={`bold`} lineHeight={2}>
                                ประชาสัมพันธ์
                            </Typography>
                            <Divider color="#8b8b8b" sx={
                                {
                                    mb: 1
                                }
                            } />
                            <Box sx={
                                {
                                    backgroundColor: "#4b457a",
                                    color: "white",
                                    borderRadius: 3,
                                    transition: 'all 0.2s',
                                    transform: 'scale(1.0)',
                                    '&:hover': {
                                        backgroundColor: "#2d2a49",
                                        boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 5px'
                                    }
                                }
                            }>
                                <Box maxWidth={`100%`} maxHeight={200}>
                                    <Link to={`/`}>
                                        <Box width={`100%`} height={128} maxHeight={128} sx={
                                            {
                                                borderRadius: `12px 12px 0px 0px`,
                                                backgroundImage: `url(https://f.ptcdn.info/007/082/000/s2nc191schy1n4uqopP3L-o.jpg)`,
                                                backgroundPosition: '50% 20%',
                                                backgroundSize: '100%',
                                                transition: 'all .2s'
                                            }
                                        }>
                                        </Box>
                                    </Link>
                                </Box>
                                <Box p={1} pt={.5}>
                                    <Link to={`/`}>
                                        <Typography fontSize={14}>
                                            ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับใช้งาน Pantip ได้แล้วนะ
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Divider color="#8b8b8b" sx={
                                {
                                    mb: 1
                                }
                            } />
                            <Typography fontSize={12}>
                                &copy; 2024 Internet Marketing co., ltd
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer;