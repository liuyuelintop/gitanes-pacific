import { Component } from 'react'

export default class Policy extends Component {
    render() {
        return (
            <div className="mb-8 text-center text-sm text-neutral-400">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-300 mx-1">
                    Privacy Policy
                </a>
                and
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-300 mx-1">
                    Terms of Service
                </a>
                apply.
            </div>
        )
    }
}
