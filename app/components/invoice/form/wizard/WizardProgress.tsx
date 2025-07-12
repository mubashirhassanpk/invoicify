"use client";

// RHF
import { useFormContext } from "react-hook-form";

// React Wizard
import { WizardValues } from "react-use-wizard";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { Check, Circle, Users, FileText, Receipt, CreditCard, Sparkles } from "lucide-react";

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

    const stepIcons = [Users, FileText, Receipt, CreditCard, Sparkles];
    const stepColors = [
        "text-blue-600 bg-blue-50 border-blue-200",
        "text-emerald-600 bg-emerald-50 border-emerald-200", 
        "text-purple-600 bg-purple-50 border-purple-200",
        "text-orange-600 bg-orange-50 border-orange-200",
        "text-pink-600 bg-pink-50 border-pink-200"
    ];

    const getStepStatus = (step: WizardStepType) => {
        if (step.id < activeStep) return 'completed';
        if (step.id === activeStep) return 'current';
        return 'upcoming';
    };

    return (
        <div className="mb-8">
            {/* Mobile Progress Bar */}
            <div className="block md:hidden mb-6">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-semibold">{Math.round(((activeStep + 1) / stepCount) * 100)}%</span>
                </div>
                <div className="progress-bar-lg">
                    <div 
                        className="progress-fill-lg transition-all duration-500 ease-out"
                        style={{ width: `${((activeStep + 1) / stepCount) * 100}%` }}
                    ></div>
                </div>
                <div className="mt-2 text-center">
                    <span className="text-sm font-semibold text-foreground">
                        {steps[activeStep]?.label}
                    </span>
                </div>
            </div>

            {/* Desktop Step Indicators */}
            <div className="hidden md:block">
                <div className="flex items-center justify-between">
                    {steps.map((step, index) => {
                        const status = getStepStatus(step);
                        const isLast = index === steps.length - 1;
                        const Icon = stepIcons[index];

                        return (
                            <div key={step.id} className="flex items-center flex-1">
                                <button
                                    onClick={() => wizard.goToStep(step.id)}
                                    className={`
                                        group relative flex items-center justify-center w-12 h-12 rounded-xl border-2 transition-all duration-300 hover-scale
                                        ${status === 'completed' 
                                            ? 'bg-primary border-primary text-white shadow-lg' 
                                            : status === 'current'
                                            ? `border-primary ${stepColors[index]} shadow-md`
                                            : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:bg-primary/5'
                                        }
                                    `}
                                >
                                    {status === 'completed' ? (
                                        <Check className="h-6 w-6" />
                                    ) : (
                                        <Icon className="h-5 w-5" />
                                    )}
                                    
                                    {/* Tooltip */}
                                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                                        {step.label}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
                                    </div>
                                </button>

                                {!isLast && (
                                    <div className="flex-1 mx-4">
                                        <div className={`
                                            h-1 rounded-full transition-all duration-500 ease-out
                                            ${status === 'completed' 
                                                ? 'bg-primary shadow-sm' 
                                                : 'bg-border'
                                            }
                                        `} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Step Labels */}
                <div className="flex items-center justify-between mt-4">
                    {steps.map((step, index) => {
                        const status = getStepStatus(step);
                        
                        return (
                            <div key={step.id} className="flex-1 text-center">
                                <p className={`
                                    text-sm font-semibold transition-colors duration-200
                                    ${status === 'current' 
                                        ? 'text-primary' 
                                        : status === 'completed'
                                        ? 'text-foreground'
                                        : 'text-muted-foreground'
                                    }
                                `}>
                                    {step.label}
                                </p>
                                {status === 'current' && (
                                    <div className="mt-1 mx-auto w-8 h-0.5 bg-primary rounded-full animate-fade-in"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WizardProgress;