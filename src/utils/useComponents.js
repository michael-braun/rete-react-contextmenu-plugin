import { useMemo } from 'react';
import { compatibleSocketInputComparator, compatibleSocketOutputComparator } from './socket-comparator';

function calcHash(components) {
    let retVal = '';

    components.forEach((c) => {
        retVal += `${c.name}#_#`;
    });

    return retVal;
}

function calcContextHash(context) {
    if (!context) return null;

    return `${context.input ? 'true' : 'false'}_${context.output ? 'true' : 'false'}_${context.socket.name}`;
}

export default function useComponents(editor, context) {
    const hash = calcHash(editor.components);
    const contextHash = calcContextHash(context);

    return useMemo(() => {
        let array = Array.from(editor.components.values());

        if (context?.socket && context?.output) {
            const socketInputComparator = compatibleSocketInputComparator(context.socket);

            array = array.filter(c => {
                if (!c.componentDefinition?.inputs) {
                    return false;
                }

                const foundInput = c.componentDefinition.inputs.find(socketInputComparator);

                return !!foundInput;
            });
        }

        if (context?.socket && context?.input) {
            const socketOutputComparator = compatibleSocketOutputComparator(context.socket);

            array = array.filter(c => {
                if (!c.componentDefinition?.outputs) {
                    return false;
                }

                const foundInput = c.componentDefinition.outputs.find(socketOutputComparator);

                return !!foundInput;
            });
        }

        array.sort((a, b) => a.name.localeCompare(b.name));
        return array;
    }, [hash, contextHash]); /* eslint-disable-line react-hooks/exhaustive-deps */
}
