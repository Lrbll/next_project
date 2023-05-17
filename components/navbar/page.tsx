import Link from "next/link";

export default function navbar() {
  return (
    //return 안에는 같은 위치의 dev가 2개 이상 올 수 없음 1개만!
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="py-4 text-3xl font-bold">Next.js13</div>
        <ul className="flex justify-between items-center">
          <li className="px-4 py-2 font-bold hover:text-amber-300">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="px-4 py-2 font-bold hover:text-amber-300">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="px-4 py-2 font-bold hover:text-amber-300">
            <Link href={"/back"}>Back</Link>
          </li>
          <li className="px-4 py-2 font-bold hover:text-amber-300">
            <Link href={"/project"}>Project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
