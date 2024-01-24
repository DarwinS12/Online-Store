export function Button({ children, desing, onClick, disabled, arialLabel }) {
  return (
    <button
      aria-label={arialLabel}
      disabled={disabled}
      onClick={onClick}
      className={`my-2 border-b-2 border-sky-500 w-16 bg-gray-200 rounded-md  transition-all flex-row  flex justify-center ${desing} p-2 hover:bg-sky-100 hover:scale-105 disabled:bg-gray-400 disabled:transform-none `}
    >
      {children}
    </button>
  );
}
