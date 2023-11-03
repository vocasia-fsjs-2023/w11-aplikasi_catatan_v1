import React from "react";

const NoteItem = ({ note }) => {
    return (
        <div className="w-full bg-slate-200 p-5 rounded hover:scale-105 duration-300">
            <div>
                <h2 className="font-semibold text-xl mb-2">{note.title}</h2>
                <p>{note.desc}</p>
            </div>
            <hr className="border-slate-400 border-[1px] my-5" />
            <div className="flex justify-between items-center">
                <span>{note.createdAt.toLocaleDateString()}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 hover:cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
        </div>
    );
};

export default NoteItem;
