import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Nav from './Employernavbar.jsx';
const HomeEmployer = ({logeduser}) => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/getAllposts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Nav logeduser={logeduser}/>
  <div className="mt-20  grid grid-cols-3">
    {posts.map((el, index) => { 
      return(
      <div
        key={index}
        role="status"
        className="max-w-sm p-4 border border-green-200 rounded shadow md:p-6 dark:border-gray-700 mb-4"
      >
        <h1></h1>

        <div className="flex items-center mt-4">
          <img
            className="w-10 h-10 me-3 text-white dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            src="https://as2.ftcdn.net/v2/jpg/02/43/08/71/1000_F_243087128_OpztNS1bTkcTlltU8y8nzNJefdAh2yPG.jpg"
            alt=""
          />

          <div className="post-container">
            <h1>
              {el.namec} {el.lastnamec}
            </h1>
            <div className="w-48 h-2 bg-green-200 rounded-full dark:bg-green-700"></div>
            <h1>Looking for a: {el.titlep}</h1> <br />
            <p>
              <strong>Job Description:</strong> <br />
              {el.descriptionc}
            </p>
          </div>
        </div>
      </div>
    )})}
  </div>
</div>
  )
}

export default HomeEmployer
