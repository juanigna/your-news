/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.lavoz.com.ar',
                port: '',
                pathname: ''
            }
        ]
    }
}

module.exports = nextConfig
