export const compatibleSocketInputComparator = (socket) => (input) => {
    if (socket.compatibleWith(input.socket)) {
        return true;
    }

    return false;
};

export const compatibleSocketOutputComparator = (socket) => (output) => {
    if (output.socket.compatibleWith(socket)) {
        return true;
    }

    return false;
};
