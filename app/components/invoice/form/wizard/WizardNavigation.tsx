"use client";

// React Wizard
import { useWizard } from "react-use-wizard";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const WizardNavigation = () => {
    const { isFirstStep, isLastStep, previousStep, nextStep, activeStep, stepCount } = useWizard();
    const { _t } = useTranslationContext();

    return (
        <div className="flex justify-between items-center pt-8 border-t border-border">
            <div>
                {!isFirstStep && (
                    <button
                        onClick={previousStep}
                        className="btn-ghost group"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                        {_t("form.wizard.back")}
                    </button>
                )}
            </div>

            <div className="flex items-center gap-4">
                {/* Step Counter */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
                    <span>{activeStep + 1}</span>
                    <span>of</span>
                    <span>{stepCount}</span>
                </div>

                {!isLastStep && (
                    <button
                        onClick={nextStep}
                        className="btn-primary group"
                    >
                        <span>{_t("form.wizard.next")}</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                )}

                {isLastStep && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-success-50 dark:bg-success-950/50 border border-success-200 dark:border-success-800 rounded-xl text-success-700 dark:text-success-300 text-sm font-semibold animate-bounce-in">
                        <CheckCircle2 className="h-4 w-4" />
                        Ready to Generate!
                    </div>
                )}
            </div>
        </div>
    );
};

export default WizardNavigation;