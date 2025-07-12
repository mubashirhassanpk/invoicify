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
        const baseClasses = "button-press focus-ring transition-all duration-200";
        
        switch (variant) {
            case "default":
                return `btn-primary ${baseClasses}`;
            case "secondary":
                return `btn-secondary ${baseClasses}`;
            case "ghost":
                return `btn-ghost ${baseClasses}`;
            case "outline":
                return `btn-secondary ${baseClasses}`;
            default:
                return baseClasses;
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
            className={`${getButtonClasses()} ${className}`}
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