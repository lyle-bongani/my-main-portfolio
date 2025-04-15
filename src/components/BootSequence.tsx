import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

interface BootSequenceProps {
    onComplete: () => void;
    messages?: string[];
}

const BootSequence: React.FC<BootSequenceProps> = ({ 
    onComplete,
    messages = [
        'Initializing system...',
        'Loading components...',
        'Establishing connection...',
        'Mounting assets...',
        'Starting modules...',
        'Running protocols...',
        'System ready.'
    ]
}) => {
    const [systemStatus, setSystemStatus] = useState<string[]>([]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        messages.forEach((message, index) => {
            timeout = setTimeout(() => {
                setSystemStatus(prev => [...prev, message]);
                if (index === messages.length - 1) {
                    setTimeout(onComplete, 500);
                }
            }, index * 800);
        });

        return () => clearTimeout(timeout);
    }, [messages, onComplete]);

    return (
        <div className="mb-8 font-mono">
            <div className="space-y-2">
                {systemStatus.map((message, index) => (
                    <p key={index} className="text-[#81c784] flex items-center gap-2 text-sm">
                        <Terminal className="w-4 h-4" />
                        <span>{message}</span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default BootSequence; 