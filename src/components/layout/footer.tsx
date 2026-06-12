import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-16 border-t border-white/5 mt-auto relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="col-span-1">
            <Link href="#hero" className="inline-block mb-3">
              <span className="text-xl font-bold tracking-tight text-blue-500">
                Biswajeet Bishoyi
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The engineer who designs.<br/>The designer who codes.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#hero" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-sm">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:bishoyibiswajeet@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors block">
                bishoyibiswajeet@gmail.com
              </a>
              <a href="tel:+916370701405" className="text-sm text-gray-400 hover:text-white transition-colors block">
                +91 6370701405
              </a>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 flex justify-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Biswajeet Bishoyi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
