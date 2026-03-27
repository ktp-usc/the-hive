"use client";

export default function SafeExit() {
    const handleClick = () => {
        window.location.replace("https://www.msn.com/");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 text-lg rounded-lg shadow-lg transition-colors"
            aria-label="Safe exit"
        >
            Safe Exit
        </button>
    );
}
