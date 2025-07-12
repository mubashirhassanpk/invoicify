"use client";

// Components
import {
    PdfViewer,
    BaseButton,
    NewInvoiceAlert,
    InvoiceLoaderModal,
    InvoiceExportModal,
} from "@/app/components";

// Contexts
import { useInvoiceContext } from "@/contexts/InvoiceContext";
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { 
    FileInput, 
    FolderUp, 
    Download, 
    Plus, 
    Zap,
    Save,
    Share2,
    Sparkles,
    TrendingUp,
    Clock,
    CheckCircle2
} from "lucide-react";

const InvoiceActions = () => {
    const { invoicePdfLoading, invoicePdf } = useInvoiceContext();
    const { _t } = useTranslationContext();

    const quickStats = [
        { label: "Generated", value: "1,234", icon: TrendingUp, color: "text-emerald-600" },
        { label: "This Month", value: "89", icon: Clock, color: "text-blue-600" },
        { label: "Completed", value: "98%", icon: CheckCircle2, color: "text-purple-600" }
    ];

    return (
        <div className="space-y-6">
            {/* Quick Stats */}
            <div className="card-glass">
                <div className="card-header">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-secondary rounded-xl">
                            <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-display-sm">Quick Stats</h3>
                            <p className="text-body-sm text-muted-foreground">
                                Your invoice activity
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-content">
                    <div className="grid grid-cols-3 gap-4">
                        {quickStats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div 
                                    key={stat.label}
                                    className="text-center p-3 bg-background/50 rounded-xl border border-border/50 hover-scale animate-bounce-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Icon className={`h-5 w-5 mx-auto mb-2 ${stat.color}`} />
                                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Quick Actions Card */}
            <div className="card-elevated">
                <div className="card-header">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-sm opacity-20"></div>
                            <div className="relative p-2 bg-gradient-primary rounded-xl">
                                <Zap className="h-5 w-5 text-white" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-display-sm">{_t("actions.title")}</h3>
                            <p className="text-body-sm text-muted-foreground">
                                {_t("actions.description")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-content space-y-4">
                    {/* Primary Actions */}
                    <div className="space-y-3">
                        <button
                            type="submit"
                            className="btn-primary-lg w-full relative overflow-hidden group"
                            disabled={invoicePdfLoading}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center justify-center gap-3">
                                {invoicePdfLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                                        <span>Generating Magic...</span>
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="h-5 w-5" />
                                        <span>{_t("actions.generatePdf")}</span>
                                    </>
                                )}
                            </div>
                        </button>

                        <NewInvoiceAlert>
                            <button
                                className="btn-outline w-full"
                                disabled={invoicePdfLoading}
                            >
                                <Plus className="h-4 w-4" />
                                {_t("actions.newInvoice")}
                            </button>
                        </NewInvoiceAlert>
                    </div>

                    {/* Secondary Actions */}
                    <div className="grid grid-cols-2 gap-3">
                        <InvoiceLoaderModal>
                            <button
                                className="btn-ghost w-full group"
                                disabled={invoicePdfLoading}
                            >
                                <FolderUp className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                Load
                            </button>
                        </InvoiceLoaderModal>

                        <InvoiceExportModal>
                            <button
                                className="btn-ghost w-full group"
                                disabled={invoicePdfLoading}
                            >
                                <Download className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                                Export
                            </button>
                        </InvoiceExportModal>
                    </div>

                    {/* Progress Indicator */}
                    {invoicePdfLoading && (
                        <div className="space-y-2 animate-fade-in">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Generating PDF...</span>
                                <span className="text-primary font-semibold">75%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-3/4"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Preview Card */}
            <div className="card-elevated">
                <div className="card-header">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-secondary rounded-xl">
                                <Share2 className="h-5 w-5 text-foreground" />
                            </div>
                            <div>
                                <h3 className="text-display-sm">Live Preview</h3>
                                <p className="text-body-sm text-muted-foreground">
                                    See your invoice in real-time
                                </p>
                            </div>
                        </div>
                        
                        {invoicePdf.size > 0 && (
                            <div className="status-success animate-bounce-in">
                                <CheckCircle2 className="h-3 w-3" />
                                Ready
                            </div>
                        )}
                    </div>
                </div>

                <div className="card-content">
                    <PdfViewer />
                </div>
            </div>
        </div>
    );
};

export default InvoiceActions;