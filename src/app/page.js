import Hero from "./Components/Home/Hero";
import Third from "./Components/Home/Third";
import Fourth from "./Components/Home/Fourth";
import HeroImg from "./assets/Home/TharBg.png";
import { useSession } from "next-auth/react";
import "./globals.css";
import Image from "next/image";
import Fifth from "./Components/Home/Fifth";

export default async function Home() {
	return (
		<main className="bg-[#393037] pt-32">
			<div className="grid 2xl:grid-rows-6 xl:grid-rows-6 lg:grid-rows-6 md:grid-rows-2 sm:grid-rows-2 grid-rows-2">
				<div className="2xl:row-span-4 xl:row-span-1 lg:row-span-1 md:row-span-1 sm:row-span-1 row-span-1 2xl:bg-contain xl:bg-contain lg:bg-contain md:bg-contain sm:bg-cover bg-cover bg-no-repeat bg-transparent bg-top ">
					<Hero />
				</div>
				<div className="row-span-2 p-1">
					<div className="grid grid-cols-12">
						<div className="col-span-1"></div>
						<div className="col-span-10 relative">
							<Image src={HeroImg} fill className="object-cover HeroImg p-10" />
						</div>
						<div className="col-span-1"></div>
					</div>
				</div>
				<div className="2xl:row-span-2 xl:row-span-2 lg:row-span-2 md:row-span-1 sm:row-span-1 row-span-1">
					<Third />
				</div>
			</div>

			<Fourth />
			<Fifth />
		</main>
	);
}
