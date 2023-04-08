import { PropType } from "vue";
import { NotifierToastOptions } from "../types";
declare const _sfc_main: import("vue").DefineComponent<{
    content: {
        type: (StringConstructor | ObjectConstructor)[];
        required: true;
        default: string;
    };
    options: {
        type: PropType<NotifierToastOptions>;
        required: true;
    };
    status: {
        type: PropType<"default" | "success" | "error" | "warning" | "info">;
        required: true;
    };
    onSubmit: {
        type: FunctionConstructor;
        required: true;
    };
    onCancel: {
        type: FunctionConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: (StringConstructor | ObjectConstructor)[];
        required: true;
        default: string;
    };
    options: {
        type: PropType<NotifierToastOptions>;
        required: true;
    };
    status: {
        type: PropType<"default" | "success" | "error" | "warning" | "info">;
        required: true;
    };
    onSubmit: {
        type: FunctionConstructor;
        required: true;
    };
    onCancel: {
        type: FunctionConstructor;
        required: true;
    };
}>>, {
    content: string | Record<string, any>;
}>;
export default _sfc_main;
