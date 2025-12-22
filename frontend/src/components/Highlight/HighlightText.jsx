import React from 'react';

function HighlightText({ text, highlight }) {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-indigo-500 dark:to-pink-500 text-white px-3 py-1 rounded-xl font-bold shadow-md animate-pulse-soft"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export default HighlightText;