import React from 'react'
import './Footer.css'

const socials = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/abdul-rehman-antall-/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V23.5H.5zM8.5 8.5h3.63v2.1h.05c.5-.9 1.73-1.85 3.56-1.85 3.8 0 4.5 2.5 4.5 5.75V23.5h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.87 1.94-2.87 3.95V23.5h-4V8.5z" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        url: 'https://github.com/AbdulRehmanAntall',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1 .11-.78.42-1.32.76-1.62-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.78.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/abdulrehman_antall?igsh=NTh4azMybTJmdnpj',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="#E4405F" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.25 3a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
            </svg>
        ),
    },
];

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2025 Abdul Rehman | All Rights Reserved</p>

            <div className="social-icons">
                {socials.map(({ name, url, icon }) => (
                    <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="social-link"
                    >
                        {icon}
                    </a>
                ))}
            </div>

            <div className="email-section">
                <p>Email: <a href="mailto:abdulrehmanantall420@gmail.com">abdulrehmanantall420@gmail.com</a></p>
            </div>
        </div>
    )
}

export default Footer
