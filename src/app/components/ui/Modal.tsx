import { X } from "lucide-react";
import { ReactNode } from "react"

interface Props {
    open: boolean;
    title: string;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({
    open,
    title,
    onClose,
    children,
}: Props){

    if(!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-2-lg p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4 border-b border-border pb-3">
                    <h2 className="font-bold text-lg text-primary">{title}</h2>
                    <button onClick={onClose}><X size={18} className="cursor-pointer transition-colors duration-300 hover:text-primary" /></button>
                </div>
                {children}
            </div>
        </div>
    )
}