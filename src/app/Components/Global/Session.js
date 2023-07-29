"use client";

import { useSession } from "next-auth/react";

const Session = () => {
	const { data: session } = useSession();
	return session.user;
};

export default Session;
