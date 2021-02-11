import React from 'react';
import { useParams } from "react-router-dom";

import { CourseItem } from "components";

import "./courseList.less";

import courseListData from "./courseList.json";

const CourseList = () => {
    let { courseId = "" } = useParams();

    let courseItems = "Nothing, select another course";

    if (courseListData[courseId]) {
        courseItems = courseListData[courseId].map(course => {
            const { id } = course;
            return <CourseItem key={id} {...course} />
        });
    }

    return <div className="course-list-wrapper">
        {courseItems}
    </div>
};

export default CourseList;