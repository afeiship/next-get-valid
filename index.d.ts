interface NxStatic {
  getValid: (target: any, path: string, defaults: any, isValid?: string | ((val)=>boolean)) => any;
  GET_VALID_HOOKS: Record<string, any>;
}
