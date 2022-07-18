module.exports = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/maintenance/:path*',
                    destination: `http://127.0.0.1:3001/maintenance/:path*`
                },
            ],
        }
    },
}
