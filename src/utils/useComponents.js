import { useMemo } from 'react';

function calcHash(components) {
    let retVal = '';

    components.forEach((c) => {
        retVal += `${c.name}#_#`;
    });

    return retVal;
}

export default function useComponents(editor) {
    const hash = calcHash(editor.components);

    return useMemo(() => {
        const array = Array.from(editor.components.values());
        array.sort((a, b) => a.name.localeCompare(b.name));
        return array;
    }, [hash]); /* eslint-disable-line react-hooks/exhaustive-deps */
}