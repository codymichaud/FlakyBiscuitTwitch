import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import DiscordProvider from "next-auth/providers/discord";
import TwitchProvider from "next-auth/providers/twitch";
import BattleNetProvider from "next-auth/providers/battlenet";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
        }),
        TwitchProvider({
            clientId: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET,
            redirectUri: 'http://localhost:3000/api/auth/callback/twitch',
        }),
        DiscordProvider({
            clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
            redirectUri: 'http://localhost:3000/api/auth/callback/discord',
        }),
        BattleNetProvider({
            clientId: process.env.BATTLENET_CLIENT_ID,
            clientSecret: process.env.BATTLENET_CLIENT_SECRET,
            issuer: process.env.BATTLENET_ISSUER
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.accessToken;
            }
            return token;
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken;
            session.redirect = 'http://localhost:3000'
            return session
        }
    }
}

export default NextAuth(authOptions);