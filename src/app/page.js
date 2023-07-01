import Nav from "./Components/Navbar/Nav";
import Hero from "./Components/Home/Hero";
import Second from "./Components/Home/Second";
import Third from "./Components/Home/Third";
import Fourth from "./Components/Home/Fourth";

export default async function Home() {
	return (
		<main className="bg-[#302b2f] h-screen pt-[60px]">
			<Hero />
			{/* <Second /> */}
			<Third />
			<Fourth />
		</main>
	);
}
