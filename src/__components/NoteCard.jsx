// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import { useRef } from "react";

const CardNote = ({ note, updatedNote }) => {
  const ref = useRef(null);
  return (
    <div className="w-full h-64 flex flex-col justify-between items-start rounded-lg border border-black/50  py-5 px-4">
      <div>
        <h4
          className="text-gray-800 font-bold mb-3"
          contentEditable
          onInput={(e) => updatedNote({ ...note, title: e.target.textContent })}
        >
          {note.title}
        </h4>
        <p
          contentEditable
          ref={ref}
          className="text-gray-800 text-sm"
          onInput={(e) => updatedNote({ ...note, body: e.target.textContent })}
        >
          {note.body}
        </p>
      </div>
      <div className="w-full flex flex-col items-start">
        <div className="flex items-center justify-between text-gray-800 w-full">
          <p className="text-sm"> {note.createdAt.toLocaleString()}</p>
          <button
            className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
            aria-label="edit note"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-pencil"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => ref.current?.focus()}
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

CardNote.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  updatedNote: PropTypes.func.isRequired,
};

export default CardNote;
