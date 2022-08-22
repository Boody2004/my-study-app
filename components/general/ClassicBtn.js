import Link from "next/link";

const ClassicBtn = (props) => {
  return (
    <Link href="/gettingStarted">
      <button
        className={`text-white bg-light ease-out duration-200 hover:bg-lightHover ${props.class} rounded-xl`}
      >
        <div className="flex items-center">
          البدء
          {props.icon ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          ) : (
            ""
          )}
        </div>
      </button>
    </Link>
  );
};

export default ClassicBtn;
