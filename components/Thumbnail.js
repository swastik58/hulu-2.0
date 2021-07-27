import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Thumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="group cursor-pointer p-6 transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50 hover: overflow-clip">
            <Image layout="responsive" height={1000} width={1920}
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
                    alt="Posters"
             />

            <div className="p-6 hover: overflow-clip">
                <desc><p className="  max-w-md ">{result.overview}</p></desc>
                <h2 className="mt-1 text-2xl py-2 text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                <name1> {result.title || result.original_name} </name1> <br />
                </h2> 
                <p className="flex item-center opacity-0 group-hover:opacity-100">
                   <released>Released on {result.release_date || result.first_air_date} • {" "} </released>
                   <likes className="text-base px-2 py-2 flex flex-dir:row"> <ThumbUpIcon className="h-5 mx-2" />{result.vote_count} </likes>
                </p>
            </div>
        </div>
    )
}

export default Thumbnail;
