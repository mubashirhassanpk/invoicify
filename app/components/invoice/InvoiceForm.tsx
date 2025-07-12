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
import { FileText, CheckCircle } from "lucide-react";

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

    return (
        <div className="card animate-scale-in">
            <div className="card-header">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-xl">
                            <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-display-md">{_t("form.title")}</h2>
                            <p className="text-body-sm text-muted-foreground">
                                {_t("form.description")}
                            </p>
                        </div>
                    </div>
                    <div className="status-success">
                        <CheckCircle className="h-3 w-3" />
                        {invoiceNumberLabel}
                    </div>
                </div>
            </div>

            <div className="card-content">
                <Wizard>
                    <WizardStep>
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <BillFromSection />
                                <BillToSection />
                            </div>
                        </div>
                    </WizardStep>

                    <WizardStep>
                        <InvoiceDetails />
                    </WizardStep>

                    <WizardStep>
                        <Items />
                    </WizardStep>

                    <WizardStep>
                        <PaymentInformation />
                    </WizardStep>

                    <WizardStep>
                        <InvoiceSummary />
                    </WizardStep>
                </Wizard>
            </div>
        </div>
    );
};

export default InvoiceForm;