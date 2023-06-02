import 'styled-components'

import { colorsStyles } from '../shared/global'


type GlobalType = typeof colorsStyles;

declare module 'styled-components' {
    export interface DefaultTheme extends GlobalType {}
}