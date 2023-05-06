module.exports = {
    async rewrites() {
        return {
            afterFiles: [
                {
                    source: '/portal',
                    destination: `${process.env.PORTAL_URL}/portal`
                },
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
