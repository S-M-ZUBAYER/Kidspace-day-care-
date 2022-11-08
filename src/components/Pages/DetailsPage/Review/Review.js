import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import PrivateRoutes from '../../../../Routes/PrivateRoutes/PrivateRoutes';
import ReviewCard from '../ReviewCard/ReviewCard';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = ({ service }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
            .catch(err => console.error(err))
    }, []);
    return (
        <div>
            <PrivateRoutes>
                {user?.email ? <>
                    <ReviewForm service={service}></ReviewForm>
                </> :
                    <>
                        <button className="w-1/2 flex justify-center mx-auto bg-gradient-to-t from-red-400 via-orange-400 to-red-600  py-2 rounded-tl-xl rounded-br-xl text-lg font-bold text-black">Log In First To Add Review</button>

                    </>}
            </PrivateRoutes>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3 md:mx-12">
                {reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)}
            </div>
        </div>
    );
};

export default Review;