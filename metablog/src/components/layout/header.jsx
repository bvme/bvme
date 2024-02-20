import Link from "next/link";

export const Header = () => {
  return (
    <div className="px-[300px]">
      <div className="flex justify-between py-[30px] items-center">
        <img className=" w-[100px]" src="_.png" alt="" />
        <div className="flex gap-[20px]">
          <Link href={"/"}>
            <button>Home</button>
          </Link>
          <button>Blog</button>
          <button>Contact</button>
        </div>
        <input
          className="border-[1px] rounded-xl h-[30px]"
          type="text"
          placeholder="search.."
        />
      </div>
    </div>
  );
};
