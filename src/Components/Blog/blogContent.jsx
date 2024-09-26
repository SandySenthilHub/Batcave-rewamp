import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header/header";
import Filter from '../assets/filter.svg';
import Search from '../assets/search.svg';
import Pagination from "../Pagination/pagination";
import BackArrow from '../assets/Back-arrow.svg';

// import { BASE_URL } from "../../utils/ApplicationURL";

function BlogContent() {

    const BASE_URL = 'https://api.batcave.club/batcave'

    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                // const response = await axios.get(`http://localhost:5000/blogs/${blogId}`);
                const response = await axios.get(`${BASE_URL}/blogs/${blogId}`);

                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog', error);
            }
        };
        fetchBlog();
    }, [blogId]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    const navigateBack = () => {
        navigate('/blogs')
    }

    return (
        <>
            <Header />
            <div className="BlogCon">

                <div className="page-back-nav blognav" onClick={navigateBack}>
                    <div>
                        <img src={BackArrow} alt='Car Club' />
                        <div>Back <span>|</span> <span>Blogs</span></div>
                    </div>
                    <div>
                        <img src={Filter} alt='Car Club in Coimbatore' />
                        <img src={Search} alt='Car Club in Tamil Nadu' />
                    </div>
                </div>

                <div className="blog-content-container">

                    <div>
                        {blog.imageUrl && <img className="blogDetailsImg" src={`${BASE_URL}${blog.imageUrl}`} alt="Batcave car club" />}
                    </div>

                    <div>

                        <h1 className="blogTitle">{blog.title}</h1>
                        <h6 className="blogdate">{new Date(blog.createdAt).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h6>
                        <h1 className="blogAuthor">{blog.title}</h1>

                        <div className="blogContent" dangerouslySetInnerHTML={{ __html: blog.content }} />
                        <div className="keyword">
                            {blog.keywords.split(',').map((keyword, index) => (
                                <h3 key={index}>{keyword.trim()}</h3>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogContent;
