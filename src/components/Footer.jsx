import { COMPANY_NAME } from "../constants";

export default function Footer() {
    return (
        <footer className="py-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center max-w-6xl mx-auto px-4">
                {/* Text alignment changes from centered on mobile to left-aligned on larger screens */}
                <p className="text-neutral-400 text-center sm:text-left">Copyright © 2024 {COMPANY_NAME.fullName} Pty Ltd - All Rights Reserved.</p>
                {/* Margin top is applied only on mobile to separate the elements when stacked */}
                <div className="text-neutral-400 text-center sm:text-right mt-4 sm:mt-0">
                    <p>Powered by
                        <a className="text-cyan-700 ml-1" href="https://vercel.com/">Vercel</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
