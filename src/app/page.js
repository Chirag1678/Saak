import Hero from "./Components/Home/Hero";
import Third from "./Components/Home/Third";
import Fourth from "./Components/Home/Fourth";
import { useSession } from "next-auth/react";

export default async function Home() {
	return (
		<main className="bg-[#393037] pt-[60px]">
			<div className="grid 2xl:grid-rows-6 xl:grid-rows-6 lg:grid-rows-6 md:grid-rows-2 sm:grid-rows-2 grid-rows-2">
				<div className="2xl:row-span-4 xl:row-span-4 lg:row-span-4 md:row-span-1 sm:row-span-1 row-span-1 bg-[url('./assets/Home/TharBg.png')] 2xl:bg-contain xl:bg-contain lg:bg-contain md:bg-contain sm:bg-cover bg-cover bg-no-repeat bg-transparent bg-center ">
					<Hero />
				</div>
				<div className="2xl:row-span-2 xl:row-span-2 lg:row-span-2 md:row-span-1 sm:row-span-1 row-span-1">
					<Third />
				</div>
			</div>

			<Fourth />
		</main>
	);
}
