"use client";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import { Form } from "@/components/ui/form";

// Components
import { InvoiceActions, InvoiceForm } from "@/app/components";

// Context
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Icons
import { Sparkles, TrendingUp, Shield, Zap } from "lucide-react";

// Types
import { InvoiceType } from "@/types";

const InvoiceMain = () => {
    const { handleSubmit } = useFormContext<InvoiceType>();
    const { onFormSubmit } = useInvoiceContext();

    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Generate invoices in seconds"
        },
        {
            icon: Shield,
            title: "Secure & Reliable",
            description: "Your data is protected"
        },
        {
            icon: TrendingUp,
            title: "Professional Results",
            description: "Impress your clients"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 dark:from-neutral-950 dark:via-primary-950/30 dark:to-accent-950/20">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10"></div>
                <div className="relative container-responsive section-padding-sm">
                    <div className="text-center space-y-6 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 rounded-full text-primary-700 dark:text-primary-300 text-sm font-semibold">
                            <Sparkles className="h-4 w-4" />
                            Professional Invoice Generator
                        </div>
                        
                        <h1 className="text-display-lg md:text-display-xl gradient-text max-w-4xl mx-auto">
                            Create Beautiful Invoices in Minutes
                        </h1>
                        
                        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                            Generate professional, customizable invoices with our intuitive builder. 
                            Save time, impress clients, and get paid faster.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div 
                                        key={feature.title}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover-scale animate-bounce-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <Icon className="h-4 w-4 text-primary" />
                                        <span className="hidden sm:inline">{feature.title}</span>
                                        <span className="sm:hidden">{feature.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-responsive pb-12">
                <Form {...useFormContext<InvoiceType>()}>
                    <form
                        onSubmit={handleSubmit(onFormSubmit, (err) => {
                            console.log(err);
                        })}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                            {/* Invoice Form */}
                            <div className="xl:col-span-7 animate-slide-up">
                                <InvoiceForm />
                            </div>

                            {/* Actions Panel */}
                            <div className="xl:col-span-5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                <div className="sticky top-24 space-y-6">
                                    <InvoiceActions />
                                </div>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default InvoiceMain;