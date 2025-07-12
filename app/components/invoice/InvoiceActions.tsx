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
    Share2
} from "lucide-react";

const InvoiceActions = () => {
    const { invoicePdfLoading } = useInvoiceContext();
    const { _t } = useTranslationContext();

    return (
        <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="card">
                <div className="card-header">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-xl">
                            <Zap className="h-5 w-5 text-primary" />
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
                            className="btn-primary w-full"
                            disabled={invoicePdfLoading}
                        >
                            {invoicePdfLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <FileInput className="h-4 w-4" />
                                    {_t("actions.generatePdf")}
                                </>
                            )}
                        </button>

                        <NewInvoiceAlert>
                            <button
                                className="btn-secondary w-full"
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
                                className="btn-ghost w-full"
                                disabled={invoicePdfLoading}
                            >
                                <FolderUp className="h-4 w-4" />
                                Load
                            </button>
                        </InvoiceLoaderModal>

                        <InvoiceExportModal>
                            <button
                                className="btn-ghost w-full"
                                disabled={invoicePdfLoading}
                            >
                                <Download className="h-4 w-4" />
                                Export
                            </button>
                        </InvoiceExportModal>
                    </div>
                </div>
            </div>

            {/* Preview Card */}
            <div className="card">
                <div className="card-header">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary rounded-xl">
                            <Share2 className="h-5 w-5 text-foreground" />
                        </div>
                        <div>
                            <h3 className="text-display-sm">Preview</h3>
                            <p className="text-body-sm text-muted-foreground">
                                Live preview of your invoice
                            </p>
                        </div>
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