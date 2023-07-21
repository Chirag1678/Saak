// next-auth.js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	// Configure the authentication providers
	providers: [
		Providers.Google({
			clientId:
				"158110403917-r34ioosf17cp86tm8c8lb2vpoptncdhv.apps.googleusercontent.com",
			clientSecret: "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",
		}),
		// Add more providers as needed
	],
	// Add any additional configuration options
});
