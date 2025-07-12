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
import { Plus, Users } from "lucide-react";

const BillToSection = () => {
    const { control } = useFormContext();
    const { _t } = useTranslationContext();

    const CUSTOM_INPUT_NAME = "receiver.customInputs";
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
                <div className="p-2 bg-secondary rounded-lg">
                    <Users className="h-5 w-5 text-foreground" />
                </div>
                <div>
                    <h3 className="text-display-sm">{_t("form.steps.fromAndTo.billTo")}</h3>
                    <p className="text-body-sm text-muted-foreground">
                        Client information
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                        name="receiver.name"
                        label={_t("form.steps.fromAndTo.name")}
                        placeholder="Client name"
                        vertical
                    />
                    <FormInput
                        name="receiver.email"
                        label={_t("form.steps.fromAndTo.email")}
                        placeholder="client@example.com"
                        type="email"
                        vertical
                    />
                </div>

                <FormInput
                    name="receiver.address"
                    label={_t("form.steps.fromAndTo.address")}
                    placeholder="123 Client Street"
                    vertical
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormInput
                        name="receiver.zipCode"
                        label={_t("form.steps.fromAndTo.zipCode")}
                        placeholder="12345"
                        vertical
                    />
                    <FormInput
                        name="receiver.city"
                        label={_t("form.steps.fromAndTo.city")}
                        placeholder="Client city"
                        vertical
                    />
                    <FormInput
                        name="receiver.country"
                        label={_t("form.steps.fromAndTo.country")}
                        placeholder="Client country"
                        vertical
                    />
                </div>

                <FormInput
                    name="receiver.phone"
                    label={_t("form.steps.fromAndTo.phone")}
                    placeholder="+1 (555) 987-6543"
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

export default BillToSection;