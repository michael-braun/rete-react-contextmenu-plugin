import { useContext } from 'react';
import { OptionsContext } from '../constants/context';

export default function useContextComparator() {
    const options = useContext(OptionsContext);

    return options.contextComparator;
}
