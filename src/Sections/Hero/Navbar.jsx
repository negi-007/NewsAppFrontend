import { useState } from "react";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import image from "../../assets/images/mobile-bg1.jpg";

const headings = [
	{ title: "GENERAL", path: "/" },
	{ title: "FASHION", path: "/fashion" },
	{ title: "GADGETS", path: "/gadgets" },
	{ title: "LIFESTYLE", path: "/lifestyle" },
	{ title: "REAL ESTATE", path: "/real-estate" },
	{ title: "CELEBRITY", path: "/celebrity" },
	{ title: "SPORTS", path: "/sports" },
	{ title: "CRIME", path: "/crime" },
];

function Navbar() {
	const [sideNav, setSideNav] = useState(false);

	return (
		<>
			{/* Desktop Navbar */}
			<div className='w-full shadow-md hidden md:block'>
				<div className='mx-auto max-w-[1070px] flex flex-col px-10 lg:px-0'>
					<div className='w-full'>
						<div className='flex justify-between font-[600]'>
							<div className='flex gap-4'>
								{/* Desktop Links */}
								{headings.map((heading, index) => (
									<Link
										to={heading.path}
										key={heading.title}
										className={
											index === 0
												? "p-2 px-3 border-b-[#4db2ec] border-b-[3px] text-[14px] font-bold"
												: "p-2 px-3 hover:border-b-[#4db2ec] hover:border-b-[3px] text-[14px] font-bold"
										}
										aria-label={heading.title}>
										<span>{heading.title}</span>
									</Link>
								))}
							</div>
							{/* Search Icon */}
							<div className='font-normal flex items-center justify-center'>
								<LuSearch size={20} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Navbar */}
			<div className='flex md:hidden w-full bg-[#222222] text-white px-4 p-1'>
				<div className='w-full h-12 flex items-center justify-between'>
					{/* Hamburger Icon */}
					<button onClick={() => setSideNav(true)} aria-label="Open Navigation Menu">
						<div className='space-y-1'>
							<div className='w-6 h-0.5 bg-white'></div>
							<div className='w-6 h-0.5 bg-white'></div>
							<div className='w-6 h-0.5 bg-white'></div>
						</div>
					</button>
					{/* Search Icon */}
					<Link>
						<IoSearchOutline size={20} />
					</Link>
				</div>

				{/* Mobile SideNav */}
				{sideNav && (
					<div className='fixed top-0 left-0 w-full h-screen z-50'>
						<div className='w-full h-full relative'>
							{/* Background Image */}
							<img src={image} alt='Background' className='h-full w-full object-cover ' />
						</div>
						<div className='top-0 left-0 w-full h-full absolute bg-neutral-900 opacity-[0.5] z-20'>
							<div className='flex flex-col w-full h-full p-4 gap-10'>
								{/* Close Icon */}
								<div className='flex w-full justify-end'>
									<button onClick={() => setSideNav(false)} aria-label="Close Navigation Menu">
										<IoCloseOutline size={40} />
									</button>
								</div>
								{/* Sign In */}
								<div className='flex w-full justify-center text-2xl font-bold'>
									<Link onClick={() => setSideNav(false)}>Sign in</Link>
								</div>
								{/* Mobile Menu Links */}
								<div className='flex flex-col gap-3 text-2xl font-bold text-white'>
									{headings.map((heading) => (
										<Link
											to={heading.path}
											key={heading.title}
											onClick={() => setSideNav(false)}
											aria-label={heading.title}>
											{heading.title}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default Navbar;
