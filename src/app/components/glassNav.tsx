import Link from "next/link";

export default function GlassNav() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[34rem] px-4">
      {/* 
        THE APPLE MATTE CONTAINER:
        bg-[#1c1c1e]/40 = Apple's System Material Dark tint at 40% opacity
        backdrop-blur-2xl = Heavy 40px+ background blur for the matte depth
        saturate-150 = Apple's secret weapon to keep backdrop colors rich beneath blur
        border-white/[0.08] = Razor thin highlight on the top/sides
        shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] = Deep, diffused elevation shadow
      */}
      <nav className="flex items-center justify-between p-[6px] rounded-[24px] bg-[#1c1c1e]/40 backdrop-blur-2xl saturate-150 border border-white/[0.08] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex-1 text-center py-2.5 px-4 rounded-[18px] text-[13px] font-medium tracking-normal text-[#f5f5f7]/80 hover:text-white bg-white/0 hover:bg-white/25 transition-all duration-200 ease-out active:scale-[0.97] select-none"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}