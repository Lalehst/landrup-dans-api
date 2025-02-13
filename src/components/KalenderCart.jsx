// src/components/KalenderCart.jsx
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Aktivite({ aktivites }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("landrup_token");
  const userId = cookieStore.get("landrup_userid");

  return (
    <li>
      <div className="flex m-5 pl-5 text-black --font-sans: ui-sans-serif, system-ui, sans-serif,ubuntu   rounded-[0.5em] bg-white  h-[30%]">
        <div className="text-[36px] overflow-hidden text-ellipsis whitespace-nowrap">
          {aktivites.name}
        </div>
        <div>
          {aktivites.weekday}
          {aktivites.time}
        </div>
      </div>
      {/* <h2>{aktivites.name}, {aktivites.age} <FaveButton token={token.value} uid={userId.value} id={aktivites.id} /></h2> */}
      {/* <p>DKK {ejendom.price}</p> */}
    </li>
  );
  //   return (
  //     <Link href={`/aktivites/${aktivite.id}`}>
  //     <li className="m-5">
  //       <div className="flex relative justify-center ">
  //         <Image
  //           src={aktivite.asset.url}
  //           width={250}
  //           height={100}
  //           className="h-[20em] w-[80%]  rounded-l-[2em] rounded-tr-[2em] flex justify-center"
  //           alt="bn"
  //         />
  //       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] bg-purple-300 bg-opacity-70 text-black p-3 rounded-tr-[2em]  rounded-bl-[2em]">
  //             <p className="font-semibold">{aktivite.name}</p>
  //             <p>{aktivite.minAge}-{aktivite.maxAge} år</p>
  //           </div>
  //       </div>
  //     </li>
  //     </Link>
  //   );
}
