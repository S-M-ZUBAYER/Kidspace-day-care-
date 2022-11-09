import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email]);

    return (
        <div className=" bg-gradient-to-t from-black via-slate-800 to-black">
            <div>
                {myReviews.map(review => <MyReviewCard review={review} key={review._id}></MyReviewCard>)}
            </div>

        </div>
    );
};

export default MyReviews;