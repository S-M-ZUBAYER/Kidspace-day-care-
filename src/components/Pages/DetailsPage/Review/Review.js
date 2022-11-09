import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import PrivateRoutes from '../../../../Routes/PrivateRoutes/PrivateRoutes';
import useTitle from '../../../../UseTItle/UseTitle';
import Loading from '../../../Loading/Loading';
import ReviewCard from '../ReviewCard/ReviewCard';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = ({ service }) => {
    useTitle('Review')
    const { user, loading } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(err => console.error(err))
    }, []);
    const handleToLogInForReview = () => {
        console.log(loading)
        if (loading) {
            return <div>
                <Loading></Loading>
            </div>
        }

        if (!user?.email) {
            navigate('/login', {
                state: { from: location },
                replace: false
            });
            // <Navigate to='/login' state={{ from: location }} replace ></Navigate>
        }

    }

    return (
        <div>
            {/* <PrivateRoutes> */}
            {user?.email ? <>
                <ReviewForm service={service}></ReviewForm>
            </> :
                <>
                    <button onClick={handleToLogInForReview} className="w-1/2 my-12 flex justify-center mx-auto bg-gradient-to-t from-red-400 via-orange-400 to-red-600  py-2 rounded-tl-xl rounded-br-xl text-lg font-bold text-black">Log In First To Add Review</button>

                </>}
            {/* </PrivateRoutes> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3 md:mx-12">
                {reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)}
            </div>
        </div>
    );
};

export default Review;