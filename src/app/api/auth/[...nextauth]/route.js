import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { toastSuccess, toastError } from "@/app/Components/Toasts/Toast";

const handler = NextAuth({
	site: "http://localhost:3000", // Replace with your actual root URL
	providers: [
		GoogleProvider({
			clientId:
				"158110403917-r34ioosf17cp86tm8c8lb2vpoptncdhv.apps.googleusercontent.com",
			clientSecret: "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",
		}),

		CredentialsProvider({
			name: "credentials",
			// credentials: (credentials) => {
			// 	const details = {
			// 		email: credentials.email,
			// 		password: credentials.password,
			// 	};

			// 	return details;
			// },
			credentials: {},
			async authorize(credentials, req) {
				console.log(credentials);
				const { email, password } = credentials;
				const response = await axios.post(
					"http://localhost:8000/api/Auth/Login",
					{
						Email: email,
						Password: password,
					}
				);

				console.log(response);

				switch (response.status) {
					case 200:
						console.log("User Authenticated");
						console.log(response.data);
						return {
							name: response.data.Name,
							email: response.data.Email,
						};
					case 401:
						throw new Error("Email or password doesn't match");
						return null;
					case 404:
						throw new Error("No user found");
						return null;
					default:
						throw new Error("Some error occurred");
						return null;
				}
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	jwt: {
		secret: "a-random-and-secure-secret-key", // Replace with a secure random string
	},
	callbacks: {
		async session({ session, token }) {
			session.user = await token.user;
			// console.log(token);
			return session;
		},

		async jwt({ token, user }, account, profile, isNewUser) {
			// console.log(token);
			if (user) {
				token.user = user;
			}
			return token;
		},
	},
});

export { handler as GET, handler as POST };
