// Component used to display our photos and posts 

import { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// import AddPost from './AddPost.js'
import AddImage from './AddImage.js'
import UpdateImageTitle from './UpdateImageTitle.js'
import DeleteBlog from './DeleteBlog.js'
import Posts from './Posts.js'
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function TripBlog() {
    const [tripBlogs, setTripBlogs] = useState([]);
    const MOCK_API_URL = 'https://65189219818c4e98ac5fdbd0.mockapi.io/TripBlog'

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // get all data from MockAPI
    const getTripBlog = async () => {
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setTripBlogs(data);
        // console.log("data" + data)
        // console.log("tripBlogs" + {tripBlogs})
    };

    // execute function to get the photos and blog
    useEffect(() => {
        getTripBlog();
    }, []);

    // this passes the blog id to the updateImageTitle component so it can update the correct blog
    // then reload new data
    const onUpdate = async (blogId) => {
        UpdateTitle(blogId);
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setTripBlogs(data);
    };

    // this passes the blog id to the delete component so it can delete the correct destination
    // then reload new data
    const onDelete = async (blogId) => {
        DeleteBlog(blogId);
        const response = await fetch(MOCK_API_URL);
        const data = await response.json();
        setTripBlogs(data);
    };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
    // display data from MockAPI

    return (
        <div className="DisplayBlog" style={{ minHeight: '100%' }} >
            <AddImage getTripBlog={getTripBlog} />

            <Container className="d-flex justify-content-center">
                <Row className="text-center">
                    {tripBlogs.map((blog, index) => (
                        <Col key={index} xs={4} className="d-inline-flex flex-row justify-content-around text-white p-4">
                            <Card id="card" className="p-1 m-4 text-center" style={{ width: '80vw' }}>
                                <Card.Body>
                                    <Card.Title className="vibesSmMd" style={{ height: '8vh' }}>{blog.title}</Card.Title>
                                    <Card.Text className="p-1 mb-1
                                        text-center montserratSm">
                                        <Image
                                            className="d-block"
                                            src={blog.image}
                                            alt="{blog.title}"
                                            thumbnail
                                            fluid
                                        />
                                        {blog.date}
                                    </Card.Text>
                                </Card.Body>

                                <div className="d-flex flex-row justify-content-around text-white p-4">
                                    <UpdateImageTitle blogId={blog.id} getTripBlog={getTripBlog} onUpdate={onUpdate} />
                                    <DeleteBlog blogId={blog.id} getTripBlog={getTripBlog} onDelete={onDelete} />
                                </div>

                                {/* is it here */}
                                {/* <Posts tripBlogs={blog.blogArray} /> */}
                                <Posts tripBlogs={blog} />
                                </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}