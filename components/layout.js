import React from "react";
import Navbar from "./navbar";
import {usePathname} from "next/navigation";
import SplashScreen from "./splashScreen";

export default function Layout({children}) {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [isLoading, setIsLoading] = React.useState(isHome);

	React.useEffect(() => {
		if (isLoading) return;
	}, [isLoading]);

	return (
		<>
			{isLoading && isHome ? (
				<SplashScreen finishLoading={() => setIsLoading(false)} />
			) : (
				<>
					<Navbar />
					<main>{children}</main>
				</>
			)}
		</>
	);
}
