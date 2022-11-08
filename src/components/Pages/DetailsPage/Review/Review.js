import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import PrivateRoutes from '../../../../Routes/PrivateRoutes/PrivateRoutes';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = ({ service }) => {
    const { user } = useContext(AuthContext);
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
        </div>
    );
};

export default Review;