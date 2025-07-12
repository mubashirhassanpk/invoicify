"use client";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";

type FormInputProps = {
    name: string;
    label?: string;
    labelHelper?: string;
    placeholder?: string;
    vertical?: boolean;
} & InputProps;

const FormInput = ({
    name,
    label,
    labelHelper,
    placeholder,
    vertical = false,
    className = "",
    ...props
}: FormInputProps) => {
    const { control } = useFormContext();

    if (vertical) {
        return (
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem className="form-group">
                        {label && (
                            <FormLabel className="form-label">
                                {label}
                                {labelHelper && (
                                    <span className="text-xs text-muted-foreground ml-1">
                                        {labelHelper}
                                    </span>
                                )}
                            </FormLabel>
                        )}
                        <FormControl>
                            <Input
                                {...field}
                                placeholder={placeholder}
                                className={`form-input ${className}`}
                                {...props}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        );
    }

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <div className="flex items-center gap-4">
                        {label && (
                            <FormLabel className="form-label min-w-0 flex-shrink-0 w-32">
                                {label}
                                {labelHelper && (
                                    <span className="text-xs text-muted-foreground block">
                                        {labelHelper}
                                    </span>
                                )}
                            </FormLabel>
                        )}
                        <div className="flex-1">
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder={placeholder}
                                    className={`form-input ${className}`}
                                    {...props}
                                />
                            </FormControl>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
            )}
        />
    );
};

export default FormInput;