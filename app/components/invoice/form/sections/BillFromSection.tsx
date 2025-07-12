"use client";

// RHF
import { useFieldArray, useFormContext } from "react-hook-form";

// Components
import {
    BaseButton,
    FormCustomInput,
    FormInput,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { Plus, Building2 } from "lucide-react";

const BillFromSection = () => {
    const { control } = useFormContext();
    const { _t } = useTranslationContext();

    const CUSTOM_INPUT_NAME = "sender.customInputs";
    const { fields, append, remove } = useFieldArray({
        control: control,
        name: CUSTOM_INPUT_NAME,
    });

    const addNewCustomInput = () => {
        append({
            key: "",
            value: "",
        });
    };

    const removeCustomInput = (index: number) => {
        remove(index);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                    <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="text-display-sm">{_t("form.steps.fromAndTo.billFrom")}</h3>
                    <p className="text-body-sm text-muted-foreground">
                        Your business information
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                        name="sender.name"
                        label={_t("form.steps.fromAndTo.name")}
                        placeholder="Your business name"
                        vertical
                    />
                    <FormInput
                        name="sender.email"
                        label={_t("form.steps.fromAndTo.email")}
                        placeholder="business@example.com"
                        type="email"
                        vertical
                    />
                </div>

                <FormInput
                    name="sender.address"
                    label={_t("form.steps.fromAndTo.address")}
                    placeholder="123 Business Street"
                    vertical
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormInput
                        name="sender.zipCode"
                        label={_t("form.steps.fromAndTo.zipCode")}
                        placeholder="12345"
                        vertical
                    />
                    <FormInput
                        name="sender.city"
                        label={_t("form.steps.fromAndTo.city")}
                        placeholder="Your city"
                        vertical
                    />
                    <FormInput
                        name="sender.country"
                        label={_t("form.steps.fromAndTo.country")}
                        placeholder="Your country"
                        vertical
                    />
                </div>

                <FormInput
                    name="sender.phone"
                    label={_t("form.steps.fromAndTo.phone")}
                    placeholder="+1 (555) 123-4567"
                    type="tel"
                    vertical
                />

                {/* Custom Fields */}
                {fields?.map((field, index) => (
                    <FormCustomInput
                        key={field.id}
                        index={index}
                        location={CUSTOM_INPUT_NAME}
                        removeField={removeCustomInput}
                    />
                ))}

                <button
                    type="button"
                    onClick={addNewCustomInput}
                    className="btn-ghost text-sm"
                >
                    <Plus className="h-4 w-4" />
                    {_t("form.steps.fromAndTo.addCustomInput")}
                </button>
            </div>
        </div>
    );
};

export default BillFromSection;