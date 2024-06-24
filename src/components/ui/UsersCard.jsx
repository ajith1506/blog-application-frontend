import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

const UsersCard = ({ data }) => {
  // Ensure data is defined and has the necessary properties
  if (
    !data ||
    !data.profileImg ||
    !data.username ||
    !data.bio ||
    !data.createdAt
  ) {
    return (
      <div className="flex flex-col border w-80 h-32 rounded-md items-center justify-center backdrop-blur-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col border w-80 h-32 rounded-md items-center justify-center backdrop-blur-sm">
      <div className="flex gap-4">
        <img
          src={data.profileImg.url}
          alt="profile pic"
          className="size-8 rounded-full aspect-square object-cover"
        />
        <div className="w-48 space-y-1">
          <Link
            className="hover:underline underline-offset-4"
            to={`/users/${data.username}`}
          >
            @{data.username}
          </Link>
          <p className="line-clamp-2 text-slate-200 text-sm">{data.bio}</p>
          <span className="flex items-center gap-1 text-slate-400 text-sm">
            <FaRegCalendarAlt /> Date joined: {data.createdAt.substring(0, 10)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
