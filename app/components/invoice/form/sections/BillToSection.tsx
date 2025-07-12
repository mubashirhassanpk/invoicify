"use client";

// RHF
import { useFieldArray, useFormContext } from "react-hook-form";

// Components
import {
    FormCustomInput,
    FormInput,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { Plus, Users, MapPin, Mail, Phone, Globe } from "lucide-react";

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
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl blur-sm opacity-20"></div>
                    <div className="relative p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl">
                        <Users className="h-6 w-6 text-white" />
                    </div>
                </div>
                <div>
                    <h3 className="text-display-sm">{_t("form.steps.fromAndTo.billTo")}</h3>
                    <p className="text-body-sm text-muted-foreground">
                        Client information
                    </p>
                </div>
            </div>

            <div className="space-y-5">
                {/* Client Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                        <FormInput
                            name="receiver.name"
                            label={_t("form.steps.fromAndTo.name")}
                            placeholder="Client name"
                            vertical
                            className="pl-10"
                        />
                        <Users className="absolute left-3 top-9 h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="relative">
                        <FormInput
                            name="receiver.email"
                            label={_t("form.steps.fromAndTo.email")}
                            placeholder="client@example.com"
                            type="email"
                            vertical
                            className="pl-10"
                        />
                        <Mail className="absolute left-3 top-9 h-4 w-4 text-muted-foreground" />
                    </div>
                </div>

                {/* Address */}
                <div className="relative">
                    <FormInput
                        name="receiver.address"
                        label={_t("form.steps.fromAndTo.address")}
                        placeholder="123 Client Street"
                        vertical
                        className="pl-10"
                    />
                    <MapPin className="absolute left-3 top-9 h-4 w-4 text-muted-foreground" />
                </div>

                {/* Location Details */}
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
                    <div className="relative">
                        <FormInput
                            name="receiver.country"
                            label={_t("form.steps.fromAndTo.country")}
                            placeholder="Client country"
                            vertical
                            className="pl-10"
                        />
                        <Globe className="absolute left-3 top-9 h-4 w-4 text-muted-foreground" />
                    </div>
                </div>

                {/* Phone */}
                <div className="relative">
                    <FormInput
                        name="receiver.phone"
                        label={_t("form.steps.fromAndTo.phone")}
                        placeholder="+1 (555) 987-6543"
                        type="tel"
                        vertical
                        className="pl-10"
                    />
                    <Phone className="absolute left-3 top-9 h-4 w-4 text-muted-foreground" />
                </div>

                {/* Custom Fields */}
                {fields?.length > 0 && (
                    <div className="space-y-3 p-4 bg-secondary/30 rounded-xl border border-border/50">
                        <h4 className="text-sm font-semibold text-foreground">Custom Fields</h4>
                        {fields.map((field, index) => (
                            <FormCustomInput
                                key={field.id}
                                index={index}
                                location={CUSTOM_INPUT_NAME}
                                removeField={removeCustomInput}
                            />
                        ))}
                    </div>
                )}

                <button
                    type="button"
                    onClick={addNewCustomInput}
                    className="btn-ghost text-sm w-full border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5"
                >
                    <Plus className="h-4 w-4" />
                    {_t("form.steps.fromAndTo.addCustomInput")}
                </button>
            </div>
        </div>
    );
};

export default BillToSection;