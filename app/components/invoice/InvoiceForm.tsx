"use client";

import { useMemo } from "react";

// RHF
import { useFormContext, useWatch } from "react-hook-form";

// React Wizard
import { Wizard } from "react-use-wizard";

// Components
import {
    WizardStep,
    BillFromSection,
    BillToSection,
    InvoiceDetails,
    Items,
    PaymentInformation,
    InvoiceSummary,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { 
    FileText, 
    CheckCircle, 
    Users, 
    Building2, 
    CreditCard, 
    Receipt,
    Settings,
    Sparkles
} from "lucide-react";

const InvoiceForm = () => {
    const { _t } = useTranslationContext();
    const { control } = useFormContext();

    // Get invoice number variable
    const invoiceNumber = useWatch({
        name: "details.invoiceNumber",
        control,
    });

    const invoiceNumberLabel = useMemo(() => {
        if (invoiceNumber) {
            return `#${invoiceNumber}`;
        } else {
            return _t("form.newInvBadge");
        }
    }, [invoiceNumber, _t]);

    const steps = [
        {
            title: "Parties",
            description: "Who's involved in this invoice",
            icon: Users,
            color: "text-blue-600"
        },
        {
            title: "Details", 
            description: "Invoice information and settings",
            icon: FileText,
            color: "text-emerald-600"
        },
        {
            title: "Items",
            description: "Products and services",
            icon: Receipt,
            color: "text-purple-600"
        },
        {
            title: "Payment",
            description: "Payment terms and methods",
            icon: CreditCard,
            color: "text-orange-600"
        },
        {
            title: "Summary",
            description: "Review and finalize",
            icon: Sparkles,
            color: "text-pink-600"
        }
    ];

    return (
        <div className="card-elevated animate-scale-in">
            <div className="card-header">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-sm opacity-20"></div>
                            <div className="relative p-3 bg-gradient-primary rounded-xl">
                                <FileText className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-display-md">{_t("form.title")}</h2>
                            <p className="text-body-sm text-muted-foreground">
                                {_t("form.description")}
                            </p>
                        </div>
                    </div>
                    <div className="status-info">
                        <CheckCircle className="h-3 w-3" />
                        {invoiceNumberLabel}
                    </div>
                </div>
            </div>

            <div className="card-content">
                <Wizard>
                    <WizardStep>
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold">
                                    <Users className="h-4 w-4" />
                                    Step 1 of 5
                                </div>
                                <h3 className="text-display-sm">Who's Involved?</h3>
                                <p className="text-body-sm text-muted-foreground">
                                    Add your business information and client details
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <BillFromSection />
                                <BillToSection />
                            </div>
                        </div>
                    </WizardStep>

                    <WizardStep>
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
                                    <FileText className="h-4 w-4" />
                                    Step 2 of 5
                                </div>
                                <h3 className="text-display-sm">Invoice Details</h3>
                                <p className="text-body-sm text-muted-foreground">
                                    Configure your invoice settings and appearance
                                </p>
                            </div>
                            <InvoiceDetails />
                        </div>
                    </WizardStep>

                    <WizardStep>
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 rounded-full text-purple-700 dark:text-purple-300 text-sm font-semibold">
                                    <Receipt className="h-4 w-4" />
                                    Step 3 of 5
                                </div>
                                <h3 className="text-display-sm">Line Items</h3>
                                <p className="text-body-sm text-muted-foreground">
                                    Add products, services, and calculate totals
                                </p>
                            </div>
                            <Items />
                        </div>
                    </WizardStep>

                    <WizardStep>
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800 rounded-full text-orange-700 dark:text-orange-300 text-sm font-semibold">
                                    <CreditCard className="h-4 w-4" />
                                    Step 4 of 5
                                </div>
                                <h3 className="text-display-sm">Payment Information</h3>
                                <p className="text-body-sm text-muted-foreground">
                                    Set up payment terms and banking details
                                </p>
                            </div>
                            <PaymentInformation />
                        </div>
                    </WizardStep>

                    <WizardStep>
                        <div className="space-y-8">
                            <div className="text-center space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 dark:bg-pink-950/50 border border-pink-200 dark:border-pink-800 rounded-full text-pink-700 dark:text-pink-300 text-sm font-semibold">
                                    <Sparkles className="h-4 w-4" />
                                    Step 5 of 5
                                </div>
                                <h3 className="text-display-sm">Final Review</h3>
                                <p className="text-body-sm text-muted-foreground">
                                    Add finishing touches and review your invoice
                                </p>
                            </div>
                            <InvoiceSummary />
                        </div>
                    </WizardStep>
                </Wizard>
            </div>
        </div>
    );
};

export default InvoiceForm;