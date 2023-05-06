module.exports = {
    async rewrites() {
        return {
            afterFiles: [
                {
                    source: '/portal/:path*',
                    destination: `${process.env.PORTAL_URL}/portal/:path*`
                },
            ],
            // afterFiles: [],
            // fallback: [],
        }
    },
}
