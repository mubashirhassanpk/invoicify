"use client";

// RHF
import { useFormContext } from "react-hook-form";

// React Wizard
import { WizardValues } from "react-use-wizard";

// Components
import { BaseButton } from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { Check, Circle } from "lucide-react";

// Types
import { InvoiceType, WizardStepType } from "@/types";

type WizardProgressProps = {
    wizard: WizardValues;
};

const WizardProgress = ({ wizard }: WizardProgressProps) => {
    const { activeStep, stepCount } = wizard;
    const { formState: { errors } } = useFormContext<InvoiceType>();
    const { _t } = useTranslationContext();

    const step1Valid = !errors.sender && !errors.receiver;
    const step2Valid =
        !errors.details?.invoiceNumber &&
        !errors.details?.dueDate &&
        !errors.details?.invoiceDate &&
        !errors.details?.currency;
    const step3Valid = !errors.details?.items;
    const step4Valid = !errors.details?.paymentInformation;
    const step5Valid =
        !errors.details?.paymentTerms &&
        !errors.details?.subTotal &&
        !errors.details?.totalAmount &&
        !errors.details?.discountDetails?.amount &&
        !errors.details?.taxDetails?.amount &&
        !errors.details?.shippingDetails?.cost;

    const steps: WizardStepType[] = [
        {
            id: 0,
            label: _t("form.wizard.fromAndTo"),
            isValid: step1Valid,
        },
        {
            id: 1,
            label: _t("form.wizard.invoiceDetails"),
            isValid: step2Valid,
        },
        {
            id: 2,
            label: _t("form.wizard.lineItems"),
            isValid: step3Valid,
        },
        {
            id: 3,
            label: _t("form.wizard.paymentInfo"),
            isValid: step4Valid,
        },
        {
            id: 4,
            label: _t("form.wizard.summary"),
            isValid: step5Valid,
        },
    ];

    const getStepStatus = (step: WizardStepType) => {
        if (step.id < activeStep) return 'completed';
        if (step.id === activeStep) return 'current';
        return 'upcoming';
    };

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                    const status = getStepStatus(step);
                    const isLast = index === steps.length - 1;

                    return (
                        <div key={step.id} className="flex items-center flex-1">
                            <button
                                onClick={() => wizard.goToStep(step.id)}
                                className={`
                                    flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200
                                    ${status === 'completed' 
                                        ? 'bg-primary border-primary text-white' 
                                        : status === 'current'
                                        ? 'border-primary text-primary bg-primary/10'
                                        : 'border-border text-muted-foreground hover:border-primary/50'
                                    }
                                `}
                            >
                                {status === 'completed' ? (
                                    <Check className="h-5 w-5" />
                                ) : (
                                    <span className="text-sm font-medium">{step.id + 1}</span>
                                )}
                            </button>

                            {!isLast && (
                                <div className={`
                                    flex-1 h-0.5 mx-4 transition-all duration-200
                                    ${status === 'completed' ? 'bg-primary' : 'bg-border'}
                                `} />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Step Labels */}
            <div className="flex items-center justify-between mt-4">
                {steps.map((step) => {
                    const status = getStepStatus(step);
                    
                    return (
                        <div key={step.id} className="flex-1 text-center">
                            <p className={`
                                text-xs font-medium transition-colors duration-200
                                ${status === 'current' 
                                    ? 'text-primary' 
                                    : status === 'completed'
                                    ? 'text-foreground'
                                    : 'text-muted-foreground'
                                }
                            `}>
                                {step.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WizardProgress;