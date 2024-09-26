import React, { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import BackArrow from '../assets/Back-arrow.svg';
import './blog.css';
import Filter from '../assets/filter.svg';
import Search from '../assets/search.svg';
import Pagination from "../Pagination/pagination";
import Header from "../Header/header";
import ProgressBar from "../Progressbar/progressBar";
// import { BASE_URL } from "../../utils/ApplicationURL";

function Blog() {


    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/')
    }

    const BASE_URL = 'https://api.batcave.club/batcave'
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(6);
    const pageLimit = 5;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // const response = await axios.get('http://localhost:5000/blogs');
                const response = await axios.get(`${BASE_URL}/blogs`);

                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs', error);
            }
        };
        fetchBlogs();
    }, []);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1).filter(page => page <= totalPages);
    };

    return (
        <>
            <Header />
            <ProgressBar/>
            <div className="blog-container">

                <div className="page-back-nav blognav" onClick={navigateBack}>
                    <div>
                        <img src={BackArrow} alt='' />
                        <div>Back <span>|</span> <span>Blogs</span></div>
                    </div>
                    <div>
                        <div id='blogPaginationWeb' className="WebPagination">
                            <Pagination className="pagination" totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
                        </div>
                        <img src={Filter} alt='' />
                        <img src={Search} alt='' />
                    </div>
                </div>

                <div className="Blogs">
                    {currentBlogs.map((blog) => (

                        <Link to={`/blogs/${blog._id}`} className="blogLink">
                            <div
                                className="blogContainer"
                                key={blog._id}
                                style={{
                                    backgroundImage: `url(${BASE_URL}${blog.imageUrl.startsWith('/') ? '' : '/'}${blog.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <div className="titlehead">
                                    <div className="title">{blog.title}</div>
                                    <div className="blogdate">
                                        {new Date(blog.createdAt).toLocaleString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>


                <div id='blogPagination' className="mobilePagination">
                    <Pagination className="pagination" totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
                </div>
            </div>

        </>

    );
}

export default Blog;
