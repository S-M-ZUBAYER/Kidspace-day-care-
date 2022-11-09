import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    const handleToDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to remove this review!!!');
        if (proceed) {
            fetch(`http://localhost:5000/myReviews/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Review successfully deleted');
                        const remaining = myReviews.filter(review => review._id !== id);
                        setMyReviews(remaining)
                    }
                })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Kid-space')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })

            .then(data => {
                console.log("clint", data)
                setMyReviews(data);
            })
    }, [user?.email], logOut);

    return (
        <div className=" bg-gradient-to-t from-black via-slate-800 to-black">
            <div>
                {myReviews.map(review => <MyReviewCard
                    review={review}
                    handleToDelete={handleToDelete}
                    key={review._id}></MyReviewCard>)}
            </div>

        </div>
    );
};

export default MyReviews;