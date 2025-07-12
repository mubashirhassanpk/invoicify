"use client";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import { Form } from "@/components/ui/form";

// Components
import { InvoiceActions, InvoiceForm } from "@/app/components";

// Context
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Types
import { InvoiceType } from "@/types";

const InvoiceMain = () => {
    const { handleSubmit } = useFormContext<InvoiceType>();
    const { onFormSubmit } = useInvoiceContext();

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
            <div className="container-responsive py-8">
                <Form {...useFormContext<InvoiceType>()}>
                    <form
                        onSubmit={handleSubmit(onFormSubmit, (err) => {
                            console.log(err);
                        })}
                        className="space-y-8"
                    >
                        {/* Header Section */}
                        <div className="text-center space-y-4 animate-fade-in">
                            <h1 className="text-display-xl gradient-primary bg-clip-text text-transparent">
                                Create Professional Invoices
                            </h1>
                            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                                Generate beautiful, professional invoices in minutes with our intuitive invoice builder.
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                            {/* Invoice Form */}
                            <div className="xl:col-span-7 animate-slide-up">
                                <InvoiceForm />
                            </div>

                            {/* Actions Panel */}
                            <div className="xl:col-span-5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                <InvoiceActions />
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default InvoiceMain;