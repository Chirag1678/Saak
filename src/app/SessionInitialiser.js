"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const SessionInitialiser = ({ children, session }) => {
	return (
		<div>
			<SessionProvider session={session}>{children}</SessionProvider>
		</div>
	);
};

export default SessionInitialiser;
