module.exports = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/portal/:path*',
                    destination: `http://127.0.0.1:3001/portal/:path*`
                },
            ],
            // afterFiles: [],
            // fallback: [],
        }
    },
}
