import Nav from "./Components/Navbar/Nav";
import Hero from "./Components/Home/Hero";
import Second from "./Components/Home/Second";
import Third from "./Components/Home/Third";
import Fourth from "./Components/Home/Fourth";

export default async function Home() {
	return (
		<main className="bg-[#393037] pt-[60px]">
			<div className="grid 2xl:grid-rows-6 xl:grid-rows-6 lg:grid-rows-6 md:grid-rows-4 sm:grid-rows-3 grid-rows-3">
				<div className="2xl:row-span-4 xl:row-span-4 lg:row-span-4 md:row-span-2 sm:row-span-1 row-span-1 bg-[url('./assets/Home/TharBg.png')] 2xl:bg-contain xl:bg-contain lg:bg-contain md:bg-contain sm:bg-cover bg-cover bg-no-repeat bg-transparent bg-center ">
					<Hero />
				</div>
				{/* <Second /> */}
				<div className="row-span-2">
					<Third />
				</div>
			</div>
			<Fourth />
		</main>
	);
}
