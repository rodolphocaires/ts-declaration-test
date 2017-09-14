export namespace GAS {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    export function gasThing(): void;
}

export namespace Agentless {
    export function agentlessThing(): void;
}