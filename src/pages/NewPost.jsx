import { useState } from "react";
export default function NewPost() {
    const [question, setQuestion] = useState("");
    const [description, setDescription] = useState("");

    const [qWordCount, setQWordCount] = useState(0);
    const [tagInput, setTagInput] = useState(""); // State for the tag input field

    // Initial tags for demonstration. You might want this to be empty initially.
    const [tagArray, setTagArray] = useState([]);

    // Regular expression to match word characters globally
    const wordCountR = /\b\w+\b/g; // Changed regex to count actual words, not just characters

    const handleQuestion = (e) => {
        const inputValue = e.target.value;
        setQuestion(inputValue);

        // *** IMPORTANT FIX START ***
        // Use the inputValue directly for matching to ensure the latest value is used.
        // Check if match() returns null (when no words are present) before accessing .length.
        const matchedWords = inputValue.match(wordCountR);
        setQWordCount(matchedWords ? matchedWords.length : 0);
        // *** IMPORTANT FIX END ***
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleTagInput = (e) => {
        setTagInput(e.target.value);
    };

    const addTag = (e) => {
        if (e.key === 'Enter' || (e.key === ',' && tagInput.trim() !== '')) {
            e.preventDefault(); // Prevent form submission for Enter key
            const newTags = tagInput.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
            if (newTags.length > 0) {
                setTagArray(prevTags => [...prevTags, ...newTags]);
                setTagInput(''); // Clear the tag input after adding
            }
        }
    };

    // Handler to remove a tag
    const removeTag = (tagToRemove) => {
        setTagArray(prevTags => prevTags.filter(tag => tag !== tagToRemove));
    };

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }} className="p-6 flex flex-col gap-6 m-6 border-2 bg-[#f0f0f0] rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold text-gray-800">Ask a Question</h1>

                {/* Question Title Input */}
                <div className="relative">
                    <input onChange={handleQuestion} type="text" value={question} maxLength={100} placeholder="Question title" className="focus:ring-2 focus:ring-blue-500 focus:outline-none p-3 transition-all duration-200 text-2xl font-bold w-full border border-gray-300 rounded-md" />
                    <span className="absolute bottom-1 right-2 text-sm text-gray-500">
                        {`${question.length} / 100 characters ; ${qWordCount} word(s)`}
                    </span>
                </div>

                {/* Question Description Textarea */}
                <div className="relative">
                    <textarea
                        onChange={handleDescription}
                        value={description} // Controlled component
                        maxLength={255} // Enforce max length for characters
                        rows={8} // Reduced rows for better initial fit, adjust as needed
                        placeholder="Question Description (max 255 characters)"
                        className="focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg p-3 transition-all duration-200 w-full border border-gray-300 rounded-md resize-y"
                        id="description"
                    ></textarea>
                    <span className="absolute bottom-1 right-2 text-sm text-gray-500">
                        {`${description.length} / 255 characters`}
                    </span>
                </div>


                {/* Tag Section */}
                <div className="tag-section flex flex-wrap items-center gap-2 mt-2 p-2 border border-gray-300 rounded-md">
                    <input
                        onChange={handleTagInput}
                        onKeyDown={addTag} // Listen for Enter key to add tags
                        value={tagInput}
                        placeholder="Add Tags (e.g., react, javascript) - Press Enter or comma"
                        className="focus:ring-2 focus:ring-blue-500 focus:outline-none p-2 flex-grow min-w-[150px] transition-all duration-200 text-md border-none"
                        type="text"
                    />
                    {tagArray.map((tag, index) => (
                        <span
                            key={tag + index} // Use a combination of tag and index for a more unique key
                            className="px-4 py-2 font-semibold rounded-full bg-blue-100 flex items-center gap-1 text-blue-700 text-sm hover:bg-blue-200 transition duration-150 ease-in-out"
                        >
                            {tag}
                            {/* Replaced IoCloseSharp with inline SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="ml-1 text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-150"
                                style={{ width: '16px', height: '16px' }}
                                onClick={() => removeTag(tag)}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    ))}
                </div>
                <span className="text-sm text-gray-600 -mt-1">
                    Use Comma (,) or press Enter to separate tags.
                </span>


                {/* Action Buttons */}
                <div className="action-area text-white font-semibold flex gap-3 mt-4">
                    <button
                        type="submit" // Changed to type="submit" for proper form submission if you want to handle it
                        onClick={() => { console.log("Post Content Clicked"); /* Add actual post logic here */ }}
                        className="bg-blue-600 hover:bg-blue-700 w-full p-3 rounded-md transition duration-200 ease-in-out shadow-md"
                    >
                        Post
                    </button>
                    <button
                        type="reset"
                        onClick={() => {
                            setQuestion('');
                            setDescription('');
                            setTagInput('');
                            setTagArray([]); // Optionally clear tags on reset
                            setQWordCount(0);
                        }}
                        className="bg-red-600 hover:bg-red-700 w-full p-3 rounded-md transition duration-200 ease-in-out shadow-md"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </>
    );
}
