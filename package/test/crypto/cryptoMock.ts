export const cryptoMockLowestValue = {
    getRandomValues: (buffer: Uint32Array | Uint8Array | BigUint64Array) => {
        if (buffer instanceof BigUint64Array) {
            buffer.fill(0n);
        } else {
            buffer.fill(0);
        }
    }
};

export const cryptoMockHighestValue = {
    getRandomValues: (buffer: Uint32Array | Uint8Array | BigUint64Array) => {
        if (buffer instanceof BigUint64Array) {
            buffer.fill(0xFFFFFFFFFFFFFFFFn);
        } else if (buffer instanceof Uint32Array) {
            buffer.fill(0xFFFFFFFF);
        } else if (buffer instanceof Uint8Array) {
            buffer.fill(0xFF);
        }
    }
};
