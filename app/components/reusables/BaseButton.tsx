"use client";

import React from "react";

// ShadCn
import { Button, ButtonProps } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

// Icons
import { Loader2 } from "lucide-react";

type BaseButtonProps = {
    tooltipLabel?: string;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
    loadingText?: string;
    children?: React.ReactNode;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
} & ButtonProps;

const BaseButton = ({
    tooltipLabel,
    type = "button",
    loading,
    loadingText = "Loading",
    children,
    variant = "default",
    size = "default",
    className = "",
    ...props
}: BaseButtonProps) => {
    const getButtonClasses = () => {
        const baseClasses = "button-press focus-ring transition-all duration-200 font-semibold";
        
        switch (variant) {
            case "default":
                return `btn-primary ${baseClasses}`;
            case "secondary":
                return `btn-secondary ${baseClasses}`;
            case "ghost":
                return `btn-ghost ${baseClasses}`;
            case "outline":
                return `btn-outline ${baseClasses}`;
            case "destructive":
                return `inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-error-500 rounded-xl hover:bg-error-600 focus-ring disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 button-press shadow-sm hover:shadow-md ${baseClasses}`;
            default:
                return baseClasses;
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case "sm":
                return "px-4 py-2 text-sm";
            case "lg":
                return "px-8 py-4 text-base";
            case "icon":
                return "btn-icon";
            default:
                return "";
        }
    };

    const buttonContent = loading ? (
        <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {loadingText}
        </>
    ) : (
        children
    );

    const button = (
        <Button
            type={type}
            className={`${getButtonClasses()} ${getSizeClasses()} ${className}`}
            disabled={loading || props.disabled}
            {...props}
        >
            {buttonContent}
        </Button>
    );

    if (!tooltipLabel) return button;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {button}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltipLabel}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default BaseButton;