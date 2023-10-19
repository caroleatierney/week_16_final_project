// This will display our posts
import React from 'react';

import TripBlogHeader from "./TripBlogHeader";
import Posts from "./Posts";
import SideBar from "./SideBar";

import './TripBlog.css';
import '../App.css';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// Main Functional Component
export default function TripBlog() {
    return (
        <>
            <TripBlogHeader />
            <div className="postSection">
                <Posts />
                <SideBar />
            </div>

        </>
    );
}