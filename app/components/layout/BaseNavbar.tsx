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
import { 
    Menu, 
    X, 
    FileText, 
    Settings, 
    HelpCircle, 
    User,
    Zap,
    BarChart3,
    CreditCard,
    Bell
} from "lucide-react";

const BaseNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);

    const navigation = [
        { name: "Dashboard", href: "/", icon: BarChart3 },
        { name: "Invoices", href: "/invoices", icon: FileText },
        { name: "Payments", href: "/payments", icon: CreditCard },
        { name: "Settings", href: "/settings", icon: Settings },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <nav className="container-responsive">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 hover-scale group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative p-2 bg-gradient-primary rounded-xl">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold gradient-text">Invoify</h1>
                            <p className="text-xs text-muted-foreground -mt-1">Invoice Generator</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
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
                        
                        {/* Notifications */}
                        <button className="btn-icon relative">
                            <Bell className="h-4 w-4" />
                            <span className="absolute -top-1 -right-1 h-3 w-3 bg-error-500 rounded-full border-2 border-background"></span>
                        </button>
                        
                        <div className="h-6 w-px bg-border"></div>
                        
                        <LanguageSelector />
                        <ThemeSwitcher />
                        
                        <div className="h-6 w-px bg-border"></div>
                        
                        {/* User Menu */}
                        <button className="btn-icon-lg bg-gradient-primary text-white hover:opacity-90">
                            <User className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden btn-icon"
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
                    <div className="lg:hidden animate-slide-down">
                        <div className="px-2 pt-4 pb-6 space-y-2 border-t border-border/40 bg-background/95 backdrop-blur-xl rounded-b-2xl">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`nav-link-mobile w-full ${isActive ? 'active' : ''}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Icon className="h-5 w-5" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                            
                            {/* Mobile Actions */}
                            <div className="pt-4 border-t border-border/40 space-y-4">
                                <div className="flex items-center justify-between px-4">
                                    <span className="text-sm font-semibold text-foreground">Notifications</span>
                                    <button className="btn-icon relative">
                                        <Bell className="h-4 w-4" />
                                        <span className="absolute -top-1 -right-1 h-3 w-3 bg-error-500 rounded-full border-2 border-background"></span>
                                    </button>
                                </div>
                                
                                <div className="flex items-center justify-between px-4">
                                    <span className="text-sm font-semibold text-foreground">Language</span>
                                    <LanguageSelector />
                                </div>
                                
                                <div className="flex items-center justify-between px-4">
                                    <span className="text-sm font-semibold text-foreground">Theme</span>
                                    <ThemeSwitcher />
                                </div>
                                
                                <div className="px-4">
                                    <button className="w-full btn-primary-lg">
                                        <User className="h-5 w-5" />
                                        Account Settings
                                    </button>
                                </div>
                                
                                {devEnv && (
                                    <div className="px-4 pt-2 border-t border-border/40">
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