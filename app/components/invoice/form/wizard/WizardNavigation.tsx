"use client";

// React Wizard
import { useWizard } from "react-use-wizard";

// Components
import { BaseButton } from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { ArrowLeft, ArrowRight } from "lucide-react";

const WizardNavigation = () => {
    const { isFirstStep, isLastStep, previousStep, nextStep } = useWizard();
    const { _t } = useTranslationContext();

    return (
        <div className="flex justify-between items-center pt-6 border-t border-border">
            <div>
                {!isFirstStep && (
                    <button
                        onClick={previousStep}
                        className="btn-ghost"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {_t("form.wizard.back")}
                    </button>
                )}
            </div>

            <div>
                {!isLastStep && (
                    <button
                        onClick={nextStep}
                        className="btn-primary"
                    >
                        {_t("form.wizard.next")}
                        <ArrowRight className="h-4 w-4" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default WizardNavigation;