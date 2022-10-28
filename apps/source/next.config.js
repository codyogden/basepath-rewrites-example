module.exports = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/portal/:path*',
                    destination: `${process.env.DESTINATION}/portal/:path*`
                },
                {
                    source: '/amp/portal/:path*',
                    destination: `${process.env.DESTINATION}/portal/:path*?amp=1`
                },
            ],
            // afterFiles: [],
            // fallback: [],
        }
    },
}
