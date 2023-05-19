import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "d4dcce8519a86a24fb2b",
      clientSecret: "c2486b096ed9c3cf527203cc3e66cd1ee2ec7064",
    }),
    AzureADProvider({
      clientId: "cc29a30a-bb19-4d4f-97f1-bb14ff7f2308",
      clientSecret: "YCS8Q~fYLkF9fW3t_CKM5ZsbAWIBTDr1SP3tpaFe",
      tenantId: "e6afe5d8-0abc-4ca6-abdc-8410d4ac4e74",
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      console.log("test");
      token.userRole = "admin";
      return token;
    },
  },
};

export default NextAuth(authOptions);
