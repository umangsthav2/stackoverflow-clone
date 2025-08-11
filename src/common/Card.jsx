import { Link } from "react-router-dom";

export default function Card({ id, link, question, creator, createDate, tags }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2><Link className="text-2xl text-blue-700 font-semibold mb-2" to={'/q/'+id}>{question}</Link></h2>
      <p className="text-gray-600 mb-4">Asked by {creator} on {createDate}</p>
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
