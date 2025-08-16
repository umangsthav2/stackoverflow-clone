import mockUsers from '../data/mockUsers';


import { Link } from "react-router-dom";

export default function Card({ question_id, link, question, creator, creator_id , createDate, tags }) {

  var userData = { name: null };

  mockUsers.map( (user) =>
      {
          if(user.id == creator_id)
              {
                userData.name=user.name;
              }

      }

    );





  return (
    <div className="bg-[#f9f9f9] shadow-md rounded-lg p-6 m-6">
      <h2><Link className="text-2xl text-blue-700 font-semibold mb-2" to={'/discussion?id=' + question_id}>{question}</Link></h2>
      <p className="text-grey-600 mb-4">Asked by <span className="text-blue-600 underline"><Link to={`/user?id=`+creator_id}>{userData.name}</Link></span>  on {createDate}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
} 
