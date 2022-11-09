import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    fetch('http://localhost:5000/reviews?email=smzubayer9004@gmail.com')
        .then(res => res.json())
        .then(data => console.log(data))
    return (
        <div className=" bg-gradient-to-t from-black via-slate-800 to-black">
            <MyReviewCard></MyReviewCard>
        </div>
    );
};

export default MyReviews;