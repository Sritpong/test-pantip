import { useState } from "react";

// MUI
import { Container } from "@mui/material";

// COMPONENTS
import AllBlogComponent from "../components/Blog/AllBlogComponent";
import TabCategoriesComponent from "../components/TabCategories/TabCategoriesComponent";

const Home = (props) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);

    return (
        <Container maxWidth="lg" sx={
            {
                paddingTop: 3
            }
        }>
            <TabCategoriesComponent allCategories={props.allCategories} selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId} />
            <AllBlogComponent allBlog={props.allBlog} selectedCategoryId={selectedCategoryId} setFavoriteBlog={props.setFavoriteBlog} />
        </Container>
    )
}

export default Home;