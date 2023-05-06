module.exports = {
    async rewrites() {
        return {
            beforeFiles: [
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
