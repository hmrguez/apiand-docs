import React from 'react';

const AnimatedLogo: React.FC = () => {
    return (
        <div className="relative w-12 h-12 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg opacity-90 animate-subtle-pulse"/>
            <div className="absolute inset-[2px] bg-white rounded-[6px] flex items-center justify-center">
                <div
                    className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-700 to-blue-900">
                    A
                </div>
            </div>
        </div>
    );
};

export default AnimatedLogo;
