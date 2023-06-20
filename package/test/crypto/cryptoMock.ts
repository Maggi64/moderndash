export const cryptoMockLowestValue = {
    getRandomValues: (buffer: Uint32Array | Uint8Array) => {
        const lowestValue = buffer instanceof Uint32Array ? 0x00000000 : 0x00;
        buffer.fill(lowestValue);
    }
};

export const cryptoMockHighestValue = {
    getRandomValues: (buffer: Uint32Array | Uint8Array) => {
        const highestValue = buffer instanceof Uint32Array ? 0xFFFFFFFF : 0xFF;
        buffer.fill(highestValue);
    }
};