"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Assets
import Logo from "@/public/assets/img/invoify-logo.svg";

// Components
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";

// Icons
import { Menu, X, FileText, Settings, HelpCircle, User } from "lucide-react";

const BaseNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);

    const navigation = [
        { name: "Dashboard", href: "/", icon: FileText },
        { name: "Settings", href: "/settings", icon: Settings },
        { name: "Help", href: "/help", icon: HelpCircle },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <nav className="container-responsive">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 hover-lift">
                        <Image
                            src={Logo}
                            alt="Invoify Logo"
                            width={140}
                            height={32}
                            className="h-8 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`nav-link ${isActive ? 'active' : ''}`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-3">
                        {devEnv && <DevDebug />}
                        <LanguageSelector />
                        <ThemeSwitcher />
                        
                        {/* User Menu */}
                        <button className="btn-icon">
                            <User className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden btn-icon"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden animate-slide-up">
                        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-background">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`nav-link w-full ${isActive ? 'active' : ''}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                            
                            {/* Mobile Actions */}
                            <div className="pt-4 border-t border-border space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Language</span>
                                    <LanguageSelector />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Theme</span>
                                    <ThemeSwitcher />
                                </div>
                                {devEnv && (
                                    <div className="pt-2">
                                        <DevDebug />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default BaseNavbar;