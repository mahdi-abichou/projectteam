import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from './Employernavbar.jsx';

const EmployerProfile = ({logeduser}) => {
  const [feedback, setFeedback] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const[review,setReview]=useState("")
 console.log(review);
  useEffect(() => {
    axios.get(`http://localhost:8080/getfeedback/${logeduser[0].idemployer}`)
      .then((res) => {
        setFeedback(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);



  return (
    <>
      <Nav logeduser={logeduser} />
      <div className="mt-20 bg-white dark:bg-gray-800 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white dark:bg-green-500 text-gray-800 dark:text-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="User"
                className="rounded-full w-24 h-24 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{logeduser[0].namee} {logeduser[0].lastnamee}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-200">{logeduser[0].emaile}</p>
                <p className="text-sm text-gray-600 dark:text-gray-200">{logeduser[0].jobnamee}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-100 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-green-800">Profile</h2>
              <div>
                <button onClick={() => setShowReviewForm(false)} className={`mr-4 ${!showReviewForm ? 'text-green-500' : 'text-gray-500'} hover:text-green-600`}>Customer Reviews</button>
                <button onClick={() => setShowReviewForm(true)} className={`mr-4 ${showReviewForm ? 'text-green-500' : 'text-gray-500'} hover:text-green-600`}>Leave a Review</button>
              </div>
            </div>
            {showReviewForm ? (
              <div className="bg-white shadow-md rounded-md p-6 mb-4">
                <form>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Feedback</label>
                    <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Enter your feedback" onChange={(e)=>{setReview(e.target.value)}}></textarea>
                  </div>
                  <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" onClick={()=>{}}>
                    Submit Review
                  </button>
                </form>
              </div>
            ) : (
              feedback.map((fe) => (
                <div className="bg-white shadow-md rounded-md p-6" key={fe.idfeedback}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={fe.imagec} alt="noimage" className="object-cover w-full h-full" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-green-800">{fe.namec} {fe.lastnamec}</h3>
                      <p className="text-gray-600"></p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{fe.feedbackf}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerProfile;
