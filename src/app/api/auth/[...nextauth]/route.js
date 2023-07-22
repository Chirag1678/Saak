import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	site: "http://localhost:3000", // Replace with your actual root URL
	providers: [
		GoogleProvider({
			clientId:
				"158110403917-r34ioosf17cp86tm8c8lb2vpoptncdhv.apps.googleusercontent.com",
			clientSecret: "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",
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
