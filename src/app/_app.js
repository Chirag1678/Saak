"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const App = ({ children }) => {
	return (
		<SessionProvider session={children.session}>{children}</SessionProvider>
	);
};

export default App;
