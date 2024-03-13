import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// CSS
import './assets/css/App.css';

// PAGES
import Home from './pages/Home';

// MUI ICONS
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const allCategories = [
    {
        id: 2,
        name: "ทั่วไป",
        icon: <AccessibilityIcon />
    },
    {
        id: 1,
        name: "เกาหลี",
        icon: <AcUnitIcon />
    }
];

const dataAllBlog = [
    {
        id: 1,
        title: "คิดว่าวอนยองจะได้เดบิวต์วงการนักแสดงมั้ยคะ ในเมื่อมีพี่สาวจางดาอาอยู่แล้ว",
        category_id: 1,
        image: 'https://f.ptcdn.info/388/083/000/s9o63npuqbyIt8j6XXTi-s.jpg',
        member_number: `7890922`,
        favorite: true,
        readcount: 50,
        commentcount: 6
    },
    {
        id: 2,
        title: "จางดาอา พี่สาวจางวอนยอง IVE ประเดิมงานแสดงเรื่องแรก ซีรีส์ Pyramid Game",
        category_id: 1,
        image: 'https://f.ptcdn.info/388/083/000/s9o6391wqt84KcV2234T9-s.jpg',
        member_number: `7890923`
    },
    {
        id: 3,
        title: "หาทางติดต่อ คิมซูฮยอน จะส่งภาพวาดไปให้",
        category_id: 1,
        member_number: `7890924`,
        favorite: true,
        readcount: 38
    },
    {
        id: 4,
        title: "ตอนนี้ใครครองแชมป์เจ้าพ่อเจ้าแม่โฆษณาของเกาหลี",
        category_id: 1,
        member_number: `7890925`
    },
    {
        id: 5,
        title: "ทำไมประเทศไทยชอบคู่จิ้น-คู่ขวัญ ฝรั่งมีไหมครับแสดงด้วยกันหลายสิบเรื่อง",
        category_id: 1,
        member_number: `7890926`
    },
    {
        id: 6,
        title: "คิดว่าแจอุคกับโกยุนจองเคยเดทกันไหม",
        category_id: 1,
        member_number: `7890927`,
        readcount: 101,
        commentcount: 26
    },
    {
        id: 7,
        title: "'พัคฮยองชิก' พระเอกสุดหล่อที่หลายคนอาจไม่รู้ว่าเขาเคยเป็นบอยแบนด์",
        category_id: 1,
        image: 'https://f.ptcdn.info/376/083/000/s9m5gl261skwi3b2WyO6X-s.jpg',
        member_number: `7890928`,
        readcount: 150,
        commentcount: 9
    },
    {
        id: 8,
        title: "ตอนนี้ใครเป็นนักแสดง No.1 ของเกาหลี",
        category_id: 1,
        member_number: `7890929`,
        favorite: true
    },
    {
        id: 9,
        title: "อยากให้ดาราวีดีโอ ทำละครดราม่าสะท้อนสังคม",
        category_id: 2,
        member_number: `7890930`
    },
    {
        id: 10,
        title: "ดินพอกหางหมู",
        category_id: 2,
        image: 'https://ptcdn.info/home_sidebar_content/2023-12/65782451caac0ad1f403bbe5_v2kspb70p0_400.png',
        member_number: `7890931`
    },
    {
        id: 11,
        title: "นอน 9-10 ชม./วัน ผิดปกติไหม",
        category_id: 2,
        member_number: `7890932`
    },
    {
        id: 12,
        title: `ด้วยรักและศรัทธา "เชียงตุง" รัฐฉาน ประเทศพม่า ::::อัพเดตที่เที่ยว2024::::`,
        category_id: 2,
        image: 'https://ptcdn.info/pick/567/000/000/sa8unyrdeaIDyPHvYuuV-s.jpg',
        member_number: `7890933`,
        favorite: true
    },
    {
        id: 13,
        title: "How to ดูแลน้องแมวหลังถูกกัด ซึม ขู่ ไม่กินข้าว",
        category_id: 2,
        image: 'https://ptcdn.info/pick/567/000/000/sa7lqw19pbbd21bHDFr6d-s.jpg',
        member_number: `7890934`
    },
    {
        id: 14,
        title: "เราเป็นคนไม่มีเพื่อนหรือมีสังคมเลย",
        category_id: 2,
        member_number: `7890935`,
        readcount: 201
    },
    {
        id: 15,
        title: "เราแกล้งจับไข่สามีแรงเกินไป สามีเลยตบหัวเรากลับแบบแรงมากๆ เราต้องรู้สึกยังไงดีคะ?",
        category_id: 2,
        member_number: `7890936`
    },
    {
        id: 16,
        title: "เครียดมากค่ะลูกไม่ยอมเรียนหมอจะเอาวิศวะจุฬาฯ",
        category_id: 2,
        member_number: `7890937`,
        readcount: 38,
        commentcount: 15
    }
];

const App = () => {
    const [allBlog, setAllBlog] = useState(dataAllBlog);

    const setFavoriteBlog = (blog_id) => {
        let temp_allBlog = [];
        temp_allBlog = [
            ...allBlog
        ];

        const findIndexBlog = allBlog.findIndex((element) => element.id === blog_id);

        if(findIndexBlog !== -1)
        {
            if(temp_allBlog[findIndexBlog].favorite !== undefined)
            {
                temp_allBlog[findIndexBlog].favorite = !temp_allBlog[findIndexBlog].favorite;
            }
            else
            {
                temp_allBlog[findIndexBlog].favorite = true
            }
        }

        setAllBlog(temp_allBlog);
    }

    return (
        <Router>
            <Navbar />
            <div className="app">
                <Routes>
                    <Route path="/" exact element={
                        <Home allCategories={allCategories} allBlog={allBlog} setFavoriteBlog={setFavoriteBlog} />
                    } />
                </Routes>
            </div>
            <Footer allBlog={allBlog} />
        </Router>
    );
}

export default App;