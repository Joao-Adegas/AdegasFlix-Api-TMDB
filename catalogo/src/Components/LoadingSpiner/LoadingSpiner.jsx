export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 bg-red-600 rounded-full animate-bounce delay-75"></span>
            <span className="w-4 h-4 bg-red-600 rounded-full animate-bounce delay-150"></span>
            <span className="w-4 h-4 bg-red-600 rounded-full animate-bounce delay-300"></span>
        </div>
    );
}
