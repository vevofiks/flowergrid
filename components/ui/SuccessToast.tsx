'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

interface SuccessToastProps {
    message: string;
    isOpen: boolean;
    onClose: () => void;
    type?: 'success' | 'error';
}

export default function SuccessToast({ message, isOpen, onClose, type = 'success' }: SuccessToastProps) {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 20, x: '-50%' }}
                    className={`fixed bottom-8 left-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-full shadow-lg ${type === 'success' ? 'bg-black text-white' : 'bg-red-500 text-white'
                        }`}
                >
                    {type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                        <XCircle className="w-5 h-5 text-white" />
                    )}
                    <span className="font-medium text-sm">{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
