# @mbraun/rete-react-contextmenu-plugin

## Usage

This package could be used with and without an config-object.
When no config is provided the default components are used.

```javascript
import ContextMenuPlugin from '@mbraun/rete-react-contextmenu-plugin';
import {
    COMPONENT_NODE,
    COMPONENT_NODE_CONTAINER,
    COMPONENT_CONTEXT,
    COMPONENT_CONTEXT_CONTAINER,
} from '@mbraun/rete-react-contextmenu-plugin/lib/constants/components';

editor.use(ContextMenuPlugin, {
    components: {
        [COMPONENT_CONTEXT]: ContextMenu,
        [COMPONENT_CONTEXT_CONTAINER]: ContextMenuContainer,
        [COMPONENT_NODE]: NodeMenu,
        [COMPONENT_NODE_CONTAINER]: NodeMenuContainer,
    }
});
```
